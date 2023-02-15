const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
    intents: [GatewayIntentBits.Guilds]
});


const token = 'MTA3NTI2ODUwNDUyNzMyMzE2Ng.GHgxS3.N92i1bMGn241NakM3ilvX8hrEwD5bo2UubyYaM';

client.on('ready', () => {
  console.log('Bot is now connected');
});

client.on('message', (message) => {
  if (message.author.bot) return;
  message.channel.send(message.content);
});

client.login(token);
