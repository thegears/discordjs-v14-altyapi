const {
    Client,
    GatewayIntentBits,
    Partials
} = require("discord.js");
const config = require("./config.json");

const client = new Client({
    intents: [
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildBans,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers
    ],
    partials: [Partials.Channel],
});

require("./utils/loader.js")(client);

client.login(config.token);