require('./settings.js')
require('./lib/mymenu.js')
const fs = require('fs');
const os = require('os');
const util = require("util");
const jimp = require("jimp");
const path = require("path");
const speed = require('performance-now');
const axios = require('axios');
const chalk = require("chalk");
const yts = require("yt-search");
const fetch = require("node-fetch");
const yts2 = require('./lib/scrape/yt-search')
const moment = require('moment-timezone');
const JsConfuser = require('js-confuser');
const { writeExifImg, writeExifVid, writeExif } = require('./lib/exif');
const { spawn, exec, execSync } = require('child_process');
const { makeWASocket, makeCacheableSignalKeyStore, downloadContentFromMessage, emitGroupParticipantsUpdate, emitGroupUpdate, generateWAMessageContent, generateWAMessage, makeInMemoryStore, prepareWAMessageMedia, generateWAMessageFromContent, MediaType, areJidsSameUser, WAMessageStatus, downloadAndSaveMediaMessage, AuthenticationState, GroupMetadata, initInMemoryKeyStore, getContentType, MiscMessageGenerationOptions, useSingleFileAuthState, BufferJSON, WAMessageProto, MessageOptions, WAFlag, WANode, WAMetric, ChatModification, MessageTypeProto, WALocationMessage, ReconnectMode, WAContetInfo, proto, WAGroupMetadata, ProxyAgent, waChatKey, MimetypeMap, MediaPathMap, WAContactMessage, WAContactsArrayMessage, WAGroupInviteMessage, WATextMessage, WAMessageContent, WAMessage, BaileysError, WA_MESSAGE_STATUS_TYPE, MediaConnInfo, URL_REGEX, WAUrlInfo, WA_DEFAULT_EPHEMERAL, WAMediaUpload, mentionedJid, processTime, Browser, MessageType, Presence, WA_MESSAGE_STUB_TYPES, Mimetype, relayWAMessage, Browsers, GroupSettingChange, DisconnectReason, WASocket, getStream, WAProto, isBaileys, PHONENUMBER_MCC, AnyMessageContent, useMultiFileAuthState, fetchLatestBaileysVersion, templateMessage, InteractiveMessage, Header } = require('@whiskeysockets/baileys');

const { smsg, sendGmail, formatSize, isUrl, generateMessageTag, getBuffer, getSizeMedia, runtime, fetchJson, sleep } = require('./lib/myfunc');
module.exports = romzz = async (romzz, m, chatUpdate, store)  => {
try {
var body = (m.mtype === 'interactiveResponseMessage') ? 
    JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : 
    (m.mtype === 'conversation') ? m.message.conversation : 
    (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : 
    (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : 
    (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : 
    (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : 
    (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : 
    (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : 
    (m.mtype == 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : "";
    
const budy = (typeof m.text === 'string') ? m.text : '';
const prefixRegex = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/;
const prefix = prefixRegex.test(body) ? body.match(prefixRegex)[0] : '.';
const from = m.key.remoteJid;
const isGroup = from.endsWith("@g.us");
const isCmd = body.startsWith(prefix);
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : '';
const args = body.trim().split(/ +/).slice(1)
const text = q = args.join(" ")
const sender = m.key.fromMe ? (romzz.user.id.split(':')[0]+'@s.whatsapp.net' || romzz.user.id) : (m.key.participant || m.key.remoteJid)
const botNumber = await romzz.decodeJid(romzz.user.id)
const senderNumber = sender.split('@')[0]
const pushname = m.pushName || `${senderNumber}`
const isBot = botNumber.includes(senderNumber)
const quoted = m.quoted || {}; // ✅ Benar
const mime = (quoted.msg || quoted).mimetype || '';
const qmsg = (quoted.msg || quoted);
const isMedia = /image|video|sticker|audio/.test(mime);
const owner = JSON.parse(fs.readFileSync('./lib/owner/owner.json'));
const premium = JSON.parse(fs.readFileSync('./lib/owner/premium.json'));    
const isCreator = await romzz.decodeJid(romzz.user.id);
const isPremium = premium.includes(m.sender)
const isOwner = [isCreator, ...owner, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)    
const groupMetadata = isGroup ? await romzz.groupMetadata(m.chat).catch((e) => {}) : "";
const groupOwner = isGroup ? groupMetadata.owner : "";
const groupName = m.isGroup ? groupMetadata.subject : "";
const participants = isGroup ? await groupMetadata.participants : "";
const groupAdmins = isGroup ? await participants.filter((v) => v.admin !== null).map((v) => v.id) : "";
const groupMembers = isGroup ? groupMetadata.participants : "";
const isGroupAdmins = isGroup ? groupAdmins.includes(m.sender) : false;
const isBotGroupAdmins = isGroup ? groupAdmins.includes(isCreator) : false;
const isBotAdmins = isGroup ? groupAdmins.includes(isCreator) : false;
const isAdmins = isGroup ? groupAdmins.includes(m.sender) : false;
const mimeCaption = m.message?.[m.mtype]?.mimetype
const mimeQuoted = m.quoted?.message ? Object.values(m.quoted.message)[0]?.mimetype : null

const detectedMime = mimeCaption || mimeQuoted || mime

const isImage = /image/.test(detectedMime)
const isVideo = /video/.test(detectedMime)
const isStiker = /sticker/.test(detectedMime)
const isAudio = /audio/.test(detectedMime)


let resize = async (image, width, height) => {
let oyy = await jimp.read(image)
let gabuti = await oyy.resize(width, height).getBufferAsync(jimp.MIME_JPEG)
return gabuti
}
const tanggal = new Intl.DateTimeFormat('id-ID', { dateStyle: 'full' }).format(new Date());
const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
const xdate = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const time2 = moment.tz('Asia/Jakarta').format('HH : mm : ss')
const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')
const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')
 if(time2 < "23:59:00"){
var ucapanWaktu = `Selamat Malam 🌌`
 }
 if(time2 < "19:00:00"){
var ucapanWaktu = `Selamat Malam 🌃`
 }
 if(time2 < "18:00:00"){
var ucapanWaktu = `Selamat Malam 🌃`
 }
 if(time2 < "15:00:00"){
var ucapanWaktu = `Selamat Sore 🌅`
 }
 if(time2 < "11:00:00"){
var ucapanWaktu = `Selamat pagi 🌄`
 }
 if(time2 < "05:00:00"){
var ucapanWaktu = `Selamat Pagi 🌄`
 } 
if (global.mode === 'self' && !isOwner) {
  return
}
const nomor = sender.replace(/[^0-9]/g, '');
const fkontak = {
  key: {
    fromMe: false,
    participant: "6282197991725@s.whatsapp.net",
    remoteJid: "status@broadcast"
  },
  message: {
    orderMessage: {
      orderId: "2009",
      thumbnail: { Url: "https://b.top4top.io/p_3453keohe1.jpg" },
      itemCount: "2010",
      status: "INQUIRY",
      surface: "CATALOG",
      message: `Gonzalws xD`,
      token: "AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="
    }
  },
  contextInfo: {
    mentionedJid: ["6282197991725@s.whatsapp.net"],
    forwardingScore: 999,
    isForwarded: true,
  }
}

const fsaluran = { key : {
remoteJid: `${m.sender.split("@")[0]}@s.whatsapp.net`,
participant : `${m.sender.split("@")[0]}@s.whatsapp.net`
},
message: {
newsletterAdminInviteMessage: {
newsletterJid: idSaluran,
    newsletterName: namaSaluran,
    caption: body }}}
const PayX = {
			key: {
				fromMe: false,
				participant: `0@s.whatsapp.net`,
				...(from ? {
					remoteJid: "@s.whatsapp.net"
				} : {})
			},
			"message": {
				"orderMessage": {
					"orderId": "286383638363",
					"thumbnail": { Url: "https://b.top4top.io/p_3453keohe1.jpg" },
					"thumbnailUrl": "https://b.top4top.io/p_3453keohe1.jpg",
					"itemCount": 9741,
					"status": "INQUIRY",
					"surface": "CATALOG",
					"message": `Sender : @${pushname}\nCommand : ${command}`,
					"orderTitle": "© Dapsz-ID",
					"sellerJid": "6282197991725@s.whatsapp.net",
					"token": "AR40+xXRlWKpdJ2ILEqtgoUFd45C8rc1CMYdYG/R2KXrSg==",
					"totalAmount1000": "9741",
					"totalCurrencyCode": "USD"
				}
			}
		}
const fquote = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `0@s.whatsapp.net`} : {})}, message: {conversation: `${botname} By ${ownername}` }}
const qloc = {key: {participant: '13135550002@s.whatsapp.net', ...(m.chat ? {remoteJid: ``} : {})}, message: {locationMessage: {name: `${botname} By ${ownername}`,jpegThumbnail: await resize("./media/tobyut.pdf", 200, 200) }}}
const reply = async(teks, id = m.chat) => {
romzz.sendMessage(m.chat, {
  text: teks,
  contextInfo: {
    forwardingScore: 999,
    isForwarded: true,
    externalAdReply: {
      title: "Gx Dikzz - Dev",
      body: "",
      mediaType: 1,
      thumbnailUrl: thumbreply,
      renderLargerThumbnail: false,
      showAdAttribution: false,
      sourceUrl: "https://whatsapp.com"
    }
  }
}, { quoted: fsaluran, ephemeralExpiration: 86400 });
}
const anjing = async(teks, id = m.chat) => {
romzz.sendMessage(m.chat, {
  text: teks,
}, { quoted: text })
}
const sendMenu = async(teks, id = m.chat) => {
romzz.sendMessage(m.chat, {
  text: teks,
  contextInfo: {
    forwardingScore: 1,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterName: namaSaluran,
      newsletterJid: idSaluran
            },
    externalAdReply: {
      title: "Gonz-dev",
      body: "",
      mediaType: 1,
      thumbnailUrl: thumbmenu,
      renderLargerThumbnail: true,
      showAdAttribution: false,
      sourceUrl: "https://whatsapp.com"
    }
  }
}, { quoted: m });
}
const sendButton = async(teks, id = m.chat) => {
romzz.sendMessage(m.chat, {
    footer: `Powered By ${ownername}`,
    buttons: [
      {
        buttonId: 'action',
        buttonText: { displayText: 'ini pesan interactiveMeta' },
        type: 4,
        nativeFlowInfo: {
          name: 'single_select',
          paramsJson: JSON.stringify({
            title: 'list-menu',
            sections: [
              {
                title: 'allmenu', 
                highlight_label: 'populer',
                rows: [
                  {
                    header: '',
                    title: 'allmenu',
                    description: 'Buka semua menu bot',
                    id: '.allmenubutton'
                  }
                ]
              }
            ]
          }
        )
      }
    }
  ],
  headerType: 1,
  viewOnce: true,
  document: fs.readFileSync('./package.json'),
  fileName: ucapanWaktu,
  mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  fileLength: 999999999,
  pageCount: 312,
      gifPlayback: true,
        caption: teks,
        contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            mentionedJid: [sender],
            forwardedNewsletterMessageInfo: {
                newsletterName: namaSaluran,
                newsletterJid: idSaluran
            },
            externalAdReply: {  
             title: botname,
              body: ownername,
                thumbnailUrl: thumbmenu,
                sourceUrl: 'https://whatsapp.com/channel/0029VbAuu0fFHWpvAZAS3d17/107', 
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }, { quoted: fquote }
  );
}
if (m.message && m.isGroup) {
    console.log(`
■◇■◇■◇■◇■ [ GROUP CHAT LOG ] ■◇■◇■◇■◇■
🕒 Time      : ${chalk.green(new Date().toISOString().slice(0, 19).replace('T', ' '))}
📝 Message   : ${chalk.blue(budy || m.mtype)}
👤 Sender    : ${chalk.magenta(pushname)} (${chalk.cyan(m.sender)})
🏠 Group     : ${chalk.yellow(groupName)} (${chalk.cyan(m.chat)})
    `);
} else {
    console.log(`
■◇■◇■◇■◇■ [ PRIVATE CHAT LOG ] ■◇■◇■◇■◇■
🕒 Time      : ${chalk.green(new Date().toISOString().slice(0, 19).replace('T', ' '))}
📝 Message   : ${chalk.blue(budy || m.mtype)}
👤 Sender    : ${chalk.magenta(pushname)} (${chalk.cyan(m.sender)})
    `);
}


async function getBuffer(url) {
    const res = await axios.get(url, { responseType: 'arraybuffer' });
    return Buffer.from(res.data);
}

async function romzzai(pushname, text) {
    let response = await axios.post("https://chateverywhere.app/api/chat/", {
        "model": {
            "id": "gpt-4",
            "name": "GPT-4",
            "maxLength": 32000,
            "tokenLimit": 8000,
            "completionTokenLimit": 5000,
            "deploymentName": "gpt-4"
        },
        "messages": [
            {
                "pluginId": null,
                "content": text, 
                "role": "user"
            }
        ],
        "prompt": "nama mu adalah Gonzales Naks, kamu adalah asisten kecerdasan buatan yang sering membantu orang lain jika ada yang ditanyakan, dan kamu adalah bot WhatsApp yang di buat oleh gonzz naks", 
        "temperature": 0.5
    }, { 
        headers: {
            "Accept": "/*/",
            "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36"
        }
    });
    
    let result = response.data;
    reply(result)
}
const romzztotalfitur = () =>{
            var mytext = fs.readFileSync("./werom.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length
            return numUpper
        }
romzz.autoshalat = romzz.autoshalat ? romzz.autoshalat : {}
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? romzz.user.id : m.sender
let id = m.chat 
if (id in romzz.autoshalat) {
    return true
}
let jadwalSholat = {
    tengah: '2:25',
    shubuh: '04:39',
    terbit: '05:44',
    dhuha: '06:02',
    dzuhur: '12:02',
    ashar: '15:15',
    magrib: '17:52',
    isya: '19:01',
}

const datek = new Date((new Date).toLocaleString("en-US", { timeZone: "Asia/Jakarta" }))
const hours = datek.getHours()
const minutes = datek.getMinutes()
const timeNow = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`
for (let [sholat, waktu] of Object.entries(jadwalSholat)) {
    if (timeNow === waktu) {
        romzz.autoshalat[id] = [
            romzz.sendMessage(m.chat, {
                        audio: {
                            url: 'https://media.vocaroo.com/mp3/1ofLT2YUJAjQ'
                        },
                        mimetype: 'audio/mp4',
                        ptt: true,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                mediaType: 1,
                                mediaUrl: '',
                                title: `Selamat menunaikan Ibadah Sholat ${sholat}`,
                                body: `🕑 ${waktu}`,
                                sourceUrl: '',
                                thumbnail: await fs.readFileSync('./media/tourl.pdf'),
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m,
                        mentions: participants.map(a => a.id)
                    }),
            setTimeout(async () => {
                delete romzz.autoshalat[m.chat]
            }, 57000)
        ]
    }
}

let antichList = JSON.parse(fs.readFileSync('./lib/database/antich.json')); 
 
if (antichList.includes(m.chat)) {
 const forwardedFromChannel = Object.values(m.message || {}).some(msg =>
 msg?.contextInfo?.forwardedNewsletterMessageInfo
 );

 if (forwardedFromChannel && !isAdmins && !isCreator && !m.fromMe) {
 if (!isBotAdmins) return;

 if (linkBlocked.has(m.key.id)) return;
 linkBlocked.add(m.key.id);
 setTimeout(() => linkBlocked.delete(m.key.id), 5000);

 try {
 await romzz.sendMessage(m.chat, {
 text: `@${m.sender.split('@')[0]} jangan kirim pesan terusan dari *Saluran* pesan lu gw hapus!`,
 contextInfo: { mentionedJid: [m.sender] }
 });

 await romzz.sendMessage(m.chat, {
 delete: {
 remoteJid: m.chat,
 fromMe: true,
 id: m.key.id,
 participant: m.sender
 }
 });
 } catch (err) {
 console.error('❌ Gagal hapus pesan dari channel:', err);
 }
 }
}

async function searchSpotify(query) {
    try {
        const access_token = await getAccessToken();
        const response = await axios.get(`https://api.spotify.com/v1/search?q=${query}&type=track&limit=10`, {
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
        });
        const data = response.data;
        const tracks = data.tracks.items.map(item => ({
            name: item.name,
            artists: item.artists.map(artist => artist.name).join(', '),
            popularity: item.popularity,
            link: item.external_urls.spotify,
            image: item.album.images[0].url,
            duration_ms: item.duration_ms,
        }));
        return tracks;
    } catch (error) {
        console.error('Error searching Spotify:', error);
        throw 'An error occurred while searching for songs on Spotify.';
    }
}
async function spotifydl(url) {
  return new Promise(async (resolve, reject) => {
    try {
      const kemii = await axios.get(
        `https://api.fabdl.com/spotify/get?url=${encodeURIComponent(url)}`,
        {
          headers: {
            accept: "application/json, text/plain, */*",
            "accept-language": "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7",
            "sec-ch-ua": "\"Not)A;Brand\";v=\"24\", \"Chromium\";v=\"116\"",
            "sec-ch-ua-mobile": "?1",
            "sec-ch-ua-platform": "\"Android\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "cross-site",
            Referer: "https://spotifydownload.org/",
            "Referrer-Policy": "strict-origin-when-cross-origin",
          },
        }
      );
      const kemi = await axios.get(
        `https://api.fabdl.com/spotify/mp3-convert-task/${kemii.data.result.gid}/${kemii.data.result.id}`,
        {
          headers: {
            accept: "application/json, text/plain, */*",
            "accept-language": "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7",
            "sec-ch-ua": "\"Not)A;Brand\";v=\"24\", \"Chromium\";v=\"116\"",
            "sec-ch-ua-mobile": "?1",
            "sec-ch-ua-platform": "\"Android\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "cross-site",
            Referer: "https://spotifydownload.org/",
            "Referrer-Policy": "strict-origin-when-cross-origin",
          },
        }
      );
      const result = {};
      result.title = kemii.data.result.name;
      result.type = kemii.data.result.type;
      result.artis = kemii.data.result.artists;
      result.durasi = kemii.data.result.duration_ms;
      result.image = kemii.data.result.image;
      result.download = "https://api.fabdl.com" + kemi.data.result.download_url;
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};

const downloadMp4 = async (Link) => {
let gHz = require("./lib/scrape/savefrom")
let Lehd = await gHz.savefrom(Link)
let ghd = await reSize(Lehd.thumb, 300, 300)
let ghed = await ytdl.getInfo(Link)
let gdyr = await romzz.sendMessage(from, {image: { url: Lehd.thumb } , caption: `Channel Name : ${ghed.player_response.videoDetails.author}
Channel Link : https://youtube.com/channel/${ghed.player_response.videoDetails.channelId}
Title : ${Lehd.meta.title}
Duration : ${Lehd.meta.duration}
Desc : ${ghed.player_response.videoDetails.shortDescription}`}, { quoted : m })
try {
await ytdl.getInfo(Link)
let mp4File = getRandom('.mp4')
console.log(color('Download Video With ytdl-core'))
let nana = ytdl(Link)
.pipe(fs.createWriteStream(mp4File))
.on('finish', async () => {
await romzz.sendMessage(from, { video: fs.readFileSync(mp4File), caption: mess.succes, gifPlayback: false }, { quoted: gdyr })
fs.unlinkSync(`./${mp4File}`)
})
} catch (err) {
reply(`${err}`)
}
}
const downloadMp3 = async (Link) => {
let pNx = require("./lib/scrape/savefrom")
let Puxa = await pNx.savefrom(Link)
let MlP = await reSize(Puxa.thumb, 300, 300)
let PlXz = await ytdl.getInfo(Link)
let gedeyeer = await romzz.sendMessage(from, { image: { url: Puxa.thumb } , caption: `Channel Name : ${PlXz.player_response.videoDetails.author}
Channel Link : https://youtube.com/channel/${PlXz.player_response.videoDetails.channelId}
Title : ${Puxa.meta.title}
Duration : ${Puxa.meta.duration}
Desc : ${PlXz.player_response.videoDetails.shortDescription}`}, { quoted : m })
try {
await ytdl.getInfo(Link)
let mp3File = getRandom('.mp3')
console.log(color('Download Audio With ytdl-core'))
ytdl(Link, { filter: 'audioonly' })
.pipe(fs.createWriteStream(mp3File))
.on('finish', async () => {
await romzz.sendMessage(from, { audio: fs.readFileSync(mp3File), mimetype: 'audio/mp4' }, { quoted: gedeyeer })
fs.unlinkSync(mp3File)
})
} catch (err) {
reply(`${err}`)
}
}

const lastGreet = global.lastGreet || (global.lastGreet = {});
(n => `${n}@s.whatsapp.net`);
if (m.isGroup && owner.includes(m.sender)) {
  const now = Date.now();
  const key = `${m.chat}_${m.sender}`;
  const lastTime = lastGreet[key];
  if (lastTime !== undefined && now - lastTime > 30 * 60 * 1000) {
    romzz.sendMessage(m.chat, {
      text: 'Halo Owner, selamat datang kembali 👑',
    }, { quoted: m }); // pakai reply ke pesan owner
  }
  // Update waktu terakhir muncul owner
  lastGreet[key] = now;
}



if (body.toLowerCase() === 'tes' ) {
    m.reply('𝙰𝚔𝚝𝚒𝚏 𝚔𝚊𝚔𝚊')}
if (body.toLowerCase() === 'tes1' ) {
    reply('𝙰𝚔𝚝𝚒𝚏 𝚔𝚊𝚔𝚊')}
if (body.toLowerCase() === 'bot' ) {
    reply('Bot aktif ketik .menu untuk melihat semua perintah bot')}
if (body.toLowerCase() === 'hai' ) {
    reply('halo')}


//≈≈≈≈≈≈≈≈≈≈Fitur Case≈≈≈≈≈≈≈≈≈≈//
switch(command) {
case "menu": {
let menu = `𝙷𝚊𝚒 ${pushname}

[ *𝙸 𝙽 𝙵 𝙾 𝚁 𝙼 𝙰 𝚂 𝙸 - 𝙱 𝙾 𝚃* ]
- ᴄʀᴇᴀᴛᴏʀ : ${ownername}
- ᴠᴇʀsɪ : ${versi}
- ɴᴀᴍᴀ ʙᴏᴛ : ${botname}
- ʀᴜɴᴛɪᴍᴇ : ${runtime(process.uptime())}

[ *𝙸 𝙽 𝙵 𝙾 𝚁 𝙼 𝙰 𝚂 𝙸 - 𝚄 𝚂 𝙴 𝚁* ]
- ɴᴀᴍᴀ : ${pushname}
- sᴛᴀᴛᴜs : ${isOwner ? 'Owner' : isPremium ? 'Premium' : 'Free'}
- ɴᴏᴍᴏʀ : ${nomor}

■.allmenu
■.ownermenu
■.menuv1

`;
const thumbImage = { url: 'https://img1.pixhost.to/images/6815/616087541_biyuofficial.jpg' }
await romzz.sendMessage(m.chat, {
    footer: `Powered By ${ownername}`,
    buttons: [
      {
        buttonId: '.owner',
        buttonText: { displayText: '𝙾 𝚆 𝙽 𝙴 𝚁' },
        type: 1
      },
      {
        buttonId: '.gonzz',
        buttonText: { displayText: '𝙰 𝙻 𝙻 - 𝙼 𝙴 𝙽 𝚄' },
        type: 1
      },
      {
        buttonId: 'action',
        buttonText: { displayText: 'ini pesan interactiveMeta' },
        type: 4,
        nativeFlowInfo: {
          name: 'single_select',
          paramsJson: JSON.stringify({
            title: '𝙻 𝙸 𝚂 𝚃 - 𝙼 𝙴 𝙽 𝚄',
            sections: [
              {
                title: 'allmenu', 
                highlight_label: 'populer',
                rows: [
                  {
                    header: '',
                    title: 'allmenu',
                    description: 'Buka semua menu bot',
                    id: '.allmenubutton'
                  }
                ]
              }
            ]
          }
        )
      }
    }
  ],
  headerType: 1,
  viewOnce: true,
  document: { url: `https://files.catbox.moe/x0hc92.jpg` },
  mimetype: "image/png",
  fileName: ucapanWaktu,
  fileLength: 999999999,
  pageCount: 312,
  jpegThumbnail: thumbImage ? await resize(thumbImage, 400, 400) : null,
      gifPlayback: true,
        caption: menu,
        contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            mentionedJid: [sender],
            forwardedNewsletterMessageInfo: {
                newsletterName: namaSaluran,
                newsletterJid: idSaluran
            },
            externalAdReply: {  
             title: botname,
              body: ownername,
                thumbnailUrl: thumbmenu,
                sourceUrl: 'https://whatsapp.com/channel/0029Vb5YqLc60eBgjA8Xv60o', 
                mediaType: 1,
                renderLargerThumbnail: true
            }

        }
    }, { quoted: qloc }
  )
}
break
case 'afk': {
if (!m.isGroup) return reply(mess.only.group)
if (!text) return reply(`Example ${prefix+command} want to sleep`)
let user = global.db.users[m.sender]
user.afkTime = + new Date
user.afkReason = args.join(" ")
reply(`${m.pushName} Telah Melakukan AFK\nAlasan : ${args.join(" ") ? args.join(" ") : ''}`)


}
break
        case 'cekpanjang':{
				if (!text) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} Reza`)
				const sangeh = ['5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80', '85', '90', '95', '100']
				const sange = sangeh[Math.floor(Math.random() * sangeh.length)]
				reply(`*Pertanyaan Cek Panjang ttd*
			Punya : ${q}\n adalah : *${sange}* cm`)

}
break

case 'ai4ch': {
  if(!text) return reply("mau tanya apa kak")
  romzz.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
  const data = await fetchJson(`https://api.hiuraa.my.id/ai/ai4chat?text=${encodeURIComponent(text)}`)
  reply(data.result)
}
break

case 'd40': {
    if (!isCreator) return reply(mess.only.owner)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "583196d8ec9e16fbe5bbe944efbb3d8a";
               let apitoken = "jZ4EuzWs4-ktGcfkwht3NbZfGlZm_VnWjtYyG-1U";
               let tld = "rafeyfah.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━
┣ 𝙄𝙥 = ${e['ip']}
┗━━━━━━━━━━━━━━━━━━━
┣ 𝙐𝙨𝙚𝙧𝙣𝙖𝙢𝙚 = ${e['name']} 
┗━━━━━━━━━━━━━━━━━━━
┣ 𝘾𝙧𝙚𝙖𝙩𝙚 𝙗𝙮 = 𝙒𝙞𝙣𝙙𝙖𝙃𝙤𝙨𝙩
┗━━━━━━━━━━━━━━━━━━━
*NOTE SUBDOMAIN*
> *TIDAK UNTUK WHM*
> *SELALU BERHATI² TERHADAP DDOS*
> *JAGAN SPAM BOT*
> *JIKA ADA SUB RUSAK LAPOR*
 ©𝙒𝙞𝙣𝙙𝙖𝙃𝙤𝙨𝙩

*TERIMAKASIH*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break

case 'totalfeature':
        case 'totalfitur': 
        case 'totalcmd': 
        case 'totalcommand': 
            reply(`hallo kak ${pushname} jadi ${botname} \n\n*memiliki "total fitur${romzztotalfitur()}"*`)
        break

case'ssweb':
      {

        if (!text) return reply(`mana linknya kak?`)
        try
        {
          romzz.sendMessage(m.chat,
          {
            image:
            {
              url: `https://skizoasia.xyz/api/ssweb?type=mobile&url=${encodeURIComponent(text)}&apikey=nonogembul`
            }
          },
          {
            quoted: m
          })
        }
        catch
        {
          reply('yah Error kak laporankan ke owner agar di perbaiki')
        }
      }
      break
      case 'tagall': {
if (!isOwner) return romzz.sendMessage(from, {audio: fs.readFileSync('./media/own.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
if (!m.isGroup) return reply(mess.group);
const textMessage = args.join(" ") || "nothing";
let teks = `tagall message :\n> *${textMessage}*\n\n`;
const groupMetadata = await romzz.groupMetadata(m.chat);
const participants = groupMetadata.participants;
for (let mem of participants) {
teks += `@${mem.id.split("@")[0]}\n`;
}
romzz.sendMessage(m.chat, {
text: teks,
mentions: participants.map((a) => a.id)
}, { quoted: m });
}
break
case 'get': {
    if (!isOwner) return romzz.sendMessage(from, {audio: fs.readFileSync('./media/own.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
    if (!text) return reply(`Please start the *URL* with http:// or https://`);
    try {
        const gt = await axios.get(text, {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Referer": "https://www.google.com/",
                "Referrer-Policy": "strict-origin-when-cross-origin",
                "User-Agent": "Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36"
            },
            responseType: 'arraybuffer'
        });
        const contentType = gt.headers['content-type'];
        console.log(`Content-Type: ${contentType}`);

        if (/json/i.test(contentType)) {
            const jsonData = JSON.parse(Buffer.from(gt.data, 'binary').toString('utf8'));
            return reply(JSON.stringify(jsonData, null, 2));
        } else if (/text/i.test(contentType)) {
            const textData = Buffer.from(gt.data, 'binary').toString('utf8');
            return reply(textData);
        } else if (text.includes('webp')) {
            return romzz.sendMessage(m.chat, { sticker: { url: text }}, { quoted: m });
        } else if (/image/i.test(contentType)) {
            return romzz.sendMessage(m.chat, { image: { url: text }}, { quoted: m });
        } else if (/video/i.test(contentType)) {
            return romzz.sendMessage(m.chat, { video: { url: text }}, { quoted: m });
        } else if (/audio/i.test(contentType) || text.includes(".mp3")) {
            return romzz.sendMessage(m.chat, { audio: { url: text }}, { quoted: m });
        } else if (/application\/zip/i.test(contentType) || /application\/x-zip-compressed/i.test(contentType)) {
            return romzz.sendMessage(m.chat, { document: { url: text }}, { quoted: m });
        } else if (/application\/pdf/i.test(contentType)) {
            return romzz.sendMessage(m.chat, { document: { url: text }}, { quoted: m });
        } else {
            return reply(`MIME : ${contentType}\n\n${gt.data}`);
        }
    } catch (error) {
        console.error(`Error: ${error}`);
        return reply(`An error occurred while accessing the URL: ${error.message}`);
    }
}
db.data.users[m.sender].exp += await randomNomor(60)
break;

case 'reply': {
  reply('Model teks reply 3')
}
break
case 'mode':
  if (!isOwner) return m.reply('❌ Hanya owner yang bisa mengubah mode bot.')

  if (args[0] === 'self') {
    global.mode = 'self'
    return m.reply('✅ Bot sekarang dalam mode *SELF* (hanya owner).')
  } else if (args[0] === 'public') {
    global.mode = 'public'
    return m.reply('✅ Bot sekarang dalam mode *PUBLIC* (semua pengguna).')
  } else {
    return m.reply(`Contoh:\n.mode self\n.mode public\n\nMode saat ini: *${global.mode.toUpperCase()}*`)
  }
break
case 'delsesi': 
case 'clearsession': {
  fs.readdir("./session", async function (err, files) {
    if (err) {
      console.log('Unable to scan directory: ' + err);
      return reply('Unable to scan directory: ' + err);
    } 
    let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
    item.startsWith("sender-key") || item.startsWith("session-") || item.startsWith("app-state"))
    console.log(filteredArray.length); 
    let teks =`Terdeteksi ${filteredArray.length} file kenangan <3\n\n`
    if(filteredArray.length == 0) return reply(`${teks}`)
    filteredArray.map(function(e, i){
      teks += (i+1)+`. ${e}\n`})     
      reply(`${teks}`) 
      await sleep(2000)
      reply("Menghapus file Kenangan...")
      await filteredArray.forEach(function (file) {
        fs.unlinkSync(`./session/${file}`)
      }
    );
    await sleep(2000)
    reply("Berhasil menghapus semua Kenangan di folder session")     
    }
  );
}
break
case 'addowner':
  if (!isOwner) return m.reply('❌ Hanya owner utama yang bisa menambahkan owner.')

  if (!args[0]) return m.reply('Contoh: .addowner 6281234567890')

  const ownJid = args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net'
  if (owner.includes(ownJid)) return m.reply('✅ Sudah jadi owner.')

  owner.push(ownJid)
  fs.writeFileSync('./lib/owner/owner.json', JSON.stringify(owner, null, 2))
  m.reply(`✅ Berhasil menambahkan owner: @${ownJid.split('@')[0]}`, { mentions: [ownJid] })
break
case 'delowner': {
  if (!isOwner) return m.reply('❌ Hanya owner utama yang bisa menghapus owner.')
  if (!args[0]) return m.reply('Contoh: .delowner 6281234567890')

  const delJid = args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net'
  const index = owner.indexOf(delJid)
  if (index === -1) return m.reply('❌ Nomor tersebut bukan owner.')

  owner.splice(index, 1)
  fs.writeFileSync('./lib/owner/owner.json', JSON.stringify(owner, null, 2))
  m.reply(`✅ Berhasil menghapus owner: @${delJid.split('@')[0]}`, { mentions: [delJid] })
}
break

case 'delprem': {
  if (!isOwner) return m.reply('❌ Hanya owner yang bisa menghapus user premium.')
  if (!args[0]) return m.reply('Contoh: .delprem 6281234567890')

  const delJid = args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net'
  const index = premium.indexOf(delJid)
  if (index === -1) return m.reply('❌ Nomor tersebut bukan user premium.')

  premium.splice(index, 1)
  fs.writeFileSync('./lib/owner/premium.json', JSON.stringify(premium, null, 2))
  m.reply(`✅ Berhasil menghapus premium: @${delJid.split('@')[0]}`, { mentions: [delJid] })
}
break
case 'addprem':
  if (!isOwner) return m.reply('❌ Hanya owner yang bisa menambahkan user premium.')

  if (!args[0]) return m.reply('Contoh: .addprem 6281234567890')

  const premJid = args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net'
  if (premium.includes(premJid)) return m.reply('✅ User sudah premium.')

  premium.push(premJid)
  fs.writeFileSync('./lib/owner/premium.json', JSON.stringify(premium, null, 2))
  m.reply(`✅ Berhasil menambahkan premium: @${premJid.split('@')[0]}`, { mentions: [premJid] })
break
//case nya
case 'linkgroup': case 'linkgc': case 'gclink': case 'grouplink': {

if (!m.isGroup) return reply('only group')
if (!isBotAdmins) return reply('_Bot Harus Menjadi Admin Terlebih Dahulu_')
let response = await romzz.groupInviteCode(m.chat)
romzz.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nGroup Link : ${groupMetadata.subject}`, m, { detectLink: true })
}
break
case 'allmenubutton': {
sendButton(allmenu(prefix))
}
break

case 'menuv1': case 'nakasi': {
 reply('Wait')
let menu = `𝙷𝚊𝚒 *${pushname}* *aku adalah werbot-wa yang bisa membantumu kamu bisa menggunakan menu apapun yah tapi aku masih tahap penembangan*

[ *𝙸 𝙽 𝙵 𝙾 𝚁 𝙼 𝙰 𝚂 𝙸 - 𝙱 𝙾 𝚃* ]
- ᴄʀᴇᴀᴛᴏʀ : goNzales</>
- ᴠᴇʀsɪ : ${versi}
- ɴᴀᴍᴀ ʙᴏᴛ : ${botname}
- ʀᴜɴᴛɪᴍᴇ : ${runtime(process.uptime())}

[ *𝙸 𝙽 𝙵 𝙾 𝚁 𝙼 𝙰 𝚂 𝙸 - 𝚄 𝚂 𝙴 𝚁* ]
- ɴᴀᴍᴀ : ${pushname}
- sᴛᴀᴛᴜs : ${isOwner ? 'Owner' : isPremium ? 'Premium' : 'Free'}
- ɴᴏᴍᴏʀ : ${nomor}

*</> OWNER MENU </>*
 ■.addprem
 ■.delprem
 ■.addowner
 ■.delowner
 ■.mode public/self
 ■.getcase
 
 *</> GROUP MENU </>*
  ■.antilinkgc
  ■.antilinkch
  ■.promote
  ■.demote
  ■.kick
  ■.tutup
  ■.buka
  ■.tgll
  ■.setppgc
  ■.delppgc
  
   *</> AI MENU </>*
  ■.gpt
  ■.ai
  ■.grok
  ■.ai4ch
  
 *</> TOOLS MENU </>*
  ■.rvo
  ■.rch
  ■.$
  ■.vv
  ■.uu
  ■.<
  ■.cweb1
  ■.ssweb
  
  *</> ANIME MENU </>*
 ■.animeneko
 ■.animepat
 ■.animeslap
 ■.animecuddle
 ■.animewaifu
 ■.animenom
 ■.animefoxgirl
 ■.animetickle
 ■.animegecg
 ■.randomelaina
 ■.rdelaina

*</> DOWNLOAD MENU </>* 
■.mediafire
■.sfile
■.gdrive
■.igdl
■.tiktok

*</> SEARCH MENU </>* 
■.pinterest
■.xnxxsearch
■.play
■.jadwalsholat

*</> MAIN MENU </>*  
■.tes
■.stabilkan
■.bot
■.qut
■.owner
■.runtime
■.totalfitur
■.toanime

*</> MAKER MENU </>*
■.sticker
■.qc
■.bratvid
■.brat
■.emojimix
■.sgif

*</> QUOTES MENU </>*
■.quoteshacker
■.quotesbijak
■.quotesbacot
■.quotesmotivasi
■.quotesgalau
■.quotesgombal
■.quotesanime

`;
const thumbImage = { url: 'https://img1.pixhost.to/images/6815/616087541_biyuofficial.jpg' }
await romzz.sendMessage(m.chat, {
    footer: `Powered By ${ownername}`,
    buttons: [
      {
        buttonId: '.owner',
        buttonText: { displayText: '𝙾 𝚆 𝙽 𝙴 𝚁' },
        type: 1
      },      {
        buttonId: '.tqto',
        buttonText: { displayText: 'T H A N K S - T O' },
        type: 1
      },
      {
        buttonId: '.allmenu',
        buttonText: { displayText: '𝙰 𝙻 𝙻 - 𝙼 𝙴 𝙽 𝚄' },
        type: 1
      },
      {
        buttonId: 'action',
        buttonText: { displayText: 'ini pesan interactiveMeta' },
        type: 4,
        nativeFlowInfo: {
          name: 'single_select',
          paramsJson: JSON.stringify({
            title: '𝙻 𝙸 𝚂 𝚃 - 𝙼 𝙴 𝙽 𝚄',
            sections: [
              {
                title: 'allmenu', 
                highlight_label: 'populer',
                rows: [
                  {
                    header: '',
                    title: 'allmenu',
                    description: 'Buka semua menu bot',
                    id: '.gonzz'
                  }
                ]
              }
            ]
          }
        )
      }
    }
  ],
  headerType: 1,
  viewOnce: true,
  document: { url: `https://files.catbox.moe/x0hc92.jpg` },
  mimetype: "image/png",
  fileName: ucapanWaktu,
  fileLength: 999999999,
  pageCount: 312,
  jpegThumbnail: thumbImage ? await resize(thumbImage, 400, 400) : null,
      gifPlayback: true,
        caption: menu,
        contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            mentionedJid: [sender],
            forwardedNewsletterMessageInfo: {
                newsletterName: namaSaluran,
                newsletterJid: idSaluran
            },
            externalAdReply: {  
             title: botname,
              body: ownername,
                thumbnailUrl: thumbmenu,
                sourceUrl: 'https://whatsapp.com/channel/0029Vb5YqLc60eBgjA8Xv60o', 
                mediaType: 1,
                renderLargerThumbnail: true
            }

        }
    }, { quoted: m }
  )
}
break

case'promote':
        if (!m.isGroup) return m.reply(mess.only.group);
        if (!isAdmins && !isCreator) return reply('Khusus Admin!!')
        if (!isBotAdmins) return reply('_Bot Harus Menjadi Admin Terlebih Dahulu_')
        let blockwwwww = m.mentionedJid[0] ?
          m.mentionedJid[0] :
          m.quoted ?
          m.quoted.sender :
          text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        await romzz.groupParticipantsUpdate(m.chat, [blockwwwww], "promote")
        break
    case 'pinterest': case 'pin':
      {

        if (!text) return reply(`Format salah, contoh: \n${prefix + command} Anime`)
        if (budy.match(`tobrut|susu|seksi|sexy`)) return reply(
          'GABOLEH YA, INGAT AKHIRAT INGAT TUHAN!');
        await romzz.sendMessage(m.chat,
        {
          react:
          {
            text: '⏳',
            key: m.key
          }
        })

        let anutrest = await pinterest(text) // Ambil hasil pencarian
        if (!anutrest || anutrest.length === 0) return reply("Error, Foto Tidak Ditemukan")

        // Ambil maksimal 10 gambar biar nggak terlalu panjang
        let selectedImages = anutrest.slice(0, 5);
        let anu = []

        for (let i = 0; i < selectedImages.length; i++)
        {
          let imgsc = await prepareWAMessageMedia(
          {
            image:
            {
              url: selectedImages[i].image
            }
          },
          {
            upload: DinzBotz.waUploadToServer
          })

          anu.push(
          {
            header: proto.Message.InteractiveMessage.Header.fromObject(
            {
              title: `Gambar ke *${i + 1}*`,
              hasMediaAttachment: true,
              ...imgsc
            }),
            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject(
            {
              buttons: [
              {
                name: "cta_url",
                buttonParamsJson: JSON.stringify(
                {
                  display_text: "Lihat di Pinterest",
                  url: selectedImages[i].source || selectedImages[i].image
                })
              }]
            }),
            footer: proto.Message.InteractiveMessage.Footer.create(
            {
              text: "© Gonzales VyL 2025"
            })
          })
        }

        // Buat format `carouselMessage`
        const msg = await generateWAMessageFromContent(m.chat,
        {
          viewOnceMessage:
          {
            message:
            {
              messageContextInfo:
              {
                deviceListMetadata:
                {},
                deviceListMetadataVersion: 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.fromObject(
              {
                body: proto.Message.InteractiveMessage.Body.fromObject(
                {
                  text: `🔎 Berikut hasil pencarian gambar untuk *${text}*`
                }),
                carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject(
                {
                  cards: anu
                })
              })
            }
          }
        },
        {
          userJid: sender,
          quoted: m
        })

        romzz.relayMessage(m.chat, msg.message,
        {
          messageId: msg.key.id
        })
      }
      db.users[m.sender].exp += 300;
      break    
        

case'kick':{
      {

        if (!m.isGroup) return reply('Only group')
        if (!isAdmins && !isCreator) return reply('Khusus Admin!!')
        if (!isBotAdmins) return reply('_Bot Harus Menjadi Admin Terlebih Dahulu_')
        let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(
          /[^0-9]/g, '') + '@s.whatsapp.net'
        await romzz.groupParticipantsUpdate(m.chat, [users], 'remove')
        await reply(`sukses kak`)
      }
      db.users[m.sender].exp += 300;
}
      break

case 'ownermenu': {
let menu = `𝙷𝚊𝚒 *${pushname}*

*</> MENAMPILKAN OWNER MENU </>*

 ■.addprem
 ■.delprem
 ■.addowner
 ■.delowner
 ■.mode public/self
 ■.leave
 ■.getcase

`;
const thumbImage = { url: 'https://img1.pixhost.to/images/6815/616087541_biyuofficial.jpg' }
await romzz.sendMessage(m.chat, {
    footer: `Powered By ${ownername}`,
    buttons: [
      {
        buttonId: '.owner',
        buttonText: { displayText: '𝙾 𝚆 𝙽 𝙴 𝚁' },
        type: 1
      },
      {
        buttonId: '.allmenu',
        buttonText: { displayText: '𝙰 𝙻 𝙻 - 𝙼 𝙴 𝙽 𝚄' },
        type: 1
      },
      {
        buttonId: 'action',
        buttonText: { displayText: 'ini pesan interactiveMeta' },
        type: 4,
        nativeFlowInfo: {
          name: 'single_select',
          paramsJson: JSON.stringify({
            title: '𝙻 𝙸 𝚂 𝚃 - 𝙼 𝙴 𝙽 𝚄',
            sections: [
              {
                title: 'allmenu', 
                highlight_label: 'populer',
                rows: [
                  {
                    header: '',
                    title: 'allmenu',
                    description: 'Buka semua menu bot',
                    id: '.allmenubutton'
                  }
                ]
              }
            ]
          }
        )
      }
    }
  ],
  headerType: 1,
  viewOnce: true,
  document: { url: `https://files.catbox.moe/x0hc92.jpg` },
  mimetype: "image/png",
  fileName: ucapanWaktu,
  fileLength: 999999999,
  pageCount: 312,
  jpegThumbnail: thumbImage ? await resize(thumbImage, 400, 400) : null,
      gifPlayback: true,
        caption: menu,
        contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            mentionedJid: [sender],
            forwardedNewsletterMessageInfo: {
                newsletterName: namaSaluran,
                newsletterJid: idSaluran
            },
            externalAdReply: {  
             title: botname,
              body: ownername,
                thumbnailUrl: thumbmenu,
                sourceUrl: 'https://whatsapp.com/channel/0029Vb5YqLc60eBgjA8Xv60o', 
                mediaType: 1,
                renderLargerThumbnail: true
            }

        }
    }, { quoted: qloc }
  )
}
break

case 'getcase':
if (!isOwner) return reply('untuk owner bot')
const getCase = (cases) => {
return "case"+`'${cases}'`+fs.readFileSync("werom.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"
}
reply(`${getCase(q)}`)
break



case 'rvo':

case 'readviewonce': {

    if (!m.quoted) return reply(`Balas pesan viewonce dengan caption ${prefix + command}`);

    

    try {

        const quoted = m.quoted;

        const media = await quoted.download();

        const type = quoted.mtype;

        if (type === 'videoMessage') {

            await romzz.sendMessage(m.chat, {

                video: media,

                caption: `_Berhasil membuka pesan viewonce_`,

                mimetype: 'video/mp4'

            }, { quoted: m });

        } else if (type === 'imageMessage') {

            await romzz.sendMessage(m.chat, {

                image: media,

                caption: `_Berhasil membuka pesan viewonce_`

            }, { quoted: m });

        } else {

            reply('Jenis pesan viewonce tidak dikenali.');

        }

    } catch (err) {

        console.error('Error buka viewonce:', err.message);

        reply('Gagal membuka pesan viewonce. Mungkin view once sudah dilihat oleh bot');

    }
}
    break;

case 'spy': {    
if(!text) return reply('Judul lagu ')
  

  try {

    const encodedUrl = encodeURIComponent(spotifyUrl);

    const api = `https://ytdlpyton.nvlgroup.my.id/spotify/download/audio?url=${encodedUrl}&mode=url`;

    const { data } = await axios.get(api);

    if (!data || !data.download_url) {

      reply("Gagal mendapatkan data dari API.");

      return;

    }

    const { title, artist, thumbnail, download_url } = data;

    let doc = {

      audio: {

        url: download_url

      },

      mimetype: 'audio/mpeg',

      waveform: [100, 0, 100, 0, 100, 0, 100],

      fileName: `${title}.mp3`,

      contextInfo: {

        mentionedJid: [m.sender],

        externalAdReply: {

          title: `Downloading: ${title}`,

          body: `Artist: ${artist}`,

          thumbnailUrl: thumbnail,

          sourceUrl: spotifyUrl,

          mediaType: 1,

          renderLargerThumbnail: true

        }

      }

    };

    await romzz.sendMessage(from, doc, { quoted: m });

                

  } catch (error) {

    console.error("Error:", error);

    reply("Terjadi kesalahan saat mengakses API Spotify.");

  }

}

break;

case 'tes':{
reply('aktif')
}
break
case 'tes1':{
anjing('aktif')
}
break
case 'qut':{
if (isImage) return
reply('tes')
}
break
case 's':
case 'stiker':
case 'sticker': {
if (!quoted) return reply(`Reply gambar atau video maksimal 20 detik dengan caption ${prefix+command}`)
  romzz.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
if (isImage) {
let media = await quoted.download()
let encmedia = await romzz.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
} else if (isVideo) {
if ((quoted.msg || quoted).seconds > 20) return reply(`Reply gambar atau video maksimal 20 detik dengan caption ${prefix+command}`)
romzz.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
let media = await quoted.download()
let encmedia = await romzz.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
} else {
reply(`Reply gambar atau video maksimal 20 detik dengan caption ${prefix+command}`)
romzz.sendMessage(m.chat, { react: { text: '❌', key: m.key }})
}
}
break;
case'tebakgambar':
      {
        const gamecek = await cekgame(m.chat)
        if (gamecek) return

        let anu = await fetchJson(
          'https://raw.githubusercontent.com/ditss-dev/database/main/game/tebakgambar.json')
        let result = await pickRandom(anu)
        console.log("Jawaban: " + result.jawaban)
        tebakgambar[m.chat] = [
          await romzz.sendMessage(m.chat,
          {
            image:
            {
              url: result.img
            },
            caption: `Mohon Dijawab Soal Diatas\n\nDeskripsi : ${result.deskripsi}\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`
          },
          {
            quoted: m
          }), result, 250,
          setTimeout(() =>
          {
            if (tebakgambar[m.chat])
            {
              waktuHabis(result.jawaban)
              delete tebakgambar[m.chat]
            }
          }, 120000)
        ]
      }
      break
      case 'script': {
        reply('Script nya free hubungi\nhttps://wa.me/message/BVZOJ2XUTDUGF1')
        
      }
      break;
      case 'owner': {
    let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:WhatsApp; ${global.ownername}\nORG: ${global.ownername}\nTITLE:soft\nitem1.TEL;waid=${global.owner}:${global.owner}\nitem1.X-ABLabel:Ponsel\nitem3.X-ABLabel:Email\nitem4.ADR:;;Indonesia;;;;\nitem4.X-ABADR:ðŸ’¬ More\nitem4.X-ABLabel:Lokasi\nEND:VCARD`;
const sentMsg = await romzz.sendMessage(m.chat, {
      contacts: {
        displayName: author,
        contacts: [{ vcard }],
      },
      contextInfo: {
        externalAdReply: {
          title: "M Y  O W N E R - A Y A N A",
          body: "",
          thumbnailUrl: global.menu,
          mediaType: 1,
          showAdAttribution: true,
          renderLargerThumbnail: true,
        }}}, { quoted: m });
}
break
      break
      
      case 'antilinkgc':
case 'antilink':
case 'antilinkv2': {

if (!m.isGroup) return reply('only group')
if (!isBotAdmins) return reply('_Bot Harus Menjadi Admin Terlebih Dahulu_')
if (!isAdmins && !isOwner) return reply('Khusus Admin!!')
  if (!antilinkk[m.chat]) antilinkk[m.chat] = { active: false, warnings: {}, antilink: false }
  const argsLower = q.toLowerCase();
  if (argsLower === 'on') {
    antilinkk[m.chat].antilink = true;
    saveantilinkk();
    m.reply('✅ Anti Link Grup AKTIF!');
  } else if (argsLower === 'off') {
    antilinkk[m.chat].antilink = false;
    saveantilinkk();
    m.reply('❌ Anti Link Grup NONAKTIF!');
  } else {
    m.reply(`Contoh:\n*${prefix}antilink on*\n*${prefix}antilink off*`);
  }
}
break
case 'antilinkch': {
if (!text) return reply('antilinkch on\nantilinkch off')
if (!m.isGroup) return reply('only group')
if (!isBotAdmins) return reply('_Bot Harus Menjadi Admin Terlebih Dahulu_')
if (!isAdmins && !isOwner) return reply('Khusus Admin!!')
  if (!antichannel[m.chat]) antichannel[m.chat] = { active: false, warnings: {}, antichannel: false }
  const argsLower = q.toLowerCase();
  if (argsLower === 'on') {
    antichannel[m.chat].antichannel = true;
    saveAntichannel();
    m.reply('✅ Anti Link Channel WhatsApp AKTIF!');
  } else if (argsLower === 'off') {
    antichannel[m.chat].antichannel = false;
    saveAntichannel();
    m.reply('❌ Anti Link Channel WhatsApp NONAKTIF!');
  } 
}
break
case 'emojimix': case 'semoji':
      {
        reply('Bentar ya kontol masih Proses')

        let [emoji1, emoji2] = text.split`+`
        if (!emoji1) return reply(`Contoh : ${prefix + command} 😅+🤔`)
        if (!emoji2) return reply(`Contoh : ${prefix + command} 😅+🤔`)
        let anumojimix = await fetchJson(
          `https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`
          )
        for (let res of anumojimix.results)
        {
          let encmedia = await romzz.sendImageAsSticker(m.chat, res.url, m,
          {
            packname: global.packname,
            author: global.author,
            categories: res.tags
          })

        }
      }
      break;
      
      case 'delete':
      case 'del':
      {
        if (!text) return reply('reply teks untuk menghapus')
        if (!isCreator) return reply('only owner')
        if (!m.quoted) throw false
        let
        {
          chat,
          id
        } = m.quoted
        romzz.sendMessage(m.chat,
        {
          delete:
          {
            remoteJid: m.chat,
            fromMe: false,
            id: m.quoted.id,
            participant: m.quoted.sender
          }
        })
      }
      break
      
      case 'kick': case "dor":
      {

        if (!m.isGroup) return reply("di group doang tolol")
        if(!text) return reply('oranh nya mana njirr')
        if (!isAdmins && !isCreator) return reply('Khusus Admin!!')
        if (!isBotAdmins) return reply('_Bot Harus Menjadi Admin Terlebih Dahulu_')
        await romzz.groupParticipantsUpdate(m.chat, [users], 'remove')
        await reply(`sukses kak`)
      }
      break
      
      case 'demote':
      {

        if (!m.isGroup) return reply('group doang')
        if (!isAdmins && !isCreator) return reply('Khusus Admin!!')
        if (!isBotAdmins) return reply('_Bot Harus Menjadi Admin Terlebih Dahulu_')
        let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(
          /[^0-9]/g, '') + '@s.whatsapp.net'
        await romzz.groupParticipantsUpdate(m.chat, [users], 'demote')
        await reply(`sukses kak`)
      }
      break
      
      case 'runtime':
      {

        let lowq = `*The Bot Has Been Online For:*\n*${runtime(process.uptime())}*`
        reply(lowq)
      }
      break
      
      case 'aigen':
      case 'aiimage':
      {

        if (!text) return reply(
          `🚨 Masukkan prompt gambar!\n\nContoh: .aigen anime girl with blue hair`);

        reply("🎨 Generating AI Image...");
        await romzz.sendMessage(m.chat,
        {
          react:
          {
            text: "⏱️",
            key: m.key,
          }
        })
        try
        {
          const axios = require("axios");

          async function generateImage(prompt)
          {
            const url =
              `https://1yjs1yldj7.execute-api.us-east-1.amazonaws.com/default/ai_image?prompt=${encodeURIComponent(prompt)}&aspect_ratio=1:1&link=writecream.com`;

            const headers = {
              "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Mobile Safari/537.36",
              "Referer": "https://www.writecream.com/ai-image-generator-free-no-sign-up/"
            };

            let
            {
              data
            } = await axios.get(url,
            {
              headers
            });
            if (data && data.image_link) return {
              success: true,
              imageUrl: data.image_link
            };
            return {
              success: false,
              message: "❌ Gagal mendapatkan gambar!"
            };
          }

          let result = await generateImage(text);
          if (!result.success) return reply(result.message);

          await romz.sendMessage(m.chat,
          {
            react:
            {
              text: '🎨',
              key: m.key
            }
          });

          await romzz.sendMessage(m.chat,
          {
            image:
            {
              url: result.imageUrl
            },
            caption: `🖼️ *AI Image Generator*\n\n🎨 *Prompt:* ${text}`
          },
          {
            quoted: m
          });

          reply("✅ Gambar berhasil dibuat!");
        }
        catch (err)
        {
          console.error(err);
          reply("❌ Terjadi kesalahan saat membuat gambar!");
        }
      }
      break;
      
      

//________/________/________/________/_____/_____/______/_____/______/__/




 case 'quotechat':
      case 'xquote':
      case 'quotly':
      case 'qc':
      {

        const colorMap = {
          hitam: "#000000",
          putih: "#ffffff",
          merah: "#ff0000",
          biru: "#0000ff",
          kuning: "#ffff00",
          hijau: "#00ff00",
          ijo: "#00ff00",
          ungu: "#800080",
          pink: "#ffc0cb",
          oranye: "#ffa500",
          coklat: "#8b4513",
          abu: "#808080",
          pink_pastel: "#ffd1dc",
          cyan: "#00ffff",
          toska: "#40e0d0",
          lavender: "#e6e6fa",
          mint: "#98ff98",
          peach: "#ffcccb",
          salem: "#fa8072",
          emas: "#ffd700",
          silver: "#c0c0c0",
          navy: "#000080",
          maroon: "#800000",
          coklat_muda: "#d2b48c",
          biru_muda: "#add8e6",
          hijau_muda: "#90ee90",
          kuning_pastel: "#fdfd96",
          merah_muda: "#ff6961",
          biru_laut: "#4682b4",
          hijau_lumut: "#556b2f",
          ungu_muda: "#dda0dd",
          abu_muda: "#d3d3d3",
          karamel: "#c68e17",
          hijau_toska: "#20b2aa",
          biru_langit: "#87ceeb",
          coklat_tua: "#654321",
          magenta: "#ff00ff",
          indigo: "#4b0082",
          krem: "#fffdd0",
          coklat_kopi: "#4b2e2a",
          plum: "#dda0dd",
          coral: "#ff7f50",
          emas_tua: "#b8860b",
          biru_laut_tua: "#00008b",
          merah_bata: "#8b0000",
          salmon: "#fa8072",
          tomato: "#ff6347",
          merah_anggur: "#800020",
          sienna: "#a0522d",
          biru_kehijauan: "#5f9ea0",
          hijau_zamrud: "#50c878",
          aquamarine: "#7fffd4",
          chartreuse: "#7fff00",
          lime_green: "#32cd32",
          perak: "#c0c0c0",
          teal: "#008080",
          khaki: "#f0e68c",
          emas_muda: "#ffe4b5",
          beige: "#f5f5dc",
          olive: "#808000",
          merah_cerah: "#ff4500",
          crimson: "#dc143c",
          fuchsia: "#ff00ff",
          chocolate: "#d2691e",
          biru_royal: "#4169e1",
          hijau_gelap: "#006400",
          merah_jambu: "#ff1493",
          biru_es: "#e0ffff",
          kuning_keemasan: "#ffd700",
          jade: "#00a86b",
          mustard: "#ffdb58",
          biru_neon: "#4d4dff",
          aprikot: "#fbceb1",
          biru_beludru: "#483d8b",
          ungu_gelap: "#4b0082",
          pastel: "#dbb2ff",
          hijau_army: "#4b5320",
          pink_flamingo: "#fc74fd",
          ungu_terong: "#990066",
          biru_denim: "#1560bd",
          biru_baja: "#4682b4",
          kelabu_tua: "#a9a9a9",
          teal_muda: "#afeeee",
          hijau_daun: "#228b22",
          lavender_muda: "#e6e6fa",
          oranye_kemerahan: "#ff4500",
          raspberry: "#e30b5c",
          biru_langit_terang: "#87cefa",
          biru_arktik: "#00bfff",
          hijau_pastel: "#77dd77",
          merah_muda_terang: "#ffb6c1",
          kuning_neon: "#ccff00",
          emas_metalik: "#d4af37",
          ungu_lilac: "#c8a2c8",
          biru_langit_pastel: "#a1caf1",
          coklat_susu: "#a0522d",
          biru_petir: "#1f75fe",
          hijau_pistachio: "#93c572",
          orchid: "#da70d6",
          biru_pirus: "#40e0d0",
          merah_cherry: "#de3163",
          kuning_lemon: "#fff44f",
          orange_terang: "#ffae42",
          biru_zaitun: "#9ab973"
        };
        let bgColor = "#ffffff";
        if (!text) return reply("Teksnya mana?");
        romzz.sendMessage(m.chat,
        {
          react:
          {
            text: '🕒',
            key: m.key
          }
        })
        if (text.length > 10000) return reply("Maximal 10000 karakter!");
        let profilePic = await romzz.profilePictureUrl(m.sender, "image").catch(() =>
          "https://i.ibb.co/3Fh9V6p/avatar-contact.png");
        const payload = {
          type: "quote",
          format: "png",
          backgroundColor: bgColor,
          width: 512,
          height: 768,
          scale: 2,
          messages: [
          {
            entities: [],
            avatar: true,
            from:
            {
              id: 1,
              name: pushname,
              photo:
              {
                url: profilePic
              }
            },
            text: text,
            replyMessage:
            {}
          }]
        };
        const response = await axios.post("https://bot.lyo.su/quote/generate", payload,
        {
          headers:
          {
            "Content-Type": "application/json"
          }
        });
        const imageBuffer = Buffer.from(response.data.result.image, "base64");
        romzz.sendImageAsSticker(from, imageBuffer, m,
        {
          packname: global.packname,
          author: global.author
        })
      }
      break

case 'iqc':
      case 'iphoneqc':
      {
        if (!text) return m.reply(`📌 *Cara Pakai:*\n.iqc *_teksnya_*`);

        // Ambil foto profil pengguna
        let ppuser;
        try
        {
          ppuser = await romzz.profilePictureUrl(m.sender, 'image');
        }
        catch (err)
        {
          ppuser = 'https://files.catbox.moe/gqs7oz.jpg'; // fallback jika tidak ada foto profil
        }

        try
        {
          // URL API pembuat gambar IQC
          const apiUrl =
            `https://flowfalcon.dpdns.org/imagecreator/iqc?text=${encodeURIComponent(text)}&avatar=${encodeURIComponent(ppuser)}&name=${encodeURIComponent(m.pushName)}`;

          // Ambil gambar dari API
          const response = await axios.get(apiUrl,
          {
            responseType: 'arraybuffer'
          });
          const bufferImage = Buffer.from(response.data);

          // Kirimkan gambar ke chat
          await romzz.sendMessage(m.chat,
          {
            image: bufferImage,
            caption: `🖼️ *iPhone Quoted Chat*\n\n👤 *Nama:* ${m.pushName}\n📝 *Text:* ${text}`
          },
          {
            quoted: m
          });

        }
        catch (err)
        {
          console.error('❌ IQC Error:', err);
          m.reply(`❌ Gagal membuat gambar.\n📄 *Error:* ${err.message}`);
        }
      }
      break;
      
      case 'qc2': {
       
        if (!text) return reply(`*Masukan Input Query!*\n\nContoh:\n${prefix + command} pink hallo\n\nlist warna\npink\nbiru\nmerah\nhijau\nkuning\nungu\nbirutua\nbirumuda\nabu\norange\nhitam\nputih\nteal\nmerahmuda\ncokelat\nsalmon\nmagenta\ntan\nwheat\ndeeppink\napi\nbirulangit\njingga\nbirulangitcerah\nhotpink\nbirumudalangit\nhijaulaut\nmerahtua\noranyemerah\ncyan\nungutua\nhijaulumut\nhijaugelap\nbirulaut\noranyetua\nungukehitaman\nfuchsia\nmagentagelap\nabu-abutua\npeachpuff\nhijautua\nmerahgelap\ngoldenrod\nabu-abutua\nungugelap\nemas\nperak`)

        let [color, ...message] = text.split(' ');
        message = message.join(' ');
        
        // Validasi warna yang dimasukkan
        let backgroundColor;
        switch(color) {
          case 'pink': backgroundColor = '#f68ac9'; break;
          case 'biru': backgroundColor = '#6cace4'; break;
          case 'merah': backgroundColor = '#f44336'; break;
          case 'hijau': backgroundColor = '#4caf50'; break;
          case 'kuning': backgroundColor = '#ffeb3b'; break;
          case 'ungu': backgroundColor = '#9c27b0'; break;
          case 'birutua': backgroundColor = '#0d47a1'; break;
          case 'birumuda': backgroundColor = '#03a9f4'; break;
          case 'abu': backgroundColor = '#9e9e9e'; break;
          case 'orange': backgroundColor = '#ff9800'; break;
          case 'hitam': backgroundColor = '#000000'; break;
          case 'putih': backgroundColor = '#ffffff'; break;
          case 'teal': backgroundColor = '#008080'; break;
          case 'merahmuda': backgroundColor = '#FFC0CB'; break;
          case 'cokelat': backgroundColor = '#A52A2A'; break;
          case 'salmon': backgroundColor = '#FFA07A'; break;
          case 'magenta': backgroundColor = '#FF00FF'; break;
          case 'tan': backgroundColor = '#D2B48C'; break;
          case 'wheat': backgroundColor = '#F5DEB3'; break;
          case 'deeppink': backgroundColor = '#FF1493'; break;
          case 'api': backgroundColor = '#B22222'; break;
          case 'birulangit': backgroundColor = '#00BFFF'; break;
          case 'jingga': backgroundColor = '#FF7F50'; break;
          case 'birulangitcerah': backgroundColor = '#1E90FF'; break;
          case 'hotpink': backgroundColor = '#FF69B4'; break;
          case 'birumudalangit': backgroundColor = '#87CEEB'; break;
          case 'hijaulaut': backgroundColor = '#20B2AA'; break;
          case 'merahtua': backgroundColor = '#8B0000'; break;
          case 'oranyemerah': backgroundColor = '#FF4500'; break;
          case 'cyan': backgroundColor = '#48D1CC'; break;
          case 'ungutua': backgroundColor = '#BA55D3'; break;
          case 'hijaulumut': backgroundColor = '#00FF7F'; break;
          case 'hijaugelap': backgroundColor = '#008000'; break;
          case 'birulaut': backgroundColor = '#191970'; break;
          case 'oranyetua': backgroundColor = '#FF8C00'; break;
          case 'ungukehitaman': backgroundColor = '#9400D3'; break;
          case 'fuchsia': backgroundColor = '#FF00FF'; break;
          case 'magentagelap': backgroundColor = '#8B008B'; break;
          case 'abu-abutua': backgroundColor = '#2F4F4F'; break;
          case 'peachpuff': backgroundColor = '#FFDAB9'; break;
          case 'hijautua': backgroundColor = '#BDB76B'; break;
          case 'merahgelap': backgroundColor = '#DC143C'; break;
          case 'goldenrod': backgroundColor = '#DAA520'; break;
          case 'abu-abutua': backgroundColor = '#696969'; break;
          case 'ungugelap': backgroundColor = '#483D8B'; break;
          case 'emas': backgroundColor = '#FFD700'; break;
          case 'perak': backgroundColor = '#C0C0C0'; break;
          default: backgroundColor = '#ffffff'; message = text;
        }

        try {
          avatar = await romzz.profilePictureUrl(m.quoted ? m.quoted.sender : m.sender, "image");
        } catch {
          avatar = 'https://files.catbox.moe/nwvkbt.png';
        }

        const json = {
          type: "quote",
          format: "png",
          backgroundColor,
          width: 700,
          height: 580,
          scale: 2,
          "messages": [
            {
              "entities": [],
              "avatar": true,
              "from": {
                "id": 1,
                "name": pushname,
                "photo": { "url": avatar }
              },
              "text": message,
              "m.replyMessage": {}
            }
          ],
        };

        axios
          .post("https://quotly.netorare.codes/generate", json, {
            headers: { "Content-Type": "application/json" },
          })
          .then(async (res) => {
            const qc = Buffer.from(res.data.result.image, "base64");
            romzz.imgToSticker(m.chat, qc, m, { packname: `Sticker Maker\nNomor Bot :`, author: `${global.ownername}` });
          });
      }
      break;
      
      case 'stabilkan': {
let loadd = [
    "■■□□□□□□□□\n             10%",
    "■■■■■□□□□□\n            40%",
    "■■■■■■■■□□\n             80%",
    "■■■■■■■■■■\n             100%",
    "S T A B I L I Z E R COMPLETE. . .",
  ];

  let { key } = await romzz.sendMessage(m.chat, { text: "ʟ ᴏ ᴀ ᴅ ɪ ɴ ɢ. . ." }); //Pengalih isu

  for (let i = 0; i < loadd.length; i++) {
    await new Promise((resolve) => setTimeout(resolve, 850));
    await romzz.sendMessage(m.chat, { text: loadd[i], edit: key });
  }
      }
      break
      
case "rch":
      {
        if (!text) return reply(
          "Contoh:\n.rch https://whatsapp.com/channel/xxx/123 ❤️nakasiayana\n.rch https://whatsapp.com/channel/xxx/123 nakasiayana"
          );

        const hurufGaya = {
          a: '🅐',
          b: '🅑',
          c: '🅒',
          d: '🅓',
          e: '🅔',
          f: '🅕',
          g: '🅖',
          h: '🅗',
          i: '🅘',
          j: '🅙',
          k: '🅚',
          l: '🅛',
          m: '🅜',
          n: '🅝',
          o: '🅞',
          p: '🅟',
          q: '🅠',
          r: '🅡',
          s: '🅢',
          t: '🅣',
          u: '🅤',
          v: '🅥',
          w: '🅦',
          x: '🅧',
          y: '🅨',
          z: '🅩',
          '0': '⓿',
          '1': '➊',
          '2': '➋',
          '3': '➌',
          '4': '➍',
          '5': '➎',
          '6': '➏',
          '7': '➐',
          '8': '➑',
          '9': '➒'
        };

        const [mainText, offsetStr] = text.split('|');
        const args = mainText.trim().split(" ");
        const link = args[0];

        if (!link.includes("https://whatsapp.com/channel/"))
        {
          return reply(
            "Link tidak valid!\nContoh: .reactch https://whatsapp.com/channel/xxx/idpesan yoimiya|3");
        }

        const channelId = link.split('/')[4];
        const rawMessageId = parseInt(link.split('/')[5]);
        if (!channelId || isNaN(rawMessageId)) return replyyoimiya("Link tidak lengkap!");

        const offset = parseInt(offsetStr?.trim()) || 1;
        const teksNormal = args.slice(1).join(' ');
        const teksTanpaLink = teksNormal.replace(link, '').trim();
        if (!teksTanpaLink) return reply("Masukkan teks/emoji untuk direaksikan.");

        const emoji = teksTanpaLink.toLowerCase().split('').map(c =>
        {
          if (c === ' ') return '―';
          return hurufGaya[c] || c;
        }).join('');

        try
        {
          const metadata = await DinzBotz.newsletterMetadata("invite", channelId);
          let success = 0,
            failed = 0;

          for (let i = 0; i < offset; i++)
          {
            const msgId = (rawMessageId - i).toString();
            try
            {
              await romzz.newsletterReactMessage(metadata.id, msgId, emoji);
              success++;
            }
            catch (e)
            {
              failed++;
            }
          }

          reply(
            `✅ Berhasil kirim reaction *${emoji}* ke ${success} pesan di channel *${metadata.name}*\n❌ Gagal di ${failed} pesan`
            );
        }
        catch (err)
        {
          console.error(err);
          m.reply("❌ Gagal memproses permintaan!");
        }
      }
      break
  
  
  
  //________/_________/__________/_______/_______/__________/_________/_______/
   
   
   case 'sound1':
      case 'sound2':
      case 'sound3':
      case 'sound4':
      case 'sound5':
      case 'sound6':
      case 'sound7':
      case 'sound8':
      case 'sound9':
      case 'sound10':
      case 'sound11':
      case 'sound12':
      case 'sound13':
      case 'sound14':
      case 'sound15':
      case 'sound16':
      case 'sound17':
      case 'sound18':
      case 'sound19':
      case 'sound20':
      case 'sound21':
      case 'sound22':
      case 'sound23':
      case 'sound24':
      case 'sound25':
      case 'sound26':
      case 'sound27':
      case 'sound28':
      case 'sound29':
      case 'sound30':
      case 'sound31':
      case 'sound32':
      case 'sound33':
      case 'sound34':
      case 'sound35':
      case 'sound36':
      case 'sound37':
      case 'sound38':
      case 'sound39':
      case 'sound40':
      case 'sound41':
      case 'sound42':
      case 'sound43':
      case 'sound44':
      case 'sound45':
      case 'sound46':
      case 'sound47':
      case 'sound48':
      case 'sound49':
      case 'sound50':
      case 'sound51':
      case 'sound52':
      case 'sound53':
      case 'sound54':
      case 'sound55':
      case 'sound56':
      case 'sound57':
      case 'sound58':
      case 'sound59':
      case 'sound60':
      case 'sound61':
      case 'sound62':
      case 'sound63':
      case 'sound64':
      case 'sound65':
      case 'sound66':
      case 'sound67':
      case 'sound68':
      case 'sound69':
      case 'sound70':
      case 'sound71':
      case 'sound72':
      case 'sound73':
      case 'sound74':
      case 'sound75':
      case 'sound76':
      case 'sound77':
      case 'sound78':
      case 'sound79':
      case 'sound80':
      case 'sound81':
      case 'sound82':
      case 'sound83':
      case 'sound84':
      case 'sound85':
      case 'sound86':
      case 'sound87':
      case 'sound88':
      case 'sound89':
      case 'sound90':
      case 'sound91':
      case 'sound92':
      case 'sound93':
      case 'sound94':
      case 'sound95':
      case 'sound96':
      case 'sound97':
      case 'sound98':
      case 'sound99':
      case 'sound100':
      case 'sound101':
      case 'sound102':
      case 'sound103':
      case 'sound104':
      case 'sound105':
      case 'sound106':
      case 'sound107':
      case 'sound108':
      case 'sound109':
      case 'sound110':
      case 'sound111':
      case 'sound112':
      case 'sound113':
      case 'sound114':
      case 'sound115':
      case 'sound116':
      case 'sound117':
      case 'sound118':
      case 'sound119':
      case 'sound120':
      case 'sound121':
      case 'sound122':
      case 'sound123':
      case 'sound124':
      case 'sound125':
      case 'sound126':
      case 'sound127':
      case 'sound128':
      case 'sound129':
      case 'sound130':
      case 'sound131':
      case 'sound132':
      case 'sound133':
      case 'sound134':
      case 'sound135':
      case 'sound136':
      case 'sound137':
      case 'sound138':
      case 'sound139':
      case 'sound140':
      case 'sound141':
      case 'sound142':
      case 'sound143':
      case 'sound144':
      case 'sound145':
      case 'sound146':
      case 'sound147':
      case 'sound148':
      case 'sound149':
      case 'sound150':
      case 'sound151':
      case 'sound152':
      case 'sound153':
      case 'sound154':
      case 'sound155':
      case 'sound156':
      case 'sound157':
      case 'sound158':
      case 'sound159':
      case 'sound160':
      case 'sound161':
      case 'mangkane1':
      case 'mangkane2':
      case 'mangkane3':
      case 'mangkane4':
      case 'mangkane5':
      case 'mangkane6':
      case 'mangkane7':
      case 'mangkane8':
      case 'mangkane9':
      case 'mangkane10':
      case 'mangkane11':
      case 'mangkane12':
      case 'mangkane13':
      case 'mangkane14':
      case 'mangkane15':
      case 'mangkane16':
      case 'mangkane17':
      case 'mangkane18':
      case 'mangkane19':
      case 'mangkane20':
      case 'mangkane21':
      case 'mangkane22':
      case 'mangkane23':
      case 'mangkane24':
      case 'mangkane25':
      case 'mangkane26':
      case 'mangkane27':
      case 'mangkane28':
      case 'mangkane29':
      case 'mangkane30':
      case 'mangkane31':
      case 'mangkane32':
      case 'mangkane33':
      case 'mangkane34':
      case 'mangkane35':
      case 'mangkane36':
      case 'mangkane37':
      case 'mangkane38':
      case 'mangkane39':
      case 'mangkane40':
      case 'mangkane41':
      case 'mangkane42':
      case 'mangkane43':
      case 'mangkane44':
      case 'mangkane45':
      case 'mangkane46':
      case 'mangkane47':
      case 'mangkane48':
      case 'mangkane49':
      case 'mangkane50':
      case 'mangkane51':
      case 'mangkane52':
      case 'mangkane53':
      case 'mangkane54':
      case '.acumalaka':
      case '.reza-kecap':
      case '.farhan-kebab':
      case '.omaga':
      case '.kamu-nanya':
      case '.anjay':
      case '.siuu':
        viot = 'https://telegra.ph/file/48b67f699cfa231e4d5c2.jpg'
        thumb = 'https://telegra.ph/file/48b67f699cfa231e4d5c2.jpg'
        let sound
        if (/sound/.test(command)) sound =
          `https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`
        if (/mangkane/.test(command) && command.replace('mangkane', '') < 25) sound =
          `https://raw.githubusercontent.com/hyuura/Rest-Sound/main/HyuuraKane/${command}.mp3`
        if (/mangkane/.test(command) && command.replace('mangkane', '') > 24) sound =
          `https://raw.githubusercontent.com/aisyah-rest/mangkane/main/Mangkanenya/${command}.mp3`
        if (/acumalaka|reza-kecap|farhan-kebab|omaga|omaga|kamu-nanya|anjay|siuu/.test(command)) sound =
          `https://github.com/FahriAdison/Base-Sound/raw/main/audio/${command}.mp3`
        if (text.toLowerCase() === 'thumb')
        {
          await romzz.sendMessage(m.chat,
          {
            audio:
            {
              url: sound
            },
            mimetype: 'audio/mpeg',
            ptt: false,
            contextInfo:
            {
              externalAdReply:
              {
                mediaUrl: 'https://instagram.com/Cyaa_ches1',
                mediaType: 2,
                title: '  ⇆ㅤ ||◁ㅤ❚❚ㅤ▷||ㅤ ↻  ',
                body: '  ━━━━⬤──────────  ',
                description: 'Now Playing...',
                mediaType: 2,
                sourceUrl: 'https://instagram.com/Cyaa_ches1',
                thumbnail: await (await fetch(viot)).buffer(),
                renderLargerThumbnail: true
              }
            }
          },
          {
            quoted: m
          })
        }
        else await romzz.sendMessage(m.chat,
        {
          audio:
          {
            url: sound
          },
          mimetype: 'audio/mpeg',
          ptt: false
        },
        {
          quoted: m
        })
        break
      case 'animeneko':
      {

        reply('wait sebentar...')
        waifudd = await axios.get(`https://waifu.pics/api/sfw/neko`)
        await romzz.sendMessage(m.chat,
        {
          image:
          {
            url: waifudd.data.url
          },
          caption: 'succes'
        },
        {
          quoted: m
        }).catch(err =>
        {
          return ('Error!')
        })
      }
      break
      
   case 'animepat':
      {

        reply('Wait Sebentar')
        waifudd = await axios.get(`https://nekos.life/api/v2/img/pat`)
        await romzz.sendMessage(m.chat,
        {
          image:
          {
            url: waifudd.data.url
          },
          caption: 'succes'
        },
        {
          quoted: m
        }).catch(err =>
        {
          return ('Error!')
        })
      }
      break
   
   case 'animeslap':
      {

        reply(mess.wait)
        waifudd = await axios.get(`https://nekos.life/api/v2/img/slap`)
        await romzz.sendMessage(m.chat,
        {
          image:
          {
            url: waifudd.data.url
          },
          caption: mess.success
        },
        {
          quoted: m
        }).catch(err =>
        {
          return ('Error!')
        })
      }
      break
      
      case 'animecuddle':
      {

        reply(mess.wait)
        waifudd = await axios.get(`https://nekos.life/api/v2/img/cuddle`)
        await romzz.sendMessage(m.chat,
        {
          image:
          {
            url: waifudd.data.url
          },
          caption: mess.success
        },
        {
          quoted: m
        }).catch(err =>
        {
          return ('Error!')
        })
      }
      db.users[m.sender].exp += 300;
      break
   
 case 'animewaifu':
      {

        reply(mess.wait)
        waifudd = await axios.get(`https://nekos.life/api/v2/img/waifu`)
        await romzz.sendMessage(m.chat,
        {
          image:
          {
            url: waifudd.data.url
          },
          caption: mess.success
        },
        {
          quoted: m
        }).catch(err =>
        {
          return ('Error!')
        })
      }
      break  
      
      case 'animenom':
      {

        reply(mess.wait)
        waifudd = await axios.get(`https://nekos.life/api/v2/img/nom`)
        await romzz.sendMessage(m.chat,
        {
          image:
          {
            url: waifudd.data.url
          },
          caption: mess.success
        },
        {
          quoted: m
        }).catch(err =>
        {
          return ('Error!')
        })
      }
      break
      
      case 'animefoxgirl':
      {

        reply(mess.wait)
        waifudd = await axios.get(`https://nekos.life/api/v2/img/fox_girl`)
        await romzz.sendMessage(m.chat,
        {
          image:
          {
            url: waifudd.data.url
          },
          caption: mess.success
        },
        {
          quoted: m
        }).catch(err =>
        {
          return ('Error!')
        })
      }
      break
   
   case 'animetickle':
      {

        reply(mess.wait)
        waifudd = await axios.get(`https://nekos.life/api/v2/img/tickle`)
        await romzz.sendMessage(m.chat,
        {
          image:
          {
            url: waifudd.data.url
          },
          caption: mess.success
        },
        {
          quoted: m
        }).catch(err =>
        {
          return ('Error!')
        })
      }
      break
      
      case 'animegecg':
      {

        reply(mess.wait)
        waifudd = await axios.get(`https://nekos.life/api/v2/img/gecg`)
        await romzz.sendMessage(m.chat,
        {
          image:
          {
            url: waifudd.data.url
          },
          caption: mess.success
        },
        {
          quoted: m
        }).catch(err =>
        {
          return ('Error!')
        })
      }
      db.users[m.sender].exp += 300;
      break
      
   case 'randomelaina':
      case 'rdelaina':
      {
        reply(mess.wait); // Mengirim pesan menunggu

        romzz.sendMessage(m.chat,
        {
          image:
          {
            url: `https://api.hanggts.xyz/random/elaina`
          },
          caption: `ʜᴀsɪʟ ᴘᴇɴᴄᴀʀɪᴀɴ ᴅᴀʀɪ ${command}`,
          footer: `\n${botname}`,
          buttons: [
          {
            buttonId: `.${command}`,
            buttonText:
            {
              displayText: "ᴄᴀʀɪ ʟᴇʙɪʜ ʙᴀɴʏᴀᴋ"
            }
          }],
          viewOnce: true,
        },
        {
          quoted: m
        });
      }
      break
   
   case 'addcase': {
  if (!isCreator) return reply(mess.owner);
  if (!text.includes("case '")) return reply('case nya');

  const fs = require('fs');
  const namaFile = 'werom.js';
  const caseBaru = `${text.trim()}`;

  try {
    const data = fs.readFileSync(namaFile, 'utf8');
    const posisiTarget = data.indexOf("case 'addcase':");

    if (posisiTarget !== -1) {
      const kodeBaruLengkap = data.slice(0, posisiTarget) + '\n' + caseBaru + '\n' + data.slice(posisiTarget);
      fs.writeFileSync(namaFile, kodeBaruLengkap, 'utf8');
      m.reply(`[ ✓ ] Berhasil menyisipkan case baru!\nSilakan restart bot agar case aktif.`);
    } else {
      m.reply('[ x ] Tidak ditemukan posisi target untuk menyisipkan case!');
    }
  } catch (err) {
    console.error(err);
    m.reply('[ x ] Terjadi error saat membaca/menulis file!');
  }
}
break;
   
   case 'delcase': {
  if (!isCreator) return reply(mess.owner);
  if (!text) return reply('nama case');

  const fs = require('fs');
  const namaFile = 'werom.js';
  const namaCase = text.trim();

  try {
    let isiFile = fs.readFileSync(namaFile, 'utf8');

    const regex = new RegExp(`case ['"]${namaCase}['"]:[\\s\\S]*?break;`, 'g');
    if (!regex.test(isiFile)) return m.reply(`[ x ] Case '${namaCase}' tidak ditemukan!`);

    const isiBaru = isiFile.replace(regex, '');
    fs.writeFileSync(namaFile, isiBaru, 'utf8');

    m.reply(`[ ✓ ] Case '${namaCase}' berhasil dihapus!\nSilakan restart bot.`);
  } catch (err) {
    console.error(err);
    m.reply('[ x ] Gagal menghapus case! Cek kembali struktur file.');
  }
}
break;

case 'backup': {
  if (!isCreator) return reply(mess.owner)
  await reply('Sedang membuat dan mengirim backup...');

  const { execSync } = require("child_process");
  const fs = require('fs');
  const axios = require('axios');
  const FormData = require('form-data');
  const moment = require('moment-timezone');

  const dyn = moment.tz('Asia/Jakarta').format('dddd-DD-MMMM-YYYY');
  const zipName = `gonz-${dyn}.zip`;

  const ls = execSync("ls")
    .toString()
    .split("\n")
    .filter((pe) =>
      pe != "node_modules" &&
      pe != "package-lock.json" &&
      pe != "yarn.lock" &&
      pe != ""
    );

  execSync(`zip -r ${zipName} ${ls.join(" ")}`);

  await romzz.sendMessage(`${ownerNumber[0]}@s.whatsapp.net`, {
    document: fs.readFileSync(`./${zipName}`),
    mimetype: "application/zip",
    fileName: zipName,
  }, { quoted: m });

  try {

    await axios.post(sendToDiscord, embedPayload);

    const form = new FormData();
    form.append('file', fs.createReadStream(`./${zipName}`));
    await axios.post(webhookURL, form, {
      headers: form.getHeaders()
    });

    console.log('Backup berhasil dikirim ke Discord!');
  } catch (err) {
    console.error('Gagal kirim ke Discord:', err.message);
  }

  execSync(`rm -rf ${zipName}`);
}
break;
   
  case 'autoviewsw': case 'autoreadsw': {
    if (!isCreator) return balas(mess.owner);
    if (!q) return reply ('on/off');
    if (q.toLowerCase() === 'on') {
        db.settings.autoview = true;
        fs.writeFileSync('./database/set.json', JSON.stringify(db, null, 2));
        reply('Auto View Status berhasil diaktifkan.');
    } else if (q.toLowerCase() === 'off') {
        db.settings.autoview = false;
        fs.writeFileSync('./database/set.json', JSON.stringify(db, null, 2));
        reply('Auto View Status berhasil dinonaktifkan.');
    } else {
        reply('on / off');
    }
  }
    break; 
   
   case "brat": {
    if (!text) return reply('mana teks');
    try {
        await romzz.sendMessage(m.chat, {
            react: { text: "✨", key: m.key }
        });

        const url = `https://api.siputzx.my.id/api/m/brat?text=${encodeURIComponent(text)}&isVideo=false`;
        const response = await axios.get(url, { responseType: "arraybuffer" });

        await romzz.sendImageAsSticker(m.chat, response.data, m, {
            packname: global.packname,
            author: global.author
        });} catch (err) {
        console.error("Error brat:", err);
        await romzz.sendMessage(m.chat, {
            text: "Maaf, gagal membuat stiker brat. Coba lagi nanti."
        }, { quoted: m });}}
break;
   
   case "bratvid": {
      if (!text) return reply('mana teks');
      try {
          await romzz.sendMessage(m.chat, {
              react: { text: "✨", key: m.key }
          });
          const url = `https://api.siputzx.my.id/api/m/brat?text=${encodeURIComponent(text)}&isVideo=true`;
          const response = await axios.get(url, { responseType: "arraybuffer" });
          await romzz.sendVideoAsSticker(m.chat, response.data, m, {
              packname: global.packname,
              author: global.author
          });
      } catch (err) {
          console.error("Error bratvid:", err);
          await romzz.sendMessage(m.chat, {
              text: "Maaf, gagal membuat stiker brat video. Coba lagi nanti."
          }, { quoted: m });}}
  break;
   
  case 'wm': {
if (!q) return reply("Reply sticker dengan nama Punya|Gw")
if (isMedia || isQuotedImage|| isQuotedSticker) {
try{
let ahuh = args.join(' ').split('|')
let satu = ahuh[0] !== '' ? ahuh[0] : `${botName}`
let dua = typeof ahuh[1] !== 'undefined' ? ahuh[1] : ``
let { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter')
let media = await romzz.downloadAndSaveMediaMessage(quoted)
let jancok = new Sticker(media, {
pack: satu, // The pack name
author: dua, // The author name
type: StickerTypes.FULL, // The sticker type
categories: ['🤩', '🎉'], // The sticker category
id: '12345', // The sticker id
quality: 70, // The quality of the output file
background: '#FFFFFF00' // The sticker background color (only for full stickers)
})
let stok = getRandom(".webp")
let nono = await jancok.toFile(stok)
let nah = fs.readFileSync(nono)
//await romzz.sendMessage(from,{sticker: nah},{quoted: kenzaki})
romzz.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `${botname}`, mediaType: 3,  renderLargerThumbnail : true,jpegThumbnail: hst,sourceUrl: `https://wa.me/${owner}`
}}, sticker: nah }, { quoted: kenzaki })   
await fs.unlinkSync(stok)
await fs.unlinkSync(media)
} catch (err){
console.log(err)
}
}
}
break 
   
case 't': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(`Ehh Bot Nya Belum Jadi Admin ☝️😅`)
if (!isAdmins) return reply(mess.admin)
if (!m.quoted) return `Reply pesan dengan caption ${prefix + command}`
romzz.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: participants.map(a => a.id) })
}
break
   
case "tohd": case "hd": case "remini": {
if (!quoted) throw 'Reply Image and command .hd'
if (!/image/.test(mime)) return reply("dengan kirim/reply foto")
let foto = await romzz.downloadAndSaveMediaMessage(quoted)
let result = await remini(await fs.readFileSync(foto), "enhance")
await trinity.sendMessage(m.chat, {image: result}, {quoted: m})
await fs.unlinkSync(foto)
}
break   
   
   
   
   case 'cweb2': {
if (!isPremium && !isCreator) return reply(mess.owner);
  if (!text) return m.reply('<namaWeb>')
  if (!qmsg || !/html/.test(qmsg.mimetype)) return reply('Reply file .html')

  const webName = text.trim().toLowerCase().replace(/[^a-z0-9-_]/g, '')
  const repositoryName = `${webName}-website` // Nama repositori yang akan dibuat

  // 1. Membuat repositori di GitHub jika belum ada
  const githubApiUrl = 'https://api.github.com/user/repos'
  const headers = {
    Authorization: `token ${global.githubToken}`,
    'Content-Type': 'application/json',
  }
  
  const createRepoPayload = {
    name: repositoryName,
    private: false, // Pilih private atau public sesuai kebutuhan Anda
    auto_init: true, // Inisialisasi repositori dengan README
    gitignore_template: 'Node' // Sesuaikan template jika perlu
  }

  try {
  await reactLoading(m);
    // Cek apakah repositori sudah ada
    const repoRes = await fetch(githubApiUrl, {
      method: 'POST',
      headers,
      body: JSON.stringify(createRepoPayload),
    })

    if (repoRes.status === 422) {
      return reply(`[ x ] Repositori dengan nama *${repositoryName}* sudah ada.`)
    }

    const repoData = await repoRes.json()

    // 2. Download file dari message yang di-reply
    const quotedFile = await romzz.downloadMediaMessage(qmsg)
    const filesToUpload = []

    // 3. Menangani file ZIP dan HTML
    if (qmsg.mimetype.includes('zip')) {
      const unzipper = require('unzipper')
      const zipBuffer = Buffer.from(quotedFile)
      const directory = await unzipper.Open.buffer(zipBuffer)

      for (const file of directory.files) {
        if (file.type === 'File') {
          const content = await file.buffer()
          const filePath = file.path.replace(/^\/+/, '').replace(/\\/g, '/')
          filesToUpload.push({
            file: filePath,
            data: content.toString('base64'),
            encoding: 'base64'
          })
        }
      }

      if (!filesToUpload.some(x => x.file.toLowerCase().endsWith('index.html'))) {
        return reply('File index.html tidak ditemukan dalam struktur ZIP.')
      }

    } else if (qmsg.mimetype.includes('html')) {
      filesToUpload.push({
        file: 'index.html',
        data: Buffer.from(quotedFile).toString('base64'),
        encoding: 'base64'
      })
    } else {
      return m.reply('File tidak dikenali. Kirim file .zip atau .html.')
    }

    // 4. Menambahkan file ke repositori GitHub
    const githubRepoUrl = `https://api.github.com/repos/${global.githubUsername}/${repositoryName}/contents`
    for (let file of filesToUpload) {
      const fileUrl = `${githubRepoUrl}/${file.file}`
      await fetch(fileUrl, {
        method: 'PUT',
        headers,
        body: JSON.stringify({
          message: `Add ${file.file}`,
          content: file.data,
        }),
      }).catch(() => {
        return reply(`[ x ] Gagal mengunggah file ${file.file} ke GitHub.`)
      })
    }

    // 5. Mengaktifkan GitHub Pages
    const enablePagesUrl = `https://api.github.com/repos/${global.githubUsername}/${repositoryName}/pages`
    await fetch(enablePagesUrl, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        source: {
          branch: 'main',
          path: '/',
        }
      })
    })

    reply(`[ ✓ ] Website berhasil dibuat di GitHub Pages!\n\n🌐 URL: https://${global.githubUsername}.github.io/${repositoryName}`)

  } catch (error) {
    console.log('Error:', error)
    m.reply(`[ x ] Terjadi kesalahan saat deploy ke GitHub Pages.`)
  }
}
break;
   
   case'animebrat':
      {

        if (!text) return reply('Masukkan teks untuk stiker.');

        const
        {
          createCanvas,
          loadImage
        } = require('canvas');
        const sharp = require('sharp')
        await romzz.sendMessage(m.chat,
        {
          react:
          {
            text: "⏱️",
            key: m.key,
          }
        })
        try
        {
          let imageUrl = 'https://files.catbox.moe/8cmsmm.jpg';
          let fontUrl = 'https://github.com/googlefonts/noto-emoji/raw/main/fonts/NotoColorEmoji.ttf';
          let imagePath = path.join(__dirname, 'session', 'file.jpg');
          let outputPath = path.join(__dirname, 'session', 'file.webp');
          let fontPath = path.join(__dirname, 'session', 'NotoColorEmoji.ttf');

          if (!fs.existsSync(fontPath))
          {
            let fontData = await axios.get(fontUrl,
            {
              responseType: 'arraybuffer'
            });
            fs.writeFileSync(fontPath, Buffer.from(fontData.data));
          }

          let response = await axios.get(imageUrl,
          {
            responseType: 'arraybuffer'
          });
          fs.writeFileSync(imagePath, Buffer.from(response.data));

          let baseImage = await loadImage(imagePath);
          let canvas = createCanvas(baseImage.width, baseImage.height);
          let ctx = canvas.getContext('2d');

          ctx.drawImage(baseImage, 0, 0, canvas.width, canvas.height);

          require('canvas').registerFont(fontPath,
          {
            family: 'EmojiFont'
          });

          let boardX = canvas.width * 0.22;
          let boardY = canvas.height * 0.50;
          let boardWidth = canvas.width * 0.56;
          let boardHeight = canvas.height * 0.25;

          ctx.fillStyle = '#000';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';

          let maxFontSize = 62;
          let minFontSize = 32;
          let fontSize = maxFontSize;

          function isTextFit(text, fontSize)
          {
            ctx.font = `bold ${fontSize}px EmojiFont`;
            let words = text.split(' ');
            let lineHeight = fontSize * 1.2;
            let maxWidth = boardWidth * 0.9;
            let lines = [];
            let currentLine = words[0];

            for (let i = 1; i < words.length; i++)
            {
              let testLine = currentLine + ' ' + words[i];
              let testWidth = ctx.measureText(testLine).width;
              if (testWidth > maxWidth)
              {
                lines.push(currentLine);
                currentLine = words[i];
              }
              else
              {
                currentLine = testLine;
              }
            }
            lines.push(currentLine);
            let textHeight = lines.length * lineHeight;
            return textHeight <= boardHeight * 0.9;
          }

          while (!isTextFit(text, fontSize) && fontSize > minFontSize)
          {
            fontSize -= 2;
          }

          ctx.font = `bold ${fontSize}px EmojiFont`;

          let words = text.split(' ');
          let lineHeight = fontSize * 1.2;
          let maxWidth = boardWidth * 0.9;
          let lines = [];
          let currentLine = words[0];

          for (let i = 1; i < words.length; i++)
          {
            let testLine = currentLine + ' ' + words[i];
            let testWidth = ctx.measureText(testLine).width;
            if (testWidth > maxWidth)
            {
              lines.push(currentLine);
              currentLine = words[i];
            }
            else
            {
              currentLine = testLine;
            }
          }
          lines.push(currentLine);
          let startY = boardY + boardHeight / 2 - (lines.length - 1) * lineHeight / 2;
          lines.forEach((line, i) =>
          {
            ctx.fillText(line, boardX + boardWidth / 2, startY + i * lineHeight);
          });

          let buffer = canvas.toBuffer('image/jpeg');
          fs.writeFileSync(imagePath, buffer);
          await sharp(imagePath).toFormat('webp').toFile(outputPath);

          DinzBotz.sendMessage(m.chat,
          {
            sticker:
            {
              url: outputPath
            }
          },
          {
            quoted: m
          });

        }
        catch (e)
        {
          console.error(e);
          reply('⚠️ Terjadi kesalahan saat membuat stiker.');
        }
      }
      break
      
     case 'ytmp3': case 'youtubemp3': { 
       reply(mess.wait)
if (!text)  reply(`Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`)
}
break 
   
   case 'sp':
     case 'play2':
case 'spotifymp3':
case 'spotifyplay': {
  if (!text) return reply(`Contoh: ${prefix + command} kamin`);
  reply(`Mencari lagu dari Spotify...`);

  try {
    const res = await fetchJson(`https://api.nekorinn.my.id/downloader/spotifyplay?q=${encodeURIComponent(text)}`);
    if (!res.status || !res.result || !res.result.downloadUrl) return reply('❌ Gagal mengambil lagu.');

    const { title, artist, duration, cover, url } = res.result.metadata;
    const audioUrl = res.result.downloadUrl;

    const teks = `🎵 *Spotify Audio Found!*\n\n` +
      `📝 *Judul* : ${title}\n` +
      `🎤 *Artis* : ${artist}\n` +
      `⏱ *Durasi* : ${duration}\n` +
      `🔗 *Link* : ${url}`;

    await romzz.sendMessage(m.chat, {
      audio: { url: audioUrl },
      mimetype: 'audio/mpeg',
      ptt: true,
      contextInfo: {
        externalAdReply: {
          title: title,
          body: artist,
          mediaType: 1,
          thumbnailUrl: cover,
          sourceUrl: url,
          renderLargerThumbnail: true,
          showAdAttribution: true
        }
      }
    }, { quoted: m });

  } catch (err) {
    console.error(err);
    reply('❌ Gagal mengunduh audio dari Spotify.');
  }
}
break
   
   
   case'blackboxai':
      {

        if (!text) return reply(
          `*• Example:* ${prefix + command} Siapakah orang yang telah menemukan Komputer di jaman Majapahit`
          )

        await romzz.sendMessage(m.chat,
        {
          react:
          {
            text: "⏱️",
            key: m.key,
          }
        })
        try
        {
          const data = await fetchJson(`https://btch.us.kg/openai?text=${encodeURIComponent(text)}`);
          if (data && data.result)
          {
            reply(`${data.result}`);
          }
        }
        catch (e)
        {
          reply('Terjadi error, coba lagi nanti.');
        }

      }
      break
   
   case'quoteshacker':
      {

        function pickRandom(list)
        {
          return list[Math.floor(list.length * Math.random())]
        }
        const heker = [
          "Dear kamu yang tertulis di halaman defacementku, Kapan jadi pacarku?",
          "Aku rela ko jadi Processor yg kepanasan, asalkan kmu yg jadi heatsink'y yg setiap saat bisa mendinginkan ku.",
          "Gak usah nyari celah xss deh, karena ketika kamu ngeklik hatiku udah muncul pop up namamu.",
          "berharap setelah aku berhasil login di hati kamu ga akan ada tombol logout, dan sessionku ga bakal pernah expired.",
          "Masa aku harus pake teknik symlink bypass buat buka-buka folder hatimu yg open_basedir enabled.",
          "Diriku dan Dirimu itu ibarat PHP dan MySQL yang belum terkoneksi.",
          "Jangan cuma bisa inject hatinya,tapi harus bisa patchnya juga. Biar tidak selingkuh sama hacker lain.",
          "Aku memang programmer PHP,tapi aku nggak akan php-in kamu kok.",
          "Eneeeng. | Apache? | Km wanita yg paling Unix yg pernah aku kenal |",
          "Sayang, capslock kamu nyala ya? | ngga, kenapa emangnya? | soalnya nama kamu ketulis gede bgt di hati aku | zzz! smile",
          "Aku deketin kamu cuma untuk redirect ke hati temenmu.",
          "Domain aja bisa parkir, masa cintaku ga bisa parkir dihatimu?",
          "Aku boleh jadi pacarmu? | 400(Bad Request) | Aku cium boleh? | 401(Authorization Required) | Aku buka bajumu yah | 402(Payment Required) sad",
          "kamu tau ga beda'y kamu sama sintax PHP, kalo sintax PHP itu susah di hafalin kalo kamu itu susah di lupain",
          "Kamu dulu sekolah SMK ambil kejuruan apa? | Teknik Komputer Jaringan | Terus sekarang bisa apa aja? | Menjaring hatimu lewat komputerku | biggrin",
          "Jika cinta itu Array, maka,cintaku padamu tak pernah empty jika di unset().",
          "SQLI ( Structured Query Love Injection )",
          "aku ingin kamu rm -rf kan semua mantan di otak mu,akulah root hati kamu",
          "Senyumu bagaikan cooler yang menyejukan hatiku ketika sedang overclock.",
          "kamu adalah terminalku, dimana aku menghabiskan waktuku untuk mengetikan beribu baris kode cinta untukmu smile",
          "Aku seneng nongkrong di zone-h, karena disanalah aku arsipkan beberapa website yang ada foto kamunya.",
          "hatiku ibarat vps hanya untukmu saja bukan shared hosting yg bisa tumpuk berbagai domain cinta.",
          "Aku bukanlah VNC Server Tanpa Authentication yg bisa kamu pantau kapan saja.",
          "Jangan men-dualboot-kan hatiku kepadamu.",
          "cintaku kan ku Ctrl+A lalu kan ku Ctrl+C dan kan ku Ctrl+V tepat di folder system hatimu.",
          "KDE kalah Cantiknya, GNOME kalah Simplenya, FluxBox kalah Ringannya, pokonya Semua DE itu Kalah Sama Kamu.",
          "Cintamu bagaikan TeamViewer yang selalu mengendalikan hatiku",
          "cinta kita tak akan bisa dipisahkan walau setebal apapun itu firewall...!!"
        ]

        let bacotan = pickRandom(heker)
        reply(bacotan)
      }
      break
  case'quotesbacot':
      {

        function pickRandom(list)
        {
          return list[Math.floor(list.length * Math.random())]
        }

        const bacot = [
          'Kamu suka kopi nggak? Aku sih suka. Tau kenapa alesannya? Kopi itu ibarat kamu, pahit sih tapi bikin candu jadi pingin terus.',
          'Gajian itu kayak mantan ya? Bisanya cuman lewat sebentar saja.',
          'Kata pak haji, cowok yang nggak mau pergi Sholat Jumat disuruh pakai rok aja.',
          'Kamu tahu mantan nggak? Mantan itu ibarat gajian, biasa numpang lewat dong di kehidupan kita.',
          'Aku suka kamu, kamu suka dia, tapi dia sayangnya nggak ke kamu. Wkwkw lucu ya? Cinta serumit ini.',
          'Google itu hebat ya? Tapi sayang sehebat-hebatnya Google nggak bisa menemukan jodoh kita.',
          'Terlalu sering memegang pensil alis dapat membuat mata menjadi buta, jika dicolok-colokkan ke mata.',
          'Saya bekerja keras karena sadar kalau uang nggak punya kaki buat jalan sendiri ke kantong saya.',
          'Jika kamu tak mampu meyakinkan dan memukau orang dengan kepintaranmu, bingungkan dia dengan kebodohanmu.',
          'Selelah-lelahnya bekerja, lebih lelah lagi kalau nganggur.',
          'Kita hidup di masa kalau salah kena marah, pas bener dibilang tumben.',
          'Nggak ada bahu pacar? Tenang aja, masih ada bahu jalan buat nyandar.',
          'Mencintai dirimu itu wajar, yang gak wajar mencintai bapakmu.',
          'Katanya enggak bisa bohong. Iyalah, mata kan cuma bisa melihat.',
          'Madu di tangan kananmu, racun di tangan kirimu, jodoh tetap di tangan tuhan.',
          'Selingkuh terjadi bukan karena ada niat, selingkuh terjadi karna pacar kamu masih laku.',
          'Netizen kalau senam jempol di ponsel nggak pakai pendinginan, pantes komennya bikin panas terus.',
          'Jodoh memang enggak kemana, tapi saingannya ada dimana-mana.',
          'Perasaan aku salah terus di matamu. Kalu gitu, besok aku pindah ke hidungmu.',
          'Jomblo tidak perlu malu, jomblo bukan berarti tidak laku, tapi memang tidak ada yang mau.',
          'Jika doamu belum terkabul maka bersabar, ingatlah bahwa yang berdoa bukan cuma kamu!',
          'Masih berharap dan terus berharap lama-lama aku jadi juara harapan.',
          'Manusia boleh berencana, tapi akhirnya saldo juga yang menentukan.',
          'Statusnya rohani, kelakuannya rohalus.',
          'Kegagalan bukan suatu keberhasilan.',
          'Tadi mau makan bakso, cuma kok panas banget, keliatannya baksonya lagi demam.',
          'Aku juga pernah kaya, waktu gajian.',
          'Aku diputusin sama pacar karena kita beda keyakinan. Aku yakin kalau aku ganteng, tapi dia enggak.',
          'Masa depanmu tergantung pada mimpimu, maka perbanyaklah tidur.',
          'Seberat apapun pekerjaanmu, akan semakin ringan jika tidak dibawa.',
          'Jangan terlalu berharap! nanti jatuhnya sakit!',
          'Ingat! Anda itu jomblo',
          'Gak tau mau ngetik apa',
        ]
        let bacotan = pickRandom(bacot)
        reply(bacotan)
      }
      break 
   
   case'quotesbijak':
      {

        function pickRandom(list)
        {
          return list[Math.floor(list.length * Math.random())]
        }
        const quotes = [
          "Keyakinan merupakan suatu pengetahuan di dalam hati, jauh tak terjangkau oleh bukti.",
          "Rasa bahagia dan tak bahagia bukan berasal dari apa yang kamu miliki, bukan pula berasal dari siapa diri kamu, atau apa yang kamu kerjakan. Bahagia dan tak bahagia berasal dari pikiran kamu.",
          "Sakit dalam perjuangan itu hanya sementara. Bisa jadi kamu rasakan dalam semenit, sejam, sehari, atau setahun. Namun jika menyerah, rasa sakit itu akan terasa selamanya.",
          "Hanya seseorang yang takut yang bisa bertindak berani. Tanpa rasa takut itu tidak ada apapun yang bisa disebut berani.",
          "Jadilah diri kamu sendiri. Siapa lagi yang bisa melakukannya lebih baik ketimbang diri kamu sendiri?",
          "Kesempatan kamu untuk sukses di setiap kondisi selalu dapat diukur oleh seberapa besar kepercayaan kamu pada diri sendiri.",
          "Kebanggaan kita yang terbesar adalah bukan tidak pernah gagal, tetapi bangkit kembali setiap kali kita jatuh.",
          "Suatu pekerjaan yang paling tak kunjung bisa diselesaikan adalah pekerjaan yang tak kunjung pernah dimulai.",
          "Pikiran kamu bagaikan api yang perlu dinyalakan, bukan bejana yang menanti untuk diisi.",
          "Kejujuran adalah batu penjuru dari segala kesuksesan. Pengakuan adalah motivasi terkuat. Bahkan kritik dapat membangun rasa percaya diri saat disisipkan di antara pujian.",
          "Segala sesuatu memiliki kesudahan, yang sudah berakhir biarlah berlalu dan yakinlah semua akan baik-baik saja.",
          "Setiap detik sangatlah berharga karena waktu mengetahui banyak hal, termasuk rahasia hati.",
          "Jika kamu tak menemukan buku yang kamu cari di rak, maka tulislah sendiri.",
          "Jika hatimu banyak merasakan sakit, maka belajarlah dari rasa sakit itu untuk tidak memberikan rasa sakit pada orang lain.",
          "Hidup tak selamanya tentang pacar.",
          "Rumah bukan hanya sebuah tempat, tetapi itu adalah perasaan.",
          "Pilih mana: Orang yang memimpikan kesuksesan atau orang yang membuatnya menjadi kenyataan?",
          "Kamu mungkin tidak bisa menyiram bunga yang sudah layu dan berharap ia akan mekar kembali, tapi kamu bisa menanam bunga yang baru dengan harapan yang lebih baik dari sebelumnya.",
          "Bukan bahagia yang menjadikan kita bersyukur, tetapi dengan bersyukurlah yang akan menjadikan hidup kita bahagia.",
          "Aku memang diam. Tapi aku tidak buta.",
        ]
        let bacotan = pickRandom(quotes)
        reply(bacotan)
      }
      break
   case'quotesgalau':
      {

        function pickRandom(list)
        {
          return list[Math.floor(list.length * Math.random())]
        }
        const galau = [
          "Gak salah kalo aku lebih berharap sama orang yang lebih pasti tanpa khianati janji-janji",
          "Kalau aku memang tidak sayang sama kamu ngapain aku mikirin kamu. Tapi semuanya kamu yang ngganggap aku gak sayang sama kamu",
          "Jangan iri dan sedih jika kamu tidak memiliki kemampuan seperti yang orang miliki. Yakinlah orang lain juga tidak memiliki kemampuan sepertimu",
          "Hanya kamu yang bisa membuat langkahku terhenti, sambil berkata dalam hati mana bisa aku meninggalkanmu",
          "Tetap tersenyum walaluku masih dibuat menunggu dan rindu olehmu, tapi itu demi kamu",
          "Tak semudah itu melupakanmu",
          "Secuek-cueknya kamu ke aku, aku tetap sayang sama kamu karena kamu telah menerima aku apa adanya",
          "Aku sangat bahagia jika kamu bahagia didekatku, bukan didekatnya",
          "Jadilah diri sendiri, jangan mengikuti orang lain, tetapi tidak sanggup untuk menjalaninya",
          "Cobalah terdiam sejenak untuk memikirkan bagaimana caranya agar kita dapat menyelesaikan masalah ini bersama-sama",
          "Bisakah kita tidak bermusuhan setelah berpisah, aku mau kita seperti dulu sebelum kita jadian yang seru-seruan bareng, bercanda dan yang lainnya",
          "Aku ingin kamu bisa langgeng sama aku dan yang aku harapkan kamu bisa jadi jodohku",
          "Cinta tak bisa dijelaskan dengan kata-kata saja, karena cinta hanya mampu dirasakan oleh hati",
          "Masalah terbesar dalam diri seseorang adalah tak sanggup melawan rasa takutnya",
          "Selamat pagi buat orang yang aku sayang dan orang yang membenciku, semoga hari ini hari yang lebih baik daripada hari kemarin buat aku dan kamu",
          "Jangan menyerah dengan keadaanmu sekarang, optimis karena optimislah yang bikin kita kuat",
          "Kepada pria yang selalu ada di doaku aku mencintaimu dengan tulus apa adanya",
          "Tolong jangan pergi saat aku sudah sangat sayang padamu",
          "Coba kamu yang berada diposisiku, lalu kamu ditinggalin gitu aja sama orang yang lo sayang banget",
          "Aku takut kamu kenapa-napa, aku panik jika kamu sakit, itu karena aku cinta dan sayang padamu",
          "Sakit itu ketika cinta yang aku beri tidak kamu hargai",
          "Kamu tiba-tiba berubah tanpa sebab tapi jika memang ada sebabnya kamu berubah tolong katakan biar saya perbaiki kesalahan itu",
          "Karenamu aku jadi tau cinta yang sesungguhnya",
          "Senyum manismu sangatlah indah, jadi janganlah sampai kamu bersedih",
          "Berawal dari kenalan, bercanda bareng, ejek-ejekan kemudian berubah menjadi suka, nyaman dan akhirnya saling sayang dan mencintai",
          "Tersenyumlah pada orang yang telah menyakitimu agar sia tau arti kesabaran yang luar biasa",
          "Aku akan ingat kenangan pahit itu dan aku akan jadikan pelajaran untuk masa depan yang manis",
          "Kalau memang tak sanggup menepati janjimu itu setidaknya kamu ingat dan usahakan jagan membiarkan janjimu itu sampai kau lupa",
          "Hanya bisa diam dan berfikir Kenapa orang yang setia dan baik ditinggalin yang nakal dikejar-kejar giliran ditinggalin bilangnya laki-laki itu semuanya sama",
          "Walaupun hanya sesaat saja kau membahagiakanku tapi rasa bahagia yang dia tidak cepat dilupakan",
          "Aku tak menyangka kamu pergi dan melupakan ku begitu cepat",
          "Jomblo gak usah diam rumah mumpung malam minggu ya keluar jalan lah kan jomblo bebas bisa dekat sama siapapun pacar orang mantan sahabat bahkan sendiri atau bareng setan pun bisa",
          "Kamu adalah teman yang selalu di sampingku dalam keadaan senang maupun susah Terimakasih kamu selalu ada di sampingku",
          "Aku tak tahu sebenarnya di dalam hatimu itu ada aku atau dia",
          "Tak mudah melupakanmu karena aku sangat mencintaimu meskipun engkau telah menyakiti aku berkali-kali",
          "Hidup ini hanya sebentar jadi lepaskan saja mereka yang menyakitimu Sayangi Mereka yang peduli padamu dan perjuangan mereka yang berarti bagimu",
          "Tolong jangan pergi meninggalkanku aku masih sangat mencintai dan menyayangimu",
          "Saya mencintaimu dan menyayangimu jadi tolong jangan engkau pergi dan meninggalkan ku sendiri",
          "Saya sudah cukup tahu bagaimana sifatmu itu kamu hanya dapat memberikan harapan palsu kepadaku",
          "Aku berusaha mendapatkan cinta darimu tetapi Kamunya nggak peka",
          "Aku bangkit dari jatuh ku setelah kau jatuhkan aku dan aku akan memulainya lagi dari awal Tanpamu",
          "Mungkin sekarang jodohku masih jauh dan belum bisa aku dapat tapi aku yakin jodoh itu Takkan kemana-mana dan akan ku dapatkan",
          "Datang aja dulu baru menghina orang lain kalau memang dirimu dan lebih baik dari yang kau hina",
          "Membelakanginya mungkin lebih baik daripada melihatnya selingkuh didepan mata sendiri",
          "Bisakah hatimu seperti angsa yang hanya setia pada satu orang saja",
          "Aku berdiri disini sendiri menunggu kehadiran dirimu",
          "Aku hanya tersenyum padamu setelah kau menyakitiku agar kamu tahu arti kesabaran",
          "Maaf aku lupa ternyata aku bukan siapa-siapa",
          "Untuk memegang janjimu itu harus ada buktinya jangan sampai hanya janji palsu",
          "Aku tidak bisa selamanya menunggu dan kini aku menjadi ragu Apakah kamu masih mencintaiku",
          "Jangan buat aku terlalu berharap jika kamu tidak menginginkanku",
          "Lebih baik sendiri daripada berdua tapi tanpa kepastian",
          "Pergi bukan berarti berhenti mencintai tapi kecewa dan lelah karena harus berjuang sendiri",
          "Bukannya aku tidak ingin menjadi pacarmu Aku hanya ingin dipersatukan dengan cara yang benar",
          "Akan ada saatnya kok aku akan benar-benar lupa dan tidak memikirkan mu lagi",
          "Kenapa harus jatuh cinta kepada orang yang tak bisa dimiliki",
          "Jujur aku juga memiliki perasaan terhadapmu dan tidak bisa menolakmu tapi aku juga takut untuk mencintaimu",
          "Maafkan aku sayang tidak bisa menjadi seperti yang kamu mau",
          "Jangan memberi perhatian lebih seperti itu cukup biasa saja tanpa perlu menimbulkan rasa",
          "Aku bukan mencari yang sempurna tapi yang terbaik untukku",
          "Sendiri itu tenang tidak ada pertengkaran kebohongan dan banyak aturan",
          "Cewek strong itu adalah yang sabar dan tetap tersenyum meskipun dalam keadaan terluka",
          "Terima kasih karena kamu aku menjadi lupa tentang masa laluku",
          "Cerita cinta indah tanpa masalah itu hanya di dunia dongeng saja",
          "Kamu tidak akan menemukan apa-apa di masa lalu Yang ada hanyalah penyesalan dan sakit hati",
          "Mikirin orang yang gak pernah mikirin kita itu emang bikin gila",
          "Dari sekian lama menunggu apa yang sudah didapat",
          "Perasaan Bodo gue adalah bisa jatuh cinta sama orang yang sama meski udah disakiti berkali-kali",
          "Yang sendiri adalah yang bersabar menunggu pasangan sejatinya",
          "Aku terlahir sederhana dan ditinggal sudah biasa",
          "Aku sayang kamu tapi aku masih takut untuk mencintaimu",
          "Bisa berbagi suka dan duka bersamamu itu sudah membuatku bahagia",
          "Aku tidak pernah berpikir kamu akan menjadi yang sementara",
          "Jodoh itu bukan seberapa dekat kamu dengannya tapi seberapa yakin kamu dengan Allah",
          "Jangan paksa aku menjadi cewek seperti seleramu",
          "Hanya yang sabar yang mampu melewati semua kekecewaan",
          "Balikan sama kamu itu sama saja bunuh diri dan melukai perasaan ku sendiri",
          "Tak perlu membalas dengan menyakiti biar Karma yang akan urus semua itu",
          "Aku masih ingat kamu tapi perasaanku sudah tidak sakit seperti dulu",
          "Punya kalimat sendiri & mau ditambahin? chat *.owner*"
        ]
        let bacotan = pickRandom(galau)
        reply(bacotan)
      }
      break
   case'quotesanime':
      case 'quotesanim':
      {

        let res = await (await fetch('https://katanime.vercel.app/api/getrandom?limit=1'))
        if (!res.ok) return await res.text()
        let json = await res.json()
        if (!json.result[0]) return json
        let
        {
          indo,
          character,
          anime
        } = json.result[0]
        reply(`${indo}\n\n📮By:  _${character}_ \nAnime:\n${anime}`)
      }
      break
   
   case'quotesmotivasi':
      {

        function pickRandom(list)
        {
          return list[Math.floor(list.length * Math.random())]
        }

        const motivasi = [
          "ᴊᴀɴɢᴀɴ ʙɪᴄᴀʀᴀ, ʙᴇʀᴛɪɴᴅᴀᴋ ꜱᴀᴊᴀ. ᴊᴀɴɢᴀɴ ᴋᴀᴛᴀᴋᴀɴ, ᴛᴜɴᴊᴜᴋᴋᴀɴ ꜱᴀᴊᴀ. ᴊᴀɴɢᴀɴ ᴊᴀɴᴊɪ, ʙᴜᴋᴛɪᴋᴀɴ ꜱᴀᴊᴀ.",
          "ᴊᴀɴɢᴀɴ ᴘᴇʀɴᴀʜ ʙᴇʀʜᴇɴᴛɪ ᴍᴇʟᴀᴋᴜᴋᴀɴ ʏᴀɴɢ ᴛᴇʀʙᴀɪᴋ ʜᴀɴʏᴀ ᴋᴀʀᴇɴᴀ ꜱᴇꜱᴇᴏʀᴀɴɢ ᴛɪᴅᴀᴋ ᴍᴇᴍʙᴇʀɪ ᴀɴᴅᴀ ᴘᴇɴɢʜᴀʀɢᴀᴀɴ.",
          "ʙᴇᴋᴇʀᴊᴀ ꜱᴀᴀᴛ ᴍᴇʀᴇᴋᴀ ᴛɪᴅᴜʀ. ʙᴇʟᴀᴊᴀʀ ꜱᴀᴀᴛ ᴍᴇʀᴇᴋᴀ ʙᴇʀᴘᴇꜱᴛᴀ. ʜᴇᴍᴀᴛ ꜱᴇᴍᴇɴᴛᴀʀᴀ ᴍᴇʀᴇᴋᴀ ᴍᴇɴɢʜᴀʙɪꜱᴋᴀɴ. ʜɪᴅᴜᴘʟᴀʜ ꜱᴇᴘᴇʀᴛɪ ᴍɪᴍᴘɪ ᴍᴇʀᴇᴋᴀ.",
          "ᴋᴜɴᴄɪ ꜱᴜᴋꜱᴇꜱ ᴀᴅᴀʟᴀʜ ᴍᴇᴍᴜꜱᴀᴛᴋᴀɴ ᴘɪᴋɪʀᴀɴ ꜱᴀᴅᴀʀ ᴋɪᴛᴀ ᴘᴀᴅᴀ ʜᴀʟ-ʜᴀʟ ʏᴀɴɢ ᴋɪᴛᴀ ɪɴɢɪɴᴋᴀɴ, ʙᴜᴋᴀɴ ʜᴀʟ-ʜᴀʟ ʏᴀɴɢ ᴋɪᴛᴀ ᴛᴀᴋᴜᴛɪ.",
          "ᴊᴀɴɢᴀɴ ᴛᴀᴋᴜᴛ ɢᴀɢᴀʟ. ᴋᴇᴛᴀᴋᴜᴛᴀɴ ʙᴇʀᴀᴅᴀ ᴅɪ ᴛᴇᴍᴘᴀᴛ ʏᴀɴɢ ꜱᴀᴍᴀ ᴛᴀʜᴜɴ ᴅᴇᴘᴀɴ ꜱᴇᴘᴇʀᴛɪ ᴀɴᴅᴀ ꜱᴀᴀᴛ ɪɴɪ.",
          "ᴊɪᴋᴀ ᴋɪᴛᴀ ᴛᴇʀᴜꜱ ᴍᴇʟᴀᴋᴜᴋᴀɴ ᴀᴘᴀ ʏᴀɴɢ ᴋɪᴛᴀ ʟᴀᴋᴜᴋᴀɴ, ᴋɪᴛᴀ ᴀᴋᴀɴ ᴛᴇʀᴜꜱ ᴍᴇɴᴅᴀᴘᴀᴛᴋᴀɴ ᴀᴘᴀ ʏᴀɴɢ ᴋɪᴛᴀ ᴅᴀᴘᴀᴛᴋᴀɴ.",
          "ᴊɪᴋᴀ ᴀɴᴅᴀ ᴛɪᴅᴀᴋ ᴅᴀᴘᴀᴛ ᴍᴇɴɢᴀᴛᴀꜱɪ ꜱᴛʀᴇꜱ, ᴀɴᴅᴀ ᴛɪᴅᴀᴋ ᴀᴋᴀɴ ᴍᴇɴɢᴇʟᴏʟᴀ ᴋᴇꜱᴜᴋꜱᴇꜱᴀɴ.",
          "ʙᴇʀꜱɪᴋᴀᴘ ᴋᴇʀᴀꜱ ᴋᴇᴘᴀʟᴀ ᴛᴇɴᴛᴀɴɢ ᴛᴜᴊᴜᴀɴ ᴀɴᴅᴀ ᴅᴀɴ ꜰʟᴇᴋꜱɪʙᴇʟ ᴛᴇɴᴛᴀɴɢ ᴍᴇᴛᴏᴅᴇ ᴀɴᴅᴀ.",
          "ᴋᴇʀᴊᴀ ᴋᴇʀᴀꜱ ᴍᴇɴɢᴀʟᴀʜᴋᴀɴ ʙᴀᴋᴀᴛ ᴋᴇᴛɪᴋᴀ ʙᴀᴋᴀᴛ ᴛɪᴅᴀᴋ ʙᴇᴋᴇʀᴊᴀ ᴋᴇʀᴀꜱ.",
          "ɪɴɢᴀᴛʟᴀʜ ʙᴀʜᴡᴀ ᴘᴇʟᴀᴊᴀʀᴀɴ ᴛᴇʀʙᴇꜱᴀʀ ᴅᴀʟᴀᴍ ʜɪᴅᴜᴘ ʙɪᴀꜱᴀɴʏᴀ ᴅɪᴘᴇʟᴀᴊᴀʀɪ ᴅᴀʀɪ ꜱᴀᴀᴛ-ꜱᴀᴀᴛ ᴛᴇʀʙᴜʀᴜᴋ ᴅᴀɴ ᴅᴀʀɪ ᴋᴇꜱᴀʟᴀʜᴀɴ ᴛᴇʀʙᴜʀᴜᴋ.",
          "ʜɪᴅᴜᴘ ʙᴜᴋᴀɴ ᴛᴇɴᴛᴀɴɢ ᴍᴇɴᴜɴɢɢᴜ ʙᴀᴅᴀɪ ʙᴇʀʟᴀʟᴜ, ᴛᴇᴛᴀᴘɪ ʙᴇʟᴀᴊᴀʀ ᴍᴇɴᴀʀɪ ᴅɪ ᴛᴇɴɢᴀʜ ʜᴜᴊᴀɴ.",
          "ᴊɪᴋᴀ ʀᴇɴᴄᴀɴᴀɴʏᴀ ᴛɪᴅᴀᴋ ʙᴇʀʜᴀꜱɪʟ, ᴜʙᴀʜ ʀᴇɴᴄᴀɴᴀɴʏᴀ ʙᴜᴋᴀɴ ᴛᴜᴊᴜᴀɴɴʏᴀ.",
          "ᴊᴀɴɢᴀɴ ᴛᴀᴋᴜᴛ ᴋᴀʟᴀᴜ ʜɪᴅᴜᴘᴍᴜ ᴀᴋᴀɴ ʙᴇʀᴀᴋʜɪʀ; ᴛᴀᴋᴜᴛʟᴀʜ ᴋᴀʟᴀᴜ ʜɪᴅᴜᴘᴍᴜ ᴛᴀᴋ ᴘᴇʀɴᴀʜ ᴅɪᴍᴜʟᴀɪ.",
          "ᴏʀᴀɴɢ ʏᴀɴɢ ʙᴇɴᴀʀ-ʙᴇɴᴀʀ ʜᴇʙᴀᴛ ᴀᴅᴀʟᴀʜ ᴏʀᴀɴɢ ʏᴀɴɢ ᴍᴇᴍʙᴜᴀᴛ ꜱᴇᴛɪᴀᴘ ᴏʀᴀɴɢ ᴍᴇʀᴀꜱᴀ ʜᴇʙᴀᴛ.",
          "ᴘᴇɴɢᴀʟᴀᴍᴀɴ ᴀᴅᴀʟᴀʜ ɢᴜʀᴜ ʏᴀɴɢ ʙᴇʀᴀᴛ ᴋᴀʀᴇɴᴀ ᴅɪᴀ ᴍᴇᴍʙᴇʀɪᴋᴀɴ ᴛᴇꜱ ᴛᴇʀʟᴇʙɪʜ ᴅᴀʜᴜʟᴜ, ᴋᴇᴍᴜᴅɪᴀɴ ᴘᴇʟᴀᴊᴀʀᴀɴɴʏᴀ.",
          "ᴍᴇɴɢᴇᴛᴀʜᴜɪ ꜱᴇʙᴇʀᴀᴘᴀ ʙᴀɴʏᴀᴋ ʏᴀɴɢ ᴘᴇʀʟᴜ ᴅɪᴋᴇᴛᴀʜᴜɪ ᴀᴅᴀʟᴀʜ ᴀᴡᴀʟ ᴅᴀʀɪ ʙᴇʟᴀᴊᴀʀ ᴜɴᴛᴜᴋ ʜɪᴅᴜᴘ.",
          "ꜱᴜᴋꜱᴇꜱ ʙᴜᴋᴀɴʟᴀʜ ᴀᴋʜɪʀ, ᴋᴇɢᴀɢᴀʟᴀɴ ᴛɪᴅᴀᴋ ꜰᴀᴛᴀʟ. ʏᴀɴɢ ᴛᴇʀᴘᴇɴᴛɪɴɢ ᴀᴅᴀʟᴀʜ ᴋᴇʙᴇʀᴀɴɪᴀɴ ᴜɴᴛᴜᴋ ᴍᴇʟᴀɴᴊᴜᴛᴋᴀɴ.",
          "ʟᴇʙɪʜ ʙᴀɪᴋ ɢᴀɢᴀʟ ᴅᴀʟᴀᴍ ᴏʀɪꜱɪɴᴀʟɪᴛᴀꜱ ᴅᴀʀɪᴘᴀᴅᴀ ʙᴇʀʜᴀꜱɪʟ ᴍᴇɴɪʀᴜ.",
          "ʙᴇʀᴀɴɪ ʙᴇʀᴍɪᴍᴘɪ, ᴛᴀᴘɪ ʏᴀɴɢ ʟᴇʙɪʜ ᴘᴇɴᴛɪɴɢ, ʙᴇʀᴀɴɪ ᴍᴇʟᴀᴋᴜᴋᴀɴ ᴛɪɴᴅᴀᴋᴀɴ ᴅɪ ʙᴀʟɪᴋ ɪᴍᴘɪᴀɴᴍᴜ.",
          "ᴛᴇᴛᴀᴘᴋᴀɴ ᴛᴜᴊᴜᴀɴ ᴀɴᴅᴀ ᴛɪɴɢɢɪ-ᴛɪɴɢɢɪ, ᴅᴀɴ ᴊᴀɴɢᴀɴ ʙᴇʀʜᴇɴᴛɪ ꜱᴀᴍᴘᴀɪ ᴀɴᴅᴀ ᴍᴇɴᴄᴀᴘᴀɪɴʏᴀ.",
          "ᴋᴇᴍʙᴀɴɢᴋᴀɴ ᴋᴇꜱᴜᴋꜱᴇꜱᴀɴ ᴅᴀʀɪ ᴋᴇɢᴀɢᴀʟᴀɴ. ᴋᴇᴘᴜᴛᴜꜱᴀꜱᴀᴀɴ ᴅᴀɴ ᴋᴇɢᴀɢᴀʟᴀɴ ᴀᴅᴀʟᴀʜ ᴅᴜᴀ ʙᴀᴛᴜ ʟᴏɴᴄᴀᴛᴀɴ ᴘᴀʟɪɴɢ ᴘᴀꜱᴛɪ ᴍᴇɴᴜᴊᴜ ꜱᴜᴋꜱᴇꜱ.",
          "ᴊᴇɴɪᴜꜱ ᴀᴅᴀʟᴀʜ ꜱᴀᴛᴜ ᴘᴇʀꜱᴇɴ ɪɴꜱᴘɪʀᴀꜱɪ ᴅᴀɴ ꜱᴇᴍʙɪʟᴀɴ ᴘᴜʟᴜʜ ꜱᴇᴍʙɪʟᴀɴ ᴘᴇʀꜱᴇɴ ᴋᴇʀɪɴɢᴀᴛ.",
          "ꜱᴜᴋꜱᴇꜱ ᴀᴅᴀʟᴀʜ ᴛᴇᴍᴘᴀᴛ ᴘᴇʀꜱɪᴀᴘᴀɴ ᴅᴀɴ ᴋᴇꜱᴇᴍᴘᴀᴛᴀɴ ʙᴇʀᴛᴇᴍᴜ.",
          "ᴋᴇᴛᴇᴋᴜɴᴀɴ ɢᴀɢᴀʟ 19 ᴋᴀʟɪ ᴅᴀɴ ʙᴇʀʜᴀꜱɪʟ ᴘᴀᴅᴀ ᴋᴇꜱᴇᴍᴘᴀᴛᴀᴍ ʏᴀɴɢ ᴋᴇ-20.",
          "ᴊᴀʟᴀɴ ᴍᴇɴᴜᴊᴜ ꜱᴜᴋꜱᴇꜱ ᴅᴀɴ ᴊᴀʟᴀɴ ᴍᴇɴᴜᴊᴜ ᴋᴇɢᴀɢᴀʟᴀɴ ʜᴀᴍᴘɪʀ ᴘᴇʀꜱɪꜱ ꜱᴀᴍᴀ.",
          "ꜱᴜᴋꜱᴇꜱ ʙɪᴀꜱᴀɴʏᴀ ᴅᴀᴛᴀɴɢ ᴋᴇᴘᴀᴅᴀ ᴍᴇʀᴇᴋᴀ ʏᴀɴɢ ᴛᴇʀʟᴀʟᴜ ꜱɪʙᴜᴋ ᴍᴇɴᴄᴀʀɪɴʏᴀ.",
          "ᴊᴀɴɢᴀɴ ᴛᴜɴᴅᴀ ᴘᴇᴋᴇʀᴊᴀᴀɴᴍᴜ ꜱᴀᴍᴘᴀɪ ʙᴇꜱᴏᴋ, ꜱᴇᴍᴇɴᴛᴀʀᴀ ᴋᴀᴜ ʙɪꜱᴀ ᴍᴇɴɢᴇʀᴊᴀᴋᴀɴɴʏᴀ ʜᴀʀɪ ɪɴɪ.",
          "20 ᴛᴀʜᴜɴ ᴅᴀʀɪ ꜱᴇᴋᴀʀᴀɴɢ, ᴋᴀᴜ ᴍᴜɴɢᴋɪɴ ʟᴇʙɪʜ ᴋᴇᴄᴇᴡᴀ ᴅᴇɴɢᴀɴ ʜᴀʟ-ʜᴀʟ ʏᴀɴɢ ᴛɪᴅᴀᴋ ꜱᴇᴍᴘᴀᴛ ᴋᴀᴜ ʟᴀᴋᴜᴋᴀɴ ᴀʟɪʜ-ᴀʟɪʜ ʏᴀɴɢ ꜱᴜᴅᴀʜ.",
          "ᴊᴀɴɢᴀɴ ʜᴀʙɪꜱᴋᴀɴ ᴡᴀᴋᴛᴜᴍᴜ ᴍᴇᴍᴜᴋᴜʟɪ ᴛᴇᴍʙᴏᴋ ᴅᴀɴ ʙᴇʀʜᴀʀᴀᴘ ʙɪꜱᴀ ᴍᴇɴɢᴜʙᴀʜɴʏᴀ ᴍᴇɴᴊᴀᴅɪ ᴘɪɴᴛᴜ.",
          "ᴋᴇꜱᴇᴍᴘᴀᴛᴀɴ ɪᴛᴜ ᴍɪʀɪᴘ ꜱᴇᴘᴇʀᴛɪ ᴍᴀᴛᴀʜᴀʀɪ ᴛᴇʀʙɪᴛ. ᴋᴀʟᴀᴜ ᴋᴀᴜ ᴍᴇɴᴜɴɢɢᴜ ᴛᴇʀʟᴀʟᴜ ʟᴀᴍᴀ, ᴋᴀᴜ ʙɪꜱᴀ ᴍᴇʟᴇᴡᴀᴛᴋᴀɴɴʏᴀ.",
          "ʜɪᴅᴜᴘ ɪɴɪ ᴛᴇʀᴅɪʀɪ ᴅᴀʀɪ 10 ᴘᴇʀꜱᴇɴ ᴀᴘᴀ ʏᴀɴɢ ᴛᴇʀᴊᴀᴅɪ ᴘᴀᴅᴀᴍᴜ ᴅᴀɴ 90 ᴘᴇʀꜱᴇɴ ʙᴀɢᴀɪᴍᴀɴᴀ ᴄᴀʀᴀᴍᴜ ᴍᴇɴʏɪᴋᴀᴘɪɴʏᴀ.",
          "ᴀᴅᴀ ᴛɪɢᴀ ᴄᴀʀᴀ ᴜɴᴛᴜᴋ ᴍᴇɴᴄᴀᴘᴀɪ ᴋᴇꜱᴜᴋꜱᴇꜱᴀɴ ᴛᴇʀᴛɪɴɢɢɪ: ᴄᴀʀᴀ ᴘᴇʀᴛᴀᴍᴀ ᴀᴅᴀʟᴀʜ ʙᴇʀꜱɪᴋᴀᴘ ʙᴀɪᴋ. ᴄᴀʀᴀ ᴋᴇᴅᴜᴀ ᴀᴅᴀʟᴀʜ ʙᴇʀꜱɪᴋᴀᴘ ʙᴀɪᴋ. ᴄᴀʀᴀ ᴋᴇᴛɪɢᴀ ᴀᴅᴀʟᴀʜ ᴍᴇɴᴊᴀᴅɪ ʙᴀɪᴋ.",
          "ᴀʟᴀꜱᴀɴ ɴᴏᴍᴏʀ ꜱᴀᴛᴜ ᴏʀᴀɴɢ ɢᴀɢᴀʟ ᴅᴀʟᴀᴍ ʜɪᴅᴜᴘ ᴀᴅᴀʟᴀʜ ᴋᴀʀᴇɴᴀ ᴍᴇʀᴇᴋᴀ ᴍᴇɴᴅᴇɴɢᴀʀᴋᴀɴ ᴛᴇᴍᴀɴ, ᴋᴇʟᴜᴀʀɢᴀ, ᴅᴀɴ ᴛᴇᴛᴀɴɢɢᴀ ᴍᴇʀᴇᴋᴀ.",
          "ᴡᴀᴋᴛᴜ ʟᴇʙɪʜ ʙᴇʀʜᴀʀɢᴀ ᴅᴀʀɪᴘᴀᴅᴀ ᴜᴀɴɢ. ᴋᴀᴍᴜ ʙɪꜱᴀ ᴍᴇɴᴅᴀᴘᴀᴛᴋᴀɴ ʟᴇʙɪʜ ʙᴀɴʏᴀᴋ ᴜᴀɴɢ, ᴛᴇᴛᴀᴘɪ ᴋᴀᴍᴜ ᴛɪᴅᴀᴋ ʙɪꜱᴀ ᴍᴇɴᴅᴀᴘᴀᴛᴋᴀɴ ʟᴇʙɪʜ ʙᴀɴʏᴀᴋ ᴡᴀᴋᴛᴜ.",
          "ᴘᴇɴᴇᴛᴀᴘᴀɴ ᴛᴜᴊᴜᴀɴ ᴀᴅᴀʟᴀʜ ʀᴀʜᴀꜱɪᴀ ᴍᴀꜱᴀ ᴅᴇᴘᴀɴ ʏᴀɴɢ ᴍᴇɴᴀʀɪᴋ.",
          "ꜱᴀᴀᴛ ᴋɪᴛᴀ ʙᴇʀᴜꜱᴀʜᴀ ᴜɴᴛᴜᴋ ᴍᴇɴᴊᴀᴅɪ ʟᴇʙɪʜ ʙᴀɪᴋ ᴅᴀʀɪ ᴋɪᴛᴀ, ꜱᴇɢᴀʟᴀ ꜱᴇꜱᴜᴀᴛᴜ ᴅɪ ꜱᴇᴋɪᴛᴀʀ ᴋɪᴛᴀ ᴊᴜɢᴀ ᴍᴇɴᴊᴀᴅɪ ʟᴇʙɪʜ ʙᴀɪᴋ.",
          "ᴘᴇʀᴛᴜᴍʙᴜʜᴀɴ ᴅɪᴍᴜʟᴀɪ ᴋᴇᴛɪᴋᴀ ᴋɪᴛᴀ ᴍᴜʟᴀɪ ᴍᴇɴᴇʀɪᴍᴀ ᴋᴇʟᴇᴍᴀʜᴀɴ ᴋɪᴛᴀ ꜱᴇɴᴅɪʀɪ.",
          "ᴊᴀɴɢᴀɴʟᴀʜ ᴘᴇʀɴᴀʜ ᴍᴇɴʏᴇʀᴀʜ ᴋᴇᴛɪᴋᴀ ᴀɴᴅᴀ ᴍᴀꜱɪʜ ᴍᴀᴍᴘᴜ ʙᴇʀᴜꜱᴀʜᴀ ʟᴀɢɪ. ᴛɪᴅᴀᴋ ᴀᴅᴀ ᴋᴀᴛᴀ ʙᴇʀᴀᴋʜɪʀ ꜱᴀᴍᴘᴀɪ ᴀɴᴅᴀ ʙᴇʀʜᴇɴᴛɪ ᴍᴇɴᴄᴏʙᴀ.",
          "ᴋᴇᴍᴀᴜᴀɴ ᴀᴅᴀʟᴀʜ ᴋᴜɴᴄɪ ꜱᴜᴋꜱᴇꜱ. ᴏʀᴀɴɢ-ᴏʀᴀɴɢ ꜱᴜᴋꜱᴇꜱ, ʙᴇʀᴜꜱᴀʜᴀ ᴋᴇʀᴀꜱ ᴀᴘᴀ ᴘᴜɴ ʏᴀɴɢ ᴍᴇʀᴇᴋᴀ ʀᴀꜱᴀᴋᴀɴ ᴅᴇɴɢᴀɴ ᴍᴇɴᴇʀᴀᴘᴋᴀɴ ᴋᴇɪɴɢɪɴᴀɴ ᴍᴇʀᴇᴋᴀ ᴜɴᴛᴜᴋ ᴍᴇɴɢᴀᴛᴀꜱɪ ꜱɪᴋᴀᴘ ᴀᴘᴀᴛɪꜱ, ᴋᴇʀᴀɢᴜᴀɴ ᴀᴛᴀᴜ ᴋᴇᴛᴀᴋᴜᴛᴀɴ.",
          "ᴊᴀɴɢᴀɴʟᴀʜ ᴘᴇʀɴᴀʜ ᴍᴇɴʏᴇʀᴀʜ ᴋᴇᴛɪᴋᴀ ᴀɴᴅᴀ ᴍᴀꜱɪʜ ᴍᴀᴍᴘᴜ ʙᴇʀᴜꜱᴀʜᴀ ʟᴀɢɪ. ᴛɪᴅᴀᴋ ᴀᴅᴀ ᴋᴀᴛᴀ ʙᴇʀᴀᴋʜɪʀ ꜱᴀᴍᴘᴀɪ ᴀɴᴅᴀ ʙᴇʀʜᴇɴᴛɪ ᴍᴇɴᴄᴏʙᴀ.",
          "ᴋᴇᴍᴀᴜᴀɴ ᴀᴅᴀʟᴀʜ ᴋᴜɴᴄɪ ꜱᴜᴋꜱᴇꜱ. ᴏʀᴀɴɢ-ᴏʀᴀɴɢ ꜱᴜᴋꜱᴇꜱ, ʙᴇʀᴜꜱᴀʜᴀ ᴋᴇʀᴀꜱ ᴀᴘᴀ ᴘᴜɴ ʏᴀɴɢ ᴍᴇʀᴇᴋᴀ ʀᴀꜱᴀᴋᴀɴ ᴅᴇɴɢᴀɴ ᴍᴇɴᴇʀᴀᴘᴋᴀɴ ᴋᴇɪɴɢɪɴᴀɴ ᴍᴇʀᴇᴋᴀ ᴜɴᴛᴜᴋ ᴍᴇɴɢᴀᴛᴀꜱɪ ꜱɪᴋᴀᴘ ᴀᴘᴀᴛɪꜱ, ᴋᴇʀᴀɢᴜᴀɴ ᴀᴛᴀᴜ ᴋᴇᴛᴀᴋᴜᴛᴀɴ.",
          "ʜᴀʟ ᴘᴇʀᴛᴀᴍᴀ ʏᴀɴɢ ᴅɪʟᴀᴋᴜᴋᴀɴ ᴏʀᴀɴɢ ꜱᴜᴋꜱᴇꜱ ᴀᴅᴀʟᴀʜ ᴍᴇᴍᴀɴᴅᴀɴɢ ᴋᴇɢᴀɢᴀʟᴀɴ ꜱᴇʙᴀɢᴀɪ ꜱɪɴʏᴀʟ ᴘᴏꜱɪᴛɪꜰ ᴜɴᴛᴜᴋ ꜱᴜᴋꜱᴇꜱ.",
          "ᴄɪʀɪ ᴋʜᴀꜱ ᴏʀᴀɴɢ ꜱᴜᴋꜱᴇꜱ ᴀᴅᴀʟᴀʜ ᴍᴇʀᴇᴋᴀ ꜱᴇʟᴀʟᴜ ʙᴇʀᴜꜱᴀʜᴀ ᴋᴇʀᴀꜱ ᴜɴᴛᴜᴋ ᴍᴇᴍᴘᴇʟᴀᴊᴀʀɪ ʜᴀʟ-ʜᴀʟ ʙᴀʀᴜ.",
          "ꜱᴜᴋꜱᴇꜱ ᴀᴅᴀʟᴀʜ ᴍᴇɴᴅᴀᴘᴀᴛᴋᴀɴ ᴀᴘᴀ ʏᴀɴɢ ᴋᴀᴍᴜ ɪɴɢɪɴᴋᴀɴ, ᴋᴇʙᴀʜᴀɢɪᴀᴀɴ ᴍᴇɴɢɪɴɢɪɴᴋᴀɴ ᴀᴘᴀ ʏᴀɴɢ ᴋᴀᴍᴜ ᴅᴀᴘᴀᴛᴋᴀɴ.",
          "ᴏʀᴀɴɢ ᴘᴇꜱɪᴍɪꜱ ᴍᴇʟɪʜᴀᴛ ᴋᴇꜱᴜʟɪᴛᴀɴ ᴅɪ ꜱᴇᴛɪᴀᴘ ᴋᴇꜱᴇᴍᴘᴀᴛᴀɴ. ᴏʀᴀɴɢ ʏᴀɴɢ ᴏᴘᴛɪᴍɪꜱ ᴍᴇʟɪʜᴀᴛ ᴘᴇʟᴜᴀɴɢ ᴅᴀʟᴀᴍ ꜱᴇᴛɪᴀᴘ ᴋᴇꜱᴜʟɪᴛᴀɴ.",
          "ᴋᴇʀᴀɢᴜᴀɴ ᴍᴇᴍʙᴜɴᴜʜ ʟᴇʙɪʜ ʙᴀɴʏᴀᴋ ᴍɪᴍᴘɪ ᴅᴀʀɪᴘᴀᴅᴀ ᴋᴇɢᴀɢᴀʟᴀɴ.",
          "ʟᴀᴋᴜᴋᴀɴ ᴀᴘᴀ ʏᴀɴɢ ʜᴀʀᴜꜱ ᴋᴀᴍᴜ ʟᴀᴋᴜᴋᴀɴ ꜱᴀᴍᴘᴀɪ ᴋᴀᴍᴜ ᴅᴀᴘᴀᴛ ᴍᴇʟᴀᴋᴜᴋᴀɴ ᴀᴘᴀ ʏᴀɴɢ ɪɴɢɪɴ ᴋᴀᴍᴜ ʟᴀᴋᴜᴋᴀɴ.",
          "ᴏᴘᴛɪᴍɪꜱᴛɪꜱ ᴀᴅᴀʟᴀʜ ꜱᴀʟᴀʜ ꜱᴀᴛᴜ ᴋᴜᴀʟɪᴛᴀꜱ ʏᴀɴɢ ʟᴇʙɪʜ ᴛᴇʀᴋᴀɪᴛ ᴅᴇɴɢᴀɴ ᴋᴇꜱᴜᴋꜱᴇꜱᴀɴ ᴅᴀɴ ᴋᴇʙᴀʜᴀɢɪᴀᴀɴ ᴅᴀʀɪᴘᴀᴅᴀ ʏᴀɴɢ ʟᴀɪɴ.",
          "ᴘᴇɴɢʜᴀʀɢᴀᴀɴ ᴘᴀʟɪɴɢ ᴛɪɴɢɢɪ ʙᴀɢɪ ꜱᴇᴏʀᴀɴɢ ᴘᴇᴋᴇʀᴊᴀ ᴋᴇʀᴀꜱ ʙᴜᴋᴀɴʟᴀʜ ᴀᴘᴀ ʏᴀɴɢ ᴅɪᴀ ᴘᴇʀᴏʟᴇʜ ᴅᴀʀɪ ᴘᴇᴋᴇʀᴊᴀᴀɴ ɪᴛᴜ, ᴛᴀᴘɪ ꜱᴇʙᴇʀᴀᴘᴀ ʙᴇʀᴋᴇᴍʙᴀɴɢ ɪᴀ ᴅᴇɴɢᴀɴ ᴋᴇʀᴊᴀ ᴋᴇʀᴀꜱɴʏᴀ ɪᴛᴜ.",
          "ᴄᴀʀᴀ ᴛᴇʀʙᴀɪᴋ ᴜɴᴛᴜᴋ ᴍᴇᴍᴜʟᴀɪ ᴀᴅᴀʟᴀʜ ᴅᴇɴɢᴀɴ ʙᴇʀʜᴇɴᴛɪ ʙᴇʀʙɪᴄᴀʀᴀ ᴅᴀɴ ᴍᴜʟᴀɪ ᴍᴇʟᴀᴋᴜᴋᴀɴ.",
          "ᴋᴇɢᴀɢᴀʟᴀɴ ᴛɪᴅᴀᴋ ᴀᴋᴀɴ ᴘᴇʀɴᴀʜ ᴍᴇɴʏᴜꜱᴜʟ ᴊɪᴋᴀ ᴛᴇᴋᴀᴅ ᴜɴᴛᴜᴋ ꜱᴜᴋꜱᴇꜱ ᴄᴜᴋᴜᴘ ᴋᴜᴀᴛ."
        ]
        let motivasii = pickRandom(motivasi)
        reply(`"${motivasii}"`)
      }
      break
   
   case'quotesbucin':
      {

        const bucin = [
          "Aku memilih untuk sendiri, bukan karena menunggu yang sempurna, tetapi butuh yang tak pernah menyerah.",
          "Seorang yang single diciptakan bersama pasangan yang belum ditemukannya.",
          "Jomblo. Mungkin itu cara Tuhan untuk mengatakan 'Istirahatlah dari cinta yang salah'.",
          "Jomblo adalah anak muda yang mendahulukan pengembangan pribadinya untuk cinta yang lebih berkelas nantinya.",
          "Aku bukan mencari seseorang yang sempurna, tapi aku mencari orang yang menjadi sempurna berkat kelebihanku.",
          "Pacar orang adalah jodoh kita yang tertunda.",
          "Jomblo pasti berlalu. Semua ada saatnya, saat semua kesendirian menjadi sebuah kebersamaan dengannya kekasih halal. Bersabarlah.",
          "Romeo rela mati untuk juliet, Jack mati karena menyelamatkan Rose. Intinya, kalau tetap mau hidup, jadilah single.",
          "Aku mencari orang bukan dari kelebihannya tapi aku mencari orang dari ketulusan hatinya.",
          "Jodoh bukan sendal jepit, yang kerap tertukar. Jadi teruslah berada dalam perjuangan yang semestinya.",
          "Kalau kamu jadi senar gitar, aku nggak mau jadi gitarisnya. Karena aku nggak mau mutusin kamu.",
          "Bila mencintaimu adalah ilusi, maka izinkan aku berimajinasi selamanya.",
          "Sayang... Tugas aku hanya mencintaimu, bukan melawan takdir.",
          "Saat aku sedang bersamamu rasanya 1 jam hanya 1 detik, tetapi jika aku jauh darimu rasanya 1 hari menjadi 1 tahun.",
          "Kolak pisang tahu sumedang, walau jarak membentang cintaku takkan pernah hilang.",
          "Aku ingin menjadi satu-satunya, bukan salah satunya.",
          "Aku tidak bisa berjanji untuk menjadi yang baik. Tapi aku berjanji akan selalu mendampingi kamu.",
          "Kalau aku jadi wakil rakyat aku pasti gagal, gimana mau mikirin rakyat kalau yang selalu ada dipikiran aku hanyalah dirimu.",
          "Lihat kebunku, penuh dengan bunga. Lihat matamu, hatiku berbunga-bunga.",
          "Berjanjilah untuk terus bersamaku sekarang, esok, dan selamanya.",
          "Rindu tidak hanya muncul karena jarak yang terpisah. Tapi juga karena keinginan yang tidak terwujud.",
          "Kamu tidak akan pernah jauh dariku, kemanapun aku pergi kamu selalu ada, karena kamu selalu di hatiku, yang jauh hanya raga kita bukan hati kita.",
          "Aku tahu dalam setiap tatapanku, kita terhalang oleh jarak dan waktu. Tapi aku yakin kalau nanti kita pasti bisa bersatu.",
          "Merindukanmu tanpa pernah bertemu sama halnya dengan menciptakan lagu yang tak pernah ternyayikan.",
          "Ada kalanya jarak selalu menjadi penghalang antara aku sama kamu, namun tetap saja di hatiku kita selalu dekat.",
          "Jika hati ini tak mampu membendung segala kerinduan, apa daya tak ada yang bisa aku lakukan selain mendoakanmu.",
          "Mungkin di saat ini aku hanya bisa menahan kerinduan ini. Sampai tiba saatnya nanti aku bisa bertemu dan melepaskan kerinduan ini bersamamu.",
          "Melalui rasa rindu yang bergejolak dalam hati, di situ terkadang aku sangat membutuhkan dekap peluk kasih sayangmu.",
          "Dalam dinginnya malam, tak kuingat lagi; Berapa sering aku memikirkanmu juga merindukanmu.",
          "Merindukanmu itu seperti hujan yang datang tiba-tiba dan bertahan lama. Dan bahkan setelah hujan reda, rinduku masih terasa.",
          "Sejak mengenalmu bawaannya aku pengen belajar terus, belajar menjadi yang terbaik buat kamu.",
          "Tahu gak perbedaan pensi sama wajah kamu? Kalau pensil tulisannya bisa dihapus, tapi kalau wajah kamu gak akan ada yang bisa hapus dari pikiran aku.",
          "Bukan Ujian Nasional besok yang harus aku khawatirkan, tapi ujian hidup yang aku lalui setelah kamu meninggalkanku.",
          "Satu hal kebahagiaan di sekolah yang terus membuatku semangat adalah bisa melihat senyumanmu setiap hari.",
          "Kamu tahu gak perbedaanya kalau ke sekolah sama ke rumah kamu? Kalo ke sekolah pasti yang di bawa itu buku dan pulpen, tapi kalo ke rumah kamu, aku cukup membawa hati dan cinta.",
          "Aku gak sedih kok kalo besok hari senin, aku sedihnya kalau gak ketemu kamu.",
          "Momen cintaku tegak lurus dengan momen cintamu. Menjadikan cinta kita sebagai titik ekuilibrium yang sempurna.",
          "Aku rela ikut lomba lari keliling dunia, asalkan engkai yang menjadi garis finishnya.",
          "PR-ku adalah merindukanmu. Lebih kuat dari Matematika, lebih luas dari Fisika, lebih kerasa dari Biologi.",
          "Cintaku kepadamu itu bagaikan metabolisme, yang gak akan berhenti sampai mati.",
          "Kalau jelangkungnya kaya kamu, dateng aku jemput, pulang aku anter deh.",
          "Makan apapun aku suka asal sama kamu, termasuk makan ati.",
          "Cinta itu kaya hukuman mati. Kalau nggak ditembak, ya digantung.",
          "Mencintaimu itu kayak narkoba: sekali coba jadi candu, gak dicoba bikin penasaran, ditinggalin bikin sakaw.",
          "Gue paling suka ngemil karena ngemil itu enak. Apalagi ngemilikin kamu sepenuhnya...",
          "Dunia ini cuma milik kita berdua. Yang lainnya cuma ngontrak.",
          "Bagi aku, semua hari itu adalah hari Selasa. Selasa di Surga bila dekat denganmu...",
          "Bagaimana kalau kita berdua jadi komplotan penjahat? Aku curi hatimu dan kamu curi hatiku.",
          "Kamu itu seperti kopi yang aku seruput pagi ini. Pahit, tapi bikin nagih.",
          "Aku sering cemburu sama lipstikmu. Dia bisa nyium kamu tiap hari, dari pagi sampai malam.",
          "Hanya mendengar namamu saja sudah bisa membuatku tersenyum seperti orang bodoh.",
          "Aku tau teman wanitamu bukan hanya satu, dan menyukaimu pun bukan hanya aku.",
          "Semenjak aku berhenti berharap pada dirimu, aku jadi tidak semangat dalam segala hal..",
          "Denganmu, jatuh cinta adalah patah hati paling sengaja.",
          "Sangat sulit merasakan kebahagiaan hidup tanpa kehadiran kamu disisiku.",
          "Melalui rasa rindu yang bergejolak dalam hati, di situ terkadang aku sangat membutuhkan dekap peluk kasih sayangmu.",
          "Sendainya kamu tahu, sampai saat ini aku masih mencintaimu.",
          "Terkadang aku iri sama layangan..talinya putus saja masih dikejar kejar dan gak rela direbut orang lain...",
          "Aku tidak tahu apa itu cinta, sampai akhirnya aku bertemu denganmu. Tapi, saat itu juga aku tahu rasanya patah hati.",
          "Mengejar itu capek, tapi lebih capek lagi menunggu\nMenunggu kamu menyadari keberadaanku...",
          "Jangan berhenti mencinta hanya karena pernah terluka. Karena tak ada pelangi tanpa hujan, tak ada cinta sejati tanpa tangisan.",
          "Aku punya sejuta alasan unutk melupakanmu, tapi tak ada yang bisa memaksaku untuk berhenti mencintaimu.",
          "Terkadang seseorang terasa sangat bodoh hanya untuk mencintai seseorang.",
          "Kamu adalah patah hati terbaik yang gak pernah aku sesali.",
          "Bukannya tak pantas ditunggu, hanya saja sering memberi harapan palsu.",
          "Sebagian diriku merasa sakit, Mengingat dirinya yang sangat dekat, tapi tak tersentuh.",
          "Hal yang terbaik dalam mencintai seseorang adalah dengan diam-diam mendo akannya.",
          "Kuharap aku bisa menghilangkan perasaan ini secepat aku kehilanganmu.",
          "Demi cinta kita menipu diri sendiri. Berusaha kuat nyatanya jatuh secara tak terhormat.",
          "Anggaplah aku rumahmu, jika kamu pergi kamu mengerti kemana arah pulang. Menetaplah bila kamu mau dan pergilah jika kamu bosan...",
          "Aku bingung, apakah aku harus kecewa atu tidak? Jika aku kecewa, emang siapa diriku baginya?\n\nKalau aku tidak kecewa, tapi aku menunggu ucapannya.",
          "Rinduku seperti ranting yang tetap berdiri.Meski tak satupun lagi dedaunan yang menemani, sampai akhirnya mengering, patah, dan mati.",
          "Kurasa kita sekarang hanya dua orang asing yang memiliki kenangan yang sama.",
          "Buatlah aku bisa membencimu walau hanya beberapa menit, agar tidak terlalu berat untuk melupakanmu.",
          "Aku mencintaimu dengan segenap hatiku, tapi kau malah membagi perasaanmu dengan orang lain.",
          "Mencintaimu mungkin menghancurkanku, tapi entah bagaimana meninggalkanmu tidak memperbaikiku.",
          "Kamu adalah yang utama dan pertama dalam hidupku. Tapi, aku adalah yang kedua bagimu.",
          "Jika kita hanya bisa dipertemukan dalam mimpi, aku ingin tidur selamanya.",
          "Melihatmu bahagia adalah kebahagiaanku, walaupun bahagiamu tanpa bersamaku.",
          "Aku terkadang iri dengan sebuah benda. Tidak memiliki rasa namun selalu dibutuhkan. Berbeda dengan aku yang memiliki rasa, namun ditinggalkan dan diabaikan...",
          "Bagaimana mungkin aku berpindah jika hanya padamu hatiku bersinggah?",
          "Kenangan tentangmu sudah seperti rumah bagiku. Sehingga setiap kali pikiranku melayang, pasti ujung-ujungnya akan selalu kembali kepadamu.",
          "Kenapa tisue bermanfaat? Karena cinta tak pernah kemarau. - Sujiwo Tejo",
          "Kalau mencintaimu adalah kesalahan, yasudah, biar aku salah terus saja.",
          "Sejak kenal kamu, aku jadi pengen belajar terus deh. Belajar jadi yang terbaik buat kamu.",
          "Ada yang bertingkah bodoh hanya untuk melihatmu tersenyum. Dan dia merasa bahagia akan hal itu.",
          "Aku bukan orang baik, tapi akan belajar jadi yang terbaik untuk kamu.",
          "Kita tidak mati, tapi lukanya yang membuat kita tidak bisa berjalan seperti dulu lagi.",
          "keberadaanmu bagaikan secangkir kopi yang aku butuhkan setiap pagi, yang dapat mendorongku untuk tetap bersemangat menjalani hari.",
          "Aku mau banget ngasih dunia ke kamu. Tapi karena itu nggak mungkin, maka aku akan kasih hal yang paling penting dalam hidupku, yaitu duniaku.",
          "Mending sing humoris tapi manis, ketimbang sok romantis tapi akhire tragis.",
          "Ben akhire ora kecewa, dewe kudu ngerti kapan waktune berharap lan kapan kudu mandeg.",
          "Aku ki wong Jowo seng ora ngerti artine 'I Love U'. Tapi aku ngertine mek 'Aku tresno awakmu'.",
          "Ora perlu ayu lan sugihmu, aku cukup mok setiani wes seneng ra karuan.",
          "Cintaku nang awakmu iku koyok kamera, fokus nang awakmu tok liyane mah ngeblur.",
          "Saben dino kegowo ngimpi tapi ora biso nduweni.",
          "Ora ketemu koe 30 dino rasane koyo sewulan.",
          "Aku tanpamu bagaikan sego kucing ilang karete. Ambyar.",
          "Pengenku, Aku iso muter wektu. Supoyo aku iso nemokne kowe lewih gasik. Ben Lewih dowo wektuku kanggo urip bareng sliramu.",
          "Aku ora pernah ngerti opo kui tresno, kajaba sak bare ketemu karo sliramu.",
          "Cinta aa ka neng moal leungit-leungit sanajan aa geus kawin deui.",
          "Kasabaran kaula aya batasna, tapi cinta kaula ka anjeun henteu aya se epna.",
          "Kanyaah akang moal luntur najan make Bayclean.",
          "Kenangan endah keur babarengan jeung anjeun ek tuluy diinget-inget nepi ka poho.",
          "Kuring moal bakal tiasa hirup sorangan, butuh bantosan jalmi sejen.",
          "Nyaahna aa ka neg teh jiga tukang bank keur nagih hutang (hayoh mumuntil).",
          "Kasabaran urang aya batasna, tapi cinta urang ka maneh moal aya beakna.",
          "Hayang rasana kuring ngarangkai kabeh kata cinta anu aya di dunya ieu, terus bade ku kuring kumpulkeun, supaya anjeun nyaho gede pisan rasa cinta kuring ka anjeun.",
          "Tenang wae neng, ari cinta Akang mah sapertos tembang krispatih; Tak lekang oleh waktu.",
          "Abdi sanes jalmi nu sampurna pikeun anjeun, sareng sanes oge nu paling alus kanggo anjeun. Tapi nu pasti, abdi jalmi hiji-hijina nu terus emut ka anjeun.",
          "Cukup jaringan aja yang hilang, kamu jangan.",
          "Sering sih dibikin makan ati. Tapi menyadari kamu masih di sini bikin bahagia lagi.",
          "Musuhku adalah mereka yang ingin memilikimu juga.",
          "Banyak yang selalu ada, tapi kalo cuma kamu yang aku mau, gimana?",
          "Jam tidurku hancur dirusak rindu.",
          "Cukup China aja yang jauh, cinta kita jangan.",
          "Yang penting itu kebahagiaan kamu, aku sih gak penting..",
          "Cuma satu keinginanku, dicintai olehmu..",
          "Aku tanpamu bagaikan ambulans tanpa wiuw wiuw wiuw.",
          "Cukup antartika aja yang jauh. Antarkita jangan."
        ]
        const DinzIDtruth = bucin[Math.floor(Math.random() * bucin.length)]
        reply(`${DinzIDtruth}`)
      }
      break
     case'quotesgombal':
      {

        function pickRandom(list)
        {
          return list[Math.floor(list.length * Math.random())]
        }
        const gombal = [
          "Hal yang paling aku suka yaitu ngemil, namun tau gak ngemil apa yang paling aku suka? ngemilikin kamu sepenuhnya.",
          "Seandainya sekarang adalah tanggal 28 oktober 1928, aku akan ubah naskah sumpah pemuda menjadi sumpah aku cinta kamu.",
          "Aku gak pernah merasakan ketakutan sedikit pun ketika berada didekat kamu, karena kamulah kekuatanku.",
          "Kamu tahu apa persamaan rasa sayangku ke kamu dengan matahari? Persamaannya adalah sama-sama terbit setiap hari dan hanya akan berakhir sampai kiamat.",
          "Kalau bus kota jauh dekat ongkosnya sama, tapi cinta ini dekat-dekat makin saling cinta.",
          "Kalausaja aku harus mengorbankan semua kebahagiaanku hanya untuk sekedar membuat kamu tertawa. Aku rela.",
          "Anjing menggonggong kafilah berlalu, tiap hari bengong mikirin kamu melulu.",
          "Kalau aku jadi wakil rakyat kayaknya bakalan gagal deh. Gimana aku mau mikiran rakyat kalau yang ada dipikiran aku itu cuman ada kamu.",
          "denganambah satu sama dengan dua. Aku sama kamu sama dengan saling cinta.",
          "Kalo kita beda kartu GSM, itu gak masalah asalkan nantinya nama kita berdua ada di kartu Keluarga yang sama.",
          "Masalah yang selalu sulit untukku membuat mu mencintai ku, tapi lebih sulit memaksa hatiku untuk berhenti memikirkan dirimu.",
          "Aku harap kamu tidak menanyakan hal terindah yang pernah singgah di kehidupanku, karena jawaban nya adalah kamu.",
          "Hal yang paling aku suka yaitu ngemil, namun tau gak ngemil apa yang paling aku suka? ngemilikin kamu sepenuhnya.",
          "seandainyaa sekarang adalah tanggal 28 oktober 1928, aku akan ubah naskah sumpah pemuda menjadi sumpah aku cinta kamu.",
          "kuu gak pernah merasakan ketakutan sedikit pun ketika berada didekat kamu, karena kamulah kekuatanku.",
          "kamuu tahu apa persamaan rasa sayangku ke kamu dengan matahari? Persamaannya adalah sama-sama terbit setiap hari dan hanya akan berakhir sampai kiamat.",
          "Kalau bus kota jauh dekat ongkosnya sama, tapi cinta ini dekat-dekat makin saling cinta.",
          "jikaa saja aku harus mengorbankan semua kebahagiaanku hanya untuk sekedar membuat kamu tertawa. Aku rela.",
          "Anjing menggonggong kafilah berlalu, tiap hari bengong mikirin kamu melulu.",
          "Kalau aku jadi wakil rakyat kayaknya bakalan gagal deh. Gimana aku mau mikiran rakyat kalau yang ada dipikiran aku itu cuman ada kamu.",
          "atuu tambah satu sama dengan dua. Aku sama kamu sama dengan saling cinta,.",
          "aloo kita beda kartu GSM, itu gak masalah asalkan nantinya nama kita berdua ada di kartu Keluarga yang sama.",
          "Masalah yang selalu sulit untukku membuat mu mencintai ku, tapi lebih sulit memaksa hatiku untuk berhenti memikirkan dirimu.",
          "Aku tak pernah berjanji untuk sebuah perasaan, namun aku berusaha berjanji untuk sebuah kesetiaan.",
          "Aku sangat berharap kamu tau, kalau aku tidak pernah menyesali cintaku untuk mu, karena bagiku memiliki kamu sudah cukup bagi ku.",
          "Jangankan memilikimu, mendengar kamu kentut aja aku sudah bahagia.",
          "Aku mohon jangan jalan-jalan terus di pikiranku, duduk yang manis di hatiku saja.",
          "Berulang tahun memang indah, namun bagiku yang lebih indah jika berulang kali bersamamu.",
          "Napas aku kok sesek banget ya?, karena separuh nafasku ada di kamu.",
          "Jika ada seseorang lebih memilih pergi meninggalkan kamu, jangan pernah memohon padanya untuk tetap bertahan. Karena jika dia cinta, dia tak akan mau pergi.",
          "jangann diam aja dong, memang diam itu emas, tapi ketahuilah suara kamu itu seperti berlian.",
          "Kesasar itu serasa rugi banget, namun aku nggak merasa rugi karena cintaku sudah Biasanya orang yang lagi nyasar itu rugi ya, tapi tau gak? Aku gak merasa rugi sebab cintaku sudah nyasar ke hati bidadari.",
          "Ada 3 hal yang paling aku sukai di dunia ini, yaitu Matahari, Bulan dan Kamu. Matahari untuk siang hari, Bulan untuk malam hari dan Kamu untuk selamanya dihatiku.",
          "Sayang, kamu itu seperti garam di lautan, tidak terlihat namun akan selalu ada untuk selamanya.",
          "kuu gak perlu wanita yang sholeha, tapi bagaimana menuntun wanita yang aku cintai menjadi seorang yang sholehah.",
          "Aku tidak minta bintang atau bulan kepadamu. Cukup temani aku selamanya di bawah cahayanya.",
          "Akuana kalo kita berdua jadi komplotan penjahat: Aku mencuri hatimu, dan kamu mencuri hatiku?",
          "Aku gak perlu wanita yang cantik, tapi bagaimana aku menyanjung wanita yang aku cintai seperti wanita yang paling cantik di bumi ini.",
          "Aku pengen bersamamu cuma pada dua waktu: SEKARANG dan SELAMANYA.",
          "Akuu tuh bikin aku ga bisa tidur tau ga?",
          "Soalnya kamu selalu ada dibayang-bayang aku terus.",
          "Jika aku bisa jadi bagian dari dirimu,aku mau jadi air matamu,yang tersimpan di hatimu, lahir dari matamu, hidup di pipimu, dan mati di bibirmu.",
          "Papa kamu pasti kerja di apotik ya? | kenapa bang? | karena cuma kamu obat sakit hatiku.",
          "akuu selalu berusaha tak menangis karenamu, karena setiap butir yang jatuh, hanya makin mengingatkan, betapa aku tak bisa melepaskanmu.",
          "mauu nanya jalan nih. Jalan ke hatimu lewat mana ya?",
          "Andai sebuah bintang akan jatuh setiap kali aku mengingatmu, bulan pasti protes. Soalnya dia bakal sendirian di angkasa.",
          "Andai kamu gawang aku bolanya. Aku rela ditendang orang-orang demi aku dapat bersamamu,",
          "Dingin malam ini menusuk tulang. Kesendirian adalah kesepian. Maukah kau jadi selimut penghangat diriku?",
          "Keindahan Borobudur keajaiban dunia, keindahan kamu keajaiban cinta.",
          "Aku ingin mengaku dosa. Jangan pernah marah ya. Maafkan sebelumnya. Tadi malam aku mimpiin kamu jadi pacarku. Setelah bangun, akankah mimpiku jadi nyata?",
          "Kalau nggak sih aku bilang aku cinta kamu hari ini? Kalau besok gimana? Besok lusa? Besoknya besok lusa? Gimana kalau selamanya?",
          "Orangtuamu pengrajin bantal yah? Karena terasa nyaman jika di dekatmu.",
          "Jika malam adalah jeruji gelap yang menjadi sangkar, saya ingin terjebak selamanya di sana bersamamu.",
          "Sekarang aku gendutan gak sih? Kamu tau gak kenapa ? Soalnya kamu sudah mengembangkan cinta yang banyak di hatiku.",
          "Di atas langit masih ada langit. Di bawah langit masih ada aku yang mencintai kamu.",
          "Tau tidak kenapa malam ini tidak ada bintang? Soalnya bintangnya pindah semua ke matamu?",
          "Aku mencintaimu! Jika kamu benci aku, panah saja diriku. Tapi jangan di hatiku ya, karena di situ kamu berada.",
          "Bapak kamu pasti seorang astronot? | kok tau? | Soalnya aku melihat banyak bintang di matamu.",
          "Bapak kamu dosen ya? | kok tau? | karena nilai kamu A+ di hatiku.",
          "Kamu pasti kuliah di seni pahat ya? | kok tau sih? | Soalnya kamu pintar sekali memahat namamu di hatiku.",
          "Ya Tuhan, jika dia jodohku, menangkanlah tender pembangunan proyek menara cintaku di hatinya.",
          "Kamu mantan pencuri ya? | kok tau? | Abisnya kamu mencuri hatiku sih!",
          "Cowok : Aku suka senyum-senyum sendiri lho. | Cewek : Hah .. Gila Ya | Cowok : Nggak. Aku sedang mikirin kamu.",
          "Setiap malam aku berjalan-jalan di suatu tempat. Kamu tau di mana itu ? | gatau, emang dimana? | Di hatimu.",
          "Kamu pake Telkomesl ya? Karena sinyal-sinyal cintamu sangat kuat sampai ke hatiku.",
          "Kamu tahu gak sih? AKu tuh capek banget. Capek nahan kangen terus sama kamu.",
          "katanyaa kalau sering hujan itu bisa membuat seseorang terhanyut, kalau aku sekarang sedang terhanyut di dalam cintamu.",
          "Aku harap kamu jangan pergi lagi ya? karena, bila aku berpisah dengamu sedetik saja bagaikan 1000 tahun rasanya.",
          "Aku sih gak butuh week end, yang aku butuhkan hanyalah love you till the end.",
          "Emak kamu tukang Gado gado ya?, kok tau sih?, Pantesan saja kamu telah mencampur adukan perasaanku",
          "Walau hari ini cerah, tetapi tanpa kamu disisiku sama saja berselimutkan awan gelap di hati ini",
          "Kamu ngizinin aku kangen sehari berapa kali neng? Abang takut over dosis.",
          "cintaa aku ke kamu tuh bagaikan hutang, awalnya kecil, lama-lama didiemin malah tambah gede.",
          "Berulang tahun adalah hari yang indah. Tapih akin lebih indah kalo udah berulang-ulang kali bersama kamu."
        ]
        let bacotan = pickRandom(gombal)
        reply(bacotan)

      }
      break 
      
      
      case 'sticker': case 's': case 'stickergif': case 'sgif': {
 if (!quoted) return reply`Balas Video/Image Dengan Caption ${prefix + command}`
if (/image/.test(mime)) {
await loading()
let media = await quoted.download()
let encmedia = await romzz.sendImageAsStickerAV(from, media, kenzaki, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply2('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await romzz.sendVideoAsSticker(from, media, kenzaki, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
}
}
break
   
   case 'tagall': case 'tgll': {
if (!isCreator && !isAdmins) return reply(mess.admin)
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.cadmin)
 reply(mess.wait)
let teks = `══✪〘 *👥 Tag All* 〙✪══
 ➲ *Pesan : ${q ? q : 'kosong'}*\n\n`
for (let mem of participants) {
teks += `⭔ @${mem.id.split('@')[0]}\n`
}
romzz.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
}
break

case 'buka': {
if (!isCreator && !isAdmins) return reply(mess.admin)
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.cadmin)

  await romzz.groupSettingUpdate(from, 'not_announcement')
    .then(() => reply(`✦ Grup telah *dibuka*\nSekarang semua member dapat mengirim pesan.`))
    .catch((err) => reply(jsonformat(err)))
}
break
   
   case 'tutup': {
if (!isCreator && !isAdmins) return reply(mess.admin)
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply2(mess.cadmin)

  await romzz.groupSettingUpdate(from, 'announcement')
    .then(() => reply(`✦ Grup telah *ditutup*\nSekarang hanya *admin* yang dapat mengirim pesan.`))
    .catch((err) => reply(jsonformat(err)))
}
break
   
   case 'xnxxsearch': {
  if (!isPremium && !isCreator) return reply(mess.premium);
if (!text) return reply(`Example: ${prefix + command} indo`);

  reply('🔍 Sedang mencari video di XNXX...');

  try {
    const res = await fetchJson(`https://cikaa-rest-api.vercel.app/search/xnxx?q=${encodeURIComponent(text)}`);
    if (!res.status || !res.result || res.result.length === 0)
      return reply('❌ Tidak ditemukan hasil video.');

    let teks = `*🔞 Hasil Pencarian XNXX untuk:* _${text}_\n\n`;
    const list = res.result.slice(0, 5);

    list.forEach((v, i) => {
      teks += `*${i + 1}. ${v.title}*\n`;
      teks += `📊 ${v.info.trim()}\n`;
      teks += `🔗 ${v.link}\n\n`;
    });

    reply(teks.trim());

  } catch (err) {
    console.error(err);
    reply('❌ Gagal mengambil hasil dari XNXX.');
  }
}
break
   
   
   case 'mediafire': {
  if (!text) return reply(`${prefix + command} linknya`);
  try {
    const res = await fetch(`https://api.siputzx.my.id/api/d/mediafire?url=${encodeURIComponent(text)}`);
    const result = await res.json();

    if (!result?.status || !result?.data?.downloadLink) {
      throw new Error(`Respons API gagal atau format tidak sesuai:\n${JSON.stringify(result)}`);
    }

    const {
      fileName,
      fileSize,
      downloadLink,
      mimeType,
      fileType
    } = result.data;

    await romzz.sendMessage(m.chat, {
      document: { url: downloadLink },
      fileName: fileName,
      mimetype: mimeType || 'application/octet-stream',
      caption:
        `乂 M E D I A F I R E- DOWNLOAD\n` +
        `   ◦  *Nama:* ${fileName}\n` +
        `   ◦  *Ukuran:* ${fileSize}\n` +
        `   ◦  *Tipe:* ${fileType}`
    }, { quoted: m });

  } catch (e) {
    console.error('MEDIAFIRE ERROR', e);
    reply(`[ x ] Gagal: ${e.message}`);
  }
}
break
   
   case 'play1': {
  if (!text) return reply(`Example : ${prefix + command} mendua`)
  const yts = require('yt-search')
  let search = await yts(text)
  let res = search.all[0]
  if (!res) return reply("Tidak ditemukan hasil untuk query tersebut.")
  let linknya = res.url
  let caption = `*──「 YOUTUBE PLAY 」──*

*Title:* ${res.title}
*Views:* ${res.views}
*Duration:* ${res.timestamp}
*Uploaded:* ${res.ago}
*Url:* ${linknya}

*Sedang mengunduh audio...*
`
  await romzz.sendMessage(m.chat, {
    image: { url: res.thumbnail },
    caption,
    contextInfo: {
      mentionedJid: [m.sender],
      forwardingScore: 999,
      isForwarded: true,
      externalAdReply: {
        title: res.title,
        body: "Hasil YouTube",
        mediaType: 1,
        thumbnailUrl: res.thumbnail,
        renderLargerThumbnail: true,
        sourceUrl: linknya
      }
    }
  }, { quoted: m })
downloadMp3(linknya)
}
break
   
 case 'getpp':{
if (!m.isGroup) return reply ("Digunakan Khsus Dalam Group")
if (!text) return reply('tag orang nya \nexample .getpp @')
let userss = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
let ghosst = userss
	try {
   var ppuser = await romzz.profilePictureUrl(ghosst, 'image')
} catch (err) {
   var ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
romzz.sendMessage(from, { image: { url: ppuser }}, { quoted: m })
}
break   
  
   case 'ppgroup': case 'setppgroup': case 'setgcpp': case 'setgrouppp': {
if (!m.isGroup) return reply(mess.only.group)
if (!isAdmins && !DanzTheCreator) return reply('Khusus Admin!!')
if (!isBotAdmins) return reply('_Bot Harus Menjadi Admin Terlebih Dahulu_')
if (!quoted) return replynano(`Where is the picture?`)
if (!/image/.test(mime)) return reply(`Kirim/Balas Gambar Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return reply(`Kirim/Balas Gambar Dengan Caption ${prefix + command}`)
var mediz = await romzz.downloadAndSaveMediaMessage(quoted, 'ppgc.jpeg')
if (args[0] == `full`) {
var { img } = await generateProfilePicture(mediz)
await romzz.query({
tag: 'iq',
attrs: {
to: m.chat,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(mediz)
reply(`Success`)
} else {
var memeg = await romzz.updateProfilePicture(m.chat, { url: mediz })
fs.unlinkSync(mediz)
reply(`Success`)
}
}
break
case 'deleteppgroup': case 'delppgc': case 'deleteppgc': case 'delppgroup': case 'hppgc': {
if (!m.isGroup) return reply(mess.only.group)
if (!isAdmins && !isCreator) return reply('Khusus Admin!!')
if (!isBotAdmins) return reply('_Bot Harus Menjadi Admin Terlebih Dahulu_')
    await romzz.removeProfilePicture(from)
    }
    break
   
   case 'cekidch': case 'idch': {
if (!text) return m.reply("linkchnya")
if (!text.includes("https://whatsapp.com/channel/")) return m.reply("Link tautan tidak valid")
let result = text.split('https://whatsapp.com/channel/')[1]
let res = await romzz.newsletterMetadata("invite", result)
let teks = `
* *ID :* ${res.id}
* *Nama :* ${res.name}
* *Total Pengikut :* ${res.subscribers}
* *Status :* ${res.state}
* *Verified :* ${res.verification == "VERIFIED" ? "Terverifikasi" : "Tidak"}
`
return m.reply(teks)
}
break
  case 'cekidgc': {
if (!isPremium) return reply(mess.premium)
let getGroups = await romzz.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
let teks = `⬣ *LIST GROUP DI BAWAH*\n\nTotal Group : ${anu.length} Group\n\n`
for (let x of anu) {
let metadata2 = await romzz.groupMetadata(x)
teks += `◉ Nama : ${metadata2.subject}\n◉ ID : ${metadata2.id}\n◉ Member : ${metadata2.participants.length}\n\n────────────────────────\n\n`
}
reply(teks + `Untuk Penggunaan Silahkan Ketik Command ${prefix}pushkontakv3 id|teks\n\nSebelum Menggunakan Silahkan Salin Dulu Id Group Nya Di Atas`)
}
break 
   
   
  case 'jadwalsholat': {
if (!text) return reply(`• *Example :* ${prefix + command} jakarta pusat`)
async function jadwalSholat(kota) {
  try {
    const { data } = await axios.get(`https://www.dream.co.id/jadwal-sholat/${kota}/`);
    const $ = cheerio.load(data);
    const rows = $(".table-index-jadwal tbody tr");
    const jadwal = [];
    rows.each((index, row) => {
      const cols = $(row).find("td");
      jadwal.push({
        subuh: $(cols[1]).text().trim(),
        duha: $(cols[2]).text().trim(),
        zuhur: $(cols[3]).text().trim(),
        asar: $(cols[4]).text().trim(),
        magrib: $(cols[5]).text().trim(),
        isya: $(cols[6]).text().trim(),
      });
    });
    return jadwal[0];
  } catch (error) {
    throw new Error("Gagal mengambil data jadwal sholat");
  }
}
  try {
    const jadwal = await jadwalSholat(text);
    const caption = `
┌「 ${text.toUpperCase()} 」
├ Subuh: ${jadwal.subuh}
├ Dhuha: ${jadwal.duha}
├ Dzuhur: ${jadwal.zuhur}
├ Ashar: ${jadwal.asar}
├ Maghrib: ${jadwal.magrib}
├ Isya: ${jadwal.isya}
└──────────`.trim();
    const thumbnailUrl = "https://files.catbox.moe/r3mbjq.jpg";
    await romzz.sendMessage(m.chat, {
      text: caption,
      contextInfo: {
        forwardingScore: 2025,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterJid: global.idSaluran,
          serverMessageId: null,
          newsletterName: "-V5",
        },
        externalAdReply: {
          title: `Jadwal Sholat Harian`,
          mediaType: 1,
          previewType: 1,
          body: `Informasi waktu sholat untuk kota ${text}`,
          thumbnailUrl,
          renderLargerThumbnail: true,
          mediaUrl: "https://www.islamicfinder.org",
          sourceUrl: "https://www.islamicfinder.org",
        },
      },
    }, { quoted: m });
  } catch (error) {
    m.reply("Gagal mendapatkan jadwal sholat. Pastikan nama kota benar.");
  }
}
break 
case 'pintr': {
  if (!text) return m.reply(`Contoh: ${prefix}pin christy jkt48`)
  try {
    const data = await fetchJson(`https://www.archive-ui.biz.id/search/pinterest?q=${encodeURIComponent(text)}`)
    if (!data.result || data.result.length === 0) return m.reply('Gambar tidak ditemukan.')
    let index = isNaN(args[1]) ? 0 : parseInt(args[1])
    if (index >= data.result.length) return m.reply('Sudah mencapai gambar terakhir.')

    let hasil = data.result[index].image_hd

    const buttons = [
      {
        buttonId: `${prefix}pin ${text} ${index + 1}`,
        buttonText: {
          displayText: 'Next'
        },
        type: 1
      }
    ]

    await romzz.sendMessage(m.chat, {
      image: { url: hasil },
      caption: `Menampilkan gambar ke *${index + 1}* dari *${data.result.length}*.\nKlik tombol *Next* untuk lanjut.`,
      footer: null,
      buttons: buttons,
      headerType: 1,
      viewOnce: true
    }, { quoted: m })
  } catch (err) {
    console.error(err.message)
    m.reply('Terjadi kesalahan saat mengambil gambar.')
  }
}
break   
   
case 'hd': 
  case 'remini': {
const FormData = require("form-data");
const mime = require("mime-types");
const axios = require("axios");
const fs = require("fs");
const path = require("path");
      if (!quoted) return reply(`Dimana gambarnya?`)
      romzz.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }})
async function pomf2(filePath) {
    try {
        if (!fs.existsSync(filePath)) throw new Error("File tidak ditemukan");
        const contentType = mime.lookup(filePath) || "application/octet-stream";
        const fileName = path.basename(filePath);
        const ext = path.extname(filePath).toLowerCase();
        const form = new FormData();
        form.append("files[]", fs.createReadStream(filePath), {
            contentType,
            filename: fileName, // Paksa nama file tetap JPG
        });
        const response = await axios.post("https://qu.ax/upload.php", form, {
            headers: {
                ...form.getHeaders(),
            },
        });

        // Cek hasil
        if (!response.data.success || !response.data.files?.length) throw new Error("Upload gagal");
        
        return response.data.files[0].url;
    } catch (err) {
        console.error("Error:", err.message);
        return null;
    }
}
    try {
      const media = await romzz.downloadAndSaveMediaMessage(quoted)
        let link = await pomf2(media);
let anjai = await fetchJson(`https://api.vreden.my.id/api/artificial/hdr?url=${link}&pixel=4`)
let result = anjai.result.data.downloadUrls[0]
romzz.sendMessage(m.chat, { image: { url: result }, caption: 'succes' }, { quoted: m })
      } catch (error) {
          console.error(error)
          reply('yah Error kak laporankan ke owner agar di perbaiki')
      }
  }
  break   
   
   case 'spotify': case 'spotifysearch': case 'sps':  {
if (!text) return reply('Masukan judul lagu!')
const resul = await fetchJson(`https://api.hiuraa.my.id/search/spotify?q=${encodeURIComponent(text)}`)
const result = resul.result
    let caption = result.map((v, i) => {
        return {
                header: "",
                title: v.title,
                description: `Link: ${v.url}`,
                id: '.spdl ' + v.url
            }
        })
        let msg = generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
                message: {
                    messageContextInfo: {
                        deviceListMetadata: {},
                        deviceListMetadataVersion: 2
                    },
                    interactiveMessage: {
                        body: {
                            text: `🔎 Hasil Pencarian Dari ${text}\nSilahkan Pilih List dibawah ini`,
                        },
                        footer: {
                            text: 'Gonz-Naks'
                        },
                        header: {
                            title: "Spotify - Search",
                            subtitle: "",
                            hasMediaAttachment: false,
                        },
                        nativeFlowMessage: {
                            buttons: [
                                {
                                    name: "single_select",
                                    buttonParamsJson: JSON.stringify({
                                        title: "CLICK HERE",
                                        sections: [
                                            {
                                                title: "",
                                                rows: caption
                                            }
                                        ]
                                    })
                                }
                            ]
                        }
                    }
                }
            }
        }, { quoted: m }, {});
        await romzz.relayMessage(msg.key.remoteJid, msg.message, {
            messageId: msg.key.id
        });
}
break
case 'spdl': case 'spotifydl': {
if (!text) return reply('Masukan Link')
let result = await spotifydl(text)
let captionvid = `∘ Title: ${result.title}\n∘ Artist: ${result.artis}\n∘ Type: ${result.type}\n\nGonzales naks`
 const p = await new canvafy.Spotify()
            .setTitle(result.title)
            .setAuthor("Spotify - Downloader")
            .setTimestamp(40, 100)
            .setOverlayOpacity(0.8)
            .setBorder("#fff", 0.8)
            .setImage(result.image)
            .setBlur(3)
            .build(); 

       await romzz.sendMessage(from, { image: p, caption: captionvid }, { quoted: m })
    romzz.sendMessage(m.chat, { audio: { url: result.download}, mimetype: 'audio/mpeg', filename: 'MP3 BY ' + 'Selly' }, { quoted: m });
}
break
   
   case 'y': {
 if (!text) return m.reply(`Kirim kata kunci!\nContoh: .play Bokep hitam`);
 try {
 m.reply('🌀 Prosess Woyy...');
 const searchUrl = `https://apii.baguss.web.id/search/youtube?apikey=bagus&q=${encodeURIComponent(text)}`;
 const searchRes = await axios.get(searchUrl);
 if (!searchRes.data.success || !searchRes.data.youtube?.url) return m.reply('❌ Tidak ditemukan hasil.');
 const videoUrl = searchRes.data.youtube.url;
 const videoTitle = searchRes.data.youtube.title;
 const downloadUrl = `https://apii.baguss.web.id/downloader/ytmp3?apikey=bagus&url=${encodeURIComponent(videoUrl)}`;
 const dlRes = await axios.get(downloadUrl);
 const dlData = dlRes.data;
 if (!dlData.success || !dlData.link) return m.reply('❌ Gagal mengunduh audio.');
 await romzz.sendMessage(m.chat, {
 audio: { url: dlData.link },
 mimetype: 'audio/mpeg',
 fileName: `${videoTitle}.mp3`,
 ptt: false
 }, { quoted: m });
 } catch (err) {
 console.error(err);
 m.reply('❌ Terjadi kesalahan saat memproses permintaanmu.');
 }
 }
 break
   
   case 'getstick': {
 if (!text) return m.reply(`Kirim nama stiker pack!\nContoh: .${command} elaina`);
   reply('🌀 Prosesss Bossquuu');

 const axios = require('axios');
 const { writeFileSync, unlinkSync, readFileSync } = require('fs');
 const { exec } = require('child_process');
 const path = require('path');

 const res = await axios.get(`https://apii.baguss.web.id/tools/getstickpack?apikey=bagus&query=${encodeURIComponent(text)}`);
 const data = res.data;

 if (!data.success || !data.stickers || data.stickers.length === 0)
 return m.reply('❌ Stiker tidak ditemukan.');

 const randomStickerUrl = data.stickers[Math.floor(Math.random() * data.stickers.length)];
 const response = await axios.get(randomStickerUrl.split('?')[0], { responseType: 'arraybuffer' });

 const inputPath = path.join(__dirname, 'temp.png');
 const outputPath = path.join(__dirname, 'temp.webp');
 writeFileSync(inputPath, response.data);

 exec(`ffmpeg -i "${inputPath}" -vf "scale=512:512:force_original_aspect_ratio=decrease" -c:v libwebp -preset default -an -vsync 0 "${outputPath}"`, async (err) => {
 if (err) {
 console.error('❌ Gagal convert ke sticker:', err);
 return m.reply('Gagal convert stiker.');
 }

 const stickerBuffer = readFileSync(outputPath);
 await romzz.sendMessage(m.chat, { sticker: stickerBuffer }, { quoted: m });
 unlinkSync(inputPath);
 unlinkSync(outputPath);
 });

 console.error(err);
 m.reply('❌ Terjadi kesalahan saat mengambil atau mengonversi stiker.');
 }
break;

case 'antichannel': {
 if (!isGroup) return m.reply('❌ Hanya untuk grup!');
 if (!isAdmins) return m.reply('❌ Hanya admin yang bisa pakai perintah ini!');

 const id = m.chat;
 const enable = text === 'on';

 if (enable) {
 if (!antichList.includes(id)) antichList.push(id);
 m.reply('✅ Anti Channel aktif di grup ini!');
 } else {
 antichList = antichList.filter(gid => gid !== id);
 m.reply('✅ Anti Channel dinonaktifkan di grup ini!');
 }

 fs.writeFileSync('./lib/database/antich.json', JSON.stringify(antichList, null, 2));
}
break;
case 'toanime': {
  if (!isCreator) reply("lu siapa")
 const fs = require('fs');
 const FormData = require('form-data');
 const axios = require('axios');

 try {
 const q = m.quoted || m;
 const mime = (q.msg || q).mimetype || '';
 if (!mime.startsWith('image/')) return m.reply("❌ Kirim atau reply gambar terlebih dahulu.");

 const mediaPath = await romzz.downloadAndSaveMediaMessage(q);

 const form = new FormData();
 form.append("reqtype", "fileupload");
 form.append("fileToUpload", fs.createReadStream(mediaPath));

 const uploadRes = await axios.post("https://catbox.moe/user/api.php", form, {
 headers: form.getHeaders(),
 maxContentLength: Infinity,
 maxBodyLength: Infinity
 });

 if (!uploadRes.data || !uploadRes.data.startsWith("https://")) {
 throw new Error("❌ Gagal upload ke Catbox");
 }

 const imageUrl = uploadRes.data;
 if (fs.existsSync(mediaPath)) fs.unlinkSync(mediaPath);

 await m.reply('🎨 Mengubah foto menjadi gaya Anime...');

 const gender = 'male'; 
 const prompt = 'Elegant and majestic';

 const apiUrl = `https://fastrestapis.fasturl.cloud/aiimage/toanime?imageUrl=${encodeURIComponent(imageUrl)}&gender=${gender}&specificPrompt=${encodeURIComponent(prompt)}`;

 const resultImage = await axios.get(apiUrl, {
 responseType: 'arraybuffer'
 });

 await romzz.sendMessage(m.chat, {
 image: Buffer.from(resultImage.data),
 caption: '✨ Foto berhasil diubah ke versi Anime!'
 }, { quoted: m });

 } catch (e) {
 console.error(e);
 m.reply("⚠️ Terjadi kesalahan: " + e.message);
 }
}
break

case "h":
case "hidetag": {
if (!isGroup) return reply('only group')
if (!isOwner) return romzz.sendMessage(from, {audio: fs.readFileSync('./media/own.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
if (m.quoted) {
romzz.sendMessage(m.chat, {
forward: m.quoted.fakeObj,
mentions: participants.map(a => a.id)
})
}
if (!m.quoted) {
romzz.sendMessage(m.chat, {
text: q ? q : '',
mentions: participants.map(a => a.id)
}, { quoted: m })
}
}
break

case "reactch": case "rch": {
 if (!text) return m.reply("Gini Cok Caranya\n\ncontoh: .reactch linkpesan 😂");
 if (!args[0] || !args[1]) return m.reply("Wrong Format");
 if (!args[0].includes("https://whatsapp.com/channel/")) return m.reply("Link tautan tidak valid");

 let result = args[0].split('/')[4];
 let serverId = args[0].split('/')[5];
 let res = await romzz.newsletterMetadata("invite", result);

 function convertToStyledFont(text) {
 const base = {
 '-': '➖', a: '🅐', b: '🅑', c: '🅒', d: '🅓', e: '🅔',
 f: '🅕', g: '🅖', h: '🅗', i: '🅘', j: '🅙',
 k: '🅚', l: '🅛', m: '🅜', n: '🅝', o: '🅞',
 p: '🅟', q: '🅠', r: '🅡', s: '🅢', t: '🅣',
 u: '🅤', v: '🅥', w: '🅦', x: '🅧', y: '🅨', z: '🅩',
 A: '🅐', B: '🅑', C: '🅒', D: '🅓', E: '🅔',
 F: '🅕', G: '🅖', H: '🅗', I: '🅘', J: '🅙',
 K: '🅚', L: '🅛', M: '🅜', N: '🅝', O: '🅞',
 P: '🅟', Q: '🅠', R: '🅡', S: '🅢', T: '🅣',
 U: '🅤', V: '🅥', W: '🅦', X: '🅧', Y: '🅨', Z: '🅩'
 };
 return text.split('').map(char => base[char] || char).join('');
 }

 let reaction = convertToStyledFont(args.slice(1).join(' '));
 await romzz.newsletterReactMessage(res.id, serverId, reaction);
 m.reply(`Berhasil mengirim reaction "${reaction}" ke dalam channel ${res.name}`);
}
break;


case 'grok': case 'gpt': case 'ai': {
    const axios = require('axios');
 
    async function chatai(question, { system_prompt = null, model = 'grok-3-mini' } = {}) {
        try {
            const _model = ['gpt-4.1-nano', 'gpt-4.1-mini', 'gpt-4.1', 'o4-mini', 'deepseek-r1', 'deepseek-v3', 'claude-3.7', 'gemini-2.0', 'grok-3-mini', 'qwen-qwq-32b', 'gpt-4o', 'o3', 'gpt-4o-mini', 'llama-3.3'];
            if (!question) throw new Error('Question is required');
            if (!_model.includes(model)) throw new Error(`Available models: ${_model.join(', ')}`);
 
            const { data } = await axios.post('https://api.appzone.tech/v1/chat/completions', {
                messages: [
                    ...(system_prompt ? [{ role: 'system', content: [{ type: 'text', text: system_prompt }] }] : []),
                    { role: 'user', content: [{ type: 'text', text: question }] }
                ],
                model: model,
                isSubscribed: true
            }, {
                headers: {
                    'authorization': 'Bearer az-chatai-key', 'content-type': 'application/json',
                    'user-agent': 'okhttp/4.9.2', 'x-app-version': '3.0',
                    'x-requested-with': 'XMLHttpRequest', 'x-user-id': '$RCAnonymousID:84947a7a4141450385bfd07a66c3b5c4'
                }
            });
 
            let fullText = '';
            const lines = data.split('\n\n').map(line => line.substring(6));
            for (const line of lines) {
                if (line === '[DONE]') continue;
                try {
                    const d = JSON.parse(line);
                    fullText += d.choices[0].delta.content;
                } catch (e) {}
            }
 
            const thinkMatch = fullText.match(/<think>([\s\S]*?)<\/think>/);
            return {
                think: thinkMatch ? thinkMatch[1].trim() : '',
                response: fullText.replace(/<think>[\s\S]*?<\/think>/, '').trim()
            };
        } catch (error) {
            const errorMessage = error.response?.data?.error?.message || error.message;
            throw new Error(errorMessage);
        }
    }
 
    if (!text) {
        return reply(`Mau tanya apa ke ${prefix + command}\n\nContoh:\n*${prefix + command} Siapa penemu bola lampu?*`);
    }
 
    try {
        await romzz.sendMessage(m.chat, {
            react: {
                text: "🎃",
                key: m.key
            }
        });
 
        const result = await chatai(text, { model: 'grok-3-mini' });
 
        let replyText = '';
        if (result.think && result.think.trim() !== '') {
            const formattedThink = result.think
                .split('\n')
                .map(line => `> ${line.trim()}`)
                .join('\n');
            replyText += `*Think: Werbot*\n${formattedThink}\n\n`;
        }
        replyText += `*Respon: Werbot *\n${result.response}`;
        await m.reply(replyText.trim());
 
    } catch (error) {
        console.error("Grok AI Error:", error);
        await m.reply(`terjadi kesalahan:\n\n_${error.message}_`);
    }
 
    break;
}


case 'allmenu': case 'gonzz':
      {

        romzz.sendMessage(m.chat,
        {
          react:
          {
            text: `⏱️`,
            key: m.key
          }
        })
        let memek = `${prefix + command}`
        romzz.sendMessage(m.chat,
        {
          video: fs.readFileSync('./media/elaina.mp4'),
          gifPlayback: true,
          caption: `𝙷𝚊𝚒 *${pushname}* *aku adalah XDica BOT yang bisa membantumu kamu bisa menggunakan menu apapun yah tapi aku masih tahap penembangan*

[ *𝙸 𝙽 𝙵 𝙾 𝚁 𝙼 𝙰 𝚂 𝙸 - 𝙱 𝙾 𝚃* ]
- ᴄʀᴇᴀᴛᴏʀ : Gx Dikzz 
- ᴠᴇʀsɪ : ${versi}
- ɴᴀᴍᴀ ʙᴏᴛ : ${botname}
- ʀᴜɴᴛɪᴍᴇ : ${runtime(process.uptime())}

[ *𝙸 𝙽 𝙵 𝙾 𝚁 𝙼 𝙰 𝚂 𝙸 - 𝚄 𝚂 𝙴 𝚁* ]
- ɴᴀᴍᴀ : ${pushname}
- sᴛᴀᴛᴜs : ${isOwner ? 'Owner' : isPremium ? 'Premium' : 'Free'}
- ɴᴏᴍᴏʀ : ${nomor}

*</> OWNER MENU </>*
 ■.addprem
 ■.delprem
 ■.addowner
 ■.delowner
 ■.mode public/self
 ■.leave
 ■.getcase
 
 *</> GROUP MENU </>*
  ■.antilinkgc
  ■.antilinkch
  ■.promote
  ■.demote
  ■.kick
  ■.tutup
  ■.buka
  ■.tgll
  ■.setppgc
  ■.delppgc
  ■.liston
  
   *</> AI MENU </>*
  ■.gpt
  ■.ai
  ■.grok
  ■.ai4ch
  
  *</> BOT MENU </>*
  ■.tagme
  ■.jadibot
  ■.stopjadibot
  ■.owner
  
 *</> TOOLS MENU </>*
  ■.rvo
  ■.rch
  ■.$
  ■.vv
  ■.uu
  ■.<
  ■.cweb1
  ■.ssweb
  
  *</> ANIME MENU </>*
 ■.animeneko
 ■.animepat
 ■.animeslap
 ■.animecuddle
 ■.animewaifu
 ■.animenom
 ■.animefoxgirl
 ■.animetickle
 ■.animegecg
 ■.randomelaina
 ■.rdelaina

*</> DOWNLOAD MENU </>* 
■.mediafire
■.sfile
■.gdrive
■.igdl
■.tiktok

*</> SEARCH MENU </>* 
■.pinterest
■.xnxxsearch
■.plays
■.jadwalsholat
■.google
■.gimage
■.plays
■.paptt 1/3

*</> SRICKER MENU </>*
■.stickkiss
■.stickcry
■.sticklick
■.stickpat
■.stickhug
■.stickkill
■.stickspank
■.sticktickle
■.stickyeet
■.stickbite
■.stickbully
■.stickbonk
■.stickwink
■.sticknom
■.stickpoke
■.stickslap
■.sticksmile
■.stickwave
■.stickawoo
■.stickblush
■.sticklomp
■.sticksmug
■.stickhappy
■.stickdance
■.stickcringe

*</> MAIN MENU </>*
■.thanksto
■.listgc
■.tes
■.stabilkan
■.bot
■.qut
■.owner
■.runtime
■.totalfitur
■.toanime

*</> FUN MENU </>*
■.hitamkan (reply image)


*</> MAKER MENU </>*
■.sticker
■.qc
■.bratvid
■.brat
■.emojimix
■.sgif

*</> QUOTES MENU </>*
■.quoteshacker
■.quotesbijak
■.quotesbacot
■.quotesmotivasi
■.quotesgalau
■.quotesgombal
■.quotesanime

> Pecinta Elaina
`,
          contextInfo:
          {
            forwardingScore: 1,
            isForwarded: true,
            forwardedNewsletterMessageInfo:
            {
              newsletterName: `${global.ownername}`,
              newsletterJid: global.idSaluran,
            },
            externalAdReply:
            {
              title: botname,
              body: ownername,
              thumbnailUrl: global.thumbmenu,
              sourceUrl: global.linkSaluran,
              mediaType: 1,
              renderLargerThumbnail: true,

              externalAdReply:
              {
                mentionedJid: [m.sender]
              }
            }
          }
        },
        {
          quoted: m
        })
        let muskk = {
          audio: fs.readFileSync("./media/elaina.mp4"),
          mimetype: 'audio/mp4',
          ptt: true,

        };
        await romzz.sendMessage(m.chat, muskk,
        {
          quoted: m
        })
      }
      break

case "tourl": case "tourl2": {
if (!/image|video/.test(mime)) return m.repl("dengan reply foto/vidio")
async function dt (buffer) {
  const fetchModule = await import('node-fetch');
  const fetch = fetchModule.default
  let { ext } = await fromBuffer(buffer);
  let bodyForm = new FormData();
  bodyForm.append("fileToUpload", buffer, "file." + ext);
  bodyForm.append("reqtype", "fileupload");
  let res = await fetch("https://catbox.moe/user/api.php", {
    method: "POST",
    body: bodyForm,
  });
  let data = await res.text();
  return data;
}

let aa = m.quoted ? await m.quoted.download() : await m.download()
let dd = await dt(aa)
await romzz.sendMessage(m.chat, {text: `*Url :* ${dd}\n*Expired :* Permanen`}, {quoted: m})
}
break

case 'thanksto':
case 'tqto': {
    let apip = `
┏━━⬣ ⌜ Thanks To ⌟
┃ ☘︎ *Gonzales*
┃ ☘︎ *Ayana*
┃ ☘︎ *baileys*
┃ ☘︎ 
┃ ☘︎ 
┗━━⬣ ⌜ Ayana GonZz ⌟
`;
await romzz.sendMessage(m.chat, {
    footer: `Powered By ${ownername}`,
    buttons: [
      {
        buttonId: '.owner',
        buttonText: { displayText: '𝙾 𝚆 𝙽 𝙴 𝚁' },
        type: 1
      },{
        buttonId: '.gonzz',
        buttonText: { displayText: '𝙰 𝙻 𝙻 - 𝙼 𝙴 𝙽 𝚄' },
        type: 1
      },
      {
        buttonId: 'action',
        buttonText: { displayText: 'ini pesan interactiveMeta' },
        type: 4,
        nativeFlowInfo: {
          name: 'single_select',
          paramsJson: JSON.stringify({
            title: '',
            sections: [
              {
                title: 'O w n e r', 
                highlight_label: 'populer',
                rows: [
                  {
                    header: '',
                    title: 'O w n e r ',
                    description: '  Menampilkan owner menu',
                    id: '.ownermenu'
                  }
                ]
              }
            ]
          }
        )
      }
    }
  ],
  video: { url: 'https://o.uguu.se/oiBjoomy.mp4' },
      gifPlayback: true,
      caption: apip,
      contextInfo: {
      externalAdReply: {
      showAdAttribution: true,
      title: owner.name,
      body: owner.name,
      thumbnailUrl: global.menu,
      mediaType: 1,
      renderLargerThumbnail: false
      }
      }
      }, {
                        quoted: m
                    })
      romzz.sendMessage(m.chat, {
                        audio: fs.readFileSync('./media/sound.mp3'),
                        mimetype: 'audio/mp4',
                        ptt: true
                    }, {
                        quoted: m
                    })
await romzz.sendMessage(m.chat, { react: { text: "🤍",key: m.key,}})
await romzz.sendMessage(m.chat, { react: { text: "🩶",key: m.key,}})
await romzz.sendMessage(m.chat, { react: { text: "🩵",key: m.key,}})
await romzz.sendMessage(m.chat, { react: { text: "🩷",key: m.key,}})
await romzz.sendMessage(m.chat, { react: { text: "💛",key: m.key,}})
await romzz.sendMessage(m.chat, { react: { text: "❤️",key: m.key,}})
await romzz.sendMessage(m.chat, { react: { text: "💔",key: m.key,}})  
}
 break
 
case "listgc": case "listgrup": {
let teks = `\n *#- List all group chat*\n`
let a = await romzz.groupFetchAllParticipating()
let gc = Object.values(a)
teks += `\n* *Total group :* ${gc.length}\n`
for (const u of gc) {
teks += `\n* *ID :* ${u.id}
* *Nama :* ${u.subject}
* *Member :* ${u.participants.length}
* *Status :* ${u.announce == false ? "Terbuka": "Hanya Admin"}
* *Pembuat :* ${u?.subjectOwner ? u?.subjectOwner.split("@")[0] : "Sudah Keluar"}\n`
}
return m.reply(teks)
}
break 

case "openai": {
let talk = text ? text : "Perkenalkan%20Dirimu!"
await fetchJson("https://widipe.com/prompt/gpt?prompt=Sekarang%20kamu%20adalah%20Ayana-AI&text=" + talk).then(async (res) => {
await m.reply(res.result)
}).catch(e => m.reply(e.toString()))
}
break
case "leave": {
if (!isOwner) if (!isOwner) return romzz.sendMessage(from, {audio: fs.readFileSync('./media/own.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
if (m.quoted) {
romzz.sendMessage(m.chat, {
forward: m.quoted.fakeObj,
mentions: participants.map(a => a.id)
})
}
if (!m.isGroup) return Reply(mess.group)
await m.reply("Baik, Saya Akan Keluar Dari Grup Ini See you all")
await sleep(4000)
await romzz.groupLeave(m.chat)
}
break

case "joingc": case "join": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply("linkgcnya")
if (!text.includes("chat.whatsapp.com")) return m.reply("Link tautan tidak valid")
let result = text.split('https://chat.whatsapp.com/')[1]
let id = await romzz.groupAcceptInvite(result)
m.reply(`Berhasil bergabung ke dalam grup ${id}`)
}
break


  case "ping": case "uptime": {
let timestamp = speed();
let latensi = speed() - timestamp;
let respon = `
*🔴 INFORMATION PING*

*• Respon Speed : ${latensi.toFixed(4)} ,detik*
*• Runtime Bot : ${runtime(process.uptime())}*
`
await m.reply(respon)
}
break
  
 case 'anticall': case 'autobio': case 'autoread': case 'autotyping': case 'readsw': case 'multiprefix':
					if (!isCreator) return m.reply(mess.owner)
					if (teks[1] == 'on') {
						if (set[teks[0]]) return m.reply('*Sudah Aktif Sebelumnya*')
						set[teks[0]] = true
						m.reply('*Sukse Change To On*')
					} else if (teks[1] == 'off') {
						set[teks[0]] = false
						m.reply('*Sukse Change To Off*')
					} else {
						m.reply(`${teks[0].charAt(0).toUpperCase() + teks[0].slice(1)} on/off`)
					}
					break
  
     case 'listonline': case 'liston': {
				if (!m.isGroup) return m.reply(mess.group)
				let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
				if (!store.presences || !store.presences[id]) return m.reply('Sedang Tidak ada yang online!')
				let online = [...Object.keys(store.presences[id]), botNumber]
				await romzz.sendMessage(m.chat, { text: 'List Online:\n\n' + online.map(v => ' @' + v.replace(/@.+/, '')).join`\n`, mentions: online }, { quoted: m }).catch((e) => m.reply('Gagal'))
			}
			break
   case 'tagme': {
				romzz.sendMessage(m.chat, { text: `@${m.sender.split('@')[0]}`, mentions: [m.sender] }, { quoted: m })
			}
			break
   case 'toqr': case 'qr': {

				if (!text) return m.reply(`Ubah Text ke Qr dengan *${prefix + command}* textnya`)

				m.reply(mess.wait)
				await romzz.sendMessage(m.chat, { image: { url: 'https://api.qrserver.com/v1/create-qr-code/?size=1000x1000&data=' + text }, caption: 'Nih Bro' }, { quoted: m })
			}
			break

   case 'readmore': {
				let teks1 = text.split`|`[0] ? text.split`|`[0] : ''
				let teks2 = text.split`|`[1] ? text.split`|`[1] : ''
				m.reply(teks1 + readmore + teks2)
			}
			break
   case 'ytplay': {
				if (!text) return m.reply(`Example: ${prefix + command} dj komang`)
				m.reply(mess.wait)
				try {
					const res = await yts.search(text);
					const hasil = pickRandom(res.all) 
					const teksnya = `*📍Title:* ${hasil.title || 'Tidak tersedia'}\n*✏Description:* ${hasil.description || 'Tidak tersedia'}\n*🌟Channel:* ${hasil.author?.name || 'Tidak tersedia'}\n*⏳Duration:* ${hasil.seconds || 'Tidak tersedia'} second (${hasil.timestamp || 'Tidak tersedia'})\n*🔎Source:* ${hasil.url || 'Tidak tersedia'}\n\n_note : jika ingin mendownload silahkan_\n_pilih ${prefix}ytmp3 url_video atau ${prefix}ytmp4 url_video_`;
					await romzz.sendMessage(m.chat, { image: { url: hasil.thumbnail }, caption: teksnya }, { quoted: m });
				} catch (e) {
					m.reply('Post not available!')
				}
			}
			break
      case 'google': {
				if (!text) return m.reply(`Example: ${prefix + command} query`)
				try {
					let anu = await youSearch(text);
					m.reply(anu)
				} catch (e) {
					try {
						let anu = await yanzGpt(text);
						m.reply(hasil.choices[0].message.content)
					} catch (e) {
						m.reply('Pencarian Tidak Ditemukan!')
					}
				}
			}
			break
    case 'rate': case 'nilai': {
				reply(`Rate Bot : *${Math.floor(Math.random() * 100)}%*`)
				await romzz.sendMessage(m.chat, {audio: fs.readFileSync('./audio/sepuh.mp3'),mimetype: 'audio/mpeg',ptt: true}, {quoted:m})
			}
			break
  case 'jbmi': {
				if (!m.isGroup) return m.reply(mess.group)
				let member = (store.groupMetadata[m.chat] ? store.groupMetadata[m.chat].participants : m.metadata.participants).map(a => a.id)
				let jodoh = pickRandom(member)
				reply(`👫Jodoh mu adalah\n@${m.sender.split('@')[0]} ❤ @${jodoh.split('@')[0]}`);
			}
			break 
   
    //========================≈==============================================
   case 'cekmember': {
if (!isCreator) return reply(mess.owner)
if (!text) return reply("Id Nya Mana Kak?")
let cekmd = await romzz.groupMetadata(text)
let txrk = `乂 *C E K - M E M B E R*\n\n   ◦  *Nama Group :* ${cekmd.subject}\n   ◦  *Member :* ${cekmd.participants.length} Orang\n\n${footer}`
romzz.sendMessage(m.chat, {
                        text: txrk,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: '',
                                thumbnailUrl: global.menu,
                                sourceUrl: hariini,
                                mediaType: 1,
                                renderLargerThumbnail: true
			}}
			})
}
break
   
 //=============================================================
 //################################################
 
 case "bratvid2": {
    if (!text) return reply('mana teks');
    try {
        await romzz.sendMessage(m.chat, {
            react: { text: "✨", key: m.key }
        });
        const url = `https://api.siputzx.my.id/api/m/brat?text=${encodeURIComponent(text)}&isVideo=true`;
        const response = await axios.get(url, { responseType: "arraybuffer" });
        await romzz.sendVideoAsSticker(m.chat, response.data, m, {
            packname: global.packname,
            author: global.author
        });
    } catch (err) {
        console.error("Error bratvid:", err);
        await romzz.sendMessage(m.chat, {
            text: "Maaf, gagal membuat stiker brat video. Coba lagi nanti."
        }, { quoted: m });}}
break;
 
case 'gcbot': {
reply(`- Gc Utama\nhttps://chat.whatsapp.com/C5TGrAxhV5yEDgCjseC6qQ`)
await romzz.sendMessage(m.chat, {audio: fs.readFileSync('./audio/gcbot.mp3'),mimetype: 'audio/mpeg',ptt: true}, {quoted:m})}
break 
 case 'ceritahoror':
var { data } = await axios.get(`https://api.lolhuman.xyz/api/ceritahoror?apikey=`)
var caption = `Title : ${data.result.title}\n`
caption += `Desc : ${data.result.desc}\n`
caption += `Story :\n${data.result.story}\n`
romzz.sendMessage(from, { image: { url: data.result.thumbnail }, caption })
break  
case 'paptt3': {
if (!isPremium) return reply(`Buy Prem Dlu Lah Ama Nakasi Atau si Gonzz`)
teks28 = `OTAK MESUM`
romzz.sendMessage(from, { image: { url: "https://telegra.ph/file/af029472c3fcf859fd281.jpg" }, caption: teks28 }, { quoted: m })
}
break   
   
case 'paptt2': {
if (!isPremium) return reply(`Buy Prem Dlu Lah Ama Nakasi Atau si Gonzz`)
teks28 = `OTAK MESUM`
romzz.sendMessage(from, { image: { url: "https://k.top4top.io/p_3249y8ta43.jpg" }, caption: teks28 }, { quoted: m })
}
break   
case 'paptt1': {
if (!isPremium) return reply(`Buy Prem Dlu Lah Ama Nakasi Atau si Gonzz`)
teks28 = `OTAK MESUM`
romzz.sendMessage(from, { image: { url: "https://k.top4top.io/p_3249y8ta43.jpg" }, caption: teks28 }, { quoted: m })
}
break   
case 'profile': case 'me': {
if (!isGroup) return reply('Gunakan Didalam Group')
let sender = m.sender;
    let ppUrl = await romzz.profilePictureUrl(sender, 'image').catch((_) => "https://telegra.ph/file/34d343582a1cf8f830a28.jpg");
    let pp = await (await fetch(ppUrl)).buffer();

    let yyye = `
—  *P R O F I L E*

┌  ◦  *Name* : ${pushname}

│  ◦  *Nomer* : @${m?.sender.split('@')[0]}

│  ◦  *Terdaftar* : Yes

└  ◦ *Status User* : ${isCreator ? 'Premium' : 'Free'}

*_KETIK .MENU MENAMPILKAN MENU_*
*_KETIK .OWNER MELIHAT KONTAK OWNER_*
    `

await romzz.sendMessage(m.chat, {
text: yyye,
contextInfo: {
externalAdReply: {  
title: 'nakasiayana -rf',
body: `Gonzales-Dev`,
thumbnailUrl: ppUrl,
sourceUrl: '',
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted:m})
}
break   
case 'daftar': case 'regis': case 'register': {
const serialUser = createSerial(20)
mzd = `「 SUCCES TERDAFTAR 」

  • Phone Nunber : @${m?.sender.split('@')[0]}
  • Name User : ${pushname}
  • Status Verify : Berhasil
  • ID User : ${serialUser}

Done Bwang Kuhhh Kamu Sekarang Sudah Bisa Mengakses _WERBOT-WA_ Abangku

> GonzNaks`
veri = m?.sender
if (!m.isGroup) {
addRegisteredUser(m?.sender, pushname, serialUser)
romzz.sendMessage(m?.chat, {
text: mzd,
contextInfo: {
mentionedJid: [m?.chat],
externalAdReply: {
showAdAttribution: true,
title: `R E G I S T E R E D`,
body: '',
thumbnailUrl: global.menu,
sourceUrl: hariini,
mediaType: 1,
renderLargerThumbnail: true
}}
})
} else {
addRegisteredUser(m?.sender, pushname, serialUser)
romzz.sendMessage(m?.chat, {
text: mzd,
contextInfo: {
mentionedJid: [m?.chat],
externalAdReply: {
showAdAttribution: true,
title: `© 2024 | R E G I S T E R`,
body: '',
thumbnailUrl: ppuser,
sourceUrl: hariini,
mediaType: 1,
renderLargerThumbnail: true
}}
})
}
}
break
case 'stickkiss': {
if (!isOwner) return romzz.sendMessage(from, {audio: fs.readFileSync('./media/own.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
if (m.quoted) {
romzz.sendMessage(m.chat, {
forward: m.quoted.fakeObj,
mentions: participants.map(a => a.id)
})
}  
axios.get(`https://api.waifu.pics/sfw/kiss`)
.then(({data}) => {
romzz.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickcry': {
axios.get(`https://api.waifu.pics/sfw/cry`)
.then(({data}) => {
romzz.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'sticklick': {
axios.get(`https://api.waifu.pics/sfw/lick`)
.then(({data}) => {
romzz.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break  
case 'sticktickle':{
                axios.get(`https://nekos.life/api/v2/img/tickle`)
.then(({data}) => {
romzz.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickspank':{
                axios.get(`https://nekos.life/api/v2/img/spank`)
.then(({data}) => {
romzz.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickkill': {
axios.get(`https://api.waifu.pics/sfw/kill`)
.then(({data}) => {
romzz.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickhug': {
axios.get(`https://api.waifu.pics/sfw/hug`)
.then(({data}) => {
romzz.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickpat': {
axios.get(`https://api.waifu.pics/sfw/pat`)
.then(({data}) => {
romzz.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickbite': {
axios.get(`https://api.waifu.pics/sfw/bite`)
.then(({data}) => {
romzz.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickbully': {
axios.get(`https://api.waifu.pics/sfw/bully`)
.then(({data}) => {
romzz.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickyeet': {
axios.get(`https://api.waifu.pics/sfw/yeet`)
.then(({data}) => {
romzz.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickbonk': {
axios.get(`https://api.waifu.pics/sfw/bonk`)
.then(({data}) => {
romzz.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickwink': {
axios.get(`https://api.waifu.pics/sfw/wink`)
.then(({data}) => {
romzz.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickpoke': {
axios.get(`https://api.waifu.pics/sfw/poke`)
.then(({data}) => {
romzz.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickcringe': {
axios.get(`https://api.waifu.pics/sfw/cringe`)
.then(({data}) => {
romzz.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickdance': {
axios.get(`https://api.waifu.pics/sfw/dance`)
.then(({data}) => {
romzz.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickhappy': {
axios.get(`https://api.waifu.pics/sfw/happy`)
.then(({data}) => {
romzz.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickglomp': {
axios.get(`https://api.waifu.pics/sfw/glomp`)
.then(({data}) => {
romzz.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'sticksmug': {
axios.get(`https://api.waifu.pics/sfw/smug`)
.then(({data}) => {
romzz.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickblush': {
axios.get(`https://api.waifu.pics/sfw/blush`)
.then(({data}) => {
romzz.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickawoo': {
axios.get(`https://api.waifu.pics/sfw/awoo`)
.then(({data}) => {
romzz.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickwave': {
axios.get(`https://api.waifu.pics/sfw/wave`)
.then(({data}) => {
romzz.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'sticksmile': {
axios.get(`https://api.waifu.pics/sfw/smile`)
.then(({data}) => {
romzz.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickslap': {
axios.get(`https://api.waifu.pics/sfw/slap`)
.then(({data}) => {
romzz.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'sticknom': {
axios.get(`https://api.waifu.pics/sfw/nom`)
.then(({data}) => {
romzz.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'hitamkan': {
  const q = m.quoted ? m.quoted : m;
  const mime = (q.msg || q).mimetype || '';

  if (!mime.startsWith('image/')) {
    return m.reply('😿 Gomen Senpai~ Balas gambar dengan perintah ini yaa~');
  }

  await romzz.sendMessage(m.chat, { react: { text: '⏳', key: m.key } });

  try {
    const axios = require('axios');
    const FormData = require('form-data');

    // Upload ke Uguu
    const uploadUguu = async (buffer, filename) => {
      const form = new FormData();
      form.append('files[]', buffer, { filename });
      const { data } = await axios.post('https://uguu.se/upload.php', form, {
        headers: form.getHeaders(),
      });
      if (data.files && data.files[0]) return data.files[0].url;
      throw new Error('Upload gagal, Senpai~');
    };

    // Hitamkan gambar via API
    const hitamkanGambar = async (imageUrl) => {
      const apiUrl = `https://zenzxz.dpdns.org/tools/hitamkan?imageUrl=${encodeURIComponent(imageUrl)}`;
      const res = await axios.get(apiUrl, { responseType: 'arraybuffer' });
      return Buffer.from(res.data);
    };

    const buffer = await q.download();
    const uploadedUrl = await uploadUguu(buffer, 'image.jpg');
    const hasilBuffer = await hitamkanGambar(uploadedUrl);

    await romzz.sendMessage(m.chat, {
      image: hasilBuffer,
      caption: '🖤 Nih gambar Senpai setelah dihitamkan~ semoga suka yaa~ UwU',
    }, { quoted: m });

    await romzz.sendMessage(m.chat, { react: { text: '✅', key: m.key } });

  } catch (err) {
    console.error('❌ Hitamkan Error:', err);
    m.reply('😿 Gomen Senpai~ Ada error pas aku proses gambarnya...');
  }
  break;
}

case 'hijabkan': {
  if (!quoted || !/image/.test(mime)) {
    return reply(`📌 Kirim atau reply gambar dengan caption *${prefix + command}*`);
  }

  try {
    const { GoogleGenAI, Modality } = await import('@google/genai');
    const buffer = await quoted.download();
    const base64 = buffer.toString('base64');

    const ai = new GoogleGenAI({
      apiKey: 'AIzaSyBnvqSaeeJr3PesMaulFpuSxbnLV8kka7E' // 🔑 Ganti dengan API key kamu
    });

    const contents = [
      {
        text: 'Modify only the hair area by converting it into a neat, fully-covered white hijab in Indonesian Muslim style (100% no hair visible), while STRICTLY PRESERVING all other elements: do NOT alter skin color, '
      },
      {
        inlineData: {
          mimeType: mime,
          data: base64
        }
      }
    ];

    const res = await ai.models.generateContent({
      model: 'gemini-2.0-flash-preview-image-generation',
      contents,
      config: {
        responseModalities: [Modality.TEXT, Modality.IMAGE]
      }
    });

    for (let part of res.candidates?.[0]?.content?.parts || []) {
      if (part.text) await m.reply(part.text);
      if (part.inlineData) {
        let hasil = Buffer.from(part.inlineData.data, 'base64');
        await romzz.sendMessage(m.chat, {
          image: hasil,
          caption: '*Sudah dihijabkan dengan cantik 💘*'
        }, { quoted: m });
      }
    }
  } catch (e) {
    console.error(e);
    reply(`❌ Terjadi kesalahan: ${e.message}`);
  }
}
break;
case 'plays': case 'playspotify': {

if (!text) return m.reply('Masukkan judul lagu!\nContoh: plays Jakarta Hari Ini');
const res = await fetch(`https://api.nekorinn.my.id/downloader/spotifyplay?q=${encodeURIComponent(text)}`);
if (!res.ok) return m.reply('Gagal mengambil data lagu.');
const data = await res.json();
if (!data.status) return m.reply('Lagu tidak ditemukan!');
const { title, artist, duration, imageUrl, link } = data.result.metadata;
const downloadUrl = data.result.downloadUrl;
await romzz.sendMessage(m.chat, {
audio: { url: downloadUrl },
mimetype: 'audio/mpeg',
fileName: `${title}.mp3`,
ptt: true, // true kalau mau dikirim sebagai VN
contextInfo: {
externalAdReply: {
title: title,
body: `${artist} • ${duration}`,
mediaType: 2,
thumbnailUrl: imageUrl,
renderLargerThumbnail: true,
sourceUrl: link,
showAdAttribution: true
}
}
}, { quoted: m });
}
break
case "on-bot": {
romzz.sendMessage(m.chat, { text: `*Ayana Online Selama:* \n_[${runtime(process.uptime())}]_` }, { quoted: m});
}
break

case "brat4": {

          if (!text) return m.reply(`*\`ᴄᴏɴᴛᴏʜ ᴘᴇɴɢɢᴜɴᴀᴀɴ\`*:\n${prefix+command} halo suki`) 
                                               try {
                                                       await romzz.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
                                                               const url = `https://api.siputzx.my.id/api/m/brat?text=${encodeURIComponent(text)}&isVideo=false`;
                                                                       const response = await axios.get(url, { responseType: "arraybuffer" });
                                                                               const sticker = new Sticker(response.data, {
                                                                                           pack: "Stiker By",
                                                                                                       author: "Kythst 444+",
                                                                                                                   type: "video",
                                                                                                                           });
                                                                                                                                   const stikerBuffer = await sticker.toBuffer();
                                                                                                                                           await romzz.sendMessage(m.chat, { sticker: stikerBuffer }, { quoted: m });
                                                                                                                                               } catch (err) {
                                                                                                                                                       console.error("Error:", err);
                                                                                                                                                               await romzz.sendMessage(m.chat, {
                                                                                                                                                                           text: "Maaf, terjadi kesalahan saat mencoba membuat stiker brat. Coba lagi nanti.",
                                                                                                                                                                                   }, { quoted: m });
                                                                                                                                                                                       }
                                                                                                                                                                                      
                                                                                                                                                                                      }
break
   
   
   
   
   
   
   
   
   
   
   

   
   
   
   
      
default:
if (budy.startsWith('<')) {
if (!isOwner) return
try {
return reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
reply(e)
}
}

if (budy.startsWith('$')) {
if (!isOwner) return reply(mess.only.owner)
exec(budy.slice(2), (err, stdout) => {
if (err) return reply(err)
if (stdout) return reply(stdout)
})
}


if (budy.startsWith('vv')) {
if (!isOwner) return
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
} catch (err) {
reply(String(err))
}
}

if (budy.startsWith('uu')){
if (!isOwner) return
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`${err}`)
if (stdout) {
reply(stdout)
}
})
}
}
} catch (err) {
console.log(util.format(err))
}
}

//≈≈≈≈≈≈≈≈≈≈Status Diperbarui≈≈≈≈≈≈≈≈≈≈//
/* file ini otomatis di perbarui jika telah di edit
*/