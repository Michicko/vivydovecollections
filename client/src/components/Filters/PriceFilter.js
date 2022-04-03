import styled from "styled-components";
import FiltersHeading from "./FiltersHeading";

const PriceFilter = ({ price, min_price, max_price, updateFilters }) => {
	return (
		<>
			<FiltersHeading heading={"Filter by"} />
			<Styles>
				<h5 className='filter_heading'>Price</h5>
				<div className='range-box'>
					<p className='price'>
						<span className='naira sm'>&#8358;</span>
						{price}
					</p>
					<input
						type='range'
						name='price'
						id='price'
						className='price-range'
						min={min_price}
						max={max_price}
						value={price}
						onChange={updateFilters}
					/>
				</div>
			</Styles>
		</>
	);
};

const Styles = styled.div`
	.range-box {
		width: 100%;
	}

	.price {
		display: flex;
		align-items: center;
		font-size: 1.3rem;
		font-weight: 600;
		color: var(--dark-color);

		@media only screen and (max-width: 43.5rem) {
			font-size: 1.3rem;
		}
	}

	.price-range {
		width: 100%;
		-webkit-appearance: none;
		height: 7.5px;
		border-radius: 5px;
		background: #d3d3d3;
		outline: none;
		opacity: 0.8;
		-webkit-transition: 0.2s;
		transition: opacity 0.2s;
	}

	.price-range::-moz-range-thumb {
		width: 15px;
		height: 15px;
		border-radius: 50%;
		background: var(--dark-red);
		cursor: pointer;
	}

	.price-range::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		width: 15px;
		height: 15px;
		border-radius: 50%;
		background: var(--dark-red);
		cursor: pointer;
	}

	.price-range:hover {
		opacity: 1;
	}
`;

export default PriceFilter;
