import styled from "styled-components";
import { useProductsContext } from "../../../contexts/product_context";
import { BiCheck } from "react-icons/bi";
import { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../../contexts/cart_context";

const ProductInfoBox = ({ product }) => {
	const {
		product_options,
		setSelectedItem,
		clear_selected_item,
		selected_size,
		selected_color,
	} = useProductsContext();

	const { add_to_cart } = useCartContext();

	const [mainMaterials, setMainMaterials] = useState([]);
	const [colors, setColors] = useState([]);
	const [sizes, setSizes] = useState([]);
	const [productOption, setProductOption] = useState(null);
	const [amount, setAmount] = useState(1);

	useEffect(() => {
		const getId = () => {
			const product_option = product_options.find(
				(prod) =>
					prod.color === selected_color && prod.size.footSize === selected_size
			);
			setProductOption(product_option);
		};

		getId();
	}, [selected_color, selected_size, product_options]);

	const addClear = (product, amount, productOption) => {
		add_to_cart(product, amount, productOption);
		clear_selected_item();
	};

	useEffect(() => {
		// refactor code
		if (product_options.length > 0) {
			const mainMaterials = [
				...new Set(product_options.map((opt) => opt.mainMaterial)),
			];
			const colors = [...new Set(product_options.map((prod) => prod.color))];

			const sizes = [
				...new Set(product_options.map((prod) => prod.size.footSize)),
			];

			setMainMaterials(mainMaterials);
			setColors(colors);
			setSizes(sizes);
		}
	}, [product_options]);

	return (
		<Styles>
			<h2 className='product-name secondary-heading'>{product.name}</h2>
			<div className='stock-box'>
				<h4>Stock: </h4>
				{product.stock ? (
					<p>{product.stock}</p>
				) : (
					<p className='red'>Out of stock</p>
				)}
			</div>
			<div className={product.stock ? "material-box" : "material-box fl"}>
				<h4>Main Material{mainMaterials.length > 1 ? "s" : ""}:</h4>
				{product.stock ? (
					<div className='box'>
						{mainMaterials.map((material, i) => {
							return (
								<span key={i} className='item'>
									{material}
									{i < mainMaterials.length - 1 ? ", " : ""}
								</span>
							);
						})}
					</div>
				) : (
					<span className='un'>unavailable</span>
				)}
			</div>
			<div className='price-box'>
				<h4>Price: </h4>
				<span className='naira bg'>&#8358;</span>
				<h4 className='price'>{product.price}</h4>
			</div>
			<div className={product.stock ? "colors-box" : "colors-box fl"}>
				<h4>Color:</h4>
				{product.stock ? (
					<div className='box'>
						{colors.map((c, i) => {
							return (
								<button
									className={
										c === selected_color ? "color-btn active" : "color-btn"
									}
									type='button'
									name='color'
									data-color={c}
									data-index={i}
									style={{ background: c }}
									key={i}
									onClick={setSelectedItem}
								>
									{c === selected_color ? <BiCheck className='icon' /> : null}
								</button>
							);
						})}
					</div>
				) : (
					<span className='un'>unavailable</span>
				)}
			</div>
			<div className={product.stock ? "size-box" : "size-box fl"}>
				<h4>Available Size:</h4>
				{product.stock ? (
					<div className='box'>
						{sizes.map((size, i) => {
							return (
								<button
									className={
										size === selected_size ? "size-btn active" : "size-btn"
									}
									type='button'
									name='size'
									data-size={size}
									data-index={i}
									key={i}
									onClick={setSelectedItem}
								>
									{size}
								</button>
							);
						})}
					</div>
				) : (
					<span className='un'>unavailable</span>
				)}
			</div>
			<div className='shipping-box'>
				<h4>Delivery: </h4>
				<p>
					Delivery to the Island is &#8358; 3000 and to the mainland is &#8358;
					1000.
				</p>
			</div>
			<div className='btn-box'>
				{product.stock ? (
					<div className='ca-btns'>
						{selected_size || selected_color ? (
							<Link
								className='cart-btn btn'
								to='/cart'
								onClick={() => addClear(product, amount, productOption)}
							>
								add to cart
							</Link>
						) : (
								// dummy add-to-cart incase nothing is selected
							<button className='cart-btn btn' type='button'>
								add to cart
							</button>
						)}
					</div>
				) : (
					<button className='disabled-btn btn' type='button'>
						Out of stock
					</button>
				)}
			</div>
		</Styles>
	);
};

const Styles = styled.div`
	& > *:not(:last-child) {
		margin-bottom: 1rem;
	}

	.colors-box .box,
	.size-box .box {
		margin-top: 1rem;
		display: flex;
		align-items: center;

		& > *:not(:last-child) {
			margin-right: 1rem;
		}
	}

	.colors-box.fl,
	.size-box.fl,
	.material-box.fl {
		display: flex;
		align-items: center;

		.un {
			font-size: 1.3rem;
			font-weight: 400;
			color: var(--dark-color);
			margin-left: 0.5rem;
		}
	}

	.size-btn {
		height: 2.5rem;
		width: 2.5rem;
		border: 1px solid var(--primary-color);
		cursor: pointer;
		overflow: hidden;
		/* opacity: 0.6; */
		position: relative;
		background: var(--white-color);
		font-size: 1.4rem;
		font-weight: 500;
		color: var(--dark-color);
	}

	.size-btn.active {
		background: var(--primary-color);
	}

	.color-btn {
		height: 2rem;
		width: 2rem;
		border: none;
		border-radius: 50%;
		cursor: pointer;
		overflow: hidden;
		opacity: 0.6;
		position: relative;

		&::before {
			position: absolute;
			top: 0;
			left: 0;
			bottom: 0;
			right: 0;
			width: 100%;
			height: 100%;
			content: "";
			display: block;
		}

		.icon {
			height: 100%;
			width: 100%;
			color: var(--white-color);
		}
	}

	.color-btn.active,
	.color-btn:hover {
		opacity: 1;
		box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.4);
		-webkit-box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.4);
		-moz-box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.4);
	}

	.btn-box {
		margin-top: 4rem;

		.cart-btn {
			background: var(--dark-red);
			color: var(--white-color);
		}

		.disabled-btn {
			color: var(--dark-red);
			/* background: var(--light-red); */
		}
	}
	.price-box {
		display: flex;
		align-items: center;

		span {
			margin-left: 0.5rem;
		}
	}

	.text-box {
		& > *:not(:last-child) {
			margin-bottom: 2rem;
		}
	}

	.product-name {
		/* margin-bottom: 1rem; */
	}
	.stock-box,
	.material-box {
		display: flex;
		align-items: center;

		& > *:first-child {
			margin-right: 0.5rem;
		}
	}

	.material-box span {
		text-transform: capitalize;
	}

	h4 {
		font-size: 1.5rem;
		font-weight: 600;
		color: var(--dark-color);
		text-transform: capitalize;
	}

	.price {
		font-size: 1.8rem;
	}

	p,
	.item,
	.stock-box p {
		font-size: 1.3rem;
		font-weight: 500;
		color: var(--dark-color);
	}

	.shipping-box {
		display: flex;
		align-items: start;
	}

	.shipping-box p {
		font-size: 1.3rem;
		font-weight: 500;
		margin-left: 0.5rem;
	}

	.shipping-box span {
		font-size: 1.3rem;
		font-weight: 600;
	}

	p.red {
		color: var(--dark-red);
	}

	.text-box {
		width: 100%;
	}
`;
export default ProductInfoBox;
