import { Client } from 'discord.js-selfbot-v13';
import dotenv from 'dotenv'
import { deleteMessages } from './commands/delete.js';
dotenv.config();
const client = new Client();
client.on('ready', async () => {
console.log('Caffeine bot ready on account ' + client.user.displayName)
})
client.on('messageCreate', (msg) => {
  if (msg.author.id === client.user.id){
    switch (msg.content) {
      case 'rm -m 100':
        deleteMessages(client, msg.guild, 100)
        break;
      default:
        break;
    }
    }
})


client.login(process.env.TOKEN);

