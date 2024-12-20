module.exports = {
 config: {
	 name: "🫂",
	 version: "1.0",
	 author: "Ullash ッ ☆𝐀𝐁𝐇𝐑𝐀𝐍𝐈𝐋☆",
	 countDown: 5,
	 role: 0,
	 shortDescription: "no prefix",
	 longDescription: "no prefix",
	 category: "no prefix",
 },

 onStart: async function() {
	 const expectedAuthor = "Ullash ッ ☆𝐀𝐁𝐇𝐑𝐀𝐍𝐈𝐋☆";
	 if (this.config.author !== expectedAuthor) {
		 throw new Error("Unauthorized change detected in the author field. Please restore the original author.");
	 }
 },

 onChat: async function({ event, message }) {
	 if (event.body && event.body.toLowerCase() === "🫂") {
		 const videoLinks = [
			 "https://i.imgur.com/M1scQRi.mp4",
			 "https://i.imgur.com/NHPC1mx.mp4",
			 "https://i.imgur.com/exlsxAf.mp4",
			 "https://i.imgur.com/nbLPpse.mp4",
			 "https://i.imgur.com/3CANto2.mp4"
		 ];

		 const randomLink = videoLinks[Math.floor(Math.random() * videoLinks.length)];

		 try {
			 const stream = await global.utils.getStreamFromURL(randomLink);

			 return message.reply({
				 body: "     「Miss you dst. \nআসলেই বন্ধু তোকে অনেক বেশি মিস করি 🙂।\n হয়তো তুই আমার এই কথা গুলো কখনো দেখতে পাবি না 🙂।\n\nতোর কথা মনে পড়লে,নিজেকে অপরাধী মনে হয় 😔।\n আসলে আমি তোর বন্ধুত্বের মর্যাদা রক্ষা করতে পারি নাই 🥺🙂।\n পারলে আমাকে মাপ করে দিস 🫡। 🥺🫂 জিহাদ , সানাউল , একলা জীবন \n\n\n𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥\n☆𝐀𝐁𝐇𝐑𝐀𝐍𝐈𝐋☆\nᑘᒪᒪᗩSᕼ ッ」",
				 attachment: [stream]
			 });
		 } catch (error) {
			 console.error("Error processing video link:", randomLink, error);
			 return message.reply("দুঃখিত! ভিডিও পাঠাতে সমস্যা হয়েছে। পরে আবার চেষ্টা করুন।");
		 }
	 }
 }
};
