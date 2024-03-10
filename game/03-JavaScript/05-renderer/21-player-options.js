/**
 * @typedef Options
 * @type {object}
 * @property {"img/sex/"} root The root directory.
 * @property {"doggy"|"missionary"} position The position.
 * @property {boolean} showPlayer Flag to show the player model.
 * @property {boolean} showClothing Flag to show the clothing layers.
 * @property {boolean} showNPCs Flag to show the NPC model(s).
 * @property {number} animSpeed The global speed to play animations.
 * Computed
 * @property {string} src The computed directory path for the position.
 * @property {string} animKey The key used for fetching the animation configuration.
 * @property {string} animKeyStill The key used for fetching the animation configuration for true still sprites.
 * @property {number} breastSize The size of the player breasts.
 * @property {number} breastsExposed Whether the breasts are shown.
 * @property {string} hairType The type of hair.
 * @property {string} hairLength The named stage of the hair length.
 * @property {"up"|"down"} legBackPosition The position the back leg is in.
 * @property {"up"|"down"} legFrontPosition The position the front leg is in.
 * @property {1|2|3|4|5} blush The volume of blush on the player, higher is more.
 * @property {1|2|3|4|5} tears The volume of tears the player displays, higher is more.
 * @property {Object<string, ClothingState>} clothes Template.
 * @property {object} filters The filters for layers.
 */

/**
 * @typedef ClothingState
 * @type {object}
 * @property {ClothesItem} item The clothing item's setup with worn properties copied over.
 * @property {string} name The name of the clothing directory.
 * @property {string} state The state of the clothing, the file name.
 * @property {number} alpha The percent of the alpha channel. 1 is 100%, 0 is 0%.
 */

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
	options.breastsExposed = true;

	// Copied from <<leg_position>> - Centralise usage later
	const parts = [V.anususe, V.vaginause, V.chestuse, V.mouthuse];
	if (V.machine && V.machine.tattoo && ["left_thigh", "right_thigh"].includes(V.machine.tattoo.use)) {
		options.legFrontPosition = "up";
		options.legBackPosition = "up";
	} else if (parts.includes("penis") || parts.includes(1)) {
		options.legFrontPosition = "up";
		options.legBackPosition = "up";
	} else {
		options.legFrontPosition = "down";
		options.legBackPosition = "down";
	}

	// Set values for blush and tears
	options.blush = Math.clamp(0, 0, 5);
	options.tears = Math.clamp(0, 0, 5);

	// Set animation speed
	options.animKey = combat.isActive() ? "sex-4f-vfast" : "sex-2f-idle";
	options.animKeyStill = combat.isActive() ? "sex-4f-vfast" : "sex-1f-idle";

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

		let state = clothing.state || "full";
		if (slot === "lower" && clothing.state === "waist" && clothing.skirt_down === 0) {
			state = "hips";
		}

		/**
		 * @type {ClothingState}
		 */
		const clothes = {
			item: clothing,
			name: clothing.combatImg,
			state,
			alpha: 1,
		};
		if (["upper", "under_upper", "over_upper"].includes(slot)) {
			clothes.sleeves = "front";
		}
		options.clothes = options.clothes || {};
		options.clothes[slot] = clothes;

		const mainFilterKey = `worn_${slot}_main`;
		const accFilterKey = `worn_${slot}_acc`;

		options.filters = options.filters || {
			worn: {},
		};
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

	/** @type {Penetrator} */
	const penetrator = {
		show: (V.player.penisExist || playerHasStrapon()) && V.worn.lower.exposed >= 2 && V.worn.under_lower.exposed >= 1,
		type: "human",
	};
	options.penetrator = penetrator;

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
