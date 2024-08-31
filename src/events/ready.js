export default client => {
    client.on('ready', async () => {
        console.log('Caffeine bot ready on account ' + client.user.tag);
    });
};
