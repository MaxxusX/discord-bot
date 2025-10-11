import { EmbedBuilder, SlashCommandBuilder } from "discord.js";
import * as embeds from "../../modules/embeds.js";

export const
	cooldown = 10,

	data = new SlashCommandBuilder()
		.setName("copyright")
		.setDescription("sends the bot's copyright notice"),

	execute = async interaction => {
		const embed = new EmbedBuilder()
			.setColor(embeds.colors.notice)
			.setTitle("Copyright © 2023 - 2024, Maxxus; All rights reserved")
			.setDescription("https://maxxus.pages.dev/copyright\n\n**TL;DR**\n* credit me\n* dont sell my stuff\n* im not liable for what u do\n* if something bad happens, ur fault not mine\n* **i can give/remove your permission to use my stuff at any time, even if the copyright notice allows/denies it**");

		await interaction.reply({ embeds: [embed] });
	};