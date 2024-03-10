/**
 * @type {CanvasModelOptions}
 */
const combatCloseChest = {
	name: "combatCloseChest",
	width: 256,
	height: 256,
	frames: 4,
	generatedOptions() {
		console.log(this.name, "generatedOptions");
		return [];
	},
	defaultOptions() {
		console.log(this.name, "defaultOptions");
		return {};
	},
	preprocess() {
		console.log(this.name, "preprocess");
	},
	/** @type {Object<string, CanvasModelLayerClose>} */
	layers: {},
};
Renderer.CanvasModels.combatCloseChest = combatCloseChest;
