module.exports = {
    name: 'messageCreate',
    async run(client, message) {
        client.interactions.filter((int) => int.type == 'message').find((int) => message.content.startsWith(int.name))?.run({
            client,
            message,
        });
    },
};
