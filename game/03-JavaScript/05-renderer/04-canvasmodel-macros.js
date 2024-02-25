Macro.add("modelselect", {
	handler() {
		T.modelclass = Renderer.locateModel(this.args[0], this.args[1]);
		T.modeloptions = T.modelclass.defaultOptions();
		T.modelclass.reset();
	},
});

Macro.add("animate", {
	handler() {
		const canvas = T.modelclass.canvas || T.modelclass.createCanvas();
		T.modelclass.animate(canvas, T.modeloptions, Renderer.defaultListener);
		if (typeof this.args[0] === "string" && this.args[0] != null) canvas.canvas.className = this.args[0];
		this.output.append(canvas.canvas);
	},
});
