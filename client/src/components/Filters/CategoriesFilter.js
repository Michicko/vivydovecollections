import styled from "styled-components";
import { useProductsContext } from "../../contexts/product_context";
import FiltersHeading from "./FiltersHeading";
import getUniqueValues from "../../utils/getUniqueValues";

const CategoriesFilter = ({ updateFilters, category }) => {
	const { products } = useProductsContext();
	const categories = getUniqueValues(
		products.map((product) => product.category)
	);

	return (
		<>
			<FiltersHeading heading='Categories' />
			<Styles>
				<div className='cat-box'>
					{categories.map((cat, i) => {
						return (
							<button
								className={
									cat === category ? "category-btn active" : "category-btn"
								}
								name='category'
								value={category}
								key={i}
								onClick={updateFilters}
							>
								{cat}
							</button>
						);
					})}
				</div>
			</Styles>
		</>
	);
};

const Styles = styled.div`
	width: 100%;
	.cat-box {
		display: flex;
		flex-direction: column;

		& > *:not(:last-child) {
			margin-bottom: 1rem;
		}
	}

	.category-btn {
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

	.category-btn.active,
	.category-btn:hover {
		color: var(--dark-color);
	}
`;
export default CategoriesFilter;
