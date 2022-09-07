const fs = require("fs");
const {
    Collection,
    REST,
    Routes
} = require("discord.js");
const config = require("../config.json");

module.exports = (client) => {
    client.interactions = new Collection();

    let commands = [];

    fs.readdirSync("./interactions/").forEach((f) => {
        let interaction = require(`../interactions/${f}`);

        client.interactions.set(`${f.replace(".js","")}`, {
            name: f.replace(".js", ""),
            ...interaction
        });

        if (interaction.command) {
            commands.push(interaction.command);
        };
    });


    const rest = new REST({
        version: '10'
    }).setToken(config.token);

    client.on("ready", () => (async() => {
        try {

            await rest.put(Routes.applicationCommands(client.user.id), {
                body: commands
            });

            console.log('Global commans updated');
        } catch (error) {
            console.error(error);
        }
    })());

    fs.readdirSync("./events/").forEach((f) => {
        let event = require(`../events/${f}`);

        client.on(`${f.replace(".js","")}`, (...args) => {
            event.run(client, ...args);
        });
    });
};
