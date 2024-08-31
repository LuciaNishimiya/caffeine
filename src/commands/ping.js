export default {
    name: 'ping',
    description: 'Test if the bot works',
    execute(client, message, args) {
        message.reply('Pong!');
    }
};