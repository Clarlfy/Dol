!(function initTheme() {
	/** @typedef {"dark" | "light" | "system-default"} ColorPreference */

	const STORAGE_KEY = "dolTheme";

	/** @type {MediaQueryList} */
	let isDarkPreferredQuery;

	/**
	 *  @returns {ColorPreference}
	 */
	function getPreference() {
		return (localStorage.getItem(STORAGE_KEY) || "system-default");
	}

	/**
	 * @param {ColorPreference} preference
	 */
	function setPreference(preference) {
		localStorage.setItem(STORAGE_KEY, preference);
		reflectPreference(preference);
	}

	/**
	 * Applies theme by setting `html` element data attribute
	 * @param {"dark" | "light"} theme
	 */
	function setTheme(theme) {
		document.firstElementChild.setAttribute("data-theme", theme);
	}

	function onThemeChange({ matches: isDark }) {
		setTheme(isDark ? "dark" : "light");
	}

	/**
	 * Applies color preference as theme
	 * @param {ColorPreference} preference
	 */
	function reflectPreference(preference) {
		let theme;

		if (preference === "system-default") {
			if (isDarkPreferredQuery) {
				isDarkPreferredQuery.removeEventListener("change", onThemeChange);
			}

			isDarkPreferredQuery = window.matchMedia("(prefers-color-scheme: dark)");

			theme = isDarkPreferredQuery.matches ? "dark" : "light";
			// Watch for color preference changes
			isDarkPreferredQuery.addEventListener("change", onThemeChange);
		} else {
			theme = preference;
		}

		setTheme(theme);
	}

	// Set early so no page flashes
	reflectPreference(getPreference());

	window.Theme = {
		initControl() {
			$(document).one("overlay-load", () => {
				$(`input[name=theme][value="${getPreference()}"]`).prop(
					"checked",
					true
				);

				$("input[name=theme]").on("change", (event) => {
					setPreference(event.currentTarget.value);
				});
			});
		},
	};
})();
