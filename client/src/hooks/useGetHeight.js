import { useEffect, useState } from "react";

const useGetHeight = (headerContainer) => {
	const [headerHeight, setHeaderHeight] = useState(0);

	useEffect(() => {
		const tempHeight = headerContainer.current.getBoundingClientRect().height;
		setHeaderHeight(tempHeight);
	}, [headerContainer]);

	return { headerHeight };
};

export default useGetHeight;
