const getUniqueValues = (arr) => {
	return ["all", ...new Set(arr)];
};

export default getUniqueValues;
