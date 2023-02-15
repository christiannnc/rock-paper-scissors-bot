const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
  ]
})

const token = 'MTA3NTI2ODUwNDUyNzMyMzE2Ng.Gi9vGw.2HxSZl6Fc5MQdRrxH2yaXDdrFgadiFtAs3h8b4';

client.on('ready', () => {
  console.log('Bot is now connected');
});

client.on('message', (message) => {
  if (message.author.bot) return;
  message.channel.send(message.content);
});

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

keepAlive();
client.login(token);
