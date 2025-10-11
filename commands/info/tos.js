import { EmbedBuilder, SlashCommandBuilder } from "discord.js";
import * as embeds from "../../modules/embeds.js";

export const
	cooldown = 10,

	data = new SlashCommandBuilder()
		.setName("tos")
		.setDescription("sends the bot's tos"),

	execute = async interaction => {
		const embed = new EmbedBuilder()
			.setColor(embeds.colors.notice)
			.setTitle("TOS")
			.setDescription("https://maxxus.pages.dev/tos\n\n**TL;DR**\nuhhhhhhhhhhhh just dont be a bad person, if i break ur pc dont sue me,,,,,yhsffaegbhgzga yeah thats pretty much it");

		await interaction.reply({ embeds: [embed] });
	};