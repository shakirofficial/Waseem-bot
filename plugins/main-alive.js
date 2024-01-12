let handler = async(m, { conn, text, usedPrefix, command }) => {

    // Sound
    let name = m.pushName || conn.getName(m.sender)
    var vn = "https://cdn.jsdelivr.net/gh/Itxmanno05/GURU-BOT@main/Assets/mp3/sajjad.m4a"
    let url = "https://github.com/Husnainch773/GURU-BOT"
    let murl = "https://youtu.be/DibiLc17dh0?si=xp9bQ-_frEyDB1-i"
    let img = "https://telegra.ph/file/a03029b897f6560ad4863.jpg"
    let con = { key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
    let doc = {
        audio: {
          url: vn
        },
        mimetype: 'audio/mp4',
        ptt: true,
        waveform:  [100, 0, 100, 0, 100, 0, 100],
        fileName: "[••𝗧𝗢𝗣 𝗟𝗘𝗚𝗘𝗡𝗗••]",
    
        contextInfo: {
          mentionedJid: [m.sender],
          externalAdReply: {
          title: "[••𝗧𝗢𝗣 𝗟𝗘𝗚𝗘𝗡𝗗••]-BOT IS ALIVE",
          body: "[••𝗧𝗢𝗣 𝗟𝗘𝗚𝗘𝗡𝗗••] BOT",
          thumbnailUrl: img,
          sourceUrl: 'https://chat.whatsapp.com/K7QfBRsk6491a6649GhvAS',
          mediaType: 1,
          renderLargerThumbnail: true
          }}
      };
    
      await conn.sendMessage(m.chat, doc, { quoted: con });
    
    }
    
    handler.help = ['alive']
    handler.tags = ['main']
    handler.command = /^(alive)$/i 

    export default handler;
