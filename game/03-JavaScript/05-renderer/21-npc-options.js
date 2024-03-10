/**
 * @typedef {object} NpcOptions
 * @property {"img/newsex"} root
 * @property {string} src Typically "img/newsex/missionary/"
 * @property {"missionary" | "doggy"} position
 * @property {string} type
 * @property {Colour} colour
 * @property {string} state
 * @property {boolean} showShadow
 * @property {Penetrator[]} penetrators
 */

/**
 * @typedef {object} Penetrator
 * @property {"human" | "strapon" | "knotted" | "equine" | "feline" | "sus"} type
 * @property {number} size
 * @property {string} colour
 * @property {-1|0|1|2|3|4|5} target PC is -1. NPCs are 0 to 5.
 * @property {string} position Area that the penetrator is in.
 * @property {string} state What it is doing in the position.
 * @property {string} isEjaculating Whether the penetrator is ejaculating.
 * @property {Ejaculate} ejaculate The type of ejaculate.
 * @property {string} hasCondom Whether the penetrator is wrapped in a condom.
 * @property {boolean} show Whether to render the penetrator.
 */

/**
 * @typedef {object} Ejaculate
 * @property {string} type
 */

/**
 * @typedef {object} Colour
 * @property {string} hex
 */

const target = {
	pc: -1,
	npc0: 0,
	npc1: 1,
	npc2: 2,
	npc3: 3,
	npc4: 4,
	npc5: 5,
};

/**
 *
 * @param {number} index
 * @param {NpcOptions} options
 * @returns {NpcOptions}
 */
function mapNpcToOptions(index, options) {
	console.log("mapNpcToOptions", index, JSON.parse(JSON.stringify(options)));

	// Set position
	if (!["doggy", "missionary"].includes(V.position)) {
		Errors.report("Position not set to any valid values", V.position);
		options.position = "missionary";
	} else {
		options.position = V.position;
	}

	// Set directory for images
	options.root = "img/newsex";
	options.src = `${options.root}/${options.position}/`;

	// Set animation speed
	options.animKey = combat.isActive() ? "sex-4f-vfast" : "sex-2f-idle";
	options.animKeyStill = combat.isActive() ? "sex-4f-vfast" : "sex-1f-idle";

	// Configure state
	// Maybe use active_enemy? const index = V.active_enemy.
	const npc = V.NPCList[index];
	options.type = npc.type;
	options.showShadow = false;

	mapNpcToShadowOptions(npc, options);

	return options;
}
window.mapNpcToOptions = mapNpcToOptions;

/**
 *
 * @param {object} npc
 * @param {NpcOptions} options
 * @returns {NpcOptions}
 */
function mapNpcToShadowOptions(npc, options) {
	options.penetrators = options.penetrators = [];
	const penetrator = mapNpcToPenetratorOptions(npc);
	if (penetrator != null) {
		// Figure out which shadow base to use from penetrator:
		options.state = penetrator.position;
		// Figure out whether to show the shadow man or not:
		options.showShadow = V.options.silhouetteEnabled && ["vagina", "anus", "mouth"].includes(penetrator.position);

		console.log("Pushing penetrator to list:", penetrator);
		options.penetrators.push(penetrator);
	}
	return options;
}
window.mapNpcToShadowOptions = mapNpcToShadowOptions;

/**
 *
 * @param {object} npc
 * @returns {Penetrator?}
 */
function mapNpcToPenetratorOptions(npc) {
	/** @type {Penetrator} */
	const penetrator = {
		show: true,
		type: npc.type,
		colour: npc.skincolour,
		target: target.pc,
		isEjaculating: V.enemyarousal >= V.enemyarousalmax && wearingCondom(V.vaginatarget) !== "worn" && !npcHasStrapon(V.vaginatarget),
		ejaculate: {
			type: "sperm",
		},
	};
	switch (npc.penis) {
		case "anusentrance":
			penetrator.position = "anus";
			penetrator.state = "entrance";
			return penetrator;
		case "anusentrancedouble":
			penetrator.position = "anus";
			penetrator.state = "entrancedouble";
			return penetrator;
		case "anus":
			penetrator.position = "anus";
			penetrator.state = "penetrated";
			return penetrator;
		case "anusdouble":
			penetrator.position = "anus";
			penetrator.state = "penetrateddouble";
			return penetrator;
		case "penisentrance":
			return null;
		case "penisimminent":
			return null;
		case "penis":
			return null;
		case "vaginaentrance":
			penetrator.position = "vagina";
			penetrator.state = "entrance";
			return penetrator;
		case "vaginaentrancedouble":
			penetrator.position = "vagina";
			penetrator.state = "entrancedouble";
			return penetrator;
		case "vaginaimminent":
			penetrator.position = "vagina";
			penetrator.state = "imminent";
			return penetrator;
		case "vaginaimminentdouble":
			penetrator.position = "vagina";
			penetrator.state = "imminentdouble";
			return penetrator;
		case "vagina":
			penetrator.position = "vagina";
			penetrator.state = "penetrated";
			return penetrator;
		case "vaginadouble":
			penetrator.position = "vagina";
			penetrator.state = "penetrateddouble";
			return penetrator;
		case "mouthentrance":
			penetrator.position = "mouth";
			penetrator.state = "entrance";
			return penetrator;
		case "mouthimminent":
			penetrator.position = "mouth";
			penetrator.state = "imminent";
			return penetrator;
		case "mouth":
			penetrator.position = "mouth";
			penetrator.state = "penetrated";
			return penetrator;
		case "othermouth": // Not sure of the usage?
			penetrator.position = "mouth";
			penetrator.state = "penetrated";
			return penetrator;
		case "feet":
			penetrator.position = "feet";
			penetrator.state = "footjob";
			return penetrator;
		case "footjob": // Duplicate of feet
			penetrator.position = "feet";
			penetrator.state = "footjob";
			return penetrator;
		case "clothed": // Huh? Asking Puri - For when you need to undress NPCs before using the part.
			penetrator.position = "feet";
			penetrator.state = "footjob";
			return penetrator;
		case "leftarm":
			penetrator.position = "leftarm";
			penetrator.state = "handjob";
			return penetrator;
		case "rightarm":
			penetrator.position = "rightarm";
			penetrator.state = "handjob";
			return penetrator;
		case "thighs":
			penetrator.position = "thighs";
			penetrator.state = "thighjob";
			return penetrator;
		case "cheeks":
			penetrator.position = "butt";
			penetrator.state = "buttjob";
			return penetrator;
		case "chest":
			penetrator.position = "chest";
			penetrator.state = "titjob";
			return penetrator;
		// case "leftDildoAnus":
		// case "rightDildoAnus":
		// case "leftStroker":
		// case "rightStroker":
		// case "strap-on":
		// case "mouthotheranus": (wtf is this?)
		// case "idle": (Pointless to account for this)
		// case "none": (No pp)
	}
	return null;
}
window.mapNpcToPenetratorOptions = mapNpcToPenetratorOptions;

Macro.add("mapnpctooptions", {
	handler() {
		mapNpcToOptions(V.index, T.modelOptions);
	},
});
