// Anime Menu Cases - Trinity Bot
// Buatan Zass Tamvan 💙

const axios = require("axios")

// SFW ANIME
const animeApi = {
  waifu: "https://api.waifu.pics/sfw/waifu",
  neko: "https://api.waifu.pics/sfw/neko",
  megumin: "https://api.waifu.pics/sfw/megumin",
  shinobu: "https://api.waifu.pics/sfw/shinobu",
  miku: "https://api.waifu.pics/sfw/miku",
  raiden: "https://api.waifu.pics/sfw/raiden",
  kanna: "https://api.waifu.pics/sfw/kanna",
  marin: "https://api.waifu.pics/sfw/marin",
  mori: "https://api.waifu.pics/sfw/mori",
  yotsuba: "https://api.waifu.pics/sfw/yotsuba",
  nino: "https://api.waifu.pics/sfw/nino",
  mikuqq: "https://api.waifu.pics/sfw/mikuqq",
  ichika: "https://api.waifu.pics/sfw/ichika",
  itsuki: "https://api.waifu.pics/sfw/itsuki",
  darkness: "https://api.waifu.pics/sfw/darkness",
  yui: "https://api.waifu.pics/sfw/yui",
  ayaka: "https://api.waifu.pics/sfw/ayaka",
  lumine: "https://api.waifu.pics/sfw/lumine",
  ei: "https://api.waifu.pics/sfw/ei",
  chika: "https://api.waifu.pics/sfw/chika",
  yor: "https://api.waifu.pics/sfw/yor",
  zerotwo: "https://api.waifu.pics/sfw/zeroTwo",
  rem: "https://api.waifu.pics/sfw/rem",
  ram: "https://api.waifu.pics/sfw/ram",
  sasha: "https://api.waifu.pics/sfw/sasha",
  mikasa: "https://api.waifu.pics/sfw/mikasa",
  hinata: "https://api.waifu.pics/sfw/hinata",
  sakura: "https://api.waifu.pics/sfw/sakura",
  naruto: "https://api.waifu.pics/sfw/naruto",
  itachi: "https://api.waifu.pics/sfw/itachi"
}

// NSFW ANIME
const nsfwAnimeApi = {
  waifu2: "https://api.waifu.pics/nsfw/waifu",
  neko2: "https://api.waifu.pics/nsfw/neko",
  trap: "https://api.waifu.pics/nsfw/trap",
  blowjob: "https://api.waifu.pics/nsfw/blowjob",
  boobs: "https://nekos.life/api/v2/img/boobs",
  lewd: "https://nekos.life/api/v2/img/lewd",
  nsfwneko: "https://nekos.life/api/v2/img/nsfw_neko_gif",
  solo: "https://nekos.life/api/v2/img/solo",
  feet: "https://nekos.life/api/v2/img/feet",
  lewdk: "https://nibiru.dev/api/nsfw/kitsune",
  lewdn: "https://nibiru.dev/api/nsfw/neko",
  yuri: "https://nibiru.dev/api/nsfw/yuri"
}

// SFW Handler
async function getAnimeImage(type) {
  try {
    const res = await axios.get(animeApi[type])
    return res.data.url
  } catch (e) {
    return null
  }
}

async function animeHandler(command, m, reply, trinity) {
  const imageTypes = Object.keys(animeApi)
  if (!imageTypes.includes(command)) return

  const imageUrl = await getAnimeImage(command)
  if (!imageUrl) return reply(`Gagal mengambil gambar *${command}*`)

  await trinity.sendMessage(
    m.chat,
    {
      image: { url: imageUrl },
      caption: `🍥 *Random ${command.toUpperCase()}*`
    },
    { quoted: m }
  )
}

// NSFW Handler
async function getNSFWImage(type) {
  try {
    const res = await axios.get(nsfwAnimeApi[type])
    return res.data.url || res.data.message
  } catch (e) {
    return null
  }
}

async function nsfwAnimeHandler(command, m, reply, trinity) {
  const nsfwTypes = Object.keys(nsfwAnimeApi)
  if (!nsfwTypes.includes(command)) return

  const imageUrl = await getNSFWImage(command)
  if (!imageUrl) return reply(`Gagal mengambil NSFW *${command}*`)

  await trinity.sendMessage(
    m.chat,
    {
      image: { url: imageUrl },
      caption: `🔞 *NSFW ${command.toUpperCase()}*`
    },
    { quoted: m }
  )
}

module.exports = { animeHandler, nsfwAnimeHandler }