import { Link } from "react-router-dom";
import styled from "styled-components";
import CartItem from "./CartItem";
import CartFooter from "./CartFooter";
import HeaderTtitle from "../../typography/HeaderTitle";
import { GiShoppingCart } from "react-icons/gi";

const CartContent = ({ cartItems }) => {
	if (cartItems.length < 1) {
		return (
			<EMPTY>
				<div>
					<GiShoppingCart className='icon bg' />
					<h2 className='secondary-heading'>Cart is empty</h2>
				</div>
				<Link to='/shop' className='btn ch-link'>
					Fill it
				</Link>
			</EMPTY>
		);
	}

	return (
		<Styles>
			<HeaderTtitle title='Shopping cart' type='big' />
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

const EMPTY = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;

	.ch-link {
		text-transform: uppercase;
		color: var(--white-color);
		font-weight: 400;
		background: var(--dark-color);
		width: 8rem;
		text-align: center;
	}

	div {
		display: flex;

		.bg {
			height: 3rem;
			width: 3rem;
			margin-right: 0.8rem;
			margin-top: 0.2rem;

			@media only screen and (max-width: 41.25rem) {
				height: 2rem;
				width: 2rem;
			}
		}
	}

	h2 {
		margin-bottom: 2rem;
	}
`;
export default CartContent;
