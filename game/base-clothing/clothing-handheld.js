/* For any item that has a colour_combat tag, set it to 0 if that item ever gets its own combat sprites. */
function initHandheld() {
	setup.clothes.handheld = [
		{
			index: 0,
			name: "naked",
			name_cap: "Naked",
			variable: "naked",
			integrity: 0,
			integrity_max: 0,
			fabric_strength: 0,
			reveal: 1,
			word: "n",
			plural: 0,
			colour: 0,
			colour_options: [],
			type: ["naked"],
			gender: "n",
			warmth: 0,
			cost: 0,
			description: "naked",
			shop: [],
			accessory: 0,
			accessory_colour: 0,
			accessory_colour_options: [],
			back_img: 0,
			cursed: 0,
			location: 0,
			iconFile: 0,
			accIcon: 0,
			mainImage: 0,
		},

		{
			index: 1,
			name: "umbrella",
			name_cap: "Umbrella",
			variable: "umbrella",
			integrity: 120,
			integrity_max: 120,
			fabric_strength: 10,
			reveal: 100,
			word: "an",
			plural: 0,
			mask_img: 1,
			colour: 0,
			colour_options: ["black", "blue", "brown", "green", "pink", "purple", "red", "tangerine", "teal", "white", "yellow", "neon blue", "custom"],
			colour_sidebar: 1,
			type: ["rainproof", "shade"],
			gender: "n",
			femininity: 0,
			warmth: 0,
			cost: 3000,
			description: "Keeps the rain off.",
			shop: ["clothing"],
			accessory: 1,
			accessory_colour: 0,
			accessory_colour_options: ["black", "blue", "brown", "green", "pink", "purple", "red", "tangerine", "teal", "white", "yellow", "neon blue", "custom"],
			accessory_colour_sidebar: 1,
			back_img: 1,
			back_img_acc: 1,
			back_img_acc_colour: "secondary",
			cursed: 0,
			location: 0,
			iconFile: "umbrella.png",
			accIcon: "umbrella_acc.png",
		},
		{
			index: 2,
			name: "parasol",
			name_cap: "Parasol",
			variable: "parasol",
			integrity: 120,
			integrity_max: 120,
			fabric_strength: 10,
			reveal: 200,
			word: "a",
			plural: 0,
			mask_img: 1,
			colour: 0,
			colour_options: ["light pink", "black", "blue", "brown", "green", "pink", "purple", "red", "tangerine", "teal", "white", "yellow", "neon blue", "custom"],
			colour_sidebar: 1,
			type: ["rainproof", "shade"],
			gender: "f",
			femininity: 100,
			warmth: 0,
			cost: 4000,
			description: "Keeps the rain off.",
			shop: ["clothing"],
			shopGroup: "parasols",
			accessory: 1,
			accessory_colour: 0,
			accessory_colour_options: ["white", "black", "grey", "custom"],
			accessory_colour_sidebar: 1,
			back_img: 1,
			back_img_acc: 1,
			back_img_acc_colour: "secondary",
			cursed: 0,
			location: 0,
			iconFile: "parasol.png",
			accIcon: "parasol_acc.png",
		},
		{
			index: 3,
			name: "sweet lolita parasol",
			name_cap: "Sweet lolita parasol",
			variable: "parasolsweet",
			integrity: 120,
			integrity_max: 120,
			fabric_strength: 10,
			reveal: 200,
			word: "a",
			plural: 0,
			colour: 0,
			colour_options: ["light pink", "black", "blue", "brown", "green", "pink", "purple", "red", "tangerine", "teal", "white", "yellow", "custom"],
			colour_sidebar: 1,
			type: ["rainproof", "shade"],
			gender: "f",
			femininity: 100,
			warmth: 0,
			cost: 4000,
			description: "Keeps the rain off.",
			shop: ["clothing"],
			shopGroup: "parasols",
			accessory: 1,
			accessory_colour: 0,
			accessory_colour_options: ["white", "black", "grey", "custom"],
			accessory_colour_sidebar: 1,
			back_img: 1,
			back_img_acc: 1,
			back_img_acc_colour: "secondary",
			mask_img: 1,
			cursed: 0,
			location: 0,
			iconFile: "parasol.png",
			accIcon: "sweetparasol_acc.png",
		},
		{
			index: 4,
			name: "paper parasol",
			name_cap: "Paper parasol",
			variable: "parasolpaper",
			integrity: 120,
			integrity_max: 120,
			fabric_strength: 10,
			reveal: 200,
			word: "a",
			plural: 0,
			colour: 0,
			colour_options: ["black", "blue", "brown", "green", "pink", "purple", "red", "tangerine", "teal", "white", "yellow", "neon blue", "custom"],
			colour_sidebar: 1,
			type: ["rainproof", "shade"],
			gender: "n",
			femininity: 0,
			warmth: 0,
			cost: 4000,
			description: "Laminated, to keep the rain off.",
			shop: ["clothing"],
			accessory: 1,
			accessory_colour: 0,
			accessory_colour_options: [],
			accessory_colour_sidebar: 0,
			back_img: 1,
			back_img_acc: 1,
			back_img_colour: "primary",
			back_img_acc_colour: "none",
			mask_img: 1,
			cursed: 0,
			location: 0,
			iconFile: "paperparasol.png",
			accIcon: "paperparasol_acc.png",
		},
		{
			index: 5,
			name: "purse",
			name_cap: "Purse",
			variable: "purse",
			integrity: 120,
			integrity_max: 120,
			fabric_strength: 10,
			reveal: 200,
			word: "a",
			plural: 0,
			colour: 0,
			colour_options: ["black", "blue", "brown", "green", "pink", "purple", "red", "tangerine", "teal", "white", "yellow", "neon blue", "custom"],
			colour_sidebar: 1,
			type: ["normal", "bookbag"],
			gender: "f",
			femininity: 100,
			warmth: 0,
			cost: 4000,
			description: "Capable of carrying a school textbook.",
			shop: ["clothing"],
			accessory: 1,
			accessory_colour: 0,
			accessory_colour_options: ["steel", "blue steel", "bronze", "gold", "silver", "black"],
			accessory_colour_sidebar: 1,
			cursed: 0,
			location: 0,
			iconFile: "purse.png",
			accIcon: "purse_acc.png",
		},
		{
			index: 6,
			name: "heart purse",
			name_cap: "Heart purse",
			variable: "heartpurse",
			integrity: 120,
			integrity_max: 120,
			fabric_strength: 10,
			reveal: 200,
			word: "a",
			plural: 0,
			colour: 0,
			colour_options: ["black", "blue", "brown", "green", "pink", "purple", "red", "tangerine", "teal", "white", "yellow", "neon blue", "custom"],
			colour_sidebar: 1,
			type: ["normal", "bookbag"],
			gender: "f",
			femininity: 100,
			warmth: 0,
			cost: 4000,
			description: "Capable of carrying a school textbook.",
			shop: ["clothing"],
			accessory: 1,
			accessory_colour: 0,
			accessory_colour_options: ["steel", "blue steel", "bronze", "gold", "silver", "black"],
			accessory_colour_sidebar: 1,
			cursed: 0,
			location: 0,
			iconFile: "heart_purse.png",
			accIcon: "heart_purse_acc.png",
		},
		{
			index: 7,
			name: "messenger bag",
			name_cap: "Messenger bag",
			variable: "messengerbag",
			integrity: 120,
			integrity_max: 120,
			fabric_strength: 10,
			reveal: 200,
			word: "a",
			plural: 0,
			colour: 0,
			colour_options: ["black", "blue", "brown", "green", "pink", "purple", "red", "tangerine", "teal", "white", "yellow", "neon blue", "custom"],
			colour_sidebar: 1,
			type: ["normal", "bookbag"],
			gender: "m",
			femininity: -100,
			warmth: 0,
			cost: 4000,
			description: "Useful for carrying school textbooks.",
			shop: ["clothing"],
			accessory: 1,
			accessory_colour: 0,
			accessory_colour_options: [],
			accessory_colour_sidebar: 0,
			cursed: 0,
			location: 0,
			iconFile: "messenger_bag.png",
			accIcon: "messenger_bag_acc.png",
		},
		{
			index: 8,
			name: "backpack",
			name_cap: "Backpack",
			variable: "backpack",
			integrity: 120,
			integrity_max: 120,
			fabric_strength: 10,
			reveal: 200,
			word: "a",
			plural: 0,
			colour: 0,
			colour_options: ["black", "blue", "brown", "green", "pink", "purple", "red", "tangerine", "teal", "white", "yellow", "neon blue", "custom"],
			colour_sidebar: 1,
			type: ["normal", "bookbag"],
			gender: "n",
			femininity: 0,
			warmth: 0,
			cost: 2000,
			description: "Useful for carrying school textbooks.",
			shop: ["clothing", "school"],
			accessory: 1,
			accessory_colour: 0,
			accessory_colour_options: [],
			accessory_colour_sidebar: 0,
			back_img: 1,
			back_img_acc: 1,
			back_img_acc_colour: "secondary",
			cursed: 0,
			location: 0,
			iconFile: "backpack.png",
			accIcon: "backpack_acc.png",
		},
		{
			index: 9,
			name: "paper fan",
			name_cap: "Paper fan",
			variable: "paperfan",
			integrity: 120,
			integrity_max: 120,
			fabric_strength: 10,
			reveal: 200,
			word: "a",
			plural: 0,
			colour: 0,
			colour_options: ["black", "blue", "brown", "green", "pink", "purple", "red", "tangerine", "teal", "white", "yellow", "neon blue", "custom"],
			colour_sidebar: 1,
			type: ["normal"],
			gender: "n",
			femininity: 0,
			warmth: 0,
			cost: 1300,
			description: "Keeps you cool.",
			shop: ["clothing"],
			accessory: 1,
			accessory_colour: 0,
			accessory_colour_options: [],
			accessory_colour_sidebar: 0,
			cursed: 0,
			location: 0,
			iconFile: "fan.png",
			accIcon: "fan_acc.png",
		},
		{
			index: 10,
			name: "milkshake",
			name_cap: "Milkshake",
			variable: "milkshake",
			word: "a",
			plural: 0,
			colour: 0,
			colour_options: [],
			colour_sidebar: 1,
			type: ["prop"],
			shop: [],
			gender: "n",
			description: "Tasty and refreshing.",
			accessory: 0,
			accessory_colour: 0,
			accessory_colour_options: [],
			accessory_colour_sidebar: 0,
		},
		{
			index: 11,
			name: "cigarette",
			name_cap: "Cigarette",
			variable: "cigarette",
			word: "a",
			plural: 0,
			colour: 0,
			colour_options: [],
			colour_sidebar: 1,
			type: ["prop"],
			shop: [],
			gender: "n",
			description: "Bad habits shouldn't look so cool.",
			accessory: 1,
			accessory_colour: 0,
			accessory_colour_options: [],
			accessory_colour_sidebar: 0,
		},
		{
			index: 12,
			name: "feather duster",
			name_cap: "Feather duster",
			variable: "featherduster",
			integrity: 120,
			integrity_max: 120,
			fabric_strength: 10,
			reveal: 200,
			word: "a",
			plural: 0,
			colour: 0,
			colour_options: [],
			colour_sidebar: 0,
			type: ["maid"],
			gender: "n",
			femininity: 0,
			warmth: 0,
			cost: 1500,
			description: "For looking cute while cleaning.",
			shop: ["clothing"],
			accessory: 0,
			accessory_colour: 0,
			accessory_colour_options: [],
			accessory_colour_sidebar: 0,
			cursed: 0,
			location: 0,
			iconFile: "feather_duster.png",
			accIcon: 0,
		},
		{
			index: 13,
			name: "pom poms",
			name_cap: "Pom poms",
			variable: "pompoms",
			integrity: 200,
			integrity_max: 200,
			fabric_strength: 20,
			reveal: 300,
			word: "a",
			plural: 0,
			colour: 0,
			colour_options: ["black", "blue", "brown", "green", "pink", "purple", "red", "pale tangerine", "teal", "pale white", "pale yellow", "custom"],
			colour_sidebar: 1,
			type: ["costume", "athletic"],
			gender: "f",
			femininity: 200,
			warmth: 15,
			cost: 1500,
			description: "For cheering your team to victory.",
			shop: ["clothing", "school", "adult"],
			accessory: 1,
			accessory_colour: 0,
			accessory_colour_options: [],
			back_img: 0,
			cursed: 0,
			location: 0,
			iconFile: "pom_poms.png",
			accIcon: 0,
			leftImage: 1,
		},
		{
			index: 14,
			name: "balloon",
			name_cap: "Balloon",
			variable: "balloon",
			integrity: 20,
			integrity_max: 20,
			fabric_strength: 20,
			reveal: 50,
			word: "a",
			plural: 1,
			colour: 0,
			colour_options: ["black", "blue", "brown", "green", "pink", "purple", "red", "tangerine", "teal", "white", "yellow", "neon blue", "custom"],
			colour_sidebar: 1,
			type: ["costume"],
			gender: "n",
			cost: 500,
			description: "Don't let go.",
			shop: ["stall"],
			accessory: 1,
			accessory_colour: 0,
			accessory_colour_options: [],
			back_img: 0,
			cursed: 0,
			location: 0,
			iconFile: "balloon.png",
			accIcon: 0,
		},
		{
			index: 15,
			name: "heart balloon",
			name_cap: "Heart balloon",
			variable: "balloonheart",
			integrity: 20,
			integrity_max: 20,
			fabric_strength: 20,
			reveal: 50,
			word: "a",
			plural: 0,
			colour: 0,
			colour_options: ["black", "blue", "brown", "green", "pink", "purple", "red", "tangerine", "teal", "white", "yellow", "neon blue", "custom"],
			colour_sidebar: 1,
			type: ["costume"],
			gender: "n",
			cost: 500,
			description: "Don't let go.",
			shop: ["stall"],
			accessory: 1,
			accessory_colour: 0,
			accessory_colour_options: [],
			back_img: 0,
			cursed: 0,
			location: 0,
			iconFile: "balloon_heart.png",
			accIcon: 0,
		},
		{
			index: 16,
			name: "bag of popcorn",
			name_cap: "Bag of popcorn",
			variable: "popcorn",
			word: "a",
			plural: 0,
			colour: 0,
			colour_options: [],
			colour_sidebar: 0,
			type: ["prop"],
			shop: [],
			gender: "n",
			description: "Tasty.",
			accessory: 0,
			accessory_colour: 0,
			accessory_colour_options: [],
		},
		{
			index: 17,
			name: "gingerbread man",
			name_cap: "Gingerbread man",
			variable: "gingerbread",
			word: "a",
			plural: 0,
			colour: 0,
			colour_options: [],
			colour_sidebar: 0,
			type: ["prop"],
			shop: [],
			gender: "n",
			description: "Tasty. A prop for scenes.",
			accessory: 0,
			accessory_colour: 0,
			accessory_colour_options: [],
		},
		{
			index: 18,
			name: "cup of lemonade",
			name_cap: "Cup of lemonade",
			variable: "lemonade",
			word: "a",
			plural: 0,
			colour: 0,
			colour_options: [],
			colour_sidebar: 0,
			type: ["prop"],
			shop: [],
			gender: "n",
			description: "Tasty.",
			accessory: 0,
			accessory_colour: 0,
			accessory_colour_options: [],
		},
		{
			index: 19,
			name: "hot drink",
			name_cap: "hot drink",
			variable: "cocoa",
			word: "a",
			plural: 0,
			colour: 0,
			colour_options: [],
			colour_sidebar: 0,
			type: ["prop"],
			shop: [],
			gender: "n",
			description: "Tasty.",
			accessory: 0,
			accessory_colour: 0,
			accessory_colour_options: [],
		},
		{
			index: 20,
			name: "mug",
			name_cap: "Mug",
			variable: "mug",
			word: "a",
			plural: 0,
			colour: 0,
			colour_options: [],
			colour_sidebar: 0,
			type: ["prop"],
			shop: [],
			gender: "n",
			description: "Empty.",
			accessory: 0,
			accessory_colour: 0,
			accessory_colour_options: [],
		},
		{
			index: 21,
			name: "beer bottle",
			name_cap: "Beer bottle",
			variable: "beerbottle",
			word: "a",
			plural: 0,
			colour: 0,
			colour_options: [],
			colour_sidebar: 1,
			type: ["prop"],
			shop: [],
			gender: "n",
			description: "Alcoholic.",
			accessory: 0,
			accessory_colour: 0,
			accessory_colour_options: [],
			accessory_colour_sidebar: 0,
		},		
		{
			index: 22,
			name: "mug of beer",
			name_cap: "Mug of beer",
			variable: "beermug",
			word: "a",
			plural: 0,
			colour: 0,
			colour_options: [],
			colour_sidebar: 1,
			type: ["prop"],
			shop: [],
			gender: "n",
			description: "Alcoholic.",
			accessory: 0,
			accessory_colour: 0,
			accessory_colour_options: [],
			accessory_colour_sidebar: 0,
		},			
		{
			index: 23,
			name: "shot glass",
			name_cap: "Shot glass",
			variable: "shotglass",
			word: "a",
			plural: 0,
			colour: 0,
			colour_options: [],
			colour_sidebar: 1,
			type: ["prop"],
			shop: [],
			gender: "n",
			description: "Alcoholic.",
			accessory: 0,
			accessory_colour: 0,
			accessory_colour_options: [],
			accessory_colour_sidebar: 0,
		},
		{
			index: 24,
			name: "wine glass",
			name_cap: "Wine glass",
			variable: "wine",
			word: "a",
			plural: 0,
			colour: 0,
			colour_options: [],
			colour_sidebar: 1,
			type: ["prop"],
			shop: [],
			gender: "n",
			description: "Alcoholic.",
			accessory: 0,
			accessory_colour: 0,
			accessory_colour_options: [],
			accessory_colour_sidebar: 0,
		},
	];

	/*
		Clothes that modders add go into this array, this should be empty in the base game at all times.
		These items should have a `modder` variable with a the modders name in a short string
	*/
	setup.moddedClothes.handheld = [];

	setup.moddedClothes.handheld.forEach((x, i) => (x.index = setup.clothes.handheld.length + i));
	setup.clothes.handheld.push(...setup.moddedClothes.handheld);
}
window.initHandheld = initHandheld;
