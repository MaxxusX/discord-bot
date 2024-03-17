const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	cooldown: 1,
	data: new SlashCommandBuilder()
		.setName('status')
		.setDescription('sends info about the bot'),
	async execute(interaction) {
		const milliseconds = interaction.client.uptime
		const hours = Math.floor((milliseconds / 1000 / 60 / 60) % 24);
		const minutes = Math.floor((milliseconds / 1000 / 60) % 60);
		const seconds = Math.floor((milliseconds / 1000) % 60);
		await interaction.reply(`Uptime: ${hours}hrs ${minutes}mins and ${seconds}s\nCreated At: ${interaction.client.application.createdAt}`);
	},
};