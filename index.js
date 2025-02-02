//Maxxinator Bot
// Require the necessary discord.js classes
const fs = require('node:fs');
const path = require('node:path');
const { Client, Collection, Events, GatewayIntentBits, ActivityType } = require('discord.js');
const { token } = require('./config.json');

function logtofile(txt) {
	txt = "\n" + txt
	fs.appendFile('_log.txt', txt, err => {
		if (err) {
			console.error(err);
		}
		// file written successfully
	});
}

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.commands = new Collection();
const foldersPath = path.join(__dirname, 'commands');
const commandFolders = fs.readdirSync(foldersPath);

for (const folder of commandFolders) {
	const commandsPath = path.join(foldersPath, folder);
	const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const filePath = path.join(commandsPath, file);
		const command = require(filePath);
		// Set a new item in the Collection with the key as the command name and the value as the exported module
		if ('data' in command && 'execute' in command) {
			client.commands.set(command.data.name, command);
		} else {
			console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
			logtofile(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
		}
	}
}

// When the client is ready, run this code (only once)
// We use 'c' for the event parameter to keep it separate from the already defined 'client'
client.once(Events.ClientReady, c => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
	logtofile(`Ready! Logged in as ${c.user.tag}`)
	client.user.setPresence({ activities: [{ name: 'you', type: ActivityType.Watching }], status: 'online' });
});

client.cooldowns = new Collection();

client.on(Events.InteractionCreate, async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const command = interaction.client.commands.get(interaction.commandName);

	if (!command) {
		console.error(`No command matching ${interaction.commandName} was found.`);
		return;
	}

	const { cooldowns } = interaction.client;

	if (!cooldowns.has(command.data.name)) {
		cooldowns.set(command.data.name, new Collection());
	}

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
		}
	}

	timestamps.set(interaction.user.id, now);
	setTimeout(() => timestamps.delete(interaction.user.id), cooldownAmount);

	try {
		await command.execute(interaction);
		//console.log(interaction)
		let parameters = interaction.toString() // convert to string
		parameters = parameters.split(" ") // seperate the command and parameters
		parameters.shift() // remove the command so its just the parameters
		parameters.toString().replaceAll(",", " ") // convert back to string
		console.log(`--------------------------------------------------------------------\nran command: "${interaction.commandName}"\nwith parameters: "${parameters}"\nin server: "${interaction.guild.name}" (${interaction.guildId})\nin channel: "#${interaction.channel.name}" (${interaction.channelId})\nby user: "${interaction.user.tag}" (${interaction.user.id})`)
		logtofile(`--------------------------------------------------------------------\nran command: "${interaction.commandName}"\nwith parameters: "${parameters}"\nin server: "${interaction.guild.name}" (${interaction.guildId})\nin channel: "#${interaction.channel.name}" (${interaction.channelId})\nby user: "${interaction.user.tag}" (${interaction.user.id})`)
	} catch (error) {
		console.error(error);
		logtofile(error)
		if (interaction.replied || interaction.deferred) {
			await interaction.followUp({ content: 'There was an error while executing this command!', ephemeral: true });
		} else {
			await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
		}
	}
});

// Log in to Discord with your client's token
client.login(token);