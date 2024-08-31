import { Client, Collection } from 'discord.js-selfbot-v13';
import dotenv from 'dotenv'
import fs from 'fs';
import path from 'path';
dotenv.config();
const client = new Client();
client.commands = new Collection();

const commandFiles = fs.readdirSync('./src/commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    import(`./commands/${file}`).then(command => {
        client.commands.set(command.default.name, command.default);
        console.log(`Loaded command: ${command.default.name}`)
    });
}

const eventFiles = fs.readdirSync('./src/events').filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
    import(`./events/${file}`).then(event => {
        event.default(client);
        console.log(`Loaded event: ${path.basename(file, '.js')}`);
    }).catch(err => {
        console.error(`Error loading event ${file}:`, err);
    });
}


client.login(process.env.TOKEN);

