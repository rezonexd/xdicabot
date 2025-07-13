const {
  default: makeWASocket,
  useMultiFileAuthState,
  makeInMemoryStore,
  DisconnectReason,
  jidDecode,
  downloadContentFromMessage
} = require('@whiskeysockets/baileys')

const { Boom } = require('@hapi/boom')
const pino = require('pino')
const fs = require('fs')
const path = require('path')
const chalk = require('chalk')
const readline = require('readline')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./lib/exif')
const { getBuffer } = require('./lib/myfunc')

// === Global Settings dan Handler
require('./settings')
let handler = require('./werom')
const weromPath = require.resolve('./werom')
let reloadTimer

fs.watch(weromPath, (eventType) => {
  if (eventType === 'change') {
    if (reloadTimer) clearTimeout(reloadTimer)
    reloadTimer = setTimeout(() => {
      delete require.cache[require.resolve(weromPath)]
      try {
        handler = require('./werom')
        console.log('[AUTO-RELOAD] werom.js dimuat ulang!')
      } catch (err) {
        console.error('[ERROR] Gagal reload:', err)
      }
    }, 200)
  }
})

const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
const question = (text) => new Promise(resolve => rl.question(text, resolve))

const store = makeInMemoryStore({ logger: pino({ level: 'silent' }) })

async function startBot() {
  const { state, saveCreds } = await useMultiFileAuthState('./session')

  const romzz = makeWASocket({
    logger: pino({ level: 'silent' }),
    printQRInTerminal: false,
    auth: state,
    browser: ['Ubuntu', 'Chrome', '20.0.04'],
    emitOwnEvents: true,
    markOnlineOnConnect: true
  })

  store.bind(romzz.ev)

  if (!romzz.authState.creds.registered) {
    const number = await question('Masukkan nomor bot (62xxx): ')
    let code = await romzz.requestPairingCode(number)
    code = code?.match(/.{1,4}/g)?.join('-') || code
    console.log(chalk.green(`\nKode Pairing Kamu:\n> ${code}\n`))
  }

  romzz.decodeJid = (jid) => {
    if (!jid) return jid
    if (/:\d+@/gi.test(jid)) {
      let decode = jidDecode(jid) || {}
      return `${decode.user}@${decode.server}` || jid
    }
    return jid
  }

  romzz.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
  let buff = Buffer.isBuffer(path)
    ? path
    : /^data:.*?\/.*?;base64,/i.test(path)
    ? Buffer.from(path.split`,`[1], 'base64')
    : /^https?:\/\//.test(path)
    ? await getBuffer(path)
    : fs.existsSync(path)
    ? fs.readFileSync(path)
    : Buffer.alloc(0)

  let sticker
  if (options.packname || options.author) {
    const tmpFile = await writeExifImg(buff, options)
    sticker = fs.readFileSync(tmpFile)
    fs.unlinkSync(tmpFile)
  } else {
    sticker = await imageToWebp(buff)
  }

  return await romzz.sendMessage(jid, { sticker }, { quoted })
}

romzz.sendText = (jid, text, quoted = 'Gonzales Crassherx', options) => romzz.sendMessage(jid, { text: text, ...options }, { quoted })
romzz.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
  let buff = Buffer.isBuffer(path)
    ? path
    : /^data:.*?\/.*?;base64,/i.test(path)
    ? Buffer.from(path.split`,`[1], 'base64')
    : /^https?:\/\//.test(path)
    ? await getBuffer(path)
    : fs.existsSync(path)
    ? fs.readFileSync(path)
    : Buffer.alloc(0)

  let sticker
  if (options.packname || options.author) {
    const tmpFile = await writeExifVid(buff, options)
    sticker = fs.readFileSync(tmpFile)
    fs.unlinkSync(tmpFile)
  } else {
    sticker = await videoToWebp(buff)
  }

  return await romzz.sendMessage(jid, { sticker }, { quoted })
}

  romzz.ev.on('messages.upsert', async ({ messages, type }) => {
    try {
      const m = messages[0]
      if (!m?.message) return
      if (m.key.remoteJid === 'status@broadcast') return

      m.chat = m.key.remoteJid
      m.isGroup = m.chat.endsWith('@g.us')
      m.sender = romzz.decodeJid(m.key.fromMe ? romzz.user.id : (m.key.participant || m.key.remoteJid))
      m.pushName = m.pushName || 'No Name'
      m.mtype = Object.keys(m.message)[0]
      m.body =
        m.message?.conversation ||
        m.message?.[m.mtype]?.text ||
        m.message?.[m.mtype]?.caption || ''
      m.text = m.body

      m.reply = (text) => romzz.sendMessage(m.chat, { text }, { quoted: m })

      // === Deteksi pesan yang direply (m.quoted)
      const context = m.message?.[m.mtype]?.contextInfo
      if (context?.quotedMessage) {
        const quoted = context.quotedMessage
        const type = Object.keys(quoted)[0]
        m.quoted = {
          type,
          message: quoted,
          key: {
            id: context.stanzaId,
            participant: context.participant,
            remoteJid: m.chat
          },
          mimetype: quoted[type]?.mimetype || '',
          text: quoted[type]?.text || quoted[type]?.caption || '',
          isMedia: ['imageMessage', 'videoMessage', 'stickerMessage', 'audioMessage'].includes(type),
          download: async () => {
            const stream = await downloadContentFromMessage(quoted[type], type.replace('Message', ''))
            let buffer = Buffer.from([])
            for await (const chunk of stream) buffer = Buffer.concat([buffer, chunk])
            return buffer
          }
        }
      }

      await handler(romzz, m, { messages, type }, store)

      if (m.message?.nativeFlowResponseMessage?.params?.selectedRowId) {
        m.text = m.message.nativeFlowResponseMessage.params.selectedRowId
        await handler(romzz, m, { messages, type }, store)
      }

    } catch (err) {
      console.error(chalk.red('[❌ Handler Error]'), err)
    }
  })

  romzz.ev.on('connection.update', ({ connection, lastDisconnect }) => {
    if (connection === 'close') {
      const reason = new Boom(lastDisconnect?.error)?.output.statusCode
      const reconnect = [
        DisconnectReason.connectionClosed,
        DisconnectReason.connectionLost,
        DisconnectReason.restartRequired,
        DisconnectReason.timedOut
      ].includes(reason)
      if (reconnect) {
        console.log(chalk.yellow('[🔁] Menyambungkan ulang...'))
        startBot()
      } else if (reason === DisconnectReason.loggedOut) {
        console.log(chalk.red('[⛔] Reload dulu truss hapus session nya.'))
      } else {
        console.log(chalk.red(`[❌ SAMBUNGAN PUTUS: ${reason}]`))
      }
    } else if (connection === 'open') {
      console.log(chalk.green(`[✅ TERHUBUNG ${romzz.user.id}`))
    }
  })

  romzz.ev.on('creds.update', saveCreds)
}

startBot()

fs.watchFile(__filename, () => {
  fs.unwatchFile(__filename)
  console.log(chalk.greenBright(`[AUTO-RELOAD] index.js dimuat ulang`))
  delete require.cache[require.resolve(__filename)]
  require(__filename)
})