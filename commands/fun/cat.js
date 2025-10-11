import { EmbedBuilder, SlashCommandBuilder } from "discord.js";
import { getRandomCat } from "../../modules/cats.js";
import * as embeds from "../../modules/embeds.js";

export const
	cooldown = 1,

	data = new SlashCommandBuilder()
		.setName("cat")
		.setDescription("posts a cat(meme)"),

	execute = async interaction => {
		const cat = getRandomCat();
		const embed = new EmbedBuilder()
			.setColor(embeds.colors.normal)
			.setImage(cat.image);

		if (cat.text) embed.setTitle(cat.text);

		await interaction.reply({ embeds: [embed] });
	};