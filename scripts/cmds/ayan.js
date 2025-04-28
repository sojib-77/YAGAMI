module.exports = {
config: {
name: "aYan",
version: "1.0",
author: "aYan",
countDown: 5,
role: 0,
shortDescription: "no prefix",
longDescription: "no prefix",
category: "no prefix",
},

onStart: async function(){}, 
onChat: async function({ event, message, getLang }) {
if (event.body && event.body.toLowerCase() === "ayan") {
return message.reply({
body: " ──────────◊\n‣ 𝐁𝐨𝐭 & 𝐎𝐰𝐧𝐞𝐫 𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧  \n\n‣ 𝐍𝐚𝐦𝐞: SOJIB                           ‣ 𝐁𝐨𝐭 𝐍𝐚𝐦𝐞:🕸LIGHT YAGAMI 📩💥 」",
attachment: await global.utils.getStreamFromURL("https://i.imgur.com/KV1u6yV.mp4")
});
}
}
}
