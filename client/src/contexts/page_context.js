import { createContext, useContext, useEffect, useReducer } from "react";
import {
	OPEN_PANEL_MENU,
	CLOSE_PANEL_MENU,
	SET_PANEL_POSITION,
	SET_PANEL_CONTENT,
	SET_MOBILE,
	SET_DESKTOP,
	OPEN_MOBILE_FILTERS,
	CLOSE_MOBILE_FILTERS,
	ACTIVATE_ALERT,
	DEACTIVATE_ALERT,
	SHOW_PASSWORD,
	HIDE_PASSWORD,
} from "../Actions";
import reducer from "../reducers/page_reducer";

const initialState = {
	isMobile: false,
	isSidebarOpen: false,
	isAdminSidebarOpen: false,
	isPanelMenuOpened: false,
	isMobileFiltersOpen: false,
	isAlertActive: false,
	alert: {
		type: "",
		message: "",
	},
	password_visible: false,
	panelPosition: {},
	panelContent: {},
	navHeight: 70,
};

const PageContext = createContext();

export const PageProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	// open admin pages mini panel for edit, delete...
	const openPanelMenu = (panelContent, panelPosition) => {
		dispatch({ type: SET_PANEL_POSITION, payload: panelPosition });
		dispatch({ type: SET_PANEL_CONTENT, payload: panelContent });
		dispatch({ type: OPEN_PANEL_MENU });
	};

	// close admin pages mini panel for edit, delete...
	const closePanelMenu = () => {
		dispatch({ type: CLOSE_PANEL_MENU });
	};

	// set mobile and desktop
	const setMobile = () => {
		const windowWidth = window.innerWidth || document.clientWidth;

		if (windowWidth <= 760 && !state.isMobile) {
			dispatch({ type: SET_MOBILE });
		} else if (windowWidth > 760 && state.isMobile) {
			dispatch({ type: SET_DESKTOP });
		} else if (windowWidth > 960) {
			dispatch({ type: CLOSE_MOBILE_FILTERS });
		}
	};

	// open mobile filters for products page
	const openMobileFilters = () => {
		dispatch({ type: OPEN_MOBILE_FILTERS });
	};

	// close mobile filters for products page
	const closeMobileFilters = () => {
		dispatch({ type: CLOSE_MOBILE_FILTERS });
	};

	const openSidebar = () => {};

	const closeSidebar = () => {};

	// disable create product form button to prevent multiple submission
	const disableButtton = (btn) => {
		btn.disabled = true;
		btn.classList.add("disabled");
	};

	// activate create product form button
	const activateButton = (btn) => {
		btn.disabled = false;
		btn.classList.remove("disabled");
	};

	// show or hide password
	const togglePasswordInput = (inputRef) => {
		if (inputRef.current.type === "password") {
			inputRef.current.type = "text";
			dispatch({ type: SHOW_PASSWORD });
		} else {
			inputRef.current.type = "password";
			dispatch({ type: HIDE_PASSWORD });
		}
	};

	// alerts and errors controller
	const activateAlert = ({ type, message }) => {
		dispatch({ type: ACTIVATE_ALERT, payload: { type, message } });

		setTimeout(() => {
			dispatch({ type: DEACTIVATE_ALERT });
		}, 4000);
	};

	useEffect(() => {
		window.addEventListener("resize", setMobile);

		return () => {
			window.removeEventListener("resize", setMobile);
		};
	});

	return (
		<PageContext.Provider
			value={{
				...state,
				openPanelMenu,
				closePanelMenu,
				openMobileFilters,
				closeMobileFilters,
				disableButtton,
				activateButton,
				activateAlert,
				togglePasswordInput,
			}}
		>
			{children}
		</PageContext.Provider>
	);
};

export const usePageContext = () => {
	return useContext(PageContext);
};
