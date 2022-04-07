import { createContext, useContext, useReducer } from "react";
import reducer from "../reducers/cart_reducer";
import { ADD_TO_CART, REMOVE_FROM_CART } from "../Actions";

const initialState = {
	cart: [],
	total_items: 0,
	total_amount: 0,
	shipping_fee: 0,
};

const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	// add to cart
	const add_to_cart = (product, amount, productOption) => {
		dispatch({
			type: ADD_TO_CART,
			payload: { product, amount, productOption },
		});
	};

	// remove from cart
	const remove_from_cart = (productOptionId) => {
		dispatch({ type: REMOVE_FROM_CART, payload: productOptionId });
	};

	return (
		<CartContext.Provider value={{ ...state, add_to_cart, remove_from_cart }}>
			{children}
		</CartContext.Provider>
	);
};

export const useCartContext = () => {
	return useContext(CartContext);
};
