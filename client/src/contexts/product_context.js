import {
	createContext,
	useReducer,
	useEffect,
	useContext,
	useCallback,
} from "react";
import {
	GET_PRODUCTS_BEGINS,
	GET_PRODUCTS_SUCCESS,
	GET_SINGLE_PRODUCT_BEGINS,
	GET_SINGLE_PRODUCT_ERROR,
	GET_SINGLE_PRODUCT_SUCCESS,
	SET_SELECTED_ITEM,
	CLEAR_SELECTED_ITEM,
	SET_PRODUCT_FORM_DATA,
	ADD_NEW_PRODUCT,
	CLEAR_FORM_DATA,
	SET_PRODUCT_OPTION_FORM_DATA,
	GET_PRODUCTS_ERROR,
	SET_EDITING_PRODUCT,
	SET_EDITING_PRODUCT_OPTION,
	UNSET_EDITING_PRODUCT,
	UNSET_EDITING_PRODUCT_OPTION,
	FETCH_PRODUCT_OPTIONS,
} from "../Actions";
import useAxiosFetch from "../hooks/useAxiosFetch";
import reducer from "../reducers/product_reducer";
import axios from "axios";


const initialState = {
	products_loading: false,
	products_error: "",
	single_product_loading: false,
	single_product_error: "",
	products: [],
	product: {},
	new_product: {},
	isEditingProduct: false,
	isEditingProductOption: false,
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
	productOption_form_data: {
		color: "",
		mainMaterial: "",
		quantity: "",
		size: {
			heelHeight: "",
			footSize: "",
		},
	},
	similar_products: [],
	product_options: [],
	product_images: [],
	selected_size: "",
	selected_color: "",
	selected_index: null,
	featured_products: [],
	instagramPics: [],
	isCreatingProductOption: false,
};

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	// Getting products
	const {
		loading,
		error,
		data: products,
	} = useAxiosFetch("http://127.0.0.1:8000/api/v1/products");

	const fetchSingleProduct = useCallback(async (id) => {
		try {
			dispatch({ type: GET_SINGLE_PRODUCT_BEGINS });
			const baseUrl = `http://127.0.0.1:8000/api/v1/products/${id}`;
			const response = await axios.get(baseUrl);
			const product = response.data.data.data;
			dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: product });
		} catch (error) {
			dispatch({ type: GET_SINGLE_PRODUCT_ERROR, payload: error.message });
		}
	}, []);

	const setSelectedItem = (e) => {
		const name = e.target.name;
		let value = e.target.value;
		const index = Number(e.target.getAttribute("data-index"));

		if (e.target.name === "color") {
			value = e.target.getAttribute("data-color");
		}

		if (e.target.name === "size") {
			value = Number(e.target.getAttribute("data-size"));
		}

		dispatch({ type: SET_SELECTED_ITEM, payload: { name, value, index } });
	};

	const clear_selected_item = () => {
		dispatch({ type: CLEAR_SELECTED_ITEM });
}

	const set_product_form_data = (e) => {
		const name = e.target.name;
		let value = e.target.value;

		if (name === "price") {
			value = Number(value);
		}

		if (name === "image") {
			value = e.target.files[0];
		}

		if (name === "otherImages") {
			value = Array.from(e.target.files);
		}

		dispatch({ type: SET_PRODUCT_FORM_DATA, payload: { name, value } });
	};

	const setEditProduct = useCallback((product) => {
		for (const [key, value] of Object.entries(product)) {
			dispatch({ type: SET_PRODUCT_FORM_DATA, payload: { name: key, value } });
		}
	}, []);

	const editing = useCallback((option) => {
		if (option === "product") {
			dispatch({ type: SET_EDITING_PRODUCT });
		}

		if (option === "product_option") {
			dispatch({ type: SET_EDITING_PRODUCT_OPTION });
		}
	}, []);

	const creating = useCallback((option) => {
		if (option === "product") {
			dispatch({ type: UNSET_EDITING_PRODUCT });
		}

		if (option === "product_option") {
			dispatch({ type: UNSET_EDITING_PRODUCT_OPTION });
		}
	}, []);

	const set_productOption_form_data = (e) => {
		const name = e.target.name;
		let value = e.target.value;

		if (name === "footSize") {
			value = Number(value);
		}

		dispatch({
			type: SET_PRODUCT_OPTION_FORM_DATA,
			payload: { name, value },
		});
	};

	const setEditProductOption = useCallback((productOption) => {
		const filters = ["color", "size", "mainMaterial", "quantity"];
		for (const [key, value] of Object.entries(productOption)) {
			if (filters.includes(key)) {
				console.log(`${key}: ${value}`);

				dispatch({
					type: SET_PRODUCT_OPTION_FORM_DATA,
					payload: { name: key, value },
				});
			}
		}
	}, []);

	const clear_form_data = () => {
		dispatch({ type: CLEAR_FORM_DATA });
	};

	// add new product to list of products
	const add_new_product = (newProduct) => {
		dispatch({ type: ADD_NEW_PRODUCT, payload: newProduct });
	};

	useEffect(() => {
		function getProductsData() {
			if (loading) {
				dispatch({ type: GET_PRODUCTS_BEGINS });
			} else if (products) {
				dispatch({ type: GET_PRODUCTS_SUCCESS, payload: products });
			} else if (error) {
				dispatch({ type: GET_PRODUCTS_ERROR, payload: error });
			}
		}

		getProductsData();
	}, [loading, error, products]);

	return (
		<ProductsContext.Provider
			value={{
				...state,
				fetchSingleProduct,
				setSelectedItem,
				set_product_form_data,
				add_new_product,
				set_productOption_form_data,
				clear_form_data,
				setEditProduct,
				editing,
				creating,
				setEditProductOption,
				clear_selected_item,
			}}
		>
			{children}
		</ProductsContext.Provider>
	);
};

export const useProductsContext = () => {
	return useContext(ProductsContext);
};
