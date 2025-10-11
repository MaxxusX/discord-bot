import { EmbedBuilder, SlashCommandBuilder } from "discord.js";
import * as embeds from "../../modules/embeds.js";

export const
	cooldown = 1,

	data = new SlashCommandBuilder()
		.setName("user")
		.setDescription("sends information about a user")
		.addUserOption(option => option
			.setName("user")
			.setDescription("the user to send info about")
			.setRequired(true)),

	execute = async interaction => {
		const user = interaction.options.getUser("user");

		const embed = new EmbedBuilder()
			.setColor(embeds.colors.normal)
			.setTitle(`${user.username}'s user info`)
			.setThumbnail(user.avatarURL({ extension: "png" }))
			.setDescription(`
**User:** ${user}
**Username:** ${user.username}
**Discriminator:** #${user.discriminator}
**ID:** ${user.id}
**Display Name:** ${user.displayName}
**Global Name:** ${user.globalName}
**Is a Bot?:** ${user.bot ? "✅" : "❌"}
**Avatar URL:** \`${user.avatarURL({ extension: "png" })}\`
**Avatar Decoration:** \`${user.avatarDecoration}\`
**Banner URL:** \`${user.bannerURL()}\`
**Created At:** <t:${user.createdAt.getTime()}:F>
`.trim())
			.setTimestamp();


		await interaction.reply({ embeds: [embed] });
	};