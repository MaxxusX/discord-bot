const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
	cooldown: 1,
	data: new SlashCommandBuilder()
		.setName('echo')
		.setDescription('echos (says) your input')
		.setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages)
		.addStringOption(option =>
			option.setName('input')
				.setDescription('what to echo back')
				.setMaxLength(2000)
				.setRequired(true))
		.addBooleanOption(option =>
			option.setName('flip')
				.setDescription('whether to flip the text')),
	async execute(interaction) {
		const input = interaction.options.getString('input');
		const flip = interaction.options.getBoolean('flip');

		await interaction.reply({ content: `sending`, ephemeral: true });

		if (flip === true) {
			const rtext = input.split('').reverse().join('');

			let ftext = rtext;
			// lowercase
			ftext = ftext.replaceAll('a', 'ɐ');
			ftext = ftext.replaceAll('b', 'q');
			ftext = ftext.replaceAll('c', 'ɔ');
			ftext = ftext.replaceAll('d', 'p');
			ftext = ftext.replaceAll('e', 'ǝ');
			ftext = ftext.replaceAll('f', 'ɟ');
			ftext = ftext.replaceAll('g', 'ɓ');
			ftext = ftext.replaceAll('h', 'ɥ');
			ftext = ftext.replaceAll('i', 'ᴉ');
			ftext = ftext.replaceAll('j', 'ſ');
			ftext = ftext.replaceAll('k', 'ʞ');
			ftext = ftext.replaceAll('l', 'ๅ');
			ftext = ftext.replaceAll('m', 'ɯ');
			ftext = ftext.replaceAll('n', 'u');
			ftext = ftext.replaceAll('o', 'o');
			ftext = ftext.replaceAll('p', 'd');
			ftext = ftext.replaceAll('q', 'b');
			ftext = ftext.replaceAll('r', 'ɹ');
			ftext = ftext.replaceAll('s', 's');
			ftext = ftext.replaceAll('t', 'ʇ');
			ftext = ftext.replaceAll('u', 'n');
			ftext = ftext.replaceAll('v', 'ʌ');
			ftext = ftext.replaceAll('w', 'ʍ');
			ftext = ftext.replaceAll('x', 'x');
			ftext = ftext.replaceAll('y', 'ʎ');
			ftext = ftext.replaceAll('z', 'z');
			// uppercase
			ftext = ftext.replaceAll('A', 'Ɐ');
			ftext = ftext.replaceAll('B', 'ꓭ');
			ftext = ftext.replaceAll('C', 'ꓛ');
			ftext = ftext.replaceAll('D', 'ꓷ');
			ftext = ftext.replaceAll('E', 'Ǝ');
			ftext = ftext.replaceAll('F', 'ꓞ');
			ftext = ftext.replaceAll('G', 'ꓨ');
			ftext = ftext.replaceAll('H', 'H');
			ftext = ftext.replaceAll('I', 'I');
			ftext = ftext.replaceAll('J', 'ſ');
			ftext = ftext.replaceAll('K', 'ꓘ');
			ftext = ftext.replaceAll('L', 'ꓶ');
			ftext = ftext.replaceAll('M', 'W');
			ftext = ftext.replaceAll('N', 'N');
			ftext = ftext.replaceAll('O', 'O');
			ftext = ftext.replaceAll('P', 'ꓒ');
			ftext = ftext.replaceAll('Q', 'Ὸ');
			ftext = ftext.replaceAll('R', 'ꓤ');
			ftext = ftext.replaceAll('S', 'S');
			ftext = ftext.replaceAll('T', 'ꓕ');
			ftext = ftext.replaceAll('U', 'ꓵ');
			ftext = ftext.replaceAll('V', 'ꓥ');
			ftext = ftext.replaceAll('W', 'M');
			ftext = ftext.replaceAll('X', 'X');
			ftext = ftext.replaceAll('Y', '⅄');
			ftext = ftext.replaceAll('Z', 'Z');
			// numbers
			ftext = ftext.replaceAll('0', '0');
			ftext = ftext.replaceAll('1', 'Ɩ');
			ftext = ftext.replaceAll('2', 'Շ');
			ftext = ftext.replaceAll('3', 'Ɛ');
			ftext = ftext.replaceAll('4', 'h');
			ftext = ftext.replaceAll('5', '૬');
			ftext = ftext.replaceAll('6', '9');
			ftext = ftext.replaceAll('7', 'L');
			ftext = ftext.replaceAll('8', '8');
			ftext = ftext.replaceAll('9', '6');
			// symbols and stuff
			ftext = ftext.replaceAll('!', '¡');
			ftext = ftext.replaceAll('@', '@');
			ftext = ftext.replaceAll('#', '#');
			ftext = ftext.replaceAll('$', '$');
			ftext = ftext.replaceAll('%', '%');
			ftext = ftext.replaceAll('^', '▼');
			ftext = ftext.replaceAll('&', '⅋');
			ftext = ftext.replaceAll('*', 'ₓ');
			ftext = ftext.replaceAll('(', ')');
			ftext = ftext.replaceAll(')', '(');
			ftext = ftext.replaceAll('<', '>');
			ftext = ftext.replaceAll('>', '<');
			ftext = ftext.replaceAll(',', 'ʻ');
			ftext = ftext.replaceAll('.', '·');
			ftext = ftext.replaceAll('/', '\\');
			ftext = ftext.replaceAll('"', 'ˌˌ');
			ftext = ftext.replaceAll('?', '¿');
			ftext = ftext.replaceAll('\'', 'ˌ');

			interaction.channel.send(ftext);
		} else {
			interaction.channel.send(input);
		}
	},
};