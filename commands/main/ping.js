const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	cooldown: 1,
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('pings the bot'),
	async execute(interaction) {
		const delay = Date.now() - interaction.createdAt
		const sent = await interaction.reply({ content: 'Pinging...', fetchReply: true });
		const delay2 = (Date.now() - interaction.createdAt) - delay
		const delay3 = (Date.now() - interaction.createdAt)
		interaction.editReply(`Roundtrip Latency: ${Date.now() - sent.createdTimestamp}ms\nCreation Delay: ${delay}ms\nMessage Send Delay: ${delay2}ms\nOverall Delay: ${delay3}ms`);
	},
};