import { EmbedBuilder, SlashCommandBuilder } from "discord.js";
import * as embeds from "../../modules/embeds.js";

export const
	cooldown = 10,

	data = new SlashCommandBuilder()
		.setName("privacy")
		.setDescription("sends the bot's privacy policy"),

	execute = async interaction => {
		const embed = new EmbedBuilder()
			.setColor(embeds.colors.notice)
			.setTitle("Privacy Policy")
			.setDescription("https://maxxus.pages.dev/privacy\n\n**TL;DR**\ni collect some info for statistics n stuff, maybe if u like post some horrible stuff i might give the fbi your encrypted and unreadable ip address 🥶🥶\nmost of ur data is hashed and encrypted and stuff and i dont sell it or track u");

		await interaction.reply({ embeds: [embed] });
	};