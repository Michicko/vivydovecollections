import {
	AUTHENTICATE,
	DEAUTHENTICATE,
	GET_USERS_BEGINS,
	GET_USERS_SUCCESS,
	SET_LOGIN_DATA,
	SET_USER,
} from "../Actions";

const UserReducer = (state, action) => {
	if (action.type === SET_USER) {
		const user_data = action.payload;
		return { ...state, user_data };
	}

	if (action.type === SET_LOGIN_DATA) {
		const { name, value } = action.payload;
		return { ...state, login_data: { ...state.login_data, [name]: value } };
	}

	if (action.type === AUTHENTICATE) {
		return { ...state, isAuthenticated: true };
	}

	if (action.type === DEAUTHENTICATE) {
		return { ...state, isAuthenticated: false };
	}

	if (action.type === GET_USERS_BEGINS) {
		return { ...state, get_user_loading: true };
	}
	
	if (action.type === GET_USERS_SUCCESS) {
		const users = action.payload.filter((user) => user.role !== 'admin');
		return { ...state, get_user_loading: false, users };
	}

	throw new Error(`No Matching ${action.type} action type`);
};

export default UserReducer;
