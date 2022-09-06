const {
    SlashCommandBuilder,
} = require("discord.js");

module.exports = {
    type: "slash", //button, modal, select_menu, message
    command: new SlashCommandBuilder().setName("ornek").setDescription("ornek"),
    async run({
        client,
        interaction
    }) {
        await interaction.reply({
            content: "ornek"
        });
    }
};