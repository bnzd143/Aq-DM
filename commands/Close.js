var Discord = require('discord.js');
const kahrbadata = require('../data.json');
const log = require(`../handlers/logHandler.js`);
const client = new Discord.Client();

exports.run = async (client, msg, params) => {

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

  
  let thisUser = msg.channel.name.replace('dm-', '')
  let user = client.users.get(thisUser);

  user.send('**<a:698454525471621151:773183928772984883>  Ticket has been closed by  ' +""+ msg.author+ " **")
  msg.channel.delete()

    const embed = new Discord.RichEmbed()
    .setAuthor(`Aqua City Mta Support`)
    .setDescription('**<:Chat:772158811355086869>  ساعدنا في تقييم ' +""+ msg.author + " \n 1/5 | :one:  \n 2/5 | :two: \n 3/5 | :three: \n 4/5 | :four: \n 5/5 | :five:**")
    .setColor(`random`)
    .setTimestamp()
    .setFooter(`${kahrbadata.generic.footer}`, `${kahrbadata.generic.footerURL}`)
    user.send(embed)

.then(g => { 
g.react("1️⃣");
g.react("2️⃣");
g.react("3️⃣");
g.react("4️⃣");
g.react("5️⃣");
})

}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['close']
};

exports.help = {
  name: 'Close MODE',
  description: 'للقفل التذكرة',
  usage: 'close'
};
