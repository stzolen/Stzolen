const Discord = require('discord.js');
exports.run = function(client, message, args) {

  if (!message.guild) {
    return message.author.send('`Sil` komutu sadece sunucularda kullanılabilir.');
  }
  let mesajsayisi = parseInt(args.join(' '));
  if (mesajsayisi.length < 1) return message.channel.send('Kaç adet mesaj sileyim.')
  if (mesajsayisi > 100) return message.channel.send('100 adetden fazla mesaj silemem!');
  message.channel.bulkDelete(mesajsayisi + 1);
  message.channel.send('Mesajlar Yönetici Tarafından Temizlendi!')
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['sil'],
  permLevel: 2
};

exports.help = {
  name: 'sil',
  description: 'Belirlenen miktar kadar mesaj siler.',
  usage: 'sil <silinecek mesaj sayısı>'
};
