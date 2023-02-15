const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
    intents: [GatewayIntentBits.Guilds]
});

const token = 'MTA3NTI2ODUwNDUyNzMyMzE2Ng.Gi9vGw.2HxSZl6Fc5MQdRrxH2yaXDdrFgadiFtAs3h8b4';

client.on('ready', () => {
  console.log('Bot is now connected');
});

client.on('message', (message) => {
  if (message.author.bot) return;
  message.channel.send(message.content);
});

client.login(token);
