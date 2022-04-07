import styled from "styled-components";
import CartItem from "./CartItem";
import CartFooter from "./CartFooter";

const CartContent = ({ cartItems }) => {
	return (
		<Styles>
			<ul className='item-list'>
				{cartItems.map((item, i) => {
					return <CartItem item={item} key={i} />;
				})}
			</ul>
			<CartFooter />
		</Styles>
	);
};

const Styles = styled.section`
	width: 100%;

	ul {
		list-style: none;
		margin-bottom: 4rem;

		& > *:not(:last-child) {
			margin-bottom: 2rem;
		}
	}
`;
export default CartContent;
