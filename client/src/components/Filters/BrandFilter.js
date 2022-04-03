import styled from "styled-components";
import { useProductsContext } from "../../contexts/product_context";
import getUniqueValues from "../../utils/getUniqueValues";

const BrandFilter = ({brand, updateFilters}) => {
  const { products } = useProductsContext();
	const brands = getUniqueValues(products.map((prod) => prod.brand));

  return (
		<Styles>
			<h5 className='filter_heading'>Brands</h5>
			<div className='brands-box'>
				{brands.map((b, i) => {
					return (
						<button
							className={b === brand ? "brands-btn active" : "brands-btn"}
							name='brand'
							type='button'
							value={brand}
							key={i}
							onClick={updateFilters}
						>
							{b}
						</button>
					);
				})}
			</div>
		</Styles>
	);
}
 
const Styles = styled.div`
.brands-box {
		display: flex;
		flex-direction: column;

		& > *:not(:last-child) {
			margin-bottom: 1rem;
		}
	}

	.brands-btn {
		text-transform: capitalize;
		display: block;
		font-size: 1.6rem;
		font-weight: 500;
		border: none;
		background: var(--white-color);
		color: var(--dark-grey);
		cursor: pointer;
		align-self: start;

		@media only screen and (max-width: 43.5rem) {
			font-size: 1.4rem;
		}
	}

	.brands-btn.active,
	.brands-btn:hover {
		color: var(--dark-color);
	}
`
export default BrandFilter;