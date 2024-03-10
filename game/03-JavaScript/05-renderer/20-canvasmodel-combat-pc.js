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
const combatMainPc = {
	name: "combatMainPc",
	width: 256,
	height: 256,
	frames: 4,
	/*
	 *	 ██████  ███████ ███    ██ ███████ ██████   █████  ████████ ███████ ██████
	 *	██       ██      ████   ██ ██      ██   ██ ██   ██    ██    ██      ██   ██
	 *	██   ███ █████   ██ ██  ██ █████   ██████  ███████    ██    █████   ██   ██
	 *	██    ██ ██      ██  ██ ██ ██      ██   ██ ██   ██    ██    ██      ██   ██
	 *	 ██████  ███████ ██   ████ ███████ ██   ██ ██   ██    ██    ███████ ██████
	 */
	generatedOptions() {
		/* Ask Aim about how this could be used? */
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
			position: "missionary",
			showPlayer: true,
			showFace: true,
			showClothing: true,
			showNPCs: true,
			inOral: false,
			animSpeed: 1,
			hairType: "default",
			filters: {
				worn: {},
			},
			clothes: {},
		};
	},
	/*
	 *	██████  ██████  ███████ ██████  ██████   ██████   ██████ ███████ ███████ ███████
	 *	██   ██ ██   ██ ██      ██   ██ ██   ██ ██    ██ ██      ██      ██      ██
	 *	██████  ██████  █████   ██████  ██████  ██    ██ ██      █████   ███████ ███████
	 *	██      ██   ██ ██      ██      ██   ██ ██    ██ ██      ██           ██      ██
	 *	██      ██   ██ ███████ ██      ██   ██  ██████   ██████ ███████ ███████ ███████
	 */
	/**
	 * @param {any} options
	 */
	preprocess(options) {
		console.log("combatMainPc-Preprocess:", JSON.parse(JSON.stringify(options)));
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
				return `${options.src}body/arms/back.png`;
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
				return `${options.src}body/thighs/back${options.legBackPosition}.png`;
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
				return `${options.src}body/legs/back${options.legBackPosition}.png`;
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
				return `${options.src}body/base.png`;
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
				return `${options.src}body/thighs/front${options.legFrontPosition}.png`;
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
				return `${options.src}body/legs/front${options.legFrontPosition}.png`;
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
				return `${options.src}body/arms/front.png`;
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
				return `${options.src}body/breasts/${options.breastSize}.png`;
			},
			showfn(options) {
				if (!options.breastSize) return false;
				const result = options.showPlayer && options.breastsExposed;
				return !!result;
			},
			animationfn(options) {
				return options.animKey;
			},
			z: zi.frontBreast,
		},
		penetrator: {
			srcfn(options) {
				return `${options.src}body/penetrator/penis.png`;
			},
			showfn(options) {
				const result = options.showPlayer && options.penetrator.show;
				return !!result;
			},
			animationfn(options) {
				return options.animKey;
			},
			z: zi.penis,
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
				return `${options.src}body/head/head.png`;
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
				return `${options.src}body/head/eyes.png`;
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
				return `${options.src}body/head/eyelids.png`;
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
				return `${options.src}body/head/lashes.png`;
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
				return `${options.src}body/head/blush/${options.blush}.png`;
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
				return `${options.src}body/head/tear/${options.tears}.png`;
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
				return `${options.src}body/oral/${state}.png`;
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
				return `${options.src}hair/${options.hairType}/${options.hairLength}.png`;
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
				const clothes = options.clothes.legs;
				if (clothes == null || clothes.name == null) return "";
				const path = `${options.src}clothing/legs/${clothes.name}/${clothes.state}l.png`;
				console.log("legs", "Path:", path);
				return path;
			},
		}),
		legwearRight: genClothingLayer("legs", {
			srcfn(options) {
				const clothes = options.clothes.legs;
				if (clothes == null || clothes.name == null) return "";
				const path = `${options.src}clothing/legs/${clothes.name}/${clothes.state}r.png`;
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
				const clothes = options.clothes.upper;
				if (clothes == null || clothes.name == null) return "";
				const path = `${options.src}clothing/upper/${clothes.name}/breasts/${options.breastSize}.png`;
				console.log("upper", "Path:", path);
				return path;
			},
		}),
		upperBackSleeves: genClothingLayer("upper", {
			srcfn(options) {
				const clothes = options.clothes.upper;
				if (clothes == null || clothes.name == null) return "";
				const path = `${options.src}clothing/upper/${clothes.name}/sleeves/${clothes.sleeves}.png`;
				console.log("upper", "Path:", path);
				return path;
			},
			z: 100,
		}),
		upperFrontSleeves: genClothingLayer("upper", {
			srcfn(options) {
				const clothes = options.clothes.upper;
				if (clothes == null || clothes.name == null) return "";
				const path = `${options.src}clothing/upper/${clothes.name}/sleeves/${clothes.sleeves}.png`;
				console.log("upper", "Path:", path);
				return path;
			},
			z: 100,
		}),
	},
};

Renderer.CanvasModels.combatMainPc = combatMainPc;

/**
 *
 * @param {string} slot
 * @param {CanvasModelLayer} overrideOptions
 * @returns {CanvasModelLayer}
 */
function genClothingLayer(slot, overrideOptions = {}) {
	/**
	 * @type {CanvasModelLayer}
	 */
	const defaults = {
		srcfn(options) {
			const clothes = options.clothes[slot];
			if (clothes == null || clothes.name == null) return "";
			const path = `${options.src}clothing/${slot}/${clothes.name}/${clothes.state}.png`;
			console.log(slot, "Path:", path);
			return path;
		},
		showfn(options) {
			const clothes = options.clothes[slot];
			const show = options.showClothing && clothes != null;
			console.log(slot, "Show?:", show);
			return !!show;
		},
		alphafn(options) {
			const clothes = options.clothes[slot];
			const alpha = clothes.alpha;
			console.log(slot, "Alpha:", alpha);
			return alpha;
		},
		animationfn(options) {
			return options.animKey;
		},
		filtersfn(options) {
			const filter = `worn_${slot}_main`;
			console.log(slot, "Filters:", filter, options.filters[filter]);
			return [filter];
		},
		z: zi[slot],
	};
	return Object.assign(defaults, overrideOptions);
}
