const Discord = require('discord.js');
const generator = require('generate-password');


exports.run = function(client, message, args) {



    var password = generator.generate({
        length: 10,
        numbers: true,
    })

    message.channel.send(password);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'şifre',
  description: 'Rastgele bir şifre oluşturur.',
  usage: 'şifre'
};
