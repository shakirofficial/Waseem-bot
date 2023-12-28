let handler = m => m
handler.all = async function (m, conn) {
    var vn = "https://github.com/PRINCE-GDS/THE-PRINCE-BOTraw/main/Assets/mp3/Audio5.mp3"
    let url = "https://chat.whatsapp.com/F6SfoiNYw2q8sbcQW1lvWs"
    let murl = "https://instagram.com/romantic__life__01"
    let hash = global.princebot
    let img = "https://i.imgur.com/pN8B2ge.jpeg"
    let num = "923429447356"

    let doc = {
        audio: {
          url: vn
        },
        mimetype: 'audio/mpeg',
        ptt: true,
        waveform: [0,99,0,99,0,99,0],
        fileName: "Guru",
    
        contextInfo: {
          mentionedJid: [m.sender],
          externalAdReply: {
          title: "↺ |◁   II   ▷| ♡",
          body: hash,
          thumbnailUrl: img,
          sourceUrl: url,
          mediaType: 2,
          mediaUrl: murl,
         // renderLargerThumbnail: true,
          showAdAttribution: true
          }}
      };
	
    let phoneNumber = '';
    if (m.mentionedJid && m.mentionedJid[0]) {
        phoneNumber = m.mentionedJid[0].replace(/[^0-9]/g, '');
        if (phoneNumber === num) {
          return this.sendMessage(m.chat, doc, { quoted: m });
        }
      } else {
        return
      }
}
export default handler
