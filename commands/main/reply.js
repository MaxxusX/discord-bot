const { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js");
const flipText = require("../../modules/flip.js");

module.exports = {
	cooldown: 1,
	data: new SlashCommandBuilder()
		.setName("reply")
		.setDescription("replies with your input")
		.setDefaultMemberPermissions(PermissionFlagsBits.SendMessages)
		.addStringOption(option =>
			option.setName("input")
				.setDescription("what to reply back")
				.setMaxLength(2000)
				.setRequired(true))
		.addBooleanOption(option =>
			option.setName("flip")
				.setDescription("whether to flip the text")),
	async execute(interaction) {
		const input = interaction.options.getString("input");
		const flip = interaction.options.getBoolean("flip");

		if (flip === true) {
			await interaction.reply(flipText(input));
		} else {
			await interaction.reply(input);
		}
	},
};