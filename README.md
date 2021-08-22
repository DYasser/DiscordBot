# Discord Bot
> The first discord bot I experience coding. Yume as in dream in Japanese.

This was my first experience coding a discord bot, so I just played with it a little bit. I didn't intend to make any innovative command only was a tad curious about how discord bots work. I used **Node.js** and **Discord.js** to create this bot.

### [Commands](https://github.com/DYasser/DiscordBot/tree/master/commands):  
- [**choose:**](https://github.com/DYasser/DiscordBot/blob/master/commands/choose.js) helps the user to choose between many choices.
- [**goodmorning**](https://github.com/DYasser/DiscordBot/blob/master/commands/goodmorning.js)/ [**goodnight:**](https://github.com/DYasser/DiscordBot/blob/master/commands/goodnight.js) puts the bot on an awake/ sleep state respectively. (*Sleep state stops all other commands from working until the bot wakes up*)
- [**hello:**](https://github.com/DYasser/DiscordBot/blob/master/commands/hello.js) greets the user randomly from the 5 greetings provided.
- [**help:**](https://github.com/DYasser/DiscordBot/blob/master/commands/help.js) shows all the commands using the an iteration that goes through all the .js files in the commands folder.
- [**request:**](https://github.com/DYasser/DiscordBot/blob/master/commands/request.js) used to give a request of a certain command that the bot needs or lacks.
- [**list:**](https://github.com/DYasser/DiscordBot/blob/master/commands/list.js) lists all the requests.
- [**meme:**](https://github.com/DYasser/DiscordBot/blob/master/commands/meme.js) grabs a meme from the reddit r/memes.
- [**reddit:**](https://github.com/DYasser/DiscordBot/blob/master/commands/reddit.js) grabs a photo from any reddit stated.
- [**pingtest:**](https://github.com/DYasser/DiscordBot/blob/master/commands/pingtest.js) tests the ping of the user.
- [**ping:**](https://github.com/DYasser/DiscordBot/blob/master/commands/ping.js) pong.

I have added a folder api that I intended to use for all needed routes, but I found myself not using it and left it there just in case.

### Heroku:
I used Heroku to host my bot so that I don't need to each time run it for it to be connected. I also used the database from there (that I already removed so the cridentials in the code can't be used ^^)
