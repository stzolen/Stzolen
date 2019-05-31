const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Komutlar Yüklendi!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} ismi ile giriş yapıldı!`);
  client.user.setStatus("online");
  client.user.setGame(`+yardım | +help | Stzolen Bot `);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Durum Ayarlandı!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Servisleriniz Yükleniyor 3s`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Servisleriniz Yükleniyor 2s`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Servisleriniz Yükleniyor 1s`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Servisleriniz Yüklendi, Bot Açılıyor...`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Şu an ` + client.channels.size + ` adet kanala, ` + client.guilds.size + ` adet sunucuya ve ` + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ` kullanıcıya hizmet veriliyor!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: İyi Günler Efendim Tekrar Canlanmak Güzel`);
};
