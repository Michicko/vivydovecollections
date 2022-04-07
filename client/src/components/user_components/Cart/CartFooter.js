import { Link } from "react-router-dom";
import styled from "styled-components";
import { useCartContext } from "../../../contexts/cart_context";

const CartFooter = () => {
	const { total_items, total_amount, shipping_fee } = useCartContext();

	return (
		<Styles>
			<Link to='/shop' className='back-link'>
				back to shopping
			</Link>
			<div className='checkout-info'>
				<ul className='infos'>
					<li className='info'>
						<h5 className='title'>Subtotal:</h5>
						<p className='value fl sm'>
							<span className='naira sm'>&#8358;</span>
							{total_amount}
						</p>
					</li>
					<li className='info'>
						<h5 className='title'>Shipping:</h5>
						<p className='value fl sm'>
							<span className='naira sm'>&#8358;</span>
							{total_amount}
						</p>
					</li>
					<li className='info'>
						<h5 className='title'>Total:</h5>
						<p className='value fl bg'>
							<span className='naira bg'>&#8358;</span>
							{total_amount + shipping_fee}
						</p>
					</li>
				</ul>
				<div className='ch-btn-container'>
					<Link to='/checkout' className='btn ch-link'>
						Checkout
					</Link>
				</div>
			</div>
		</Styles>
	);
};

const Styles = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: start;

	@media only screen and (max-width: 40rem) {
		flex-direction: column;
		align-items: stretch;
	}

	.back-link {
		display: block;
		font-size: 1.4rem;
		text-transform: uppercase;
		text-decoration: none;
		font-weight: 500;
		color: var(--dark-color);
		background: var(--color-grey-1);
		padding: 1rem;
		border-radius: 4px;

		@media only screen and (max-width: 40rem) {
			width: 20rem;
      margin-bottom: 2rem;
		}
		@media only screen and (max-width: 24rem) {
			width: 100%;
			text-align: center;
		}
	}

	ul {
		list-style: none;
		display: flex;
		flex-direction: column;
		width: 30rem;
		margin-bottom: 2.5rem;

		@media only screen and (max-width: 40rem) {
			width: 100%;
		}

		& > *:nth-child(2) {
			margin-bottom: 2rem;
		}
	}

	li {
		display: flex;
		justify-content: space-between;
		padding: 2rem 0;
		width: 100%;

		border-bottom: 1px solid #000;
	}

	.title {
		font-size: 1.5rem;
		text-transform: capitalize;
		text-decoration: none;
		font-weight: 600;
		color: var(--dark-color);
	}

	.value {
		display: flex;
		align-items: center;
	}

	.value.sm {
		font-size: 1.4rem;
		font-weight: 500;
	}
	.value.bg {
		font-size: 2rem;
		font-weight: 600;
	}

	.ch-link {
		text-transform: uppercase;
		color: var(--white-color);
		font-weight: 400;
		background: var(--dark-color);

		@media only screen and (max-width: 40rem) {
			width: 20rem;
		}
		@media only screen and (max-width: 24rem) {
			width: 100%;
			text-align: center;
		}
	}

	.ch-btn-container {
		width: 100%;
		text-align: end;
	}
`;
export default CartFooter;
