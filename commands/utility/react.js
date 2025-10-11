import { PermissionFlagsBits, SlashCommandBuilder, parseEmoji } from "discord.js";

export const
	cooldown = 1,

	data = new SlashCommandBuilder()
		.setName("react")
		.setDescription("reacts to a message (can use emojis from other servers its in!)")
		.setDefaultMemberPermissions(PermissionFlagsBits.AddReactions | PermissionFlagsBits.UseExternalEmojis) // Bitwise OR is INTENTIONAL!!
		.addIntegerOption(option => option
			.setName("message")
			.setDescription("the message to react to. MUST BE AN ID!")
			.setMinValue(0)
			.setRequired(true))
		.addStringOption(option => option
			.setName("emoji")
			.setDescription("the emoji to react with.")
			.setMaxLength(200)
			.setRequired(true)),

	execute = async interaction => {
		const messageid = interaction.options.getInteger("message").toString();
		const emoji = interaction.options.getString("emoji").trim();

		await interaction.deferReply({ ephemeral: true });

		// TODO: bully user if the message cant be found
		interaction.channel.messages.fetch(messageid).then(async message => {
			// TODO: how do i check if this is a valid emoji? (parseEmoji?)
			parseEmoji(emoji);
			await message.react(emoji);

			await interaction.followUp({ content: "done", ephemeral: true });
		}, async () => {
			await interaction.followUp({ content: "couldn't find message. make sure it's a valid id. also, you have to run this command in the same channel as the message.", ephemeral: true });
		});
	};