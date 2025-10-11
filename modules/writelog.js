import fs from "node:fs";

export { writelog };

const dateFormat = new Intl.DateTimeFormat("en-US", {
	"dateStyle": "long",
	"timeStyle": "long",
});

const writelog = (text, extra) => {
	return new Promise((res) => {
		const header = `\n\n------------------------- ${dateFormat.format(new Date())} -------------------------\n\n`;
		const extraInfo = Object.assign({
			"Node Version": process.version,
			"Node Uptime": process.uptime(),
			"CPU Usage": process.cpuUsage(),
			"Memory Usage": process.memoryUsage,
			"Available Memory": process.availableMemory(),
		}, extra ?? {});

		const logfiletext = header + text + "\n\nExtra Info:\n" + Object.entries(extraInfo).map(([key, value]) => {
			// `value instanceof Error` is unreliable :(
			if (Object.prototype.toString.call(value) === "[object Error]") {
				return value?.stack ?? `${value.name}: ${value.message}. Cause: ${value?.cause ?? "no cause available"}. (stack unavailable)`;
			} else {
				return `${key}: ${(Array.isArray(value) || typeof value === "object") ? JSON.stringify(value, null, 2) : String(value)}`;
			};
		}).join("\n");

		fs.appendFile("log.txt", logfiletext, err => {
			if (err) console.error(err);
			res([header + text + "\n\nExtra Info:\n", extraInfo]);
		});
	});
};