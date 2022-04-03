import { useRef } from "react";
import styled from "styled-components";
import AdminContent from "../../../components/admin_components/AdminContent";
import AdminHeader from "../../../components/admin_components/AdminHeader";
import AdminMain from "../../../components/admin_components/AdminMain";
import AdminContentTable from "../../../components/admin_components/Admin_ContentTable";
import AdminTemplate from "../../../components/admin_components/Admin_Template";
import HeaderTtitle from "../../../components/typography/HeaderTitle";
import CreateLink from "../../../components/admin_components/CreateLink";
import useGetHeight from "../../../hooks/useGetHeight";
import AdminSearchForm from "../../../components/admin_components/Form/AdminSearchForm";

const Blogs = () => {
	const headerContainer = useRef(null);
	const { headerHeight } = useGetHeight(headerContainer);

	return (
		<AdminTemplate page='blogs'>
			<AdminContent>
				<AdminHeader>
					<HeaderStyles ref={headerContainer}>
						<div className='header-box with-b'>
							<HeaderTtitle title='All Blogs' type='big' />
							<CreateLink link='create-blog' text='add blog' />
						</div>
						<div className='header-box-b'>
							<AdminSearchForm content='blogs' />
						</div>
					</HeaderStyles>
				</AdminHeader>
				<AdminMain headerHeight={headerHeight}>
					<MainStyles>
						<AdminContentTable link='blogs' content='blogs' />
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
	padding-bottom: 1rem;
`;
export default Blogs;
