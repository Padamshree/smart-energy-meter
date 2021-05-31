const defaultOptions = {
	animDuration: 1,
	showValue: true,
	initialValue: 0,
	dialStartAngle: 90,
	dialEndAngle: 0
};

const gaugeOptions = {
	voltage: {
		valueText: "Volts",
		label: "Voltage",
		options: { 
		...defaultOptions,
		max: 300,
	}},
	current: {
		valueText: "Amps",
		label: "Current",
		options: { 
		...defaultOptions,
		max: 300,
	}},
	power: {
		valueText: "Watts",
		label: "Power",
		options: { 
		...defaultOptions,
		max: 30000,
	}},
	units: {
		valueText: "kWhs",
		label: "Units",
		options: { 
		...defaultOptions,
		max: 30000,
	}},
};

export default gaugeOptions;