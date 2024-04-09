/* eslint-disable no-undef */
Weather.Sky.Layer = class Layer {
	constructor(name, blur, zIndex = 0) {
		this.name = name;
		this.blur = blur;
		this.zIndex = zIndex;
		this.effects = [];
		this.loadPromises = [];
		this.loading = false;
	}

	addEffect(effectName, params, bindings, condition, compositeOperation) {
		const effectConfig = WeatherEffects.effects.get(effectName);
		if (!effectConfig) {
			const errorPromise = Promise.reject(new Error(`Could not add effect '${effectName}' to layer ${this.name}. That effect does not exist.`));
			this.loadPromises.push(errorPromise);
			return errorPromise;
		}

		// Set index for a consistent order - since it loads asyncronously
		const currentIndex = (this.effectIndex = (this.effectIndex ?? 0) + 1);
		const effect = new Weather.Sky.Effect(effectConfig, condition, compositeOperation, params);

		const loadPromise = effect.loadImages().then(() => {
			if (bindings) {
				for (const [prop, getter] of Object.entries(bindings)) {
					effect.bind(getter, prop);
				}
			}
			this.effects[currentIndex - 1] = effect;
		});
		this.loadPromises.push(loadPromise);
		return loadPromise;
	}

	async init() {
		this.loading = true;
		this.canvas = new Weather.Sky.Canvas();

		// Sequentially initialize each effect
		for (const effect of this.effects) {
			await effect.init();
		}
	}

	setBlur() {
		if (!this.blur) {
			return "none";
		}

		let blurValue = Weather.Sky.blur * setup.SkySettings.blur.fogMaxBlurValue;
		if (typeof this.blur === "number" && this.blur < blurValue) {
			blurValue = this.blur;
		} else if (typeof this.blur?.factor === "function") {
			const normalizedFactor = normalise(this.blur.factor(), 1, setup.SkySettings.blur.minFactorToBlur);
			const interpolatedValue = lerp(normalizedFactor, 0, this.blur.max || 0);
			blurValue = Math.max(blurValue, interpolatedValue);
		}

		return blurValue > 0 ? `blur(${blurValue}px)` : "none";
	}

	drawLayer(canvas) {
		canvas.drawImage(this.canvas.element);
	}

	async drawEffects(canvas) {
		const errors = [];
		if (this.effects.length === 0) {
			errors.push(new Error(`Could not draw layer '${this.name}'. It contains no effects.`));
		}
		const initPromises = this.effects.map(effect => effect.initPromise);
		await Promise.all(initPromises);
		this.canvas.clear();
		this.canvas.ctx.filter = this.setBlur();
		for (const effect of this.effects) {
			try {
				effect.draw(canvas, this.canvas);
				this.canvas.ctx.globalAlpha = effect.alpha;
				this.canvas.ctx.globalCompositeOperation = effect.compositeOperation;
				this.canvas.drawImage(effect.canvas.element);
			} catch (e) {
				console.error(`Error drawing effect in layer '${this.name}':`, e);
				errors.push(e);
			}
		}
		this.loading = false;
		return errors;
	}
};
