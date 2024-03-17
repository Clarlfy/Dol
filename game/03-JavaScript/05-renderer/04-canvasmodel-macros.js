Macro.add("newcanvasstart", {
	handler() {
		const width = this.args[0];
		const height = this.args[1];
		T.canvas = Renderer.createCanvas(width, height);
		T.layers = [];
	},
});

Macro.add("newcanvasselect", {
	handler() {
		const name = this.args[0];
		const slot = this.args[1];
		const model = Renderer.locateModel(name, slot);
		T.model = model;
		T.options = T.options || {};
		T.options[slot] = model.defaultOptions();
	},
});

Macro.add("newcanvascompile", {
	handler() {
		T.options = T.options || {};
		const slot = this.args[0];
		const options = T.options[slot];
		const layers = T.layers;
		// Need to ask Aim about the model caching, when a layer is "shown", the layer is always "cached", regardless of if it's hidden once more.
		delete Renderer.CanvasModelCaches[slot];
		if (layers instanceof Array) {
			layers.push(...T.model.compile(options));
		}
	},
});

Macro.add("newcanvasanimate", {
	handler() {
		Renderer.animateLayers(T.canvas, T.layers, Renderer.defaultListener, true);
		T.canvas.canvas.className = this.args[0];
		this.output.append(T.canvas.canvas);
	},
});

Renderer.CanvasModels.test1 = {
	name: "test1",
	width: 128,
	height: 128,
	frames: 2,
	generatedOptions() {
		console.log("Test1 generating options.");
	},
	defaultOptions() {
		console.log("Test1 generating defaults.");
	},
	preprocess(options) {
		console.log("Test1 preprocessing.");
	},
	layers: {
		base: {
			srcfn(options) {
				return "img/blueblock.png";
			},
			show: true,
			filters: ["body"],
			z: 1,
			animation: "idle",
		},
		top: {
			srcfn(options) {
				return "img/greenblock.png";
			},
			show: true,
			filters: ["body"],
			z: 5,
			animation: "idle",
		},
	},
};

Renderer.CanvasModels.test2 = {
	name: "test2",
	width: 128,
	height: 128,
	frames: 2,
	generatedOptions() {
		console.log("Test2 generating options.");
	},
	defaultOptions() {
		console.log("Test2 generating defaults.");
	},
	preprocess(options) {
		console.log("Test2 preprocessing.");
	},
	layers: {
		base: {
			srcfn(options) {
				return "img/redblock.png";
			},
			show: true,
			filters: ["body"],
			z: 4,
			animation: "idle",
		},
	},
};
