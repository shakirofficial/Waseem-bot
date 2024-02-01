var handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let pp = princeImg.getRandom()	
const cat = `𝐂𝐘𝐁𝐄𝐑_𝐖𝐀𝐑𝐑𝐈𝐎𝐑'


* 𝐂𝐘𝐁𝐄𝐑_𝐖𝐀𝐑𝐑𝐈𝐎𝐑 wa.me/923289091295*

*𝐂𝐘𝐁𝐄𝐑_𝐖𝐀𝐑𝐑𝐈𝐎𝐑 2 wa.me/92_*
*---------------------*


*𝐂𝐘𝐁𝐄𝐑_𝐖𝐀𝐑𝐑𝐈𝐎𝐑*
*${developer}*`

await conn.sendFile(m.chat, pp, 'menuvid', cat, fkontak)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(owner|creator|propietario|dueño|dueña|propietaria|dueño|creadora|creador)$/i

export default handler
