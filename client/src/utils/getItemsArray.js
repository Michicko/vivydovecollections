function getItemsArray(arr, key) {
	const newArr = [];
	const arrs = Array.from(arr);

	if (arrs && key) {
		arrs.forEach((items) => {
			items.productOptions.forEach((item) => {
				if (item[key] !== undefined) {
					newArr.push(item[key]);
				}
			});
		});
	}
	return newArr;
}

export default getItemsArray;



