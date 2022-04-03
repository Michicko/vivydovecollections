import styled from "styled-components";
import { useProductsContext } from "../../../contexts/product_context";
import { BiCheck } from "react-icons/bi";
import { useEffect, useState } from "react";

const ProductInfoBox = ({ product }) => {

  const {
    product_options,
		setSelectedItem,
		selected_size,
		selected_color,
  } = useProductsContext();

  const [mainMaterials, setMainMaterials] = useState([]);
	const [colors, setColors] = useState([]);
	const [sizes, setSizes] = useState([]);

  useEffect(() => {


    // refactor code
    if (product_options.length > 0) {
      const mainMaterials = [
				...new Set(product_options.map((opt) => opt.mainMaterial)),
			];
			const colors = [...new Set(product_options.map((prod) => prod.color))];
			const sizes = [
				...new Set(product_options.map((prod) => prod.size.footSize))
			];

			setMainMaterials(mainMaterials);
			setColors(colors);
			setSizes(sizes);
    }
  }, [product_options])

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
			<div className='material-box'>
				<h4>Main Material{mainMaterials.length > 1 ? "s" : ""}: </h4>
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
			</div>
			<div className='price-box'>
				<span className='naira bg'>&#8358;</span>
				<h4 className='price'>{product.price}</h4>
			</div>
			<div className='colors-box'>
				<h4>Color:</h4>
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
			</div>
			<div className='size-box'>
				<h4>Available Size:</h4>
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
			</div>
			<div className='shipping-box'>
				<h4>Delivery: </h4>
				<p>
					Delivery to the Island is &#8358; 3000 and to the mainland is &#8358;
					1000.
				</p>
			</div>
			<div className='btn-box'>
				<button className='cart-btn btn' type='button'>
					Add to cart
				</button>
			</div>
		</Styles>
	);
};

const Styles = styled.div`
  &>*:not(:last-child){
    margin-bottom:1rem;
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
	}
	.price-box {
		display: flex;
		align-items: center;
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