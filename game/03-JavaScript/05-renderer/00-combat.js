class CombatSystem {
	isActive() {
		return (
			this.isVaginaActive() ||
			this.isAnusActive() ||
			this.isMouthActive() ||
			this.isPenisActive() ||
			this.isArmActive() ||
			this.isChestActive() ||
			this.isFeetActive()
		);
	}

	isVaginaActive() {
		const activeState = ["penetrated", "doublepenetrated", "othermouth", "tentacleentrance", "tentacleimminent", "tentacle", "tentacledeep"].includes(
			V.vaginastate
		);
		const activeUse = ["tentaclerub"].includes(V.vaginause);
		return activeState || activeUse;
	}

	isAnusActive() {
		const activeState = [
			"penetrated",
			"doublepenetrated",
			"cheeks",
			"othermouth",
			"tentacleentrance",
			"tentacleimminent",
			"tentacle",
			"tentacledeep",
		].includes(V.anusstate);
		const activeUse = ["tentaclerub"].includes(V.anususe);
		return activeState || activeUse;
	}

	isMouthActive() {
		const activeState = ["penetrated", "kiss", "tentacleentrance", "tentacleimminent", "tentacle", "tentacledeep"].includes(V.mouthstate);
		return activeState;
	}

	isPenisActive() {
		const activeState = ["penetrated", "otheranus", "othermouth", "tentacleentrance", "tentacleimminent", "tentacle", "tentacledeep"].includes(
			V.penisstate
		);
		const activeUse = ["tentaclerub"].includes(V.penisuse);
		return activeState || activeUse;
	}

	isArmActive() {
		return ["penis"].includes(V.rightarm) || ["penis"].includes(V.leftarm);
	}

	isChestActive() {
		const activeUse = ["penis"].includes(V.chestuse);
		return activeUse;
	}

	isFeetActive() {
		const activeUse = ["penis"].includes(V.feetuse);
		return activeUse;
	}
}
const combat = new CombatSystem();
window.combat = combat;
