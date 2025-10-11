export default (millis) => {
	let ms = Number(millis ?? 0);

	let units = {};

	units["years"] = Math.trunc(ms / 31557600000); // 365.25 days
	ms %= 31557600000;

	units["months"] = Math.trunc(ms / 2629800000); // 30.44 days (approx)
	ms %= 2629800000;

	units["days"] = Math.trunc(ms / 86400000);
	ms %= 86400000;

	units["hours"] = Math.trunc(ms / 3600000);
	ms %= 3600000;

	units["minutes"] = Math.trunc(ms / 60000);
	ms %= 60000;

	units["seconds"] = Math.trunc(ms / 1000);

	let formatted = [];
	for (const [unit, value] of Object.entries(units)) {
		if (value) formatted.push(`${value} ${value === 1 ? unit.slice(0, -1) : unit}`);
	};

	return formatted.length > 0 ? formatted.join(", ") : "0 seconds";
};