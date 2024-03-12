const { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
	cooldown: 1,
	data: new SlashCommandBuilder()
		.setName('embed')
		.setDescription('Sends an embed.')
		.setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
		.addStringOption(option =>
			option.setName('description')
				.setDescription('description of the embed')
				.setMaxLength(1000)
				.setRequired(true))
		.addStringOption(option =>
			option.setName('title')
				.setDescription('title of the embed')
				.setMaxLength(100)
				.setRequired(false))
		.addStringOption(option =>
			option.setName('thumbnail')
				.setDescription('thumbnail of the embed')
				.setRequired(false))
		.addStringOption(option =>
			option.setName('fieldtitle')
				.setDescription('title of the field of the embed')
				.setMaxLength(100)
				.setRequired(false))
		.addStringOption(option =>
			option.setName('field')
				.setDescription('field of the embed')
				.setMaxLength(2000)
				.setRequired(false))
		.addStringOption(option =>
			option.setName('footer')
				.setDescription('footer of the embed')
				.setMaxLength(100)
				.setRequired(false)),
	async execute(interaction) {
		const title = interaction.options.getString('title');
		const description = interaction.options.getString('description');
		const thumbnail = interaction.options.getString('thumbnail');
		const fieldtitle = interaction.options.getString('fieldtitle');
		const field = interaction.options.getString('field');
		const footer = interaction.options.getString('footer');

		await interaction.reply({ content: `sending`, ephemeral: true });

		function exists(variable) {
			if (typeof variable === 'undefined') {
				// if it doesnt exist (not declared)
				return false
			}
			if (variable) {
				// if it exists and has a value
				return true
			} else {
				// if it exists but DOESNT have a value
				return false
			}
		}

		const newEmbed = new EmbedBuilder()
			.setColor(0x0099FF)
			if (exists(title)) { newEmbed.setTitle(title) } // if title exists
			if (exists(description)) { newEmbed.setDescription(description.replaceAll("\\n","\n")) } // if description exists
			if (exists(thumbnail)) { newEmbed.setThumbnail(thumbnail) } // if thumbnail exists
			if (exists(fieldtitle) && exists(field)) { newEmbed.addFields({ name: bodytitle, value: field.replaceAll("\\n","\n") }) } // if fieldtitle AND field exist
			if (!exists(fieldtitle) && exists(field)) { newEmbed.addFields({ value: field.replaceAll("\\n","\n") }) } // if field exists but fieldtitle doesnt
			if (exists(footer)) { newEmbed.setFooter({ text: footer }); } // if footer exists

		await interaction.channel.send({ embeds: [newEmbed] });
	},
};