module.exports = {
    name: 'ping',
    description: 'pong',
    type: 'fun',
    execute(message, args){
        message.channel.send("pong!");
    }
}