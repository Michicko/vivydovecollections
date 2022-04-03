import {
	SET_PANEL_CONTENT,
	SET_PANEL_POSITION,
	OPEN_PANEL_MENU,
	CLOSE_PANEL_MENU,
	SET_MOBILE,
	SET_DESKTOP,
	OPEN_MOBILE_FILTERS,
	CLOSE_MOBILE_FILTERS,
	ACTIVATE_ALERT,
	DEACTIVATE_ALERT,
	SHOW_PASSWORD,
	HIDE_PASSWORD,
} from "../Actions";

const PageReducer = (state, action) => {
	if (action.type === OPEN_PANEL_MENU) {
		return { ...state, isPanelMenuOpened: true };
	}

	if (action.type === CLOSE_PANEL_MENU) {
		return { ...state, isPanelMenuOpened: false };
	}

	// if (action.type === SET_PANEL_PRODUCT) {
	//   const panelProduct = action.payload;
	//   return {...state, panelProduct}
	// }

	if (action.type === SET_PANEL_CONTENT) {
		const panelContent = action.payload;
		return { ...state, panelContent };
	}

	if (action.type === SET_PANEL_POSITION) {
		const panelPosition = action.payload;
		return { ...state, panelPosition };
	}

	if (action.type === SET_MOBILE) {
		return { ...state, isMobile: true };
	}

	if (action.type === SET_DESKTOP) {
		return { ...state, isMobile: false };
	}

	if (action.type === OPEN_MOBILE_FILTERS) {
		return { ...state, isMobileFiltersOpen: true };
	}
	if (action.type === CLOSE_MOBILE_FILTERS) {
		return { ...state, isMobileFiltersOpen: false };
	}

	if (action.type === ACTIVATE_ALERT) {
		const { type, message } = action.payload;
		return {
			...state,
			isAlertActive: true,
			alert: { ...state.alert, type, message },
		};
	}

	if (action.type === DEACTIVATE_ALERT) {
		const type = "";
		const message = "";

		return {
			...state,
			isAlertActive: false,
			alert: { ...state.alert, type, message },
		};
	}

	if (action.type === SHOW_PASSWORD) {
		return { ...state, password_visible: true };
	}

	if (action.type === HIDE_PASSWORD) {
		return { ...state, password_visible: false };
	}

	throw new Error(`No matching action ${action.type}`);
};

export default PageReducer;
