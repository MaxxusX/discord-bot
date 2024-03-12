const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
	cooldown: 1,
	data: new SlashCommandBuilder()
		.setName('react')
		.setDescription('reacts to a message (can use emojis from other servers its in!)')
		.setDefaultMemberPermissions(PermissionFlagsBits.AddReactions)
		.addStringOption(option =>
			option.setName('message')
				.setDescription('the message to react to. MUST BE AN ID!')
				.setMaxLength(150)
				.setRequired(true))
		.addStringOption(option =>
			option.setName('emoji')
				.setDescription('the emoji to react with.')
				.setMaxLength(150)
				.setRequired(true)),
	async execute(interaction) {
		const messageid = interaction.options.getString('message');
		const emojiid = interaction.options.getString('emoji');
		interaction.channel.messages.fetch(messageid).then(function (message) { message.react(emojiid) })
		await interaction.reply({ content: `done`, ephemeral: true });
	},
};