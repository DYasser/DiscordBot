const Discord = require('discord.js');
const express = require("express");
const fs = require('fs');
const Router = require("./api/routes/");
const cors = require("cors");
const app = express();
require('./api/config/db-config')

const CONFIG = require('./api/config/env-config').CONFIG;

//Testing the connection to the server, you can delete this when you push to a server since it is useless to console it there.
connection.query('SELECT 1', (err, result) => {
    console.log({ error: err, ok: result })
})

const client = new Discord.Client();

client.commands = new Discord.Collection();

app.use(cors());

app.use("/api", cors(), Router);

//  ------------------  Discord Bot ---------------------------------  //
const prefix = '?';

var asleep = false;

const commandFiles = fs.readdirSync('./commands/').filter( file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log("Yume chan desu~!")
});

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift();//.toLowerCase();

    if(asleep && command !== "goodmorning") {
        message.channel.send("Zzzz");
        return;
    }

    if(asleep && command === "goodmorning"){
        message.channel.send("☺️ mornin'~");
        asleep = false;
        return;
    }

    if(command === 'hello'){
        client.commands.get('hello').execute(message, args);
    } else if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    } else if(command === 'help'){
        client.commands.get('help').execute(message, args);
    } else if(command === 'request'){
        client.commands.get('request').execute(message, args, connection);
    } else if(command === 'list'){
        client.commands.get('list').execute(message, args);
    } else if(command === 'meme'){
        client.commands.get('meme').execute(message, args);
    } else if(command === 'goodnight'){
        asleep = true;
        client.commands.get('goodnight').execute(message, args);
    } else if(command === 'goodmorning'){
        client.commands.get('goodmorning').execute(message, args);
    } else if(command === 'choose'){
        client.commands.get('choose').execute(message, args);
    } else if(command === 'reddit'){
        client.commands.get('reddit').execute(message, args);
    } else if(command === 'pingtest'){
        client.commands.get('pingtest').execute(message, args);
    } else {
        message.channel.send("I can't do it yet.. Gomenasai~");
    }
});
//  ------------------  Discord Bot ---------------------------------  //

module.exports = app;

//Listen on env port or 3000
let port=process.env.PORT||3000
app.listen(port, () => {
    console.log(`App running on port ${port} `);
});

client.login(process.env.token);