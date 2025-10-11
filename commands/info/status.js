import { EmbedBuilder, SlashCommandBuilder, version } from "discord.js";
import * as embeds from "../../modules/embeds.js";
import formatDuration from "../../modules/formatDuration.js";

export const
	cooldown = 1,

	data = new SlashCommandBuilder()
		.setName("status")
		.setDescription("sends the bot's status and other info"),

	execute = async interaction => {
		const currenttime = new Date();
		const createdAt = interaction.client.application.createdAt;
		const readyAt = interaction.client.readyAt;
		const uptime = interaction.client.uptime;

		const embed = new EmbedBuilder()
			.setColor(embeds.colors.normal)
			.setTitle("Bot Status")
			.setDescription(`
**Current Time:** <t:${currenttime.getTime()}:F>
**Created At:** <t:${createdAt.getTime()}:F>
**Ready At:** <t:${readyAt.getTime()}:F>

**Uptime:** ${formatDuration(uptime)}

**Websocket Ping:** ${interaction.client.ws.ping}ms

**Discord.js Version:** ${version}

**Bot Permssions:**
\`\`\`
${interaction.appPermissions.toArray().join(", ")}
\`\`\`
`.trim())
			.setTimestamp();

		await interaction.reply({ embeds: [embed] });
	};