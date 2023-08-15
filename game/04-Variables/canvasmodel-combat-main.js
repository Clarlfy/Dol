/**
 * @typedef {object} CanvasModelOptions
 * @property {string} name Model name, for debugging.
 * @property {number} width Frame width.
 * @property {number} height Frame height.
 * @property {number} frames Number of frames for CSS animation.
 * @property {Object<string, CanvasModelLayer>} layers Layers (by name).
 * @property {Function} [generatedOptions] Function ()=>string[] names of generated options.
 * @property {Function} [defaultOptions] Function ()=>object returning default options.
 * @property {function(Options): void} [preprocess] Preprocessing function (options)=>void to generate temp options.
 */

/**
 * @typedef {object} CanvasModelLayer
 * @property {boolean} [show] Show this layer, default false (if no show:true or showfn present, needs explicit `<<showlayer>>`). Do not use undefined/null/0/"" to hide layer!
 * @property {string} [src] Image path. Either `src` or `srcfn` is required.
 * @property {number} [z] Z-index (rendering order), higher=above, lower=below. Either `z` of `zfn` is required.
 * @property {number} [alpha] Layer opacity, from 0 (invisible) to 1 (opaque, default).
 * @property {boolean} [desaturate] Convert image to grayscale (before recoloring), default false.
 * @property {number} [brightness] Adjust brightness, from -1 to +1 (before recoloring), default 0.
 * @property {number} [contrast] Adjust contrast (before recoloring), default 1.
 * @property {string} [blendMode] Recoloring mode (see docs for globalCompositeOperation; "hard-light", "multiply" and "screen" ), default none.
 * @property {string|object} [blend] Color for recoloring, CSS color string or gradient spec (see model.d.ts).
 * @property {string} [masksrc] Mask image path. If present, only parts where mask is opaque will be displayed.
 * @property {string} [animation] Name of animation to apply, default none.
 * @property {number} [frames] Frame numbers used to display static images, array of subsprite indices. For example, if model frame count is 6 but layer has only 3 subsprites, default frames would be [0, 0, 1, 1, 2, 2].
 * @property {string[]} [filters] Names of filters that should be applied to the layer; filters themselves are taken from model options.
 * @property {number} [dx] Layer X position on the image, default 0.
 * @property {number} [dy] Layer Y position on the image, default 0.
 * @property {number} [width] Layer subsprite width, default = model width.
 * @property {number} [height] Layer subsprite width, default = model height.
 *
 * The following functions can be used instead of constant properties. Their arguments are (options) where options are model options provided in render call (from _modeloptions variable for <<rendermodel>>/<<animatemodel>> widget).
 * @property {function(Options): boolean} [showfn] (options)=>boolean Function generating `show` property. Should return boolean, do not use undefined/null/0/"" to hide layer, use of !! (double not) operator recommended.
 * @property {function(Options): string} [srcfn] (options)=>string.
 * @property {function(Options): number} [zfn] (options)=>number.
 * @property {function(Options): number} [alphafn] (options)=>number.
 * @property {function(Options): boolean} [desaturatefn] (options)=>boolean.
 * @property {function(Options): number} [brightnessfn] (options)=>number.
 * @property {function(Options): number} [contrastftn] (options)=>number.
 * @property {function(Options): (string|object)} [blendModefn] (options)=>(string|object).
 * @property {function(Options): string} [blendfn] (options)=>string.
 * @property {function(Options): string} [masksrcfn] (options)=>string.
 * @property {function(Options): string} [animationfn] (options)=>string.
 * @property {function(Options): number[]} [framesfn] (options)=>number[].
 * @property {function(Options): string[]} [filtersfn] (options)=>string[].
 * @property {function(Options): number} [dxfn] (options)=>number.
 * @property {function(Options): number} [dyfn] (options)=>number.
 * @property {function(Options): number} [widthfn] (options)=>number.
 * @property {function(Options): number} [heightfn] (options)=>number.
 */

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
 * @property {number} breast_size The size of the player breasts.
 * @property {string} hairType The type of hair.
 * @property {string} hairLength The named stage of the hair length.
 * @property {"up"|"down"} legBackPosition The position the back leg is in.
 * @property {"up"|"down"} legFrontPosition The position the front leg is in.
 * @property {1|2|3|4|5} blush The volume of blush on the player, higher is more.
 * @property {1|2|3|4|5} tears The volume of tears the player displays, higher is more.
 * @property {Object<string, ClothingState>} clothing Template.
 * @property {object} filters The filters for layers.
 */

/**
 * @typedef ClothingModel
 * @type {object}
 * @property {number} index The unique number given to every clothes object.
 * @property {string} name The lowercase display name given to clothes.
 * @property {string} name_cap The uppercase display name variant given to clothes.
 * @property {string} combat_img The name of the model used for combat rendering.
 * @property {string} variable A name in lowercase, without spaces, used for matching where index cannot be used.
 * @property {number} integrity A number ranging from 0 to {integrity_max}. 0 means the piece is broken fully, {integrity_max} is full integrity.
 * @property {number} integrity_max Used to control the total resilience of the clothing piece, where a higher number means it can take more damage.
 * @property {number} fabric_strength The resiliency modifier where a higher number means damage is less impactful on integrity.
 * @property {number} reveal A number from 0 to 1000, where 0 is not revealing, and 1000 is fully revealing, usually naked.
 * @property {number} bustresize Adjusts the perceived breast size when worn. Should only be used for upper clothing.
 * @property {"a"|"n"} word Whether clothing prefixes use "a" or "an".
 * @property {0|1} one_piece Supposedly deprecated. Likely used to pair clothing to an outfit set.
 * @property {0|1} strap Whether the clothing has straps over the shoulder. Normally used for contextual dialogue for clothing removal.
 * @property {number} open Template.
 * @property {number} state Template.
 * @property {number} state_base Template.
 * @property {number} state_top Template.
 * @property {number} state_top_base Template.
 * @property {0|1} plural Template.
 * @property {number} colour Template.
 * @property {string[]} colour_options Template.
 * @property {number} exposed Template.
 * @property {number} exposed_base Template.
 * @property {string[]} type Template.
 * @property {string} set Template.
 * @property {string} gender Template.
 * @property {number} warmth Template.
 * @property {number} cost The base price of the clothing in pence. E.G. 200 equates to 2 pounds.
 * @property {string} description Description shown in the store.
 * @property {string[]} shop Template.
 * @property {number} accessory Template.
 * @property {number} accessory_colour Template.
 * @property {string[]} accessory_colour_options Template.
 * @property {number} sleeve_img Template.
 * @property {number} breast_img Template.
 * @property {number} cursed Template.
 * @property {number} location Template.
 * @property {number} iconFile Template.
 * @property {number} accIcon Template.
 * @property {number} mainImage Template.
 * @property {number} notuck Template.
 * @property {number} pregType Template.
 */

/**
 * @typedef ClothingState
 * @type {object}
 * @property {string} name The name of the clothing directory.
 * @property {string} state The state of the clothing, the file name.
 * @property {number} alpha The percent of the alpha channel. 1 is 100%, 0 is 0%.
 */

/**
 * @typedef ZIndices
 * @type {object}
 * @property {0} bg Background.
 * @property {0} over_head_back Template.
 * @property {1} head_back Template.
 * @property {5} basehead Template.
 * @property {10} backhair Template.
 * @property {15} back_lower Template.
 * @property {20} base Template.
 * @property {21} facebase Template.
 * @property {22} tanBody Template.
 * @property {25} hirsute Template.
 * @property {30} eyes Template.
 * @property {31} sclera Template.
 * @property {32} iris Template.
 * @property {33} irisacc Template.
 * @property {34} eyelids Template.
 * @property {35} lashes Template.
 * @property {40} mouth Template.
 * @property {30} armsidle Template.
 * @property {31.5} handsidle Template.
 * @property {32} under_upper_arms Template.
 * @property {33} bellyBase Template.
 * @property {35} breasts Template.
 * @property {36} breastsparasite Template.
 * @property {30} tanbreasts Template.
 * @property {50} blush Template.
 * @property {51} freckles Template.
 * @property {51.5} mascara_running Template.
 * @property {52} skin Template.
 * @property {53} toast Template.
 * @property {55} tears Template.
 * @property {60} hair Template.
 * @property {64} penis_chastity Template.
 * @property {66.6} legs Template. // above underParasite but below under_lower
 * @property {64} pbhair Template.
 * @property {64.3} penisunderclothes Template.
 * @property {64.6} pbhairballsunderclothes Template.
 * @property {65} genitals Template.
 * @property {104} penis Template. // when exposed
 * @property {104.3} pbhairballs Template. // when exposed
 * @property {104.6} parasite Template. // when exposed
 * @property {66} underParasite Template.
 * @property {67} under_lower Template.
 * @property {68} under_lower_top Template.
 * @property {70} under_upper Template.
 * @property {72} under_upper_top Template.
 * @property {73} under_upper_top_high Template.
 * @property {74} under_upper_top_acc Template.
 * @property {75} under_lower_high Template.
 * @property {77} under_lower_top_high Template.
 * @property {78} under_lower_top_high_acc Template.
 * @property {75} under Template.
 * @property {85} feet Template.
 * @property {90} lower Template.
 * @property {92} lower_top Template.
 * @property {94} upper_arms Template.
 * @property {94.5} lower_belly Template.
 * @property {95} upper Template.
 * @property {89} upper_tucked Template.
 * @property {88.5} upper_arms_tucked Template.
 * @property {97} upper_top Template.
 * @property {98} bellyClothes Template.
 * @property {99} bellyClothesShadow Template.
 * @property {103} collar Template.
 * @property {103} neck Template.
 * @property {105} arms_cover Template.
 * @property {109} under_upper_arms_cover Template.
 * @property {110} hands Template.
 * @property {112} upper_arms_cover Template.
 * @property {115} lower_high Template.
 * @property {117} lower_top_high Template.
 * @property {132} hairforwards Template.
 * @property {133} fronthair Template.
 * @property {138} brow Template.
 * @property {140} horns Template.
 * @property {145} face Template.
 * @property {150} head Template.
 * @property {152} over_head Template.
 * @property {165} tailPenisCover Template.
 * @property {166} tailPenisCoverOverlay Template.
 * @property {170} over_lower Template.
 * @property {171} over_upper Template.
 * @property {170} over_upper_arms Template.
 * @property {174} over_upper_arms_cover Template.
 * Combat layers
 * Player
 * @property {12} backThigh Template.
 * @property {14} backLeg Template.
 * @property {16} backBreast Template.
 * @property {18} backArm Template.
 * @property {22} frontThigh Template.
 * @property {24} frontLeg Template.
 * @property {26} frontBreast Template.
 * @property {28} frontArm Template.
 */

/**
 * @type {ZIndices}
 */
const zi = ZIndices;

/**
 * @type {CanvasModelOptions}
 */
const combat = {
	name: "combat",
	width: 256,
	height: 256,
	frames: 4,
	/* Ask Aim about how this could be used? */
	/*
	 *	 ██████  ███████ ███    ██ ███████ ██████   █████  ████████ ███████ ██████
	 *	██       ██      ████   ██ ██      ██   ██ ██   ██    ██    ██      ██   ██
	 *	██   ███ █████   ██ ██  ██ █████   ██████  ███████    ██    █████   ██   ██
	 *	██    ██ ██      ██  ██ ██ ██      ██   ██ ██   ██    ██    ██      ██   ██
	 *	 ██████  ███████ ██   ████ ███████ ██   ██ ██   ██    ██    ███████ ██████
	 */
	generatedOptions() {
		return [];
	},
	/*
	 *	██████  ███████ ███████  █████  ██    ██ ██      ████████ ███████
	 *	██   ██ ██      ██      ██   ██ ██    ██ ██         ██    ██
	 *	██   ██ █████   █████   ███████ ██    ██ ██         ██    ███████
	 *	██   ██ ██      ██      ██   ██ ██    ██ ██         ██         ██
	 *	██████  ███████ ██      ██   ██  ██████  ███████    ██    ███████
	 */
	defaultOptions() {
		console.log("Combat-model defaultOptions");
		return {
			root: "img/newsex/",
			position: "doggy",
			showPlayer: true,
			showFace: true,
			showClothing: true,
			showNPCs: true,
			inOral: false,
			animSpeed: 1,
			hairType: "default",
			filters: {},
		};
	},
	/*
	 *	██████  ██████  ███████ ██████  ██████   ██████   ██████ ███████ ███████ ███████
	 *	██   ██ ██   ██ ██      ██   ██ ██   ██ ██    ██ ██      ██      ██      ██
	 *	██████  ██████  █████   ██████  ██████  ██    ██ ██      █████   ███████ ███████
	 *	██      ██   ██ ██      ██      ██   ██ ██    ██ ██      ██           ██      ██
	 *	██      ██   ██ ███████ ██      ██   ██  ██████   ██████ ███████ ███████ ███████
	 */
	preprocess(options) {
		console.log("Combat-model preprocess", JSON.parse(JSON.stringify(options)));
		/**
		 * For colour name, lookup its canvas filter and merge with sprite prefilter.
		 *
		 * @param {object} dict map in setup.colours to lookup in
		 * @param {string} key colour name.
		 * @param {string} debugName used when reporting errors
		 * @param {string} customFilterName key in options.filters
		 * @param {string} prefilterName name of prefilter to apply
		 * @returns {any} CompositeLayerParams - Check TS docs for model.d.ts
		 */
		function lookupColour(dict, key, debugName, customFilterName, prefilterName) {
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

		if (!["doggy", "missionary"].includes(V.position)) {
			Errors.report("Position not set to any valid values", V.position);
			options.position = "missionary";
		} else {
			options.position = V.position;
		}

		options.src = options.root + options.position + "/";

		options.hairLength = V.hairlengthstage;
		options.hairType = V.hairtype || options.hairType;

		options.breastsExposed = false;

		// Remove later
		T.leg_position = "down";
		if (!["up", "down"].includes(T.leg_position)) {
			Errors.report("Position not set to any valid values", T.leg_position);
			options.legBackPosition = "down";
			options.legFrontPosition = "down";
		} else {
			options.legBackPosition = T.leg_position;
			options.legFrontPosition = T.leg_position;
		}

		options.blush = Math.clamp(0, 0, 5);
		options.tears = Math.clamp(0, 0, 5);

		options.animKey = isActive() ? "sex-4f-vfast" : "sex-2f-idle";
		options.animKeyStill = isActive() ? "sex-4f-vfast" : "sex-1f-idle";

		options.clothing = {};
		for (const slot of setup.clothes_all_slots) {
			const wornItem = V.worn[slot];
			const setupItem = setup.clothes[slot][wornItem.index];
			// Initialise the setup variable for the slot.
			options["worn_" + slot + "_setup"] = setupItem;
			// Initialise the filter variable, will be set later if applicable.
			options.filters["worn_" + slot] = Renderer.emptyLayerFilter();
			if (wornItem) {
				if (typeof wornItem === "object" && wornItem != null) {
					const model = genClothingModel(slot, wornItem);
					if (model != null) {
						options.clothing[slot] = model;
					}
				}
			}
			if (setupItem.colour_sidebar) {
				options.filters["worn_" + slot] = lookupColour(
					setup.colours.clothes_map, // Dictionary
					options["worn_" + slot + "_colour"], // Key
					slot + " clothing",
					"worn_" + slot + "_custom",
					setupItem.prefilter
				);
			}
			if (setupItem.accessory_colour_sidebar) {
				options.filters["worn_" + slot + "_acc"] = lookupColour(
					setup.colours.clothes_map, // Dictionary
					options["worn_" + slot + "_acc_colour"], // Key
					slot + " accessory",
					"worn_" + slot + "_acc_custom",
					setupItem.prefilter
				);
			}
		}

		options.skin_type = V.skinColor.natural;
		options.skin_tone = V.skinColor.range / 100;

		options.hair_colour = V.haircolour || "red";
		options.left_eye = V.eyeselect || "red";
		options.right_eye = V.eyeselect || "red";

		options.filters.left_eye = lookupColour(setup.colours.eyes_map, options.left_eye, "eyes", "eyes_custom", "eyes");
		options.filters.right_eye = lookupColour(setup.colours.eyes_map, options.right_eye, "eyes", "eyes_custom", "eyes");
		options.filters.hair = lookupColour(setup.colours.hair_map, options.hair_colour, "hair", "hair_custom", "hair");
		options.filters.hair_fringe = lookupColour(
			setup.colours.hair_map,
			options.hair_fringe_colour || options.hair_colour,
			"hair_fringe",
			"hair_fringe_custom",
			"hair_fringe"
		);

		console.log("Colour maps:", JSON.parse(JSON.stringify(setup.colours)));
		console.log("Clothing:", options.clothing);
		console.log("Filters:", JSON.parse(JSON.stringify(options.filters)));
	},
	layers: {
		/*
		 *	██████   █████  ███████ ███████
		 *	██   ██ ██   ██ ██      ██
		 *	██████  ███████ ███████ █████
		 *	██   ██ ██   ██      ██ ██
		 *	██████  ██   ██ ███████ ███████
		 */
		backarm: {
			srcfn(options) {
				return options.src + "body/arms/back.png";
			},
			showfn(options) {
				const result = options.showPlayer && options.position === "doggy";
				return !!result;
			},
			animationfn(options) {
				return options.animKey;
			},
			z: zi.backArm,
		},
		backthigh: {
			srcfn(options) {
				return options.src + "body/thighs/back" + options.legBackPosition + ".png";
			},
			showfn(options) {
				return !!options.showPlayer;
			},
			animationfn(options) {
				return options.animKey;
			},
			z: zi.backThigh,
		},
		backleg: {
			srcfn(options) {
				return options.src + "body/legs/back" + options.legBackPosition + ".png";
			},
			showfn(options) {
				return !!options.showPlayer;
			},
			animationfn(options) {
				return options.animKey;
			},
			z: zi.backLeg,
		},
		base: {
			srcfn(options) {
				return options.src + "body/base.png";
			},
			showfn(options) {
				return !!options.showPlayer;
			},
			animationfn(options) {
				return options.animKey;
			},
			z: zi.base,
		},
		frontthigh: {
			srcfn(options) {
				if (options.position === "doggy") {
					return options.src + "";
				}
				return options.src + "body/thighs/front" + options.legFrontPosition + ".png";
			},
			showfn(options) {
				const result = options.showPlayer && options.position !== "doggy";
				return !!result;
			},
			animationfn(options) {
				return options.animKey;
			},
			z: zi.frontThigh,
		},
		frontleg: {
			srcfn(options) {
				return options.src + "body/legs/front" + options.legFrontPosition + ".png";
			},
			showfn(options) {
				return !!options.showPlayer;
			},
			animationfn(options) {
				return options.animKey;
			},
			z: zi.frontLeg,
		},
		frontarm: {
			srcfn(options) {
				return options.src + "body/arms/front.png";
			},
			showfn(options) {
				return !!options.showPlayer;
			},
			animationfn(options) {
				return options.animKey;
			},
			z: 100 || zi.frontArm,
		},
		frontbreast: {
			srcfn(options) {
				return options.src + "body/breasts/" + options.breast_size + ".png";
			},
			showfn(options) {
				if (!options.breast_size) return false;
				const result = options.showPlayer && options.breastsExposed;
				return !!result;
			},
			animationfn(options) {
				return options.animKey;
			},
			z: zi.frontBreast,
		},
		/*
		 *	██   ██ ███████  █████  ██████
		 *	██   ██ ██      ██   ██ ██   ██
		 *	███████ █████   ███████ ██   ██
		 *	██   ██ ██      ██   ██ ██   ██
		 *	██   ██ ███████ ██   ██ ██████
		 */
		head: {
			srcfn(options) {
				return options.src + "body/head/head.png";
			},
			showfn(options) {
				return !!options.showPlayer;
			},
			animationfn(options) {
				return options.animKey;
			},
			z: zi.base,
		},
		lefteye: {
			srcfn(options) {
				return options.src + "body/head/eyes.png";
			},
			showfn(options) {
				return !!options.showPlayer;
			},
			animationfn(options) {
				return options.animKey;
			},
			filters: ["left_eye"],
			z: zi.eyes,
		},
		eyelid: {
			srcfn(options) {
				return options.src + "body/head/eyelids.png";
			},
			showfn(options) {
				const result = options.showPlayer;
				return !!result;
			},
			animationfn(options) {
				return options.animKeyStill;
			},
			z: zi.eyelids,
		},
		eyelashes: {
			srcfn(options) {
				return options.src + "body/head/lashes.png";
			},
			showfn(options) {
				return !!options.showPlayer;
			},
			animationfn(options) {
				return options.animKeyStill;
			},
			filters: ["phair"],
			z: zi.eyelids,
		},
		blush: {
			srcfn(options) {
				return options.src + "body/head/blush/" + options.blush + ".png";
			},
			showfn(options) {
				const result = options.showFace && options.blush > 0;
				return !!result;
			},
			filters: ["body"],
			z: zi.blush,
		},
		/* This creates a weird effect on the face, tbi */
		tears: {
			srcfn(options) {
				return options.src + "body/head/tear/" + options.tears + ".png";
			},
			showfn(options) {
				const result = options.showFace && options.tears > 0;
				return !!result;
			},
			z: zi.tears,
		},
		mouth: {
			srcfn(options) {
				let state = "closedmouth";
				if (options.inOral) state = "mouth";
				return options.src + "body/oral/" + state + ".png";
			},
			showfn(options) {
				return !!options.showPlayer;
			},
			animationfn(options) {
				return options.animKey;
			},
			z: zi.mouth,
		},
		hair: {
			srcfn(options) {
				return options.src + "hair/" + options.hairType + "/" + options.hairLength + ".png";
			},
			showfn(options) {
				return !!options.showPlayer;
			},
			animationfn(options) {
				return options.animKey;
			},
			filters: ["hair"],
			z: zi.hair,
		},
		/*
		 *	 ██████ ██       ██████  ████████ ██   ██ ██ ███    ██  ██████
		 *	██      ██      ██    ██    ██    ██   ██ ██ ████   ██ ██
		 *	██      ██      ██    ██    ██    ███████ ██ ██ ██  ██ ██   ███
		 *	██      ██      ██    ██    ██    ██   ██ ██ ██  ██ ██ ██    ██
		 *	 ██████ ███████  ██████     ██    ██   ██ ██ ██   ████  ██████
		 */
		facewear: genClothingLayer("face"),
		footwear: genClothingLayer("feet"),
		genitals: genClothingLayer("genitals"),
		hands: genClothingLayer("hands"),
		/*
		 *	██   ██ ███████  █████  ██████  ██     ██ ███████  █████  ██████
		 *	██   ██ ██      ██   ██ ██   ██ ██     ██ ██      ██   ██ ██   ██
		 *	███████ █████   ███████ ██████  ██  █  ██ █████   ███████ ██████
		 *	██   ██ ██      ██   ██ ██   ██ ██ ███ ██ ██      ██   ██ ██   ██
		 *	██   ██ ███████ ██   ██ ██   ██  ███ ███  ███████ ██   ██ ██   ██
		 */
		headwear: genClothingLayer("head"),
		legwearLeft: genClothingLayer("legs", {
			srcfn(options) {
				const clothing = options.clothing.legs;
				if (clothing == null) return "";
				const path = options.src + "clothing/legs/" + clothing.name + "/" + clothing.state + "l.png";
				console.log("legs", "Path:", path);
				return path;
			},
		}),
		legwearRight: genClothingLayer("legs", {
			srcfn(options) {
				const clothing = options.clothing.legs;
				if (clothing == null) return "";
				const path = options.src + "clothing/legs/" + clothing.name + "/" + clothing.state + "r.png";
				console.log("legs", "Path:", path);
				return path;
			},
		}),
		lower: genClothingLayer("lower"),
		neckWear: genClothingLayer("neck"),
		overHead: genClothingLayer("over_head"),
		overLower: genClothingLayer("over_lower"),
		overUpper: genClothingLayer("over_upper"),
		underLower: genClothingLayer("under_lower"),
		underUpper: genClothingLayer("under_upper"),
		/*
		 *	██    ██ ██████  ██████  ███████ ██████
		 *	██    ██ ██   ██ ██   ██ ██      ██   ██
		 *	██    ██ ██████  ██████  █████   ██████
		 *	██    ██ ██      ██      ██      ██   ██
		 *	 ██████  ██      ██      ███████ ██   ██
		 */
		upper: genClothingLayer("upper"),
		upperBreasts: genClothingLayer("upper", {
			srcfn(options) {
				const clothing = options.clothing.upper;
				if (clothing == null) return "";
				const path = options.src + "clothing/upper/" + clothing.name + "/breasts/" + options.breast_size + ".png";
				console.log("upper", "Path:", path);
				return path;
			},
		}),
	},
};

// Sets the model to "combat".
Renderer.CanvasModels.combat = combat;

function genClothingLayer(slot, overrideOptions) {
	/**
	 * @type {CanvasModelLayer}
	 */
	const defaults = {
		srcfn(options) {
			const clothing = options.clothing[slot];
			if (clothing == null) return "";
			const path = options.src + "clothing/" + slot + "/" + clothing.name + "/" + clothing.state + ".png";
			console.log(slot, "Path:", path);
			return path;
		},
		showfn(options) {
			const clothing = options.clothing[slot];
			const show = options.showClothing && clothing != null;
			console.log(slot, "Show?:", show);
			return !!show;
		},
		alphafn(options) {
			const clothing = options.clothing[slot];
			const alpha = clothing.alpha;
			console.log(slot, "Alpha:", alpha);
			return alpha;
		},
		animationfn(options) {
			return options.animKey;
		},
		filtersfn(options) {
			const filter = "worn_" + slot;
			console.log(slot, "Filters:", filter, options.filters[filter]);
			return [filter];
		},
		z: zi[slot],
	};
	return Object.assign(defaults, overrideOptions);
}

/**
 * Retrieves the clothing model to use for displaying.
 *
 * @param {string} slot The bodypart key of which the clothing is on.
 * @param {ClothingModel} wornItem The item worn at the slot provided.
 * @returns {ClothingState} The clothing state
 */
function genClothingModel(slot, wornItem) {
	const index = wornItem.index;
	// If index is zero, assume it's the naked object. Do not render anything.
	if (index === 0) return null;
	/** @type {ClothingModel} */
	const base = setup.clothes[slot];
	if (base == null) return null;
	const item = base[index];
	if (item == null) return null;
	const img = item.combat_img;
	// -- Select model from clothes object --
	// If the combat_img property is a valid string, for example, "skirt", it will return the model name and state object.
	if (typeof img === "string" && !!img)
		return {
			name: img,
			state: wornItem.state,
			alpha: 1,
		};
	// -- Default to preset value --
	// To specify a sprite model to use, you should add combat_img with the name of the sprite to the clothes object.
	// The map below is used to specify a global sprite model for when combat_img cannot be found on the clothes object
	// relevant to its position on the player. If lower is set to "skirt", every piece of clothing on the lower part will
	// display the skirt model in combat.
	// Use null, remove the key, or use any false value to display nothing/naked.
	const map = {
		face: null,
		feet: null,
		genitals: null,
		hands: null,
		head: null,
		legs: null,
		lower: "skirt",
		neck: null,
		over_head: null,
		over_lower: null,
		over_upper: null,
		under_lower: null,
		under_upper: null,
		upper: "top",
	};
	if (map[slot]) {
		return {
			name: map[slot],
			state: wornItem.state,
			alpha: 1,
		};
	}
	// -- Fallback --
	// Return null to indicate that nothing should be displayed - Naked.
	return null;
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

Renderer.Animations["sex-2f-idle"] = {
	keyframes: [
		{
			frame: 0,
			duration: 2000,
		},
		{
			frame: 2,
			duration: 2000,
		},
	],
};

Renderer.Animations["sex-1f-idle"] = {
	keyframes: [
		{
			frame: 1,
			duration: 1000,
		},
	],
};

Renderer.Animations["sex-4f-slow"] = {
	frames: 4,
	duration: 330,
};

Renderer.Animations["sex-4f-mid"] = {
	frames: 4,
	duration: 170,
};

Renderer.Animations["sex-4f-fast"] = {
	frames: 4,
	duration: 110,
};

Renderer.Animations["sex-4f-vfast"] = {
	frames: 4,
	duration: 80,
};
