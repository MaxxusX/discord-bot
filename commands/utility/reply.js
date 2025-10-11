import { SlashCommandBuilder } from "discord.js";

export const
	cooldown = 1,

	data = new SlashCommandBuilder()
		.setName("reply")
		.setDescription("replies with your input")
		.addStringOption(option => option
			.setName("text")
			.setDescription("what to reply back")
			.setMaxLength(2000)
			.setRequired(true)),

	execute = async interaction => {
		const text = interaction.options.getString("text");

		await interaction.reply(text);
	};