Config.history.controls = false;

Config.history.maxStates = 1;

State.initPRNG();

window.versionUpdateCheck = true;

Config.saves.onLoad = function (save) {
	window.versionUpdateCheck = true;
}

/*LinkNumberify and images will enable or disable the feature completely*/
/*debug will enable or disable the feature only for new games*/
window.StartConfig = {
	"debug": 1,
	"enableImages": true,
	"enableLinkNumberify": true,
	"version": "0.2.5.3",
}

config.saves.autosave = "autosave";

Config.saves.isAllowed = function () {
	if (tags().contains("nosave")) {
		return false;
	}
	return true;
};

prehistory['version-update'] = function () {
	if (Story.has('VersionUpdate')) {
		try {
			Wikifier.wikifyEval(Story.get('VersionUpdate').text);
		}
		catch (ex) {
			Alert.error('VersionUpdate', ex.message);
		}
	}
};

importStyles("style.css")
.then(function () {
	console.log("External Style Sheet Active")
})
.catch(function (err) {
	console.log("External Style Sheet Missing");
});