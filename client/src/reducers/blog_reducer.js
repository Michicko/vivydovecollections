import { GET_BLOGS_BEGINS, GET_BLOGS_SUCCESS } from "../Actions";

const BlogsReducer = (state, action) => {
	if (action.type === GET_BLOGS_BEGINS) {
		return { ...state, blogs_loading: true };
	}

	if (action.type === GET_BLOGS_SUCCESS) {
		return { ...state, blogs_loading: false, blogs: action.payload };
	}

	throw new Error(`No matching action ${action.type}`);
};

export default BlogsReducer;
