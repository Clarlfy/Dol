/**
 * @typedef {object} CloseOptions
 * @property {boolean} showChest
 * @property {boolean} showPenis
 * @property {boolean} showVagina
 * @property {boolean} showArse
 */

/**
 * @param {CloseOptions} options
 * @returns {CloseOptions}
 */
function getCloseOptions(options = {}) {
	options.showPenis = V.player.penisExist;
	options.showVagina = V.player.vaginaExist;
	options.showArse = true;

	return options;
}
window.getCloseOptions = getCloseOptions;
