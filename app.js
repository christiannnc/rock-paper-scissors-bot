const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);

app.all("/", (req, res) => {
    res.end();
});

function keepAlive() {
    server.listen(3000, () => {
        console.log("Server is online!");
    });
}

const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});

const token =
    "MTA3NTYzNzgwNTY5MjIzOTk0Mw.GQ43EI.cTw0CouBQd80AsE_HV2AxKGKz0dRUKlbssOuG4";

client.on("ready", () => {
    console.log("Bot is now connected");
});

client.on("messageCreate", async (message) => {
    if (message?.author.bot) return;
    
    if(message.content.toLowerCase() === "rock" || message.content.toLowerCase() === "scissors" || message.content.toLowerCase() === "paper") {
        const options = ['rock', 'paper', 'scissors'];
        const choice = options[Math.floor(Math.random() * options.length)];
        message.channel.send(`i chose ${choice}`);
    }
});

keepAlive();
client.login(token);
