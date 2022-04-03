import {
	createContext,
	useContext,
	useEffect,
	useReducer,
	useState,
} from "react";
import {
	AUTHENTICATE,
	DEAUTHENTICATE,
	GET_USERS_BEGINS,
	GET_USERS_SUCCESS,
	SET_LOGIN_DATA,
	SET_USER,
} from "../Actions";
import reducer from "../reducers/user_reducer";
import users from "../utils/users";

const initialState = {
	user_data: null,
  isAuthenticated: false,
	is_updating_user: false,
	get_users_loading: false,
	get_users_error: '',
	users: [],
	login_data: {
		email: "",
		password: "",
	},
};

const UserContext = createContext();

export const UserProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const setUser = (user) => {
		dispatch({ type: SET_USER, payload: user });
	};

	const set_login_form = (e) => {
		const name = e.target.name;
		const value = e.target.value;

		dispatch({ type: SET_LOGIN_DATA, payload: { name, value } });
	};

	const authenticate_user = () => {
		dispatch({ type: AUTHENTICATE });
	};

	const deauthenticate_user = () => {
		dispatch({ type: DEAUTHENTICATE });
	};

	const getUsers = () => {
		dispatch({ type: GET_USERS_BEGINS });
		dispatch({ type: GET_USERS_SUCCESS, payload: users });
	}

	return (
		<UserContext.Provider
			value={{
				...state,
				setUser,
				set_login_form,
				authenticate_user,
				deauthenticate_user,
				getUsers
			}}
		>
			{children}
		</UserContext.Provider>
	);
};

export const useUserContext = () => {
	return useContext(UserContext);
};
