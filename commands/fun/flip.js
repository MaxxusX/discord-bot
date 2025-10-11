import { SlashCommandBuilder } from "discord.js";
import flipText from "../../modules/flip.js";

export const
	cooldown = 1,

	data = new SlashCommandBuilder()
		.setName("flip")
		.setDescription("flips text upsidedown")
		.addStringOption(option => option
			.setName("text")
			.setDescription("the text to flip")
			.setMaxLength(2000)
			.setRequired(true)),

	execute = async interaction => {
		const text = interaction.options.getString("text");

		await interaction.reply(flipText(text));
	};