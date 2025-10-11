import { EmbedBuilder } from "discord.js";

export { colors, errors };

const colors = {
	"error": [255, 0, 0],
	"notice": [255, 210, 0],
	"userinput": [70, 70, 70],
	"normal": [0, 136, 204], // color of maxxus outline
	"rare": [100, 0, 200],
};

const errors = {
	"500": new EmbedBuilder()
		.setColor(colors.error)
		.setTitle("500: An internal server error occured!")
		.setImage("https://raw.githubusercontent.com/SAWARATSUKI/KawaiiLogos/main/ResponseCode/500%20InternalServerError.png"),
};