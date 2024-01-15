var handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let pp = princeImg.getRandom()	
const cat = `*𝄟✮͢🦋⃟≛⃝Dûßtø(Töñmöy)❥𝄟✮⃝♥️*


*𝄟✮͢🦋⃟≛⃝Dûßtø(Töñmöy)❥𝄟✮⃝♥️ 𝟷 wa.me/917029916612_*

*𝄟✮͢🦋⃟≛⃝Dûßtø(Töñmöy)❥𝄟✮⃝♥️ 2 wa.me/919647327065_*
*---------------------*


*_𝄟✮͢🦋⃟≛⃝Dûßtø(Töñmöy)❥𝄟✮⃝♥️_*
*${developer}*`

await conn.sendFile(m.chat, pp, 'menuvid', cat, fkontak)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(owner|creator|propietario|dueño|dueña|propietaria|dueño|creadora|creador)$/i

export default handler
