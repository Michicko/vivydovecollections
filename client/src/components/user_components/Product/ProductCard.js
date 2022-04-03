import styled from "styled-components";
import { Link } from "react-router-dom";
import calcPercentage from "../../../utils/calcPercentage";
import { CgFormatSlash } from "react-icons/cg";
import { usePageContext } from "../../../contexts/page_context";

const ProductCard = ({ product }) => {
	const { name, image, discount, price, slug } = product;

	const { isMobileFiltersOpen, closeMobileFilters } = usePageContext();

	const closeFilter = () => {
		if (isMobileFiltersOpen) {
			closeMobileFilters();
		}
	};

	// if (loading) {
	// 	return <SkeletonProductCard />;
	// }

	return (
		<LinkStyles
			to={`/products/${slug}`}
			className='product-link'
			onClick={closeFilter}
		>
			<div className='img-container'>
				<img src={image.url} alt={name} className='product-img' />
			</div>
			<div className='body'>
				<h5>{name}</h5>
				<div className='prices'>
					<p className={`${discount > 0 ? "prev-price" : "no-prev-price"}`}>
						<span className='naira sm'>&#8358;</span>
						{price} <CgFormatSlash className='sep' />
					</p>
					<p className='current-price'>
						<span className='naira bg'>&#8358;</span>
						<span>{calcPercentage(price, discount)}</span>
					</p>
				</div>
				<span className={`${discount > 0 ? "discount" : "no-discount"}`}>
					-{discount}%
				</span>
			</div>
		</LinkStyles>
	);
};

const LinkStyles = styled(Link)`
	height: 100%;
	width: 100%;
	display: grid;
	position: relative;
	/* padding: 1rem; */

	text-decoration: none;
	align-items: start;
	overflow: hidden;

	grid-template-columns: auto;
	grid-template-rows: 20rem auto;
	grid-row-gap: 2rem;

	margin-right: 2rem !important;

	.body {
		width: 100%;
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 1rem 0.4rem 2rem 0.4rem;
	}

	h5 {
		max-width: 220px;
	}

	h5 {
		display: block;
		font-size: 1.5rem;
		text-transform: capitalize;
		color: var(--dark-color);
		font-weight: 400;
		width: 100%;

		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		padding-right: 2px;
		margin-bottom: 0.8rem;
	}

	&:hover {
		box-shadow: 0px 0px 1px 2px rgba(179, 181, 179, 0.3);
		-webkit-box-shadow: 0px 0px 1px 2px rgba(179, 181, 179, 0.3);
		-moz-box-shadow: 0px 0px 1px 2px rgba(179, 181, 179, 0.3);
	}

	img {
		width: 100%;
		height: 100%;
	}

	.img-container {
		width: 100%;
		height: 20rem;
		position: relative;
	}

	.product-img {
		width: 100%;
		height: 100%;
	}

	.sep {
		height: 2rem;
		width: 2rem;
		color: var(--dark-color);
	}

	.prices {
		display: flex;
		align-items: center;
	}

	.prev-price {
		display: flex;
		align-items: center;
		font-size: 1.3rem;
		font-weight: 400;
		text-decoration: line-through;
		color: var(--dark-color);
	}

	.current-price {
		display: flex;
		align-items: center;
		font-size: 1.6rem;
		text-transform: capitalize;
		color: var(--dark-color);
		font-weight: 600;
	}

	.no-discount,
	.no-prev-price {
		display: none;
	}

	.discount {
		position: absolute;
		top: 1rem;
		right: 1rem;
		background: #fff4e6;
		color: #d9480f;
		font-size: 1.5rem;
		display: block;
		padding: 0.5rem 1.2rem;
		border-radius: 2px;
	}
`;
export default ProductCard;
