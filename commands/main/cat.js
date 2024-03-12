const { SlashCommandBuilder } = require('discord.js');
const cats = require('../../modules/cats.js');
const quotes = [
	'meow',
	'mewo',
	'guh',
	'kitty',
	'microwave dinner',
	'✋: pet  |  🔥: microwave dinner',
	'uwu',
];

function getRandomInt(max) {
	return Math.floor(Math.random() * max);
};

module.exports = {
	cooldown: 1,
	data: new SlashCommandBuilder()
		.setName('cat')
		.setDescription('posts a cat(meme)'),
	async execute(interaction) {
		await interaction.reply(cats[getRandomInt(cats.length)]);
		await interaction.channel.send(quotes[getRandomInt(quotes.length)]);
	},
};