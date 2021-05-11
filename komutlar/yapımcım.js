Fearles
#5102

.gg/UkCbSVCXZN — 15.04.2021
const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {

    const ozelmesajkontrol = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTimestamp()
     .setAuthor(${client.user.username}, client.user.avatarURL)
    .setDescription(' :FurnyDevoloper: İşte Bu CinavarKral Yapımcım ');
    message.channel.send(ozelmesajkontrol)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yapımcım '],
  permLevel: 0
};

exports.help = {
  name: 'yapımcım',
  description: 'Yapımcımı Gosterir.',
  usage: 'yapımcım'
};
﻿