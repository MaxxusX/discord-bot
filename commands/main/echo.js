const { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js");
const flipText = require("../../modules/flip.js");

module.exports = {
	cooldown: 1,
	data: new SlashCommandBuilder()
		.setName("echo")
		.setDescription("echos (says) your input")
		.setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages)
		.addStringOption(option =>
			option.setName("input")
				.setDescription("what to echo back")
				.setMaxLength(2000)
				.setRequired(true))
		.addBooleanOption(option =>
			option.setName("flip")
				.setDescription("whether to flip the text")),
	async execute(interaction) {
		const input = interaction.options.getString("input");
		const flip = interaction.options.getBoolean("flip");

		await interaction.reply({ content: "sending", ephemeral: true });

		if (flip === true) {
			interaction.channel.send(flipText(input));
		} else {
			interaction.channel.send(input);
		}
	},
};