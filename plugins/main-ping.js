import { exec } from 'child_process'
import speed from 'performance-now'

let handler = async (m, { conn }) => {

  let pingMsg = await conn.sendMessage(m.chat, {text: 'Pinging...'})

  let timestamp = speed()

  await exec('neofetch --stdout', async (error, stdout) => {

    let latency = (speed() - timestamp).toFixed(4)

    await conn.relayMessage(m.chat, {
      protocolMessage: {
        key: pingMsg.key,
        type: 14,
        editedMessage: {
          conversation: `
          *⸙• 「「⸙」‎🌸🖥️*                 
             
        *ʟᴀᴛᴇɴᴄʏ: 17.4873 _ᴍs_*
                 🔐⚠️  
    *🫀🄼 [••𝗧𝗢𝗣 𝗟𝗘𝗚𝗘𝗡𝗗••]* ${latency} ms` 
        }
      }
    }, {})

  })

}

handler.help = ['ping']
handler.tags = ['main']
handler.command = ['ping', 'speed', 'pn'] 

export default handler
