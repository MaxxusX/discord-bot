const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
	cooldown: 1,
	data: new SlashCommandBuilder()
		.setName('user')
		.setDescription('Provides information about the user.'),
	async execute(interaction) {
		const newEmbed = new EmbedBuilder()
			.setColor(0x0099FF)
			.setTitle(`**${interaction.user.username}'s user info**`)
			.setThumbnail(interaction.user.avatarURL({ extension: "png" }))
			.addFields(
				{ name: '**Info**', value: `**user:** ${interaction.user}
**username:** \`${interaction.user.username}\`
**discriminator:** \`#${interaction.user.discriminator}\`
**id:** \`${interaction.user.id}\`
**displayName:** \`${interaction.user.displayName}\`
**globalName:** \`${interaction.user.globalName}\`
**bot?:** \`${interaction.user.bot}\`
**avatarURL:** \`${interaction.user.avatarURL({ extension: "png" })}\`
**avatarDecoration:** \`${interaction.user.avatarDecoration}\`
**bannerURL:** \`${interaction.user.bannerURL()}\`
**createdAt:** \`${interaction.user.createdAt}\`` },
			)
			.setTimestamp()


		await interaction.reply({ embeds: [newEmbed] });
	},
};