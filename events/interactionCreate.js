const {
    InteractionType
} = require("discord.js");

module.exports = {
    async run(client, interaction) {
        if (interaction.isChatInputCommand()) client.interactions.filter(int => int.type == "slash").get(interaction.commandName).run({
            client,
            interaction
        })
        else if (interaction.isButton()) client.interactions.filter(int => int.type == "button").get(interaction.customId).run({
            client,
            interaction
        })
        else if (interaction.type == InteractionType.ModalSubmit) client.interactions.filter(int => int.type == "modal").get(interaction.customId).run({
            client,
            interaction
        })
        else if (interaction.isSelectMenu()) client.interactions.filter(int => int.type == "select_menu").get(interaction.customId).run({
            client,
            interaction
        });
    },
};
