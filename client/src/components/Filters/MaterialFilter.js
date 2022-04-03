import styled from "styled-components";
import { useProductsContext } from "../../contexts/product_context";
import getItemsArray from "../../utils/getItemsArray";
import getUniqueValues from "../../utils/getUniqueValues";

const MaterialFilter = ({ mainMaterial, updateFilters }) => {
	const { products } = useProductsContext();
	const materials = getUniqueValues(getItemsArray(products, "mainMaterial"));



	return (
		<Styles>
			<h5 className='filter_heading'>Materials</h5>
			<div className='materials-box'>
				{materials.map((mat, i) => {
					return (
						<button
							className={
								mat === mainMaterial ? "materials-btn active" : "materials-btn"
							}
							name='mainMaterial'
							value={mainMaterial}
							key={i}
							onClick={updateFilters}
						>
							{mat}
						</button>
					);
				})}
			</div>
		</Styles>
	);
};

const Styles = styled.div`
	.materials-box {
		display: flex;
		flex-direction: column;

		& > *:not(:last-child) {
			margin-bottom: 1rem;
		}
	}

	.materials-btn {
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

	.materials-btn.active,
	.materials-btn:hover {
		color: var(--dark-color);
	}
`;
export default MaterialFilter;
