const Discord = require('discord.js');

module.exports = {
    name: 'pingtest',
    description: 'Tests your ping for you..',
    type: 'utility',
    execute(message, args, connection){
        message.channel.send("Pinging...").then(m =>{
            // The math thingy to calculate the user's ping
              var ping = m.createdTimestamp - message.createdTimestamp;
  
            // Basic embed
              var embed = new Discord.MessageEmbed()
              .setAuthor(`Your ping is ${ping}`)
              .setColor("Your Color")
              
              // Then It Edits the message with the ping variable embed that you created
              m.edit(embed)
          });
    }
}
