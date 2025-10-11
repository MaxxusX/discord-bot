//Maxxinator Bot
// Require the necessary discord.js classes
import { ActivityType, Client, Collection, Events, GatewayIntentBits } from "discord.js";
import * as fs from "node:fs";
import * as path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import * as embeds from "./modules/embeds.js";
import { writelog } from "./modules/writelog.js";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const logprefix = "\n\n-\n\n";

const client = new Client({
	intents: [
		// required for a lot of stuff
		GatewayIntentBits.Guilds,

		// for /react
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.GuildMessageReactions,

		// for /user
		GatewayIntentBits.GuildMembers, // privileged
	],
	presence: {
		status: "online",
		activities: [{ name: "you", type: ActivityType.Watching }],
	},
});

client.commands = new Collection();
const foldersPath = path.join(__dirname, "commands");

fs.readdirSync(foldersPath).forEach(folder => {
	const commandsPath = path.join(foldersPath, folder);
	const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith(".js"));

	commandFiles.forEach(async file => {
		const filePath = pathToFileURL(path.join(commandsPath, file));
		const command = await import(filePath);

		// Set a new item in the Collection with the key as the command name and the value as the exported module
		if (Object.hasOwn(command, "data") && Object.hasOwn(command, "execute")) {
			client.commands.set(command.data.name, command);
		} else {
			console.warn(...await writelog("🟨 A command is missing a required \"data\" and/or \"execute\" property.", {
				"File Path": filePath.href,
				"Command Data": command,
			}));
		};
	});
});

client.once(Events.ClientReady, c => {
	console.info(logprefix, "Ready! Logged in as", c.user.tag);
});

client.cooldowns = new Collection();

client.on(Events.InteractionCreate, async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const command = interaction.client.commands.get(interaction.commandName);

	if (!command) {
		const guildowner = await interaction.guild.fetchOwner();
		console.error(...await writelog("🟥 Attempted to execute a command, but it was not found.", {
			"Command Name": interaction.commandName,
			"Command Parameters": interaction.options.data.map(cio => [cio.name, cio.value]),
			"Server Name": interaction.guild.name,
			"Server ID": interaction.guildId,
			"Server Owner Display Name": guildowner.user.displayName,
			"Server Owner Global Name": guildowner.user.globalName,
			"Server Owner Tag": guildowner.user.tag,
			"Server Owner ID": guildowner.user.id,
			"Channel Name": interaction.channel.name,
			"Channel ID": interaction.channelId,
			"User Display Name": interaction.user.displayName,
			"User Global Name": interaction.user.globalName,
			"User Tag": interaction.user.tag,
			"User ID": interaction.user.id,
		}));

		if (interaction.replied || interaction.deferred) {
			await interaction.followUp({ embeds: [embeds.errors["500"]], ephemeral: true });
		} else {
			await interaction.reply({ embeds: [embeds.errors["500"]], ephemeral: true });
		};

		return;
	};

	const { cooldowns } = interaction.client;

	if (!cooldowns.has(command.data.name)) {
		cooldowns.set(command.data.name, new Collection());
	};

	const now = Date.now();
	const timestamps = cooldowns.get(command.data.name);
	const defaultCooldownDuration = 1;
	const cooldownAmount = (command.cooldown ?? defaultCooldownDuration) * 1000;

	if (timestamps.has(interaction.user.id)) {
		const expirationTime = timestamps.get(interaction.user.id) + cooldownAmount;

		if (now < expirationTime) {
			//const expiredTimestamp = Math.round(expirationTime / 1000);
			//return interaction.reply({ content: `Please wait, you are on a cooldown for \`${command.data.name}\`. You can use it again <t:${expiredTimestamp}:R>.`, ephemeral: true });
			return interaction.reply({ content: `you can use this command again in ${cooldownAmount / 1000} seconds`, ephemeral: true });
		};
	};

	timestamps.set(interaction.user.id, now);
	setTimeout(() => timestamps.delete(interaction.user.id), cooldownAmount);

	try {
		await command.execute(interaction);

		console.log(logprefix, {
			"command": interaction.commandName,
			"parameters": interaction.options.data.map(cio => [cio.name, cio.value]),
			"server": interaction.guild.name,
			"serverid": interaction.guildId,
			"channel": interaction.channel.name,
			"channelid": interaction.channelId,
			"user": interaction.user.tag,
			"userid": interaction.user.id,
		});
	} catch (e) {
		const guildowner = await interaction.guild.fetchOwner();
		console.error(...await writelog("🟥 An error occured during command execution.", {
			"Error": e,
			"Command Name": interaction.commandName,
			"Command Parameters": interaction.options.data.map(cio => [cio.name, cio.value]),
			"Server Name": interaction.guild.name,
			"Server ID": interaction.guildId,
			"Server Owner Display Name": guildowner.user.displayName,
			"Server Owner Global Name": guildowner.user.globalName,
			"Server Owner Tag": guildowner.user.tag,
			"Server Owner ID": guildowner.user.id,
			"Channel Name": interaction.channel.name,
			"Channel ID": interaction.channelId,
			"User Display Name": interaction.user.displayName,
			"User Global Name": interaction.user.globalName,
			"User Tag": interaction.user.tag,
			"User ID": interaction.user.id,
		}));

		if (interaction.replied || interaction.deferred) {
			await interaction.followUp({ embeds: [embeds.errors["500"]], ephemeral: true });
		} else {
			await interaction.reply({ embeds: [embeds.errors["500"]], ephemeral: true });
		};
	};
});

// Log in to Discord with your client's token
client.login(process.env.DISCORD_TOKEN);