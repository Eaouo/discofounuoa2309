const Discord = require("discord.js");
const db = require("quick.db");
exports.run = async (client, message, args) => {
  
  let prefix = await db.fetch(`prefix_${message.guild.id}`);
  
  
  if (prefix == null) prefix = "PREFİXİNİ GIR";
  

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) {
    const embed = new Discord.MessageEmbed()
      .setColor("#F0FFFF")
      .setDescription(
       
        `•| \`${prefix}oto-rol-kapat\` Kullanabilmek için , \`Yönetici\` **Yetkisine sahip olmanız gerekir**.`
      );

    message.channel.send(embed);
    return;
  }
const sistem = await db.fetch(`otorolrol_${message.guild.id}`);
if(!sistem) return message.channel.send(
  new Discord.MessageEmbed()
  .setColor("RED")
  .setDescription(`**Oto-Rol Sistemi Aktif Olmadığı __Kapatılamadı__**`));
db.delete(`otorolrol_${message.guild.id}`);
db.delete(`otorolkanal_${message.guild.id}`);
const embedi =  new Discord.MessageEmbed()
  .setColor("GREEN")
  .setDescription(`**Oto-Rol Sistemi Başarıyla __Kapatıldı__**`);
  return message.channel.send(embedi);
}
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["oto-rol-kapat"],
  permLevel: 0
};

exports.help = {
  name: "otorol-kapat",
  description: "",
  usage: "otorol-kapat"
};
Komutlar/otorol-kapat.js