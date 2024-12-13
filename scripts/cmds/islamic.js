module.exports = {
  config: {
    name: "islamic",
    version: "7.0",
    author: "BAYJID",
    countDown: 5,
    role: 0,
    shortDescription: "all video ðŸ“·",
    longDescription: "",
    category: "Video",
    guide: "{pn}"
  },
   onStart: async function ({ message }) {
   var BAYJID= ["https://i.imgur.com/FbnZI40.mp4",
"https://i.imgur.com/8k6OOZg.mp4",
"https://i.imgur.com/lgQghHX.mp4",
"https://i.imgur.com/wX8WJh3.mp4",
"https://i.imgur.com/6A42EIx.mp4",
"https://i.imgur.com/ozRevxt.mp4",
"https://i.imgur.com/Gd49ZSo.mp4",
"https://i.imgur.com/xu6lBXk.mp4",
"https://i.imgur.com/sDNohv4.mp4",
"https://i.imgur.com/JBu2Ie3.mp4",
"https://i.imgur.com/UaY42rq.mp4",
 "https://i.imgur.com/NFxf731.mp4",
"https://i.imgur.com/vv1HsMC.mp4",
"https://i.imgur.com/Y8MPzLv.mp4",
"https://i.imgur.com/9M1v1qK.mp4",
"https://i.imgur.com/EgUy7v0.mp4",
"https://i.imgur.com/IjDqg2G.mp4",
"https://i.imgur.com/51NYqmO.mp4",
"https://i.imgur.com/XjfJHh9.mp4",
"https://i.imgur.com/XHrkPt4.mp4",
"https://i.imgur.com/mqEYRdy.mp4",
"https://i.imgur.com/NaVsFmQ.mp4",
"https://i.imgur.com/31XSmVj.mp4",
"https://i.imgur.com/PPamCPI.mp4",
"https://i.imgur.com/i6Iy7iN.mp4",
]

let msg = BAYJID[Math.floor(Math.random()*BAYJID.length)]
message.send({
  body: 'video made by CYBER BOT TEAM',attachment: await global.utils.getStreamFromURL(msg)
})
}
     }
