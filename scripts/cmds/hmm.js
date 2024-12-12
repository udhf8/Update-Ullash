module.exports = {
	config: {
			name: "hmm",
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
	if (event.body && event.body.toLowerCase() == "hmm") return message.reply("hmm hmm না করে ডাইরেক্ট বললেই তো পারো hay marry me 😤?");
}
};
