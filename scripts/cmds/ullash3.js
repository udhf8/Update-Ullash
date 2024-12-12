module.exports = {
	config: {
			name: "ullash bai",
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
	if (event.body && event.body.toLowerCase() == "ullash bai") return message.reply("আমার বস উল্লাস এখন ব্যস্ত আছে। ওনার ইনবক্স এ মেসেজ দিয়ে রাখেন,বস ফ্রি থাকলে মেসেজ রিপ্লাই দিবে ");
}
};
