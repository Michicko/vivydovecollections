import { createContext, useContext, useReducer, useEffect } from "react";
import reducer from "../reducers/cart_reducer";
import {
	ADD_TO_CART,
	REMOVE_FROM_CART,
	INCREASE_ITEM_AMOUNT,
	DECREASE_ITEM_AMOUNT,
} from "../Actions";

const getLocalStorageCart = () => {
	let cart = localStorage.getItem("cart");
	if (cart) {
		return JSON.parse(cart);
	} else {
		return [];
	}
};

const initialState = {
	cart: getLocalStorageCart(),
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
	const remove_from_cart = (id) => {
		dispatch({ type: REMOVE_FROM_CART, payload: id });
	};

	// increase amount
	const increase_item_amount = (id) => {
		dispatch({ type: INCREASE_ITEM_AMOUNT, payload: id });
	};

	// decrease amount
	const decrease_item_amount = (id) => {
		dispatch({ type: DECREASE_ITEM_AMOUNT, payload: id });
	};

	// persist to localstorage
	useEffect(() => {
		localStorage.setItem("cart", JSON.stringify(state.cart));
	}, [state.cart]);

	return (
		<CartContext.Provider
			value={{
				...state,
				add_to_cart,
				remove_from_cart,
				increase_item_amount,
				decrease_item_amount,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

export const useCartContext = () => {
	return useContext(CartContext);
};
