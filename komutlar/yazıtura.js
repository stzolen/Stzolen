const Discord = require('discord.js');
const chancejs = require('chance');
const chance = new chancejs();

const cevaplar = [
	"**__TURA__**",
	"**__YAZI__**"
];

exports.run = function(client, message) {

	var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];

	if (cevap === "**__YAZI__**") {

		 const embedyazı = new Discord.RichEmbed()
		.setColor(0xf4b942)
		.setDescription(cevap)
		.setThumbnail("https://i.sozcu.com.tr/wp-content/uploads/2016/08/1tl_obverse.png")
		message.channel.send(embedyazı);

	} else if (cevap === "**__TURA__**") {

		const embedtura = new Discord.RichEmbed()
		.setColor(0xf4b942)
		.setDescription(cevap)
		.setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/1TL_reverse.png/200px-1TL_reverse.png")
		message.channel.send(embedtura);

	}


};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'yazıtura',
  description: 'Yazı-Tura atar.',
  usage: 'yazıtura'
};
