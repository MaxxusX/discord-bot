const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	cooldown: 1,
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('pings the bot'),
	async execute(interaction) {
		const sent = await interaction.reply({ content: 'Pinging...', fetchReply: true });
		await interaction.editReply(`Websocket Heartbeat: ${interaction.client.ws.ping}ms\nRountrip Latency: ${sent.createdTimestamp - interaction.createdTimestamp}ms`);
	},
};