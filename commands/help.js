const pagination = require('discord.js-pagination');
const Discord = require('discord.js');
const fs = require('fs');

module.exports = {
    name: "help",
    description: "The help command, what do you expect u fucking weeb?!",
    type: 'utility',
    async execute (message, args){

        let commands = [];
        const commandFiles = fs.readdirSync('./commands/').filter( file => file.endsWith('.js'));
        for(const file of commandFiles){
            const command = require(`../commands/${file}`);
            commands.push({"type": command.type,
                        "name": command.name,
                        "description": command.description})
        }

        //Sort your commands into categories, and make seperate embeds for each category
        const stuff = new Discord.MessageEmbed()
        .setTitle('Does stuff')
        .setTimestamp()
        for(command in commands){
            if(commands[command].type === "stuff"){
                stuff.addField('`?`'+commands[command].name, ''+commands[command].description);
            }
        }

        const fun = new Discord.MessageEmbed()
        .setTitle('Fun')
        .setTimestamp()
        for(command in commands){
            if(commands[command].type === "fun"){
                fun.addField('`?`'+commands[command].name, ''+commands[command].description);

            }
        }
        const utility = new Discord.MessageEmbed()
        .setTitle('Utility')
        .setTimestamp()
        for(command in commands){
            if(commands[command].type === "utility"){
                utility.addField('`?`'+commands[command].name, ''+commands[command].description);

            }
        }
        const pages = [
                stuff,
                fun,
                utility
        ]

        const emojiList = ["⏪", "⏩"];

        //const timeout = '120000';

        pagination(message, pages, emojiList)
    }
}