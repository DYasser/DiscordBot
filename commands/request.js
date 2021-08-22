module.exports = {
    name: 'request',
    description: 'Request a command to my creator',
    type: 'utility',
    execute(message, args, connection){
        const member = message.member;
        let username = member.user.username;

        let msg = message.content.split(" ");

        msg.shift();
        let command = msg[0];

        msg.shift();
        let description = msg.join(" ", msg); 
        
        connection.query(`
        INSERT INTO requests(username, commandName, description) 
        VALUES ( "`+ username +`",
            "`+ command +`",
            "`+ description +`")`)

        message.channel.send("Command name: " + command+ "\nDescription: " + description + "\nsent by "+`${member}`+"!");
    }
}
