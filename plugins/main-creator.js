var handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let pp = princeImg.getRandom(https://i.imgur.com/iMwSYX3.jpg)	
const cat = `*_🛡️ᴘʀɪɴᴄᴇ KEVOH-MD 🛡️_*


*_—◉ ᴘʀɪɴᴄᴇ ʙᴏᴛ ᴏᴡɴᴇʀ 𝟷 wa.me/254759668547_*

*_—◉ ᴘʀɪɴᴄᴇ ʙᴏᴛ ᴏᴡɴᴇʀ 2 wa.me/92_*
*254759668547*


*_ᴛʜᴇ ᴍᴏᴅᴇʀᴀᴛᴏʀ_*
*${kevoh}*`

await conn.sendFile(m.chat, pp, 'menuvid', cat, fkontak)
}
handler.help = ['kevoh', 'kevoh']
handler.tags = ['info']
handler.command = /^(kevoh|kevoh|propietario|dueño|dueña|propietaria|dueño|creadora|creador)$/i

export default handler
