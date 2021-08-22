module.exports = {
    name: 'goodnight',
    description: 'I can finally sleep',
    type: 'stuff',
    execute(message, args){
        message.react('😴');
        message.channel.send("🥱 Goodnight summoner~~");
    }
}