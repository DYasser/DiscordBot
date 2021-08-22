module.exports = {
    name: 'choose',
    description: 'I can help you choose from many choices, just make spaces between choices',
    type: 'utility',
    execute(message, args){
        let msg = message.content.split(" ");

        msg.shift();

        let choice = msg.length;

        let randomChoice = Math.floor(Math.random()*1000)%choice;

        message.channel.send("The choice is clear: " + msg[randomChoice]);
    }
}