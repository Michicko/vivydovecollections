const { LOAD_PRODUCTS, UPDATE_FILTER } = require("../Actions");

const FilterReducers = (state, action) => {
	if (action.type === LOAD_PRODUCTS) {
		let max_price = action.payload.map((p) => p.price);
		max_price = Math.max(...max_price);

		return {
			...state,
			all_products: [...action.payload],
			filtered_products: [...action.payload],
			filters: { ...state.filters, max_price, price: max_price },
		};
	}

	if (action.type === UPDATE_FILTER) {
		const { name, value } = action.payload;
		return { ...state, filters: { ...state.filters, [name]: value } };
	}

	throw new Error(`No matching action ${action.type}`);
};

export default FilterReducers;
