export default {
    name: 'rm', 
    description: 'Remove messages',
    async execute(client, message, args) {
        const amount = parseInt(args[1], 10);
        message.guild.channels.cache.forEach(async (channel) => {
            try {
                const messagesToDelete = await channel.messages.fetch({ limit: amount });
                const userMessages = messagesToDelete.filter((msg) => msg.author.id === client.user.id);
                userMessages.forEach(async (msg) => {
                    try {
                        await msg.delete();
                    } catch (error) {
                        console.error(`Error deleting message: ${error.message}`);
                    }
                });
            } catch (error) {
                console.error(`Error getting messages in channel ${channel.id}: ${error.message}`);
            }
        })
    }
};
