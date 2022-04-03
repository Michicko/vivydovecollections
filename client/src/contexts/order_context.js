import { createContext, useContext, useEffect, useReducer } from "react";
import { GET_ORDERS_SUCCESS, GET_ORDERS_BEGINS } from "../Actions";
import reducer from "../reducers/order_reducer";
import ordersData from "../utils/ordersData";

const initialState = {
	orders_loading: false,
	orders_error: false,
	single_order_loading: false,
	single_order_error: false,
	orders: [],
	single_order: {},
};

const OrdersContext = createContext();

export const OrdersProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		const getOrdersData = () => {
			dispatch({ type: GET_ORDERS_BEGINS });
			dispatch({ type: GET_ORDERS_SUCCESS, payload: ordersData });
		};

		getOrdersData();
	}, []);

	return (
		<OrdersContext.Provider value={{ ...state }}>
			{children}
		</OrdersContext.Provider>
	);
};

export const useOrdersContext = () => {
	return useContext(OrdersContext);
};
