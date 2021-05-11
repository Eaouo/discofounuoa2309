const Discord = require("discord.js");
const Util = require("../util/Util.js");

module.exports.run = async (bot, message, args) => {
  //

  if (!message.member.hasPermission("MANAGE_MESSAGES"))
    return message.channel.send(
      "**Bu komutu kullanmak için Mesajları Yönet yetkisine sahip olmalısın.**"
    );
  if (!args[0])
    return message.reply(
      "**En Az** `1 - 100` **Arasında Bir Tam Sayı Değeri Girmelisiniz.**"
    );
  message.channel.bulkDelete(args[0]).then(() => {
    message.channel.send(`**${args[0]}** **Adet Mesaj Silindi.**`)
  });
};
module.exports.help = {
  name: "temizle"
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sil'],
  permLevel: 0
};

exports.help = {
  name: "temizle",
  description: "CinavarKral",
  usage: "temizle"
};
