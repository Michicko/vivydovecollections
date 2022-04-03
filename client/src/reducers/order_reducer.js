import { GET_ORDERS_BEGINS, GET_ORDERS_SUCCESS } from "../Actions";

const OrdersReducers = (state, action) => {
	if (action.type === GET_ORDERS_BEGINS) {
		return { ...state, orders_loading: true };
	}

	if (action.type === GET_ORDERS_SUCCESS) {
		const orders = action.payload;
		return { ...state, orders_loading: false, orders };
	}

	throw new Error(`No matching action ${action.type}`);
};

export default OrdersReducers;
