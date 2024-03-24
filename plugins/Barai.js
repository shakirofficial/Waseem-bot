import axios from 'axios';

let handler = async (m, { conn, text }) => {
    try {
        if (!text) throw 'معك الذكاء الاصطناعي الخاص بغوغل يمكنك ان تسألني ما تشاء مثال : \n\n*.bardai من هو اول عربي بدأ في مجال بوتات الواتساب* ';

        

        // Make a GET request to the API
        const response = await axios.get(`https://aemt.me/bard?text=${text}`);

        // Check if the response status is 200 (OK)
        if (response.status === 200) {
            // Extract the result from the response data
            const erka = response.data.status ? response.data.result : '_فشل جلب بيانات صالحة من واجهة برمجة التطبيقات._';

            // Example: Send the result as a reply
            //conn.reply(m.chat, eak, m);
            conn.sendMessage(m.chat, {
      text: erka,
      contextInfo: {
externalAdReply: {
title: "💫PRINCE-GDS💫",
thumbnailUrl: "https://telegra.ph/file/e42651598c83afe3e85e0.jpg",
sourceUrl: "https://bard.google.com",
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
        } else {
            throw '_فشل جلب البيانات من API._';
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
}

handler.help = ["bardai"]
handler.tags = ["ai"]
handler.command = /^ba$/i

export default handler;
