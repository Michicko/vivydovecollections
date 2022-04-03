import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import ProductImgView from "../../components/user_components/Shop/ProductImgView";
import ProductInfoBox from "../../components/user_components/Shop/ProductInfoBox";
import SimilarProducts from "../../components/user_components/Shop/SimilarProducts";
import UserTemplate from "../../components/user_components/User_Template";
import { useProductsContext } from "../../contexts/product_context";

const SingleProduct = () => {
	const { slug } = useParams();

  const {
    products,
		single_product_loading,
		product,
		fetchSingleProduct,
		similar_products,
  } = useProductsContext();


  // get productid when refreshed or from clicking
  useEffect(() => {
		if (products.length > 0 && slug) {
			const productId = products.find((prod) => prod.slug === slug)._id;
			fetchSingleProduct(productId);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [slug, products]);


	if (single_product_loading) {
		return (
			<div className='loading'>
				<h2>Loading...</h2>
			</div>
		);
	}

	return (
		<UserTemplate>
			<Styles>
				<div className='content'>
					<ProductImgView product={product} />
					<ProductInfoBox product={product} />
        </div>
        <SimilarProducts similar_products={similar_products}/>
			</Styles>
		</UserTemplate>
	);
};
 

const Styles = styled.main`
	width: 100%;
	padding: 4rem;

	@media only screen and (max-width: 31.25rem) {
		padding: 0 2rem;
	}

	.content {
		width: 100%;
		display: grid;
		grid-template-columns: 50% 45%;
		grid-column-gap: 5%;

		margin-bottom: 8rem;

		@media only screen and (max-width: 50rem) {
			grid-template-columns: 100%;
			grid-row-gap: 5rem;
		}
	}
`;
export default SingleProduct;