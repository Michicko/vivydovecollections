const {
	GET_PRODUCTS_BEGINS,
	GET_PRODUCTS_SUCCESS,
	GET_PRODUCTS_ERROR,
	GET_SINGLE_PRODUCT_BEGINS,
	GET_SINGLE_PRODUCT_SUCCESS,
	GET_SINGLE_PRODUCT_ERROR,
	SET_SELECTED_ITEM,
	SET_PRODUCT_FORM_DATA,
	ADD_NEW_PRODUCT,
	CLEAR_FORM_DATA,
	SET_PRODUCT_OPTION_FORM_DATA,
	SET_EDITING_PRODUCT,
	SET_EDITING_PRODUCT_OPTION,
	UNSET_EDITING_PRODUCT,
	FETCH_PRODUCT_OPTIONS,
	UNSET_EDITING_PRODUCT_OPTION,
} = require("../Actions");

const ProductsReducer = (state, action) => {
	if (action.type === GET_PRODUCTS_BEGINS) {
		return { ...state, products_loading: true };
	}

	if (action.type === GET_PRODUCTS_SUCCESS) {
		const featured_products = action.payload.filter((prod) => prod.featured);
		return {
			...state,
			products_loading: false,
			products: action.payload,
			featured_products,
		};
	}

	if (action.type === GET_PRODUCTS_ERROR) {
		return {
			...state,
			products_loading: false,
			products_error: action.payload,
		};
	}

	if (action.type === GET_SINGLE_PRODUCT_BEGINS) {
		return { ...state, single_product_loading: true };
	}

	if (action.type === GET_SINGLE_PRODUCT_SUCCESS) {
		// const product = action.payload;
		const product = action.payload;
		const similar_products = state.products.filter(
			(prod) => 
				prod.category === product.category && prod.slug !== product.slug)
			
		const product_options = product.productOptions;
		const product_images = [
			product.image.url,
			...product.otherImages.map((img) => img.url),
		];

		return {
			...state,
			single_product_loading: false,
			product,
			product_options,
			product_images,
			similar_products,
		};
	}

	if (action.type === GET_SINGLE_PRODUCT_ERROR) {
		const single_product_error = action.payload;
		return { ...state, single_product_loading: false, single_product_error };
	}

	if (action.type === SET_SELECTED_ITEM) {
		const { name, value, index } = action.payload;
		const product_options = state.product_options;
		let selected_color;
		let selected_size;

		if (name === "color") {
			selected_color = value;
			const tempProduct = product_options.find(
				(prod, i) => prod.color === value && i === index
			);
			selected_size = tempProduct.size.footSize;
		}

		if (name === "size") {
			selected_size = value;
			const tempProduct = product_options.find(
				(prod, i) => prod.size.footSize === value && i === index
			);
			selected_color = tempProduct.color;
		}

		return { ...state, selected_size, selected_color };
	}

	if (action.type === SET_PRODUCT_FORM_DATA) {
		const { name, value } = action.payload;

		return {
			...state,
			product_form_data: { ...state.product_form_data, [name]: value },
		};
	}

	if (action.type === SET_PRODUCT_OPTION_FORM_DATA) {
		const { name, value } = action.payload;

		return {
			...state,
			productOption_form_data: {
				...state.productOption_form_data,
				[name]: value,
			},
		};
	}

	if (action.type === ADD_NEW_PRODUCT) {
		const new_product = action.payload;
		const tempProducts = [...state.products, new_product];
		return { ...state, products: tempProducts };
	}

	if (action.type === CLEAR_FORM_DATA) {
		return {
			...state,
			product_form_data: {
				name: "",
				category: "",
				brand: "",
				price: "",
				discount: "",
				status: "new",
				image: null,
				otherImages: null,
			},
		};
	}

	if (action.type === SET_EDITING_PRODUCT) {
		return {...state, isEditingProduct: true}
	}

	if (action.type === SET_EDITING_PRODUCT_OPTION) {
		return { ...state, isEditingProductOption: true };
	}

	if (action.type === UNSET_EDITING_PRODUCT) {
		return {
			...state,
			isEditingProduct: false,
			product_form_data: {
				name: "",
				category: "",
				brand: "",
				price: "",
				discount: "",
				status: "new",
				image: null,
				otherImages: null,
			},
		};
	}

	if (action.type === UNSET_EDITING_PRODUCT_OPTION) {
		return {
			...state,
			isEditingProductOption: false,
			productOption_form_data: {
				color: "",
				mainMaterial: "",
				quantity: "",
				size: {
					heelHeight: "",
					footSize: "",
				},
			},
		};
	}

	if (action.type === FETCH_PRODUCT_OPTIONS) {
		return{...state, product_options:action.payload}
	}

	throw new Error(`No Matching ${action.type} action type`);
};

module.exports = ProductsReducer;
