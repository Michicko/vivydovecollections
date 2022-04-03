import { useEffect, useRef } from "react";
import styled from "styled-components";
import AdminContent from "../../../components/admin_components/AdminContent";
import AdminHeader from "../../../components/admin_components/AdminHeader";
import AdminMain from "../../../components/admin_components/AdminMain";
import AdminContentTable from "../../../components/admin_components/Admin_ContentTable";
import AdminTemplate from "../../../components/admin_components/Admin_Template";
import HeaderTtitle from "../../../components/typography/HeaderTitle";
import AdminSearchForm from "../../../components/admin_components/Form/AdminSearchForm";
import useGetHeight from "../../../hooks/useGetHeight";
import { useUserContext } from "../../../contexts/user_context";

const Orders = () => {
	const headerContainer = useRef(null);
	const { headerHeight } = useGetHeight(headerContainer);
  const { getUsers } = useUserContext();

  useEffect(() => {
		getUsers();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<AdminTemplate page='customers'>
			<AdminContent>
				<AdminHeader>
					<HeaderStyles ref={headerContainer}>
						<div className='header-box'>
							<HeaderTtitle title='All Customers' type='big' />
							<AdminSearchForm content='customers' />
						</div>
					</HeaderStyles>
				</AdminHeader>
				<AdminMain headerHeight={headerHeight}>
					<MainStyles>
						<AdminContentTable link='customers' content='customers' />
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
