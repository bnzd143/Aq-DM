var Discord = require('discord.js');
const kahrbadata = require('../data.json');
const log = require(`../handlers/logHandler.js`);
const client = new Discord.Client();

exports.run = async (client, msg, params) => {
  const args = msg.content.slice(kahrbadata.prefix.length+exports.help.name).trim().split(/ +/g);

  if(!msg.channel.name.startsWith(`dm-`)) {
   
    const embed = new Discord.RichEmbed()
    .setAuthor(`${kahrbadata.generic.messages.noPermissions}`)
    .setDescription(`يمكنك فقط تنفيذ هذا الأمر في روم تذكرة المساعدة!`)
    .setColor(kahrbadata.generic.colour.error)
    .setTimestamp()
    .setFooter(`${kahrbadata.generic.footer}`, `${kahrbadata.generic.footerURL}`)
    msg.channel.send(embed)
    return;
  }
  
	if (!args[1]) {
		const embed = new Discord.RichEmbed()
		.setAuthor(kahrbadata.generic.messages.error)
		.setDescription('ياخي حط الرد ومتذكاش :( ')
		.setColor(kahrbadata.generic.colour.error)
		.setTimestamp()
		.setFooter(`${kahrbadata.generic.footer}`, `${kahrbadata.generic.footerURL}`)
		msg.channel.send(embed).catch((error) => {log.error(error)});
		return;
  }


  
  let thisUser = msg.channel.name.replace('dm-', '')
  let user = client.users.get(thisUser);

  var reply = args.splice(1).join(" ");
  user.send(`**<:Support:772157792650788875> ${msg.author.tag} : || ${reply} ||**`)
  msg.react('✔️')
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['re']
};

exports.help = {
  name: 'Reply MODE',
  description: 'للرد علي التيكت',
  usage: 're'
};
