const {
    SlashCommandBuilder,
} = require("discord.js");

module.exports = {
    type: "message", //button, modal, select_menu, slash
    async run({
        client,
        message
    }) {
        await message.reply({
            content: "ornek"
        });
    }
};