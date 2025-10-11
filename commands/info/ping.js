import { SlashCommandBuilder } from "discord.js";

export const
	cooldown = 1,

	data = new SlashCommandBuilder()
		.setName("ping")
		.setDescription("get the bots ping"),

	execute = async interaction => {
		const sent = await interaction.reply({ content: "Pinging...", fetchReply: true });

		await interaction.editReply(`Websocket Ping: ${interaction.client.ws.ping}ms\nRountrip Latency: ${sent.createdTimestamp - interaction.createdTimestamp}ms`);
	};