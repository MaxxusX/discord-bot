import { PermissionFlagsBits, SlashCommandBuilder } from "discord.js";

export const
	cooldown = 1,

	data = new SlashCommandBuilder()
		.setName("echo")
		.setDescription("echos (says) your input")
		.setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages)
		.addStringOption(option => option
			.setName("text")
			.setDescription("text to echo back")
			.setMaxLength(2000)
			.setRequired(true)),

	execute = async interaction => {
		const text = interaction.options.getString("text");

		await interaction.reply({ content: "sending...", ephemeral: true });

		await interaction.channel.send(text);
	};