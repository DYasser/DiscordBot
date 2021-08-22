module.exports = {
    name: 'hello',
    description: 'I come up with a greeting for you',
    type: 'stuff',
    execute(message, args){
        message.react('💖');
        
        let randomMsg = Math.floor(Math.random()*10)%6;

        switch(randomMsg){
            case 0:
                message.channel.send("Hello User :heart:");
                break;
            case 1:
                message.channel.send("Hii~~ I hope you're doing great :heart:");
                break;
            case 2:
                message.channel.send("How is it going :heart:");
                break;
            case 3:
                message.channel.send("Heyy~~ :heart:");
                break;
            case 4:
                message.channel.send("Happy to see that you are doing well :heart:");
                break;
            case 5:
                message.channel.send("Hii~ hope u're feeling good :heart:");
                break;
        }
    }
}