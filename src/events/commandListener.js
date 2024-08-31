import dotenv from 'dotenv'
dotenv.config();
export default client => {
    client.on('messageCreate', async (message) => {
        if (!message.content.startsWith(process.env.PREFIX || '-') || message.author.id !== client.user.id) return;
        
        const args = message.content.trim().split(/ +/).slice(1);
        const commandName = args[0].toLowerCase();
        
        const command = client.commands.get(commandName);
        if (!command) return;

        try {
            command.execute(client, message, args);
        } catch (error) {
            console.error(error);
        }
    });
};

