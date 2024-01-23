/* For any item that has a colour_combat tag, set it to 0 if that item ever gets its own combat sprites. */
function initLegs() {
	setup.clothes.legs = [
		{
			index: 0,
			name: "naked",
			name_cap: "Naked",
			variable: "naked",
			integrity: 10,
			integrity_max: 10,
			fabric_strength: 20,
			reveal: 1,
			word: "a",
			state: 0,
			state_base: 0,
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
			cursed: 0,
			location: 0,
			iconFile: 0,
			accIcon: 0,
			mainImage: 0,
		},

		{
			index: 1,
			name: "tights",
			name_cap: "Tights",
			variable: "tights",
			integrity: 30,
			integrity_max: 30,
			fabric_strength: 20,
			reveal: 100,
			word: "n",
			state: "waist",
			state_base: "waist",
			plural: 1,
			colour: 0,
			colour_options: [],
			colour_combat: 0,
			type: ["normal"],
			gender: "f",
			femininity: 200,
			warmth: 5,
			cost: 1000,
			description: "They don't conceal much.",
			shop: ["clothing", "adult"],
			accessory: 0,
			accessory_colour: 0,
			accessory_colour_options: [],
			cursed: 0,
			location: 0,
			iconFile: "tights.png",
			accIcon: 0,
		},

		{
			index: 2,
			name: "boy's gym socks",
			name_cap: "Boy's gym socks",
			variable: "boysgymsocks",
			integrity: 100,
			integrity_max: 100,
			fabric_strength: 20,
			reveal: 1,
			word: "n",
			state: "thighs",
			state_base: "thighs",
			plural: 1,
			colour: 0,
			colour_options: [],
			colour_combat: 0,
			type: ["school"],
			gender: "m",
			femininity: -100,
			warmth: 15,
			cost: 500,
			description: "Cushioned and breathable.",
			shop: ["clothing", "school", "adult"],
			accessory: 0,
			accessory_colour: 0,
			accessory_colour_options: [],
			cursed: 0,
			location: 0,
			iconFile: "boys_gym_socks.png",
			accIcon: 0,
		},

		{
			index: 3,
			name: "girl's gym socks",
			name_cap: "Girl's gym socks",
			variable: "girlsgymsocks",
			integrity: 100,
			integrity_max: 100,
			fabric_strength: 20,
			reveal: 1,
			word: "n",
			state: "thighs",
			state_base: "thighs",
			plural: 1,
			colour: 0,
			colour_options: [],
			colour_combat: 0,
			type: ["school"],
			gender: "f",
			femininity: 100,
			warmth: 15,
			cost: 500,
			description: "Cushioned and breathable.",
			shop: ["clothing", "school", "adult"],
			accessory: 0,
			accessory_colour: 0,
			accessory_colour_options: [],
			cursed: 0,
			location: 0,
			iconFile: "girls_gym_socks.png",
			accIcon: 0,
		},

		{
			index: 4,
			name: "stockings",
			name_cap: "Stockings",
			variable: "stockings",
			integrity: 40,
			integrity_max: 40,
			fabric_strength: 20,
			reveal: 100,
			word: "n",
			state: "thighs",
			state_base: "thighs",
			plural: 1,
			colour: 0,
			colour_options: [],
			colour_combat: 0,
			type: ["normal"],
			gender: "f",
			femininity: 200,
			warmth: 15,
			cost: 1500,
			description: "Attractive and alluring.",
			shop: ["clothing", "adult"],
			accessory: 0,
			accessory_colour: 0,
			accessory_colour_options: [],
			cursed: 0,
			location: 0,
			iconFile: "stockings.png",
			accIcon: 0,
		},

		{
			index: 5,
			name: "fishnet stockings",
			name_cap: "Fishnet stockings",
			variable: "fishnetstockings",
			integrity: 20,
			integrity_max: 20,
			fabric_strength: 20,
			reveal: 200,
			word: "n",
			state: "thighs",
			state_base: "thighs",
			plural: 1,
			colour: 0,
			colour_options: [],
			colour_combat: 0,
			type: ["normal"],
			gender: "f",
			femininity: 300,
			warmth: 3,
			cost: 1500,
			description: "Attractive and alluring.",
			shop: ["clothing", "adult"],
			accessory: 0,
			accessory_colour: 0,
			accessory_colour_options: [],
			cursed: 0,
			location: 0,
			iconFile: "fishnet_stockings.png",
			accIcon: 0,
		},

		{
			index: 6,
			name: "fishnet tights",
			name_cap: "Fishnet tights",
			variable: "fishnettights",
			integrity: 25,
			integrity_max: 25,
			fabric_strength: 20,
			reveal: 200,
			word: "n",
			state: "waist",
			state_base: "waist",
			plural: 1,
			colour: 0,
			colour_options: [],
			colour_combat: 0,
			type: ["normal"],
			gender: "f",
			femininity: 300,
			warmth: 3,
			cost: 1700,
			description: "Attractive and alluring.",
			shop: ["clothing", "adult"],
			accessory: 0,
			accessory_colour: 0,
			accessory_colour_options: [],
			cursed: 0,
			location: 0,
			iconFile: "fishnet_tights.png",
			accIcon: 0,
		},

		{
			index: 7,
			name: "garter stockings",
			name_cap: "Garter stockings",
			variable: "garterstockings",
			integrity: 15,
			integrity_max: 15,
			fabric_strength: 20,
			reveal: 300,
			word: "n",
			state: "thighs",
			state_base: "thighs",
			plural: 1,
			colour: 0,
			colour_options: ["black", "navy blue", "brown", "wine", "grey", "light pink", "lilac", "soft brown", "blue", "green", "pink", "purple", "red", "tangerine", "teal", "pale white", "pale yellow", "custom"],
			colour_sidebar: 1,
			colour_combat: 0,
			type: ["normal"],
			gender: "f",
			femininity: 300,
			warmth: 20,
			cost: 4000,
			description: "Sexy.",
			shop: ["clothing", "adult"],
			accessory: 0,
			accessory_colour: 0,
			accessory_colour_options: [],
			cursed: 0,
			location: 0,
			iconFile: "garter_stockings.png",
			accIcon: 0,
		},

		{
			index: 8,
			name: "legwarmers",
			name_cap: "Legwarmers",
			variable: "legwarmers",
			integrity: 25,
			integrity_max: 25,
			fabric_strength: 20,
			reveal: 1,
			word: "n",
			state: "thighs",
			state_base: "thighs",
			plural: 1,
			colour: 0,
			colour_options: ["black", "blue", "brown", "green", "pink", "purple", "red", "tangerine", "teal", "white", "yellow", "neon blue", "custom"],
			colour_sidebar: 1,
			colour_combat: 0,
			type: ["normal"],
			gender: "n",
			warmth: 70,
			cost: 1500,
			description: "Cosy.",
			shop: ["clothing"],
			accessory: 0,
			accessory_colour: 0,
			accessory_colour_options: [],
			cursed: 0,
			location: 0,
			iconFile: "legwarmers.png",
			accIcon: 0,
		},

		{
			index: 9,
			name: "christmas leg warmers",
			name_cap: "Christmas leg warmers",
			variable: "christmas",
			integrity: 25,
			integrity_max: 25,
			fabric_strength: 20,
			reveal: 1,
			word: "n",
			state: "thighs",
			state_base: "thighs",
			plural: 1,
			colour: 0,
			colour_options: [],
			colour_combat: 0,
			type: ["costume"],
			gender: "f",
			femininity: 200,
			warmth: 70,
			cost: 2500,
			description: "Festive.",
			shop: ["forest"],
			accessory: 0,
			accessory_colour: 0,
			accessory_colour_options: [],
			cursed: 0,
			location: 0,
			iconFile: "christmas_leg_warmers.png",
		},

		{
			index: 10,
			name: "gold anklets",
			name_cap: "Gold anklets",
			variable: "goldanklets",
			integrity: 100,
			integrity_max: 100,
			fabric_strength: 20,
			reveal: 300,
			word: "n",
			state: "ankles",
			state_base: "ankles",
			plural: 1,
			colour: 0,
			colour_options: [],
			colour_combat: 0,
			type: ["costume", "serving"],
			gender: "n",
			warmth: 0,
			cost: 25000,
			description: "Exotic and eye-catching.",
			shop: ["adult"],
			accessory: 0,
			accessory_colour: 0,
			accessory_colour_options: [],
			cursed: 0,
			location: 0,
			iconFile: "gold_anklets.png",
			accIcon: 0,
		},

		{
			index: 11,
			name: "naked",
			name_cap: "Naked",
			variable: "naked",
			integrity: 10,
			integrity_max: 10,
			fabric_strength: 20,
			reveal: 1,
			word: "a",
			state: 0,
			state_base: 0,
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
			cursed: 0,
			location: 0,
			iconFile: 0,
			accIcon: 0,
		},

		{
			index: 12,
			name: "striped thighhighs",
			name_cap: "Striped thighhighs",
			variable: "stripedthighhighs",
			integrity: 100,
			integrity_max: 100,
			fabric_strength: 15,
			reveal: 300,
			word: "n",
			state: "thighs",
			state_base: "thighs",
			plural: 1,
			colour: 0,
			colour_options: ["black", "blue", "brown", "green", "pink", "purple", "red", "tangerine", "teal", "white", "yellow", "custom"],
			colour_sidebar: 1,
			colour_combat: 0,
			type: ["normal"],
			gender: "f",
			femininity: 200,
			warmth: 20,
			cost: 3000,
			description: "Brimming with personality.",
			shop: ["clothing", "adult"],
			accessory: 1,
			accessory_colour: 0,
			accessory_colour_options: ["black", "blue", "brown", "green", "pink", "purple", "red", "tangerine", "teal", "white", "yellow", "custom"],
			accessory_colour_sidebar: 1,
			accessory_colour_combat: 0,
			cursed: 0,
			location: 0,
			iconFile: "striped_thighhighs.png",
			accIcon: "striped_thighhighs_acc.png",
		},

		{
			index: 13,
			name: "ankle socks",
			name_cap: "Ankle socks",
			variable: "anklesocks",
			integrity: 100,
			integrity_max: 100,
			fabric_strength: 20,
			reveal: 1,
			word: "n",
			state: "ankles",
			state_base: "ankles",
			plural: 1,
			colour: 0,
			colour_options: ["black", "blue", "brown", "green", "pink", "purple", "red", "pale tangerine", "teal", "pale white", "pale yellow", "custom"],
			colour_sidebar: 1,
			colour_combat: 0,
			type: ["school", "athletic"],
			gender: "n",
			femininity: 0,
			warmth: 10,
			cost: 500,
			description: "Perfect for sport.",
			shop: ["clothing"],
			accessory: 1,
			accessory_colour: 0,
			accessory_colour_options: [],
			cursed: 0,
			location: 0,
			iconFile: "ankle_socks.png",
			accIcon: "ankle_socks_acc.png",
		},

		{
			index: 14,
			name: "plain thighhighs",
			name_cap: "Plain thighhighs",
			variable: "plainthighhighs",
			integrity: 100,
			integrity_max: 100,
			fabric_strength: 15,
			reveal: 300,
			word: "n",
			state: "thighs",
			state_base: "thighs",
			plural: 1,
			colour: 0,
			colour_options: ["black", "blue", "brown", "green", "pink", "purple", "red", "tangerine", "teal", "white", "yellow", "custom"],
			colour_sidebar: 1,
			colour_combat: 0,
			type: ["normal"],
			gender: "f",
			femininity: 200,
			warmth: 20,
			cost: 2500,
			description: "Simple and cute.",
			shop: ["clothing", "adult"],
			accessory: 0,
			accessory_colour: 0,
			accessory_colour_options: [],
			cursed: 0,
			location: 0,
			iconFile: "striped_thighhighs.png",
			accIcon: 0,
		},

		{
			index: 15,
			name: "cow socks",
			name_cap: "Cow socks",
			variable: "cow",
			integrity: 100,
			integrity_max: 100,
			fabric_strength: 20,
			reveal: 1,
			word: "n",
			state: "knees",
			state_base: "knees",
			plural: 1,
			colour: 0,
			colour_options: [],
			colour_combat: 0,
			type: ["costume"],
			gender: "n",
			femininity: -0,
			warmth: 15,
			cost: 1000,
			description: "Cute cow print.",
			shop: ["forest"],
			accessory: 0,
			accessory_colour: 0,
			accessory_colour_options: [],
			cursed: 0,
			location: 0,
			iconFile: "cow_socks.png",
			accIcon: 0,
		},

		{
			index: 16,
			name: "nurse socks",
			name_cap: "Nurse socks",
			variable: "nursesocks",
			integrity: 100,
			integrity_max: 100,
			fabric_strength: 20,
			reveal: 1,
			word: "n",
			state: "thighs",
			state_base: "thighs",
			plural: 1,
			colour: 0,
			colour_options: [],
			colour_combat: 0,
			type: ["costume"],
			gender: "f",
			femininity: 100,
			warmth: 15,
			cost: 900,
			description: "Worn by nurses at the local hospital.",
			shop: ["clothing"],
			accessory: 0,
			accessory_colour: 0,
			accessory_colour_options: [],
			cursed: 0,
			location: 0,
			iconFile: "nurse_socks.png",
			accIcon: 0,
		},

		{
			index: 17,
			name: "ribbon stockings",
			name_cap: "Ribbon stockings",
			variable: "ribbonstockings",
			integrity: 15,
			integrity_max: 15,
			fabric_strength: 20,
			reveal: 300,
			word: "n",
			state: "thighs",
			state_base: "thighs",
			plural: 1,
			colour: 0,
			colour_options: ["black", "blue", "brown", "green", "pink", "purple", "red", "tangerine", "teal", "white", "yellow", "custom"],
			colour_sidebar: 1,
			colour_combat: 0,
			type: ["normal"],
			gender: "f",
			femininity: 300,
			warmth: 20,
			cost: 4000,
			description: "Cute.",
			shop: ["clothing", "adult"],
			accessory: 1,
			accessory_colour: 0,
			accessory_colour_options: ["black", "blue", "brown", "green", "pink", "purple", "red", "tangerine", "teal", "white", "yellow", "custom"],
			accessory_colour_sidebar: 1,
			cursed: 0,
			location: 0,
			iconFile: "ribbon_stockings.png",
			accIcon: "ribbon_stockings_acc.png",
		},

		{
			index: 18,
			name: "patterned dress socks",
			name_cap: "Patterned dress socks",
			variable: "twirly socks",
			integrity: 100,
			integrity_max: 100,
			fabric_strength: 20,
			reveal: 1,
			word: "n",
			state: "knees",
			state_base: "knees",
			plural: 1,
			colour: 0,
			colour_options: ["black", "blue", "brown", "green", "pink", "purple", "red", "tangerine", "teal", "white", "yellow", "custom"],
			colour_sidebar: 1,
			type: ["normal"],
			gender: "m",
			femininity: -200,
			warmth: 20,
			cost: 1200,
			description: "Men's dress socks. Masculine, yet playful.",
			shop: ["clothing"],
			accessory: 1,
			accessory_colour: 0,
			accessory_colour_options: ["black", "blue", "brown", "green", "pink", "purple", "red", "tangerine", "teal", "white", "yellow", "custom"],
			accessory_colour_sidebar: 1,
			cursed: 0,
			location: 0,
			iconFile: "twirly_socks.png",
			accIcon: "twirly_socks_acc.png",
		},

		{
			index: 19,
			name: "polka dot socks",
			name_cap: "Polka dot socks",
			variable: "polka socks",
			integrity: 100,
			integrity_max: 100,
			fabric_strength: 20,
			reveal: 1,
			word: "n",
			state: "knees",
			state_base: "knees",
			plural: 1,
			colour: 0,
			colour_options: ["black", "blue", "brown", "green", "pink", "purple", "red", "tangerine", "teal", "white", "yellow", "neon blue", "custom"],
			colour_sidebar: 1,
			type: ["normal"],
			gender: "m",
			femininity: -200,
			warmth: 20,
			cost: 1200,
			description: "Patterned dress socks. Masculine, yet playful.",
			shop: ["clothing"],
			accessory: 1,
			accessory_colour: 0,
			accessory_colour_options: ["black", "blue", "brown", "green", "pink", "purple", "red", "tangerine", "teal", "white", "yellow", "neon blue", "custom"],
			accessory_colour_sidebar: 1,
			cursed: 0,
			location: 0,
			iconFile: "polka_socks.png",
			accIcon: "polka_socks_acc.png",
		},

		{
			index: 20,
			name: "sports socks",
			name_cap: "Sports socks",
			variable: "sports socks short",
			integrity: 100,
			integrity_max: 100,
			fabric_strength: 20,
			reveal: 1,
			word: "n",
			state: "ankles",
			state_base: "ankles",
			plural: 1,
			colour: 0,
			colour_options: ["black", "blue", "brown", "green", "pink", "purple", "red", "tangerine", "teal", "white", "yellow", "custom"],
			colour_sidebar: 1,
			type: ["normal", "athletic"],
			gender: "m",
			femininity: -100,
			warmth: 20,
			cost: 500,
			description: "Cushioned and breathable.",
			shop: ["clothing"],
			accessory: 1,
			accessory_colour: 0,
			accessory_colour_options: ["black", "blue", "brown", "green", "pink", "purple", "red", "tangerine", "teal", "white", "yellow", "custom"],
			accessory_colour_sidebar: 1,
			cursed: 0,
			location: 0,
			iconFile: "short_sport.png",
			accIcon: "short_sport_acc.png",
		},

		{
			index: 21,
			name: "knee-high sports socks",
			name_cap: "Knee-high sports socks",
			variable: "sports socks long",
			integrity: 100,
			integrity_max: 100,
			fabric_strength: 20,
			reveal: 1,
			word: "n",
			state: "knees",
			state_base: "knees",
			plural: 1,
			colour: 0,
			colour_options: ["black", "blue", "brown", "green", "pink", "purple", "red", "tangerine", "teal", "white", "yellow", "custom"],
			colour_sidebar: 1,
			type: ["normal", "athletic"],
			gender: "m",
			femininity: -300,
			warmth: 20,
			cost: 800,
			description: "Cushioned and breathable.",
			shop: ["clothing"],
			accessory: 1,
			accessory_colour: 0,
			accessory_colour_options: ["black", "blue", "brown", "green", "pink", "purple", "red", "tangerine", "teal", "white", "yellow", "custom"],
			accessory_colour_sidebar: 1,
			cursed: 0,
			location: 0,
			iconFile: "long_sport.png",
			accIcon: "long_sport_acc.png",
		},

		{
			index: 22,
			name: "rib-knit socks",
			name_cap: "Rib-knit socks",
			variable: "striped socks long",
			integrity: 100,
			integrity_max: 100,
			fabric_strength: 20,
			reveal: 1,
			word: "n",
			state: "knees",
			state_base: "knees",
			plural: 1,
			colour: 0,
			colour_options: ["black", "blue", "brown", "green", "pink", "purple", "red", "tangerine", "teal", "white", "yellow", "custom"],
			colour_sidebar: 1,
			type: ["normal"],
			gender: "m",
			femininity: -200,
			warmth: 20,
			cost: 1200,
			description: "Men's ribbed socks, for his pleasure.",
			shop: ["clothing"],
			accessory: 0,
			accessory_colour: 0,
			accessory_colour_options: [],
			accessory_colour_sidebar: 0,
			cursed: 0,
			location: 0,
			iconFile: "long_stripe.png",
			accIcon: 0,
		},

		{
			index: 23,
			name: "rib-knit ankle socks",
			name_cap: "Rib-knit ankle socks",
			variable: "striped socks short",
			integrity: 100,
			integrity_max: 100,
			fabric_strength: 20,
			reveal: 1,
			word: "n",
			state: "ankles",
			state_base: "ankles",
			plural: 1,
			colour: 0,
			colour_options: ["black", "blue", "brown", "green", "pink", "purple", "red", "tangerine", "teal", "white", "yellow", "custom"],
			colour_sidebar: 1,
			type: ["normal"],
			gender: "m",
			femininity: -200,
			warmth: 20,
			cost: 1000,
			description: "Men's ribbed socks, for his pleasure.",
			shop: ["clothing"],
			accessory: 0,
			accessory_colour: 0,
			accessory_colour_options: [],
			accessory_colour_sidebar: 0,
			cursed: 0,
			location: 0,
			iconFile: "short_stripe.png",
			accIcon: 0,
		},

		{
			index: 24,
			name: "striped kneehighs",
			name_cap: "Striped kneehighs",
			variable: "striped kneehighs",
			integrity: 100,
			integrity_max: 100,
			fabric_strength: 20,
			reveal: 1,
			word: "n",
			state: "ankles",
			state_base: "ankles",
			plural: 1,
			colour: 0,
			colour_options: ["black", "blue", "brown", "green", "pink", "purple", "red", "tangerine", "teal", "white", "yellow", "custom"],
			colour_sidebar: 1,
			type: ["normal"],
			gender: "n",
			femininity: 0,
			warmth: 20,
			cost: 2000,
			description: "Brimming with personality.",
			shop: ["clothing"],
			accessory: 1,
			accessory_colour: 0,
			accessory_colour_options: ["black", "blue", "brown", "green", "pink", "purple", "red", "tangerine", "teal", "white", "yellow", "custom"],
			accessory_colour_sidebar: 1,
			cursed: 0,
			location: 0,
			iconFile: "striped_kneehighs.png",
			accIcon: "striped_kneehighs_acc.png",
		},

		{
			index: 25,
			name: "sheer leggings",
			name_cap: "Sheer leggings",
			variable: "sheerleggings",
			integrity: 30,
			integrity_max: 30,
			fabric_strength: 20,
			reveal: 50,
			word: "n",
			state: "waist",
			state_base: "waist",
			plural: 1,
			colour: 0,
			colour_options: ["black", "navy blue", "brown", "wine", "grey", "light pink", "lilac", "soft brown", "blue", "green", "pink", "purple", "red", "tangerine", "teal", "pale white", "pale yellow", "custom"],
			colour_sidebar: 1,
			type: ["normal", "dance", "athletic"],
			gender: "f",
			femininity: 200,
			warmth: 25,
			cost: 1000,
			description: "Too translucent to wear alone.",
			shop: ["clothing", "adult"],
			accessory: 0,
			accessory_colour: 0,
			accessory_colour_options: [],
			cursed: 0,
			location: 0,
			iconFile: "leggings.png",
			accIcon: 0,
		},
		{
			index: 26,
			name: "mismatched socks",
			name_cap: "Mismatched socks",
			variable: "mismatched socks",
			integrity: 100,
			integrity_max: 100,
			fabric_strength: 20,
			reveal: 1,
			word: "n",
			state: "ankles",
			state_base: "ankles",
			plural: 1,
			colour: 0,
			colour_options: ["black", "blue", "brown", "green", "pink", "purple", "red", "tangerine", "teal", "white", "yellow", "neon blue", "custom"],
			colour_sidebar: 1,
			type: ["normal"],
			gender: "n",
			femininity: 0,
			warmth: 20,
			cost: 2000,
			description: "Brimming with personality.",
			shop: ["clothing"],
			accessory: 1,
			accessory_colour: 0,
			accessory_colour_options: ["black", "blue", "brown", "green", "pink", "purple", "red", "tangerine", "teal", "white", "yellow", "custom"],
			accessory_colour_sidebar: 1,
			cursed: 0,
			location: 0,
			iconFile: "mismatched.png",
			accIcon: "mismatched_acc.png",
		},
		{
			index: 27,
			name: "loose socks",
			name_cap: "Loose socks",
			variable: "loosesocks",
			integrity: 100,
			integrity_max: 100,
			fabric_strength: 20,
			reveal: 500,
			word: "n",
			state: "ankles",
			state_base: "ankles",
			plural: 1,
			colour: 0,
			colour_options: [],
			type: ["school"],
			gender: "f",
			femininity: 100,
			warmth: 15,
			cost: 500,
			description: "Popular with schoolgirls in a foreign land.",
			shop: ["clothing", "school", "adult"],
			accessory: 0,
			accessory_colour: 0,
			accessory_colour_options: [],
			cursed: 0,
			location: 0,
			iconFile: "loose_socks.png",
			accIcon: 0,
		},
		{
			index: 28,
			name: "sexy nun's stockings",
			name_cap: "Sexy nun's stockings",
			variable: "nunlewd",
			integrity: 100,
			integrity_max: 100,
			fabric_strength: 20,
			reveal: 500,
			word: "a",
			state: "knees",
			state_base: "knees",
			plural: 1,
			colour: 0,
			colour_options: ["white", "black", "bronze"],
			colour_sidebar: 1,
			type: ["holy", "costume", "fetish"],
			gender: "f",
			femininity: 200,
			warmth: 10,
			cost: 2000,
			description: "For looking your Sunday best while on your knees.",
			shop: ["forest"],
			accessory: 1,
			accessory_colour: 0,
			accessory_colour_options: ["white", "black", "bronze"],
			accessory_colour_sidebar: 1,
			cursed: 0,
			location: 0,
			iconFile: "sexy_nuns_stockings.png",
			accIcon: "sexy_nuns_stockings_acc.png",
		},
	];

	/*
		Clothes that modders add go into this array, this should be empty in the base game at all times.
		These items should have a `modder` variable with a the modders name in a short string
	*/
	setup.moddedClothes.legs = [];

	setup.moddedClothes.legs.forEach((x, i) => (x.index = setup.clothes.legs.length + i));
	setup.clothes.legs.push(...setup.moddedClothes.legs);
}
window.initLegs = initLegs;
