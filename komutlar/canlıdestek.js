const Discord = require('discord.js');

exports.run = async (client, message, params) => {
  var channel = client.channels.find('id', 'kanal-id')
    const asdf = await client.channels.get(message.channel.id).createInvite()
  message.delete();
  const embed = new Discord.RichEmbed()
  .setTitle("» Stzolen BOT | Canlı Destek")
  .setDescription("**Canlı Desteği kullandğın için teşekkür ederiz, Seninle ekibim ilgilenicektir lütfen bekle!**")
  .setFooter("30 Saniye içinde geri dönülmezse lütfen iletişime geçin https://discord.gg/QQWufXD")
 message.channel.send(embed)
      const invite = new Discord.RichEmbed()
  .setAuthor("» Canlı Destek | Talep")
  .addField('**» Kullanıcı Adı: **', message.author.username + '#' + message.author.discriminator)
  .addField('**» Sunucu Adı: **', message.guild.name)
  .setDescription(asdf.url)
      channel.send(552127536969154565)
};

  exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'canlıdestek',
  description: 'Canlı Destek Tablebi Oluşturur.',
  usage: '!canlıdestek'
};
