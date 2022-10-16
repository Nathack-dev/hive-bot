const Discord = require("discord.js")
const fetch = require("node-fetch");


module.exports.run = async (bot, message, args) => {
  const bee = await fetch("https://api.qwant.com/v3/search/images?t=images&q=bee&count=250&locale=fr_FR&offset=0&device=desktop&safesearch=1")
    .then(res => res.json())
    .then(json => {
      let img = json.data.result.items[Math.floor(Math.random() * json.data.result.items.length)];
      return img.media
    });
  let bicon = bot.user.displayAvatarURL();
  
  const embed = new Discord.MessageEmbed()
    .setTitle("Bzzzzz 🐝")
    .setImage(bee)
    .setColor('#ffff00')
    .setFooter(`Requested by : ${message.author.tag}`, bicon);
 
  message.delete()

  message.channel.send(embed);
};

   module.exports.help = {
       name: "bee"
   } 
