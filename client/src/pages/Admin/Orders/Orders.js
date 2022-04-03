import { useRef } from "react";
import styled from "styled-components";
import AdminContent from "../../../components/admin_components/AdminContent";
import AdminHeader from "../../../components/admin_components/AdminHeader";
import AdminMain from "../../../components/admin_components/AdminMain";
import AdminContentTable from "../../../components/admin_components/Admin_ContentTable";
import AdminSlider from "../../../components/admin_components/Admin_Slider";
import AdminTemplate from "../../../components/admin_components/Admin_Template";
import HeaderTtitle from "../../../components/typography/HeaderTitle";
import AdminSearchForm from "../../../components/admin_components/Form/AdminSearchForm";
import useGetHeight from "../../../hooks/useGetHeight";

const Orders = () => {
	const headerContainer = useRef(null);
	const { headerHeight } = useGetHeight(headerContainer);

	return (
		<AdminTemplate page='orders'>
			<AdminContent>
				<AdminHeader>
					<HeaderStyles ref={headerContainer}>
						<AdminSlider link='orders' />
						<div className='header-box'>
							<HeaderTtitle title='All Orders' type='big' />
							<AdminSearchForm content='orders' />
						</div>
					</HeaderStyles>
				</AdminHeader>
				<AdminMain headerHeight={headerHeight}>
					<MainStyles>
						<AdminContentTable link='orders' content='orders' />
					</MainStyles>
				</AdminMain>
			</AdminContent>
		</AdminTemplate>
	);
};

const HeaderStyles = styled.div`
	height: 100%;
	width: 100%;
`;

const MainStyles = styled.div`
	height: 100%;
	width: 100%;
`;
export default Orders;
