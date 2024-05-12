module.exports = {
	root: true,

	// Keep variables sorted within groups (separated by "// ..." comment lines)
	globals: {
		// SugarCube APIs
		Browser: "readonly",
		Config: "readonly",
		DebugView: "readonly",
		Dialog: "readonly",
		Engine: "readonly",
		Fullscreen: "readonly",
		L10n: "readonly",
		l10nStrings: "readonly",
		LoadScreen: "readonly",
		Macro: "readonly",
		Save: "readonly",
		Scripting: "readonly",
		Setting: "readonly",
		setup: "readonly",
		State: "readonly",
		Story: "readonly",
		SugarCube: "readonly",
		Template: "readonly",
		UI: "readonly",
		UIBar: "readonly",
		idb: "readonly",
		wikifier: "readonly",
		// SugarCube functions
		clone: "readonly",
		either: "readonly",
		forget: "readonly",
		hasVisited: "readonly",
		importScripts: "readonly",
		importStyles: "readonly",
		lastVisited: "readonly",
		memorize: "readonly",
		passage: "readonly",
		previous: "readonly",
		random: "readonly",
		randomFloat: "readonly",
		recall: "readonly",
		setPageElement: "readonly",
		tags: "readonly",
		temporary: "readonly",
		time: "readonly",
		turns: "readonly",
		variables: "readonly",
		visited: "readonly",
		visitedTags: "readonly",
		throwError: "writeable",
		// Dol shortcuts
		C: "readonly",
		DeserializeGame: "readonly",
		globals: "readonly",
		T: "readonly",
		V: "readonly",
		statChange: "readonly",
		// DoL main namespaces
		DOL: "readonly",
		defineGlobalNamespaces: "readonly",
		Errors: "readonly",
		Versions: "readonly",
		Perflog: "readonly",
		Stack: "readonly",
		Wikifier: "readonly",
		// DoL other namespaces/objects
		Constants: "readonly",
		ConstantsLoader: "readonly",
		currentlyLoadingMap: "readonly",
		DateTime: "readonly",
		DoLHouse: "readonly",
		DolSettingsExport: "readonly",
		Dynamic: "readonly",
		EventSystem: "readonly",
		JsonCompressor: "readonly",
		JsonDecompressor: "readonly",
		IronMan: "readonly",
		Links: "readonly",
		playerDoll: "readonly",
		Renderer: "readonly",
		SexTypes: "readonly",
		StartConfig: "readonly",
		Time: "readonly",
		TimeConstants: "readonly",
		Utils: "readonly",
		ZIndices: "readonly",
		// DoL SC2 functions
		compressionVerifier: "readonly",
		DefineMacro: "readonly",
		DefineMacroS: "readonly",
		DoLCompressorDictionaries: "readonly",
		DoLSave: "readonly",
		// DoL functions
		ampm: "readonly",
		assignDefaults: "readonly",
		calculatePenisBulge: "readonly",
		canBeMPregnant: "readonly",
		closeOverlay: "readonly",
		clothesDataTrimmer: "readonly",
		clothesIndex: "readonly",
		clothingData: "readonly",
		combatListColor: "readonly",
		currentSkillValue: "readonly",
		eCheckbox: "readonly",
		earnHourlyFeats: "readonly",
		eInput: "readonly",
		elechild: "readonly",
		elechildren: "readonly",
		element: "readonly",
		endPlayerPregnancy: "readonly",
		ensure: "readonly",
		ensureIsArray: "readonly",
		eSelect: "readonly",
		getTimeString: "readonly",
		generateBabyName: "readonly",
		getCustomClothesColourCanvasFilter: "readonly",
		getCustomColourRGB: "readonly",
		getCustomColourStyle: "readonly",
		getKylarLibraryState: "readonly",
		getPregnancyObject: "readonly",
		getRandomIntInclusive: "readonly",
		getRobinLocation: "readonly",
		getSexesFromRandomGroup: "readonly",
		getSydneyLoveNorm: "readonly",
		getTrueWarmth: "readonly",
		getVisibleClothesList: "readonly",
		hairLengthStringToNumber: "readonly",
		inDOM: "readonly",
		integrityKeyword: "readonly",
		ironmanAutoSave: "readonly",
		isBloodmoon: "readonly",
		isKylarInPlayRole: "readonly",
		isKylarRehearsing: "readonly",
		isPlayerNonparasitePregnancyEnding: "readonly",
		knowsAboutAnyPregnancy: "readonly",
		listUniqueCarriedSextoys: "readonly",
		loadCustomColourPreset: "readonly",
		maleChance: "readonly",
		masturbationActions: "readonly",
		masturbationAudience: "readonly",
		masturbationEffects: "readonly",
		masturbationSlimeControl: "readonly",
		maxParasites: "readonly",
		npcCompressor: "readonly",
		npcDecompressor: "readonly",
		npcEquipSet: "readonly",
		npcMakeNaked: "readonly",
		npcPregnancyCycle: "readonly",
		npcPregObject: "readonly",
		numberOfEarSlime: "readonly",
		ordinalSuffixOf: "readonly",
		overlayShowHide: "readonly",
		painToTearsLvl: "readonly",
		parasiteProgressDay: "readonly",
		parasiteProgressTime: "readonly",
		parentFunction: "readonly",
		parseCSSFilter: "readonly",
		pickRandomItemInArray: "readonly",
		playerAwareTheyArePregnant: "readonly",
		playerBellySize: "readonly",
		playerBellyVisible: "readonly",
		playerChastity: "readonly",
		playerEndWaterProgress: "readonly",
		playerHasButtPlug: "readonly",
		playerHasStrapon: "readonly",
		playerHeatMinArousal: "readonly",
		playerIsPregnant: "readonly",
		playerNormalPregnancyTotal: "readonly",
		playerPregnancyProgress: "readonly",
		playerRutMinArousal: "readonly",
		pregnancyGenerator: "readonly",
		pregnancyProgress: "readonly",
		pregPrep: "readonly",
		randomPregnancyProgress: "readonly",
		registerGeneratedPattern: "readonly",
		registerImagePattern: "readonly",
		returnTimeFormat: "readonly",
		rgbToHsv: "readonly",
		rollKylarLibraryStalkFlag: "readonly",
		selfOr: "readonly",
		setKnowsAboutPregnancy: "readonly",
		setLowerVisibility: "readonly",
		settingsConvert: "readonly",
		settingsObjects: "readonly",
		shopClothCustomColorWheel: "readonly",
		sliderPerc: "readonly",
		statusCheck: "readonly",
		tanned: "readonly",
		updateCustomColour: "readonly",
		updateExportDay: "readonly",
		updateMannequin: "readonly",
		updateSavesCount: "readonly",
		validateValue: "readonly",
		waterproofCheck: "readonly",
		// DoL math functions
		round: "readonly",
		normalise: "readonly",
		randomExp: "readonly",
		expCurve: "readonly",
		between: "readonly",
		nCr: "readonly",
		formatDecimals: "readonly",
		inverseLerp: "readonly",
		lerp: "readonly",
		interpolate: "readonly",
		interpolateObject: "readonly",
		// DoL object functions
		formatList: "readonly",
		stringFrom: "readonly",
		toTitleCase: "readonly",
		// DoL classes
		ObservableValue: "readonly",
		CanvasModel: "readonly",
		DollHouse: "readonly",
		FDoll: "readonly",
		// Third-party
		define: "readonly",
		iro: "readonly",
		LZString: "readonly",
		md5: "readonly",
		tinycolor: "readonly",
		Mousetrap: "readonly",
		// Unknown (Can't find declaration either in SugarCube docs nor in codebase)
		config: "readonly",
		saveAs: "readonly",
		schemaVersion: "readonly",
		session: "readonly",
		Util: "readonly",
		version: "readonly",
		getClothingCost: "readonly",
		isLoveInterest: "readonly",
		skinColor: "readonly",
		nullable: "readonly",
	},

	ignorePatterns: [
		"**/*.*",
		"!**/*.js",
		"!**/*.cjs",
		// Format config file
		"!.eslintrc.cjs",
		"node_modules",
		"devTools",
		"dist",
		"game/03-JavaScript/external",
	],

	parserOptions: {
		// Support back to ES2020 to cover old mobile devices with outdated WebView versions that fail on 2020 and up functions
		// ecmaVersion: "2020", (taken care of by env es2020)
		sourceType: "module",
	},

	env: {
		browser: true,
		es2020: true,
		jquery: true,
	},

	plugins: ["es-x"],

	extends: ["eslint:recommended", "plugin:jsdoc/recommended", "prettier-standard/prettier-file", "plugin:es-x/restrict-to-es2020"],

	settings: {
		jsdoc: {
			mode: "jsdoc",
		},
	},

	// Keep rules grouped by plugin and sorted alphabetically
	rules: {
		"object-shorthand": ["error", "always"],

		"es-x/no-object-hasown": "off",

		// SugarCube extends native objects and we follow it
		"no-extend-native": "off",

		/* eslint-plugin-jsdoc */

		// Descriptions should be sentence-like not comment-like
		"jsdoc/require-description-complete-sentence": "off",
		"jsdoc/require-hyphen-before-param-description": ["error", "never", { tags: { property: "never" } }],
		// Adding JSDoc is preferable but not required
		"jsdoc/require-jsdoc": "off",
		"jsdoc/require-param-description": "off",
		"jsdoc/require-property-description": "off",
		"jsdoc/require-returns-description": "off",
		"jsdoc/require-returns": "off",

		"jsdoc/no-undefined-types": [
			1,
			{
				definedTypes: ["EventNpc"],
			},
		],

		/* eslint-plugin-prettier */

		"prettier/prettier": "warn",
	},
};
