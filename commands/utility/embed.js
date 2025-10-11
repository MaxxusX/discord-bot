import { EmbedBuilder, PermissionFlagsBits, SlashCommandBuilder } from "discord.js";
import * as embeds from "../../modules/embeds.js";

export const
	cooldown = 1,

	data = new SlashCommandBuilder()
		.setName("embed")
		.setDescription("Sends an embed.")
		.setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages)
		.addStringOption(option => option
			.setName("description")
			.setDescription("main text/description")
			.setMaxLength(4096)
			.setRequired(true))
		.addStringOption(option => option
			.setName("title")
			.setDescription("big text at the top")
			.setMaxLength(256)
			.setRequired(false))
		.addStringOption(option => option
			.setName("thumbnail")
			.setDescription("small image next to the title")
			.setAutocomplete(false)
			.setMaxLength(6000)
			.setRequired(false))
		.addStringOption(option => option
			.setName("image")
			.setDescription("large image at middle-bottom")
			.setAutocomplete(false)
			.setMaxLength(6000)
			.setRequired(false))
		.addStringOption(option => option
			.setName("fieldtitle")
			.setDescription("title of the extra field")
			.setMaxLength(256)
			.setRequired(false))
		.addStringOption(option => option
			.setName("fieldtext")
			.setDescription("text/description in the extra field")
			.setMaxLength(1024)
			.setRequired(false))
		.addStringOption(option => option
			.setName("footer")
			.setDescription("small text at the very bottom")
			.setMaxLength(2048)
			.setRequired(false)),

	execute = async interaction => {
		const title = interaction.options.getString("title");
		const description = interaction.options.getString("description")?.replaceAll("\\n","\n");
		const thumbnail = interaction.options.getString("thumbnail").trim();
		const image = interaction.options.getString("image").trim();
		const fieldtitle = interaction.options.getString("fieldtitle");
		const field = interaction.options.getString("field")?.replaceAll("\\n","\n");
		const footer = interaction.options.getString("footer");

		await interaction.reply({ content: "sending...", ephemeral: true });

		const newEmbed = new EmbedBuilder().setColor(embeds.colors.userinput);

		if (title) newEmbed.setTitle(title);
		if (description) newEmbed.setDescription(description);
		if (thumbnail) {
			if (URL.canParse(thumbnail)) {
				newEmbed.setThumbnail(thumbnail);
			} else {
				await interaction.editReply("error; malformed url! thumbnail urls **MUST BE ABSOLUTE!**");
				return;
			};
		};
		if (image) {
			if (URL.canParse(image)) {
				newEmbed.setImage(image);
			} else {
				await interaction.editReply("error; malformed url! image urls **MUST BE ABSOLUTE!**");
				return;
			};
		};
		if (field) newEmbed.addFields(fieldtitle ? { name: fieldtitle, value: field } : { value: field });
		if (footer) newEmbed.setFooter({ text: footer });

		await interaction.channel.send({ embeds: [newEmbed] });
	};