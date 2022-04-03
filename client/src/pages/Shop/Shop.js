import styled from "styled-components";
import FiltersContainer from "../../components/Filters/FiltersContainer";
import MainContainer from "../../components/user_components/Shop/MainContainer";


import UserTemplate from "../../components/user_components/User_Template";

const Shop = () => {

	return (
		<UserTemplate page='shop'>
			<Styles>
				<FiltersContainer />
				<MainContainer/>
			</Styles>
		</UserTemplate>
	);
};

const Styles = styled.main`
	width: 100%;
	display: grid;
	grid-template-columns: 22rem auto;
	grid-column-gap: 3rem;
	padding: 8rem 6rem;

	@media only screen and (max-width: 60rem) {
		grid-template-columns: auto;
	}

	@media only screen and (max-width: 40rem) {
		padding: 8rem 4rem;
	}
	@media only screen and (max-width: 31rem) {
		padding: 4rem 2rem;
	}
`;
export default Shop;
