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
    "MTA3NTI2ODUwNDUyNzMyMzE2Ng.GMgf7r.-XDO0ZsUTY4zI3Wu4JpkfX56dlnn38OWd-VFfU";

client.on("ready", () => {
    console.log("Bot is now connected");
});

client.on("messageCreate", async (message) => {
    if (message?.author.bot) return;
    message.channel.send(message.content);
});

keepAlive();
client.login(token);
