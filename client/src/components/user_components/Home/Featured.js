import styled from "styled-components";
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import ProductSlider from "../Product/ProductSlider";
import { useProductsContext } from "../../../contexts/product_context";

const Featured = () => {
const {
	products_loading:loading,
	products_error:error,
	featured_products: products,
} = useProductsContext();

  return (
		<Styles>
			<div className='container'>
				<div className='title-box'>
					<h5 className='lead'>Trending in this season</h5>
					<h2 className='secondary-heading'>Featured Products</h2>
				</div>

				<div className='content'>
					<ProductSlider products={products} loading={loading} error={error}/>
				</div>

				<div className='btn-container'>
					<Link to='/shop' className='btn btn-primary'>
						<span>more products</span>
						<BsArrowRight className='btn-icon' />
					</Link>
				</div>
			</div>
		</Styles>
	);
}
 
const Styles = styled.div`
	width: 100%;
	padding: 4rem;
	margin-bottom: 4rem;
	min-height: 55rem;

	@media only screen and (max-width: 47.5rem) {
		padding: 2rem;
	}

	.container {
		width: 100%;
		height: 100%;
	}

	.btn-container {
		width: 100%;
		text-align: center;
	}

	.content {
		position: relative;
		height: 36rem;
		width: 100%;
	}
`;
export default Featured;