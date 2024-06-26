/*
 * This is a TypeScript typings file with definitions an documentation of in-game structures.
 *
 * While documenting everything  here is optional, the definitions might be picked by IDE,
 * and, should TypeScript rewrite become a thing in future, would work as a static type check.
 */

declare interface ClothesItem {
	index: number;
	name: string;
	name_cap: string;
	name_simple: string;
	/**
	 * Folder name
	 */
	variable: string;
	integrity: number;
	integrity_max: number;
	fabric_strength: number;
	reveal: number;
	bustresize: number;
	one_piece: number;
	strap: number;
	open: number;
	/**
	 * "a": a skirt.
	 * 
	 * "n": skirt.
	 * 
	 * "an": an skirt.
	 */
	word: "a" | "n" | "an";
	/**
	 * Naked states are almost always 0.
	 * 
	 * Upper clothing is typically a mix of "chest" and "midriff". Some decisions are questionable here.
	 * 
	 * Most lower clothing states are "waist", can be set to "thighs" when player pulls them down.
	 * 
	 * Legwear is a mix between "thighs", "knees" and "ankles".
	 * 
	 * Strap-ons are typically set to "worn".
	 */
	state: 0 | "chest" | "midriff" | "waist" | "thighs" | "knees" | "ankles" | "worn";
	state_base: string?;
	state_top: string?;
	state_top_base: string?;
	plural: number;
	/**
	 * key in setup.colours.prefilters identifying preprocessing required for canvas renderer.
	 * default is "clothes"
	 */
	prefilter?: string;
	colour: string | 0;
	colour_options: string[];
	colour_sidebar: 0 | 1;
	/**
	 * 0. Does not expose
	 * 1. Partially exposes
	 * 2. Fully exposes (naked, transparent)
	 */
	exposed: 0 | 1 | 2;
	/**
	 * 0. Does not expose
	 * 1. Partially exposes
	 * 2. Fully exposes (naked, transparent)
	 */
	exposed_base: 0 | 1 | 2;
	/**
	 * 0. Vagina not exposed (Should include penis?)
	 * 1. Vagina exposed
	 */
	vagina_exposed: 0 | 1;
	/**
	 * 0. Vagina not exposed (Should include penis?)
	 * 1. Vagina exposed
	 */
	vagina_exposed_base: 0 | 1;
	/**
	 * 0. Anus not exposed
	 * 1. Anus exposed
	 */
	anus_exposed: 0 | 1;
	/**
	 * 0: Anus not exposed
	 * 
	 * 1: Anus exposed
	 */
	anus_exposed_base: 0 | 1;
	type: string[];
	set: string;
	/**
	 * m: Male
	 * 
	 * f: Female
	 * 
	 * n: Neither
	 */
	gender: "m" | "f" | "n";
	femininity: number;
	warmth: number;
	cost: number;
	description: string;
	shop: string[];
	accessory: number;
	accessory_colour: string | 0;
	accessory_colour_options: string[];
	accessory_colour_sidebar: number;
	/**
	 * if 1, then accessory files are integrity-dependent "acc_(tattered|torn|frayed|full).png"
	 */
	accessory_integrity_img?: 0 | 1;
	high_img: 0 | 1;
	back_img: 0 | 1;
	/**
	 * Recolouring of back image
	 * * "" (default) - depending on colour_sidebar
	 * * "no" - do not recolour image
	 * * "primary" - use primary/main colour
	 * * "secondary" - use secondary/accessory colour
	 */
	back_img_colour?: "" | "no" | "primary" | "secondary";
	/**
	 * (For upper, over_upper, under_upper slots)
	 * 
	 * 1 if has sleeve images, named (left|right)[_cover].png".
	 * Colouring depends on sleeve_colour property.
	 */
	sleeve_img: number;
	/**
	 * (For upper, over_upper, under_upper slots)
	 * 
	 * 1 if has sleeve accessory images, named (left|right)[_cover]_acc.png".
	 * These images are not colored.
	 * Requires sleeve_img: 1.
	 */
	sleeve_acc_img: number;
	/**
	 * (For upper, over_upper, under_upper slots)
	 * 
	 * Recolouring of sleeves images:
	 * * "" (default) - depending on colour_sidebar
	 * * "no" - do not recolour image
	 * * "primary" - use primary/main colour
	 * * "secondary" - use secondary/accessory colour
	 */
	sleeve_colour?: "" | "no" | "primary" | "secondary";
	breast_img: number;
	cursed: number;
	location: number;
	iconFile: string;
	accIcon: number;
	outfitPrimary: object;
	outfitSecondary: string[];
	notuck: number;
	/**
	 * (For head slots)
	 * if 1, this item has mask.png image to cut out hair & animal ears layers
	 */
	mask_img?: number;
	/**
	 * Specifies the image directory the combat renderer uses
	 */
	combatImg: string?;
	// TODO list and document other options
}

declare namespace setup {
	/**
	 * Slot names
	 */
	export let clothes_all_slots: string[];
	export namespace clothes {
		export let over_upper: ClothesItem[];
		export let over_lower: ClothesItem[];
		export let upper: ClothesItem[];
		export let lower: ClothesItem[];
		export let under_upper: ClothesItem[];
		export let under_lower: ClothesItem[];
		export let over_head: ClothesItem[];
		export let head: ClothesItem[];
		export let face: ClothesItem[];
		export let neck: ClothesItem[];
		export let hands: ClothesItem[];
		export let legs: ClothesItem[];
		export let feet: ClothesItem[];
		export let genitals: ClothesItem[];
	}
}
