# Discord Bot

This was my first experience coding a discord bot, so I enjoyed learning about it. I was quite surprised of how many possibilities there were when I started coding this bot. I used `NodeJs` and `Discord.js` to create this bot.

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

I have added a folder api that I intended to use for all needed routes to have an optimized program.

### Heroku:
I used Heroku to host my bot to have it always connected. I also used their server to host my `MySql` database that I used in some functions.

## How to run it

First of all, you need to have [`NodeJs`](!https://github.com/nodejs/node) set up in your machine. You can find everything needed in the GitHub link I shared.

To get started you can `git clone  https://github.com/DYasser/DiscordBot.git` and have `NodeJs` installed and initialized as I said already. You can run the file then by using the command `npm start` on any command line interpreter in the main folder.

## Coding process

I started creating this project just like any `NodeJs` project by initializing the project using `npm init` then started coding on the `main.js` file.
