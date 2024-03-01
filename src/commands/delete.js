
export const deleteMessages = async (client, guild, max) => {
        guild.channels.cache.forEach(async (channel) => {
            try {
                const messagesToDelete = await channel.messages.fetch({ limit: max });
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
};
