const Discord = require('discord.js');
const config = require("../config.json")
exports.run = function(client, message) {
 
 const help = new Discord.MessageEmbed()
  .setAuthor(`${message.client.user.username}`, message.client.user.avatarURL)
  .setColor('RANDOM')
  .addField('Klamy Bot | Müzik Komutları',`

  **${config.prefix}çal <müzikismi>**: İstenilen şarkıyı çalar.
  **${config.prefix}duraklat**: Şarkıyı durdurur.
  **${config.prefix}devamet**: Durdurulan şarkıyı devam ettirir.
  **${config.prefix}döngü**: Şarkıyı tekrardan oynatır.
  **${config.prefix}atla**: Varsa listedeki diğer şarkılara geçer.
  **${config.prefix}durdur**: Şarkıyı durdurur. 
  **${config.prefix}müzikbilgi**: Çalan şarkıyı gösterir.
  **${config.prefix}liste**: Şarkıları gösterir.
  **${config.prefix}karıştır**: Şarkıları karıştırır.
  **${config.prefix}ping**: Botun gecikme süresini gösterir.
  **Sunucunuza eklemek isterseniz:** \n[**Beni Davet Et**](https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8) \n[**Site**](https://klamy.glitch.me/) \n[**Destek Sunucum**](https://discord.gg/vaHw5U3geP)
       `)
  .setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL)
  .setThumbnail("https://cdn.discordapp.com/attachments/818160829522116611/819962131200868392/e20acf40438713.577f394167b64.png")
  .setImage("https://cdn.discordapp.com/attachments/818160829522116611/819621148047573044/standard.gif") 
   return message.channel.send(help).catch(console.error);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yardım','help','yardim'],
 permLevel: 0
};
 
exports.help = {
 name: 'help',
 description: 'botun gecikme süresini gösterir',
 usage: 'prefix+ping'
};