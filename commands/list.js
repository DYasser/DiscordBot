const pagination = require('discord.js-pagination');
const Discord = require('discord.js');

module.exports = {
    name: 'list',
    description: 'I list you all the requests that have been done.',
    type: 'utility',
    execute(message, args){
        let requests = new Discord.MessageEmbed()
        .setTitle(':writing_hand: Requests :writing_hand:')
        .setTimestamp();

        connection.query(`
        SELECT * FROM requests`, function(err, result, fields){
            
            for( x in result){
                requests.addField('`?`'+result[x].commandName, '- '+result[x].description);
            }

            const pages = [
                requests
            ];
    
            const emojiList = ["⏪", "⏩"];
    
            const timeout = '0';
    
            pagination(message, pages, emojiList, timeout)
        })
    }
}