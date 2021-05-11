const Discord = require("discord.js");
const ayarlar = require('../ayarlar.json');

const talkedRecently = new Set();
module.exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Bu komutu kullanabilmek için `Yönetici` yetkisine sahip olmalısın')
  if (talkedRecently.has(message.author.id)) {
    message.channel.send("**Hopp, dur bakalım. Bu komutu 12 saatte bir kullanabilirsin.** ");
} else {

   // the user can type the command ... your command code goes here :)

// Adds the user to the set so that they can't talk for a minute
talkedRecently.add(message.author.id);
setTimeout(() => {
  // Removes the user from the set after a minute
  talkedRecently.delete(message.author.id);
}, 43200000);
}

let user = message.author.username;
let guild = message.guild;
let channel = bot.channels.cache.get("Gidecek kanal Id");
let invite = await message.channel.createInvite({
    maxAge: 0,
    maxUses: 0
  });
let embed = new Discord.MessageEmbed()
.setTitle(" Bir Sunucu Tanıtıldı")
.addField("Sunucu Adı", guild.name, true)
.addField(`Sunucu Davet Linki`, `https://discord.gg/6tpXqSYt}`)

.setColor("#f49542")

message.channel.send(" **Sunucunu başarıyla destek sunucumda tanıttım.**")
channel.send(embed)

}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'sunucutanıt'
}