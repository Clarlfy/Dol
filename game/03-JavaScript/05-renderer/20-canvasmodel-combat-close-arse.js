/**
 * @typedef {object} CanvasModelLayerClose
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
 * @property {function(CloseOptions): boolean} [showfn] (options)=>boolean Function generating `show` property. Should return boolean, do not use undefined/null/0/"" to hide layer, use of !! (double not) operator recommended.
 * @property {function(CloseOptions): string} [srcfn] (options)=>string.
 * @property {function(CloseOptions): number} [zfn] (options)=>number.
 * @property {function(CloseOptions): number} [alphafn] (options)=>number.
 * @property {function(CloseOptions): boolean} [desaturatefn] (options)=>boolean.
 * @property {function(CloseOptions): number} [brightnessfn] (options)=>number.
 * @property {function(CloseOptions): number} [contrastftn] (options)=>number.
 * @property {function(CloseOptions): (string|object)} [blendModefn] (options)=>(string|object).
 * @property {function(CloseOptions): string} [blendfn] (options)=>string.
 * @property {function(CloseOptions): string} [masksrcfn] (options)=>string.
 * @property {function(CloseOptions): string} [animationfn] (options)=>string.
 * @property {function(CloseOptions): number[]} [framesfn] (options)=>number[].
 * @property {function(CloseOptions): string[]} [filtersfn] (options)=>string[].
 * @property {function(CloseOptions): number} [dxfn] (options)=>number.
 * @property {function(CloseOptions): number} [dyfn] (options)=>number.
 * @property {function(CloseOptions): number} [widthfn] (options)=>number.
 * @property {function(CloseOptions): number} [heightfn] (options)=>number.
 */

/**
 * @type {CanvasModelOptions}
 */
const combatCloseArse = {
	name: "combatCloseArse",
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
Renderer.CanvasModels.combatCloseArse = combatCloseArse;
