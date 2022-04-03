import styled from "styled-components";
import Productslider from "../Product/ProductSlider";

const SimilarProducts = ({similar_products:products}) => {
  
  return (
		<Styles>
			<div className='title-box'>
				<h2 className='secondary-heading'>Similar Products</h2>
			</div>
			<div className='sim-box'>
				<Productslider products={products} />
			</div>
		</Styles>
	); 
}
 

const Styles = styled.div`
		width: 100%;

    .sim-box {
		height: 35rem;
		width: 100%;
	}
`;
export default SimilarProducts;