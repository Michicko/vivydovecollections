import { useEffect, useRef } from "react";
import styled from "styled-components";
import { useFilterContext } from "../../../contexts/filter_contex";
import { usePageContext } from "../../../contexts/page_context";
import { GiSettingsKnobs } from "react-icons/gi";
import MobileFilter from "../../Filters/MobleFilter";
import Sort from "../../Filters/Sort";
import ProductCard from '../Product/ProductCard';


const MainContainer = () => {
  const { filtered_products } = useFilterContext();
	const { openMobileFilters, isMobileFiltersOpen, closeMobileFilters } =
		usePageContext();
	const filtersContainer = useRef(null);

	useEffect(() => {
		const closeFilters = (e) => {
			const filtersBox = filtersContainer.current;
			const isClicked = filtersBox.contains(e.target);

			if (isClicked) {
				return;
			} else {
				closeMobileFilters();
			}
		};

		if (isMobileFiltersOpen) {
			document.body.addEventListener("click", closeFilters);
		}

		return () => {
			document.body.removeEventListener("click", closeFilters);
		};
  });
  
  return (
		<Styles>
			<div className='top'>
				<Sort />
				<div className='filters-box'>
					<button
						type='button'
						className='filter-btn'
						onClick={openMobileFilters}
					>
						<GiSettingsKnobs className='icon' />
						<span>Filters</span>
					</button>
					<div
						className={isMobileFiltersOpen ? "boxx show-overflow" : "boxx"}
						ref={filtersContainer}
					>
						<MobileFilter />
					</div>
				</div>
			</div>
      <div className='content'>
        {/* products loading */}

        {/* products */}
				<div className='products'>
					{filtered_products.map((product, i) => {
						return <ProductCard key={i} product={product} />;
					})}
				</div>
			</div>
		</Styles>
	);
}
 
const Styles = styled.main`
width: 100%;
	min-height: 100vh;

	.filters-box {
		position: relative;
		width: 72px;
		display: none;

		@media only screen and (max-width: 60rem) {
			display: block;
		}
	}

	.boxx {
		height: 100%;
		position: relative;
		height: 1px;
		overflow: hidden;
	}

	.filter-btn {
		display: flex;
		align-items: center;
		background: transparent;
		border: none;
		outline: none;
		/* padding: 0 2rem; */

		@media only screen and (max-width: 43.5rem) {
			font-size: 1.3rem;
		}

		.icon {
			transform: rotate(90deg);
			height: 2rem;
			width: 2rem;
			margin-right: 1rem;
		}

		span {
			display: block;
			font-size: 1.5rem;
			font-weight: 500;
			text-transform: capitalize;
			color: var(--dark-color);
		}
	}

	.top {
		width: 100%;
		display: flex;
		justify-content: flex-end;

		@media only screen and (max-width: 60rem) {
			justify-content: space-between;
		}

		margin-bottom: 3rem;
	}

	.content {
		width: 100%;
	}

	.products {
		display: grid;
	}

	.products {
		grid-template-columns: repeat(auto-fit, minmax(23rem, 1fr));
		/* grid-template-columns: repeat(auto-fit, minmax(22rem, 26rem)); */
		grid-column-gap: 3rem;
		grid-row-gap: 3rem;
	}

`;
export default MainContainer;