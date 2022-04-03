import { useRef} from "react";
import styled from "styled-components";
import AdminContent from "../../../components/admin_components/AdminContent";
import AdminHeader from "../../../components/admin_components/AdminHeader";
import AdminMain from "../../../components/admin_components/AdminMain";
import AdminContentTable from "../../../components/admin_components/Admin_ContentTable";
import AdminSlider from "../../../components/admin_components/Admin_Slider";
import AdminTemplate from "../../../components/admin_components/Admin_Template";
import useGetHeight from "../../../hooks/useGetHeight";

const Dashboard = () => {
  const headerContainer = useRef(null);
  const { headerHeight } = useGetHeight(headerContainer);

	return (
		<AdminTemplate page='dashboard'>
			<AdminContent>
				<AdminHeader>
					<HeaderStyles ref={headerContainer}>
						<AdminSlider link='dashboard' />
					</HeaderStyles>
				</AdminHeader>
				<AdminMain  headerHeight={headerHeight}>
					<MainStyles>
						<AdminContentTable link="orders" content="orders" />
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
export default Dashboard;
