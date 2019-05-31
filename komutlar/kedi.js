const Discord = require('discord.js');
exports.run = function(client, message, args) {
  const embed = new Discord.RichEmbed()
  .setAuthor("Sunun Tatlılığına Bak 😺😻\n")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor("RANDOM")
  .setImage("https://img-s1.onedio.com/id-54137e131e41ac1d648a10d8/rev-0/w-500/s-09a25f194e484fbdf25c65abfd1d7ba1dc9a412f.gif")
  /*
   * Takes a Date object, defaults to current date.
   */

  message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'kedi',
  description: 'Bot Kedi Gösterir',
  usage: 'kedi'
};
