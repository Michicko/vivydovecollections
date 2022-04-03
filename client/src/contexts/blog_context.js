import { createContext, useContext, useEffect, useReducer } from "react";
import { GET_BLOGS_BEGINS, GET_BLOGS_SUCCESS } from "../Actions";
import reducer from "../reducers/blog_reducer";
import blogs from "../utils/blogData";

const initialState = {
	blogs_loading: false,
	blogs_error: false,
	single_blog_error: false,
	single_blog_loading: false,
	blogs: [],
	blog: {},
};

const BlogsContext = createContext();

export const BlogsProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		const getBlogsData = () => {
			dispatch({ type: GET_BLOGS_BEGINS });
			dispatch({ type: GET_BLOGS_SUCCESS, payload: blogs });
		};

		getBlogsData();
	}, []);

	return (
		<BlogsContext.Provider value={{ ...state }}>
			{children}
		</BlogsContext.Provider>
	);
};

export const useBlogsContext = () => {
	return useContext(BlogsContext);
};
