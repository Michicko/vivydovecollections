import { createContext, useContext, useEffect, useReducer } from "react";
import { LOAD_PRODUCTS, UPDATE_FILTER } from "../Actions";
import reducer from "../reducers/filter_reducer";
import { useProductsContext } from "./product_context";

const initialState = {
	filtered_products: [],
	all_products: [],
	filters: {
		text: "",
		category: "all",
		brand: "all",
		color: "all",
		mainMaterial: "all",
		min_price: 0,
		max_price: 0,
		price: 0,
	},
};

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
	const { products } = useProductsContext();
	const [state, dispatch] = useReducer(reducer, initialState);

	const updateFilters = (e) => {
		let name = e.target.name;
		let value = e.target.value;

		if (name === "price") {
			value = Number(value);
		} else if (name === "category") {
			value = e.target.textContent;
		} else if (name === "mainMaterial") {
			value = e.target.textContent;
		} else if (name === "brand") {
			value = e.target.textContent;
		} else if (name === "color") {
			value = e.target.getAttribute("data-color");
		}

		dispatch({ type: UPDATE_FILTER, payload: { name, value } });
	};

	const clearFilters = () => {};

	useEffect(() => {
		dispatch({ type: LOAD_PRODUCTS, payload: products });
	}, [products]);

	useEffect(() => {
		// sort products
		// filter products
	}, [products, state.filters]);

	return (
		<FilterContext.Provider value={{ ...state, updateFilters, clearFilters }}>
			{children}
		</FilterContext.Provider>
	);
};

export const useFilterContext = () => {
	return useContext(FilterContext);
};
