import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { usePageContext } from "../../contexts/page_context";

const AdminMain = ({ children, headerHeight }) => {
	const { navHeight } = usePageContext();
	const [mainHeight, setMainHeight] = useState(null);

	useEffect(() => {
		const getHeight = () => {
			const windowHeight = window.screen.height;
			const tempMainHeight = windowHeight - (headerHeight + navHeight);
			setMainHeight(tempMainHeight);
		};

		getHeight();
	}, [navHeight, headerHeight]);

	const styles = {
		height: `${mainHeight}px`
	}
	return (
		<MainWrapper style={styles}>
			{children}
		</MainWrapper>
	);
};

const MainWrapper = styled.main`
	width: 100%;
	background: var(--white-color);
	border-radius: 5px;
	position: relative;
`;

export default AdminMain;
