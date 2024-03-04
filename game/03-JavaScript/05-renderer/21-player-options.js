/* eslint-disable jsdoc/no-undefined-types */
/**
 *
 * @param {Options} options
 * @returns {Options}
 */
function mapPlayerToOptions(options) {
	console.log("mapPlayerToOptions", JSON.parse(JSON.stringify(options)));

	// Set position
	if (!["doggy", "missionary"].includes(V.position)) {
		Errors.report("Position not set to any valid values", V.position);
		options.position = "missionary";
	} else {
		options.position = V.position;
	}

	// Set directory for images
	options.src = options.root + options.position + "/";

	// Set hair properties
	options.hairLength = V.hairlengthstage;
	options.hairType = "default";

	// Set breast exposed, for example, an NPC had pushed clothing aside to make tits fall out
	options.breastsExposed = false;

	// Remove later (why?)
	T.leg_position = "down";
	if (!["up", "down"].includes(T.leg_position)) {
		Errors.report("Position not set to any valid values", T.leg_position);
		options.legBackPosition = "down";
		options.legFrontPosition = "down";
	} else {
		options.legBackPosition = T.leg_position;
		options.legFrontPosition = T.leg_position;
	}

	// Set values for blush and tears
	options.blush = Math.clamp(0, 0, 5);
	options.tears = Math.clamp(0, 0, 5);

	// Set animation speed
	options.animKey = isActive() ? "sex-4f-vfast" : "sex-2f-idle";
	options.animKeyStill = isActive() ? "sex-4f-vfast" : "sex-1f-idle";

	// Clothing filters and options
	for (const slot of setup.clothes_all_slots) {
		/**
		 * @type {ClothesItem}
		 */
		const wornObj = V.worn[slot];
		/**
		 * @type {ClothesItem}
		 */
		const setupObj = setup.clothes[slot][wornObj.index];

		const clothing = Object.assign({}, setupObj, wornObj);

		/**
		 * @type {ClothingState}
		 */
		const clothes = {
			item: clothing,
			name: clothing.combatImg,
			state: clothing.state,
			sleeves: "front",
			alpha: 1,
		};
		options.clothes[slot] = clothes;

		const mainFilterKey = `worn_${slot}_main`;
		const accFilterKey = `worn_${slot}_acc`;

		options.filters.worn[slot] = {};
		options.filters[mainFilterKey] = clothing.colour_sidebar
			? lookupColour(
					options, // options
					setup.colours.clothes_map, // dict
					clothes.item.colour, // key
					slot + " clothing", // debug name
					"worn_" + slot + "_custom", // filter name
					clothing.prefilter // prefilter
			  )
			: Renderer.emptyLayerFilter();

		if (clothing.accessory_colour_sidebar) {
			options.filters[accFilterKey] = lookupColour(
				options,
				setup.colours.clothes_map,
				options["worn_" + slot + "_acc_colour"],
				slot + " accessory",
				"worn_" + slot + "_acc_custom",
				clothing.prefilter
			);
		} else {
			options.filters[accFilterKey] = Renderer.emptyLayerFilter();
		}
	}

	options.breastSize = Math.clamp(V.player.perceived_breastsize / 3, 0, 4);

	options.skinType = V.skinColor.natural;
	options.skinTone = V.skinColor.range / 100;

	options.hairColour = V.haircolour || "red";
	options.leftEye = V.eyeselect || "red";
	options.rightEye = V.eyeselect || "red";

	options.filters.leftEye = lookupColour(options, setup.colours.eyes_map, options.leftEye, "eyes", "eyes_custom", "eyes");
	options.filters.rightEye = lookupColour(options, setup.colours.eyes_map, options.rightEye, "eyes", "eyes_custom", "eyes");
	options.filters.hair = lookupColour(options, setup.colours.hair_map, options.hairColour, "hair", "hair_custom", "hair");
	options.filters.hairFringe = lookupColour(
		options,
		setup.colours.hair_map,
		options.hairFringeColour || options.hairColour,
		"hair_fringe",
		"hair_fringe_custom",
		"hair_fringe"
	);

	console.log("Colour maps:", JSON.parse(JSON.stringify(setup.colours)));
	console.log("Clothing:", JSON.parse(JSON.stringify(options.clothes)));
	console.log("Filters:", JSON.parse(JSON.stringify(options.filters)));

	return options;
}
window.mapPlayerToOptions = mapPlayerToOptions;

Macro.add("mapplayertooptions", {
	handler() {
		mapPlayerToOptions(T.modelOptions);
	},
});

/**
 * For colour name, lookup its canvas filter and merge with sprite prefilter.
 *
 * @param {object} options Options
 * @param {Object<string, object>} dict map in setup.colours to lookup in
 * @param {string} key colour name.
 * @param {string} debugName used when reporting errors
 * @param {string} customFilterName key in options.filters
 * @param {string} prefilterName name of prefilter to apply
 * @returns {any} CompositeLayerParams - Check TS docs for model.d.ts
 */
function lookupColour(options, dict, key, debugName, customFilterName, prefilterName) {
	console.log("lookupColour", dict, key, debugName, customFilterName, prefilterName);
	let filter;
	if (key === "custom") {
		filter = clone(options.filters[customFilterName]);
		if (!filter) {
			console.error("custom " + debugName + " colour not configured");
			return {};
		}
	} else {
		const record = dict[key];
		if (!record) {
			console.error("unknown " + debugName + " colour: " + key);
			return {};
		}
		filter = clone(record.canvasfilter);
	}

	if (prefilterName) {
		Renderer.mergeLayerData(filter, setup.colours.sprite_prefilters[prefilterName], true);
	}
	return filter;
}

function isActive() {
	return isVaginaActive() || isAnusActive() || isMouthActive() || isPenisActive() || isArmActive() || isChestActive();
}

function isVaginaActive() {
	const activeState = ["penetrated", "doublepenetrated", "othermouth", "tentacleentrance", "tentacleimminent", "tentacle", "tentacledeep"].includes(
		V.vaginastate
	);
	const activeUse = ["tentaclerub"].includes(V.vaginause);
	return activeState || activeUse;
}

function isAnusActive() {
	const activeState = ["penetrated", "doublepenetrated", "cheeks", "othermouth", "tentacleentrance", "tentacleimminent", "tentacle", "tentacledeep"].includes(
		V.anusstate
	);
	const activeUse = ["tentaclerub"].includes(V.anususe);
	return activeState || activeUse;
}

function isMouthActive() {
	const activeState = ["penetrated", "kiss", "tentacleentrance", "tentacleimminent", "tentacle", "tentacledeep"].includes(V.mouthstate);
	return activeState;
}

function isPenisActive() {
	const activeState = ["penetrated", "otheranus", "othermouth", "tentacleentrance", "tentacleimminent", "tentacle", "tentacledeep"].includes(V.penisstate);
	const activeUse = ["tentaclerub"].includes(V.penisuse);
	return activeState || activeUse;
}

function isArmActive() {
	return ["penis"].includes(V.rightarm) || ["penis"].includes(V.leftarm);
}

function isChestActive() {
	const activeUse = ["penis"].includes(V.chestuse);
	return activeUse;
}
