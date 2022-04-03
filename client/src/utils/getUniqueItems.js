const getUniqueItems = (arr, key) => {
	const arrs = Array.from(arr);
	const newArr = [];

	if (arrs && key) {
		arrs.forEach((item) => {
			if (key === "size" && item[key] !== undefined) {
				newArr.push(item[key].footSize);
			}

			if (item[key] !== undefined) {
				newArr.push(item[key]);
			}
		});
	}

	return [...new Set(newArr)];
};

export default getUniqueItems;
