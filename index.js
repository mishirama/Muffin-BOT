const Discord = require("discord.js")
require("dotenv").config()

const TOKEN = "OTY2MjQ1ODU2Njk1MTY5MTE0.Yl-8lA.4RJHnyuUiLXy5vnVhZpTHSaNAJM"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})
client.on("ready", () =>{
    console.log(`Logged In as ${client.user.tag}`)
})

client.on("message", message =>{
    if(message.content === "ping"){
        message.reply("pong")
    }
})

client.login(process.env.TOKEN)
