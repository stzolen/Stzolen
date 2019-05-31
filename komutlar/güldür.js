const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
	if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('Güldür')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== '..') {
      const sunucubilgi = new Discord.RichEmbed()
    .setAuthor('Yolculuk nereye kardeşim ?')
    .setColor('RANDOM')
    .setTimestamp()
    .setDescription('')
		.setImage(`https://66.media.tumblr.com/0afb9e96b64df73981cf638b1496fe00/tumblr_ougr0rp2rl1s8c9jeo1_400.gif`)
    return message.channel.sendEmbed(sunucubilgi);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'güldür',
  description: 'Bot Sizi Güldürmeye Çalışır.',
  usage: 'Güldür'
};
