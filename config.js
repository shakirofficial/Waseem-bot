import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'

//Owner Numbers 
global.owner = [
  ['918101821810', '*ੈ✩₊˚𝗢𝗯𝗶𝘁𝗼 𝗨𝗰𝗵𝗶𝗵𝗮ྀ࿐', false],
  [''], 
  [''],
]

//global.pairingNumber = "" //put your bot number here
global.mods = ['918101821810'] 
global.prems = ['918101821810', '918653009668', '918101821810']
global.allowed = ['918101821810']
global.keysZens = ['c2459db922', '37CC845916', '6fb0eff124']
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63']
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]
global.lolkeysapi = ['GataDios']

global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api.fgmods.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zenzapis.xyz': '675e34de8a', 
  'https://api.fgmods.xyz': 'dEBWvxCY'
}

// Sticker WM
global.botname = '*ੈ✩₊˚𝗢𝗯𝗶𝘁𝗼 𝗨𝗰𝗵𝗶𝗵𝗮ྀ࿐'
global.princebot = '🛡️*ੈ✩₊˚𝗢𝗯𝗶𝘁𝗼 𝗨𝗰𝗵𝗶𝗵𝗮ྀ࿐🛡️'
global.packname = '𝗖𝗿𝗲𝗮𝘁𝗲𝗱 𝗯𝘆' 
global.author = '*ੈ✩₊˚𝗢𝗯𝗶𝘁𝗼 𝗨𝗰𝗵𝗶𝗵𝗮ྀ࿐' 
global.princeig = 'https://instagram.com/_.obito_uchiha_786' 
global.princegp = 'https://chat.whatsapp.com/KWAadDw545X2Re1F6RjjEz'
global.menuvid = 'https://i.imgur.com/lROEr5r.mp4'
global.Princesc = 'https://wa.me/918101821810' 
global.princeyt = 'https://youtube.com/@kamui_edits'
global.Princelog = 'https://i.imgur.com/y7cGHfe.jpg'
global.thumb = fs.readFileSync('./Assets/Prince.png')

global.wait = '*♻️ _𝙶𝙴𝚃𝚃𝙸𝙽𝙶 𝚈𝙾𝚄𝚁 𝙵𝙸𝙻𝙴 𝚆𝙰𝙸𝚃..._*\n*▰▰▰▱▱▱▱▱*'
global.imgs = '*🖼️ _𝙶𝙴𝚃𝚃𝙸𝙽𝙶 𝚈𝙾𝚄𝚁 ɪᴍᴀɢᴇs 𝚆𝙰𝙸𝚃..._*\n*▰▰▰▱▱▱▱▱*'
global.rwait = '♻️'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🌀' 

global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
