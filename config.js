const { Sequelize } = require('sequelize');
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });


function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

DATABASE_URL = process.env.DATABASE_URL === undefined ? './tmp' : process.env.DATABASE_URL;
DEBUG = process.env.DEBUG === undefined ? false : convertToBool(process.env.DEBUG);

module.exports = {
    SESSION: process.env.BOBIZ_SESSION === undefined ? '' : process.env.BOBIZ_SESSION,
    URL_1NAME: process.env.URL_1NAME === undefined ? 'Facebook Waleed' : process.env.URL_1NAME,
    URL_1LINK: process.env.URL_1LINK === undefined ? 'https://www.facebook.com/profile.php?id=100039170449874' : process.env.URL_1LINK,
    URL_2NAME: process.env.URL_2NAME === undefined ? 'Whatsapp Waleed' : process.env.URL_2NAME,
    URL_2LINK: process.env.URL_2LINK === undefined ? 'https://api.whatsapp.com/send?phone=+201283988563' : process.env.URL_2LINK,
    FOOTER: process.env.FOOTER === undefined ? 'TONY-MD  *𝚆𝙰𝙻𝙴𝙴𝙳 𝙱𝙾𝚃* !!🤖 201283988563 ' : process.env.FOOTER,
    CAPTION: process.env.CAPTION === undefined ? '*𝚆𝙰𝙻𝙴𝙴𝙳 𝙱𝙾𝚃* !!🤖 https://www.facebook.com/profile.php?id=100039170449874' : process.env.CAPTION,
    ALIVEMSG: process.env.ALIVE_MESSAGE === undefined ? 'default' : process.env.ALIVE_MESSAGE,
    ALIVE_LOGO: process.env.ALIVE_LOGO === undefined ? 'https://telegra.ph/Waleed-bot-10-07' : process.env.ALIVE_LOGO,
    SONG_DOWN: process.env.SONG_DOWN === undefined ? 'جاري تحميل الموسيقى الان..🎶✅' : process.env.SONG_DOWN,
    SONG_UP: process.env.SONG_UP === undefined ? 'جاري إرسال الموسيقى الان..🎶✅' : process.env.SONG_UP,
    VIDEO_DOWN: process.env.VIDEO_DOWN === undefined ? 'جاري تحميل الفيديو الان..🎬✅' : process.env.VIDEO_DOWN,
    VIDEO_UP: process.env.VIDEO_UP === undefined ? 'جاري إرسال الفيديو الان..🎬✅' : process.env.VIDEO_UP,
    FILE_DOWN: process.env.FILE_DOWN === undefined ? 'جاري تحميل الملف الان..📂✅' : process.env.FILE_DOWN,
    FILE_UP: process.env.FILE_UP === undefined ? 'جاري إرسال الملف الان..📂✅' : process.env.FILE_UP,
    STIC_WM:process.env.STIC_WM === undefined ? '𝚆𝙰𝙻𝙴𝙴𝙳 𝙱𝙾𝚃' : process.env.STIC_WM,
};
