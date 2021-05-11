const Discord = require('discord.js');

let botid = ('650739604789395476') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(`${client.user.username} İletişim Bilgileri`)
    .addField('BİZ KİMİZ?', 'Discord kullanıcıların sunucularını daha iyi hale getirmek için çabalayan bir ekibiz.')//ne kadar yetkili komutunuz varsa o kadar .addField('prefix+komut', 'açıklama/kullanım amacı') koyun
    .addField(`» Linkler`, `[Bot Davet Linki](https://discord.com/oauth2/authorize?client_id=832666889792651284&scope=bot&permissions=8589934591
) **|** [Destek Sunucusu](https://discord.gg/6tpXqSYt) **|** [Bota Oy Ver (Vote)](https://discordbots.org/bot/${botid}/vote) **|** [Web Sitesi ( Yakında )]()`)//websiteniz yoksa  **|** [Web Sitesi]() yeri silebilirsiniz
    message.channel.sendEmbed(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'bizkimiz',
  description: 'bot hakkında bilgi',
  usage: 'davetet'
};
   