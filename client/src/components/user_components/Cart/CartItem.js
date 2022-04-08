import styled from "styled-components";
import { RiSubtractFill, RiAddFill, RiCloseFill } from "react-icons/ri";
import { useCartContext } from "../../../contexts/cart_context";

const CartItem = ({ item }) => {
  const {_id, name, image, price, color, footSize, heelHeight, amount, max } = item;

	const {remove_from_cart} = useCartContext();

  return (
		<Styles>
			<div className='item-box'>
				<div className='img-box'>
					<img src={image} alt='' className='item-img' />
				</div>
				<div className='body'>
					<div className='a'>
						<h4 className='name'>{name}</h4>
						<h5>
							<span className='title'>color: </span>
							{color}
						</h5>
						<h5>
							<span className='title'>size: </span>
							{footSize}
						</h5>
						{heelHeight && (
							<h5>
								<span className='title'>heelHeight: </span>
								{heelHeight}
							</h5>
						)}
						<h5 className='price'>
							<span className='title'>price: </span>
							<span className='naira sm'>&#8358;</span>
							{price}
						</h5>
					</div>
					<div className='b'>
						<div className='control'>
							<button type='button' className='ctrl-btn dec'>
								<RiSubtractFill className='icon' />
							</button>
							<input type='number' className='amount' disabled value={amount} />
							<button type='button' className='ctrl-btn inc'>
								<RiAddFill className='icon' />
							</button>
						</div>
						<div className='item-total-price'>
							<h4>
								<span className='naira bg'>&#8358;</span>
								{price * amount}
							</h4>
						</div>
					</div>
					<button
						className='del-btn'
						type='button'
						onClick={() => remove_from_cart(_id)}
					>
						<RiCloseFill className='icon' />
					</button>
				</div>
			</div>
		</Styles>
	);
}
 
const Styles = styled.li`
	width: 100%;

	.item-box {
		display: flex;
		width: 100%;
		height: 17rem;
	}

	.img-box {
		height: 15rem;
		width: 15rem;
		margin-right: 4rem;

		@media only screen and (max-width: 50rem) {
			margin-right: 2rem;
			height: 10rem;
			width: 10rem;
		}

		@media only screen and (max-width: 32rem) {
			height: 6.5rem;
			width: 6.5rem;
		}

		@media only screen and (max-width: 28rem) {
			height: 4.5rem;
			width: 4.5rem;
			margin-right: 1rem;
		}
	}

	img {
		height: 15rem;
		width: 15rem;

		@media only screen and (max-width: 50rem) {
			height: 10rem;
			width: 10rem;
		}

		@media only screen and (max-width: 32rem) {
			height: 6.5rem;
			width: 6.5rem;
		}
		@media only screen and (max-width: 28rem) {
			height: 4.5rem;
			width: 4.5rem;
		}
	}

	h4,
	h5 {
		font-size: 1.5rem;
		color: var(--dark-color);
		text-transform: capitalize;
		font-weight: 600;

		@media only screen and (max-width: 32rem) {
			font-size: 1.3rem;
		}
	}
	h5 {
		font-size: 1.4rem;
		font-weight: 500;

		@media only screen and (max-width: 32rem) {
			font-size: 1.2rem;
		}

		.title {
			color: var(--dark-grey);
		}
	}

	.price {
		display: flex;
		align-items: center;

		.title {
			margin-right: 0.4rem;
		}
	}

	.body {
		width: 100%;
		display: flex;
		align-items: start;
	}

	.a {
		min-width: 30rem;
		& > *:not(:last-child) {
			margin-bottom: 1rem;
		}

		margin-right: 8rem;

		@media only screen and (max-width: 62.5rem) {
			min-width: 20rem;
			margin-right: 4rem;
		}

		@media only screen and (max-width: 50rem) {
			min-width: 15rem;
		}

		@media only screen and (max-width: 32rem) {
			margin-right: 1rem;
			min-width: 12rem;
		}

		@media only screen and (max-width: 28rem) {
			min-width: 8rem;
		}
	}

	.b {
		display: flex;
		align-items: start;
		width: 100%;

		margin-right: auto;

		@media only screen and (max-width: 50rem) {
			margin-right: 2rem;
			flex-direction: column;
			margin-right: 0;
		}
	}

	.control {
		display: flex;
		align-items: center;
		margin-right: 4rem;

		@media only screen and (max-width: 50rem) {
			order: 2;
			margin-right: 0;
		}

		& > *:not(:last-child) {
			margin-right: 1rem;

			@media only screen and (max-width: 32rem) {
				/* margin-right: .5rem; */
			}
		}
	}
	.amount,
	.ctrl-btn {
		height: 3rem;
		width: 3rem;
		color: var(--dark-color);
		background: var(--white-color);
		border: 1px solid var(--dark-color);
		border-radius: 4px;
		outline: none;

		@media only screen and (max-width: 32rem) {
			height: 2.5rem;
			width: 2.5rem;
		}
	}

	.del-btn {
		background: var(--white-color);
		border: none;
		outline: none;
	}

	/* Chrome, Safari, Edge, Opera */
	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	/* Firefox */
	input[type="number"] {
		-moz-appearance: textfield;
	}

	.amount {
		padding-left: 1rem;
		font-size: 1.4rem;

		@media only screen and (max-width: 32rem) {
			padding-left: 0.8rem;
		}
	}

	.item-total-price {
		@media only screen and (max-width: 50rem) {
			order: 1;
			margin-bottom: 4rem;
		}

		h4 {
			display: flex;
			align-items: center;
		}
	}
`;
export default CartItem;