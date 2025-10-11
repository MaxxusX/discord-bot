import { REST } from "@discordjs/rest";
import { Routes } from "discord-api-types/v10";
import * as fs from "node:fs";
import * as path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

console.log("Fetching application (/) commands...");

// Grab all the command files from the commands directory you created earlier
const foldersPath = path.join(__dirname, "commands");
fs.readdir(foldersPath, { recursive: true }, (err, files) => {
	if (err) {
		console.error(err);
		return;
	};

	const commandPromises = [];

	files.filter(file => file.endsWith(".js")).forEach(commandpath => {
		commandPromises.push(new Promise((res, rej) => {
			const filePath = pathToFileURL(path.join(foldersPath, commandpath));
			import(filePath).then(command => {

				if (Object.hasOwn(command, "data") && Object.hasOwn(command, "execute")) {
					res(command.data.toJSON());
					console.log(`Loaded the command "${command.data.name}"`);
				} else {
					rej(`The command at ${filePath} is missing a required "data" or "execute" property.`);
				};

			}, error => rej(error));
		}));
	});

	Promise.all(commandPromises).then(commands => {

		console.log(`Refreshing ${commands.length} application (/) commands...`);

		// The put method is used to fully refresh all commands in the guild with the current set
		const rest = new REST({ version: "10" }).setToken(process.env.DISCORD_TOKEN);
		rest.put(Routes.applicationCommands(process.env.APPLICATION_ID), {
			body: commands
		}).then(() => {
			console.log(`Successfully reloaded ${commands.length} application (/) commands!`);
		}, error => console.error(error));

	}, reason => console.error(reason));

});