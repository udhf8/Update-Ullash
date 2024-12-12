module.exports = {
	config: {
			name: "আয়'না 一一ꪜ ヽ﹅ヽ丨倫",
			version: "1.0",
			author: "Jaychris Garcia",
			countDown: 5,
			role: 0,
			shortDescription: "sarcasm",
			longDescription: "sarcasm",
			category: "reply",
	},
onStart: async function(){}, 
onChat: async function({
	event,
	message,
	getLang
}) {
	if (event.body && event.body.toLowerCase() == "@আয়'না 一一ꪜ ヽ﹅ヽ丨倫") return message.reply("আমার বস এখন ব্যস্ত আছে,কি বলবি আমাকে বল ");
}
};
