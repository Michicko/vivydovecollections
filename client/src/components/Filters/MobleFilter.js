import styled from "styled-components";
import { useFilterContext } from "../../contexts/filter_contex";
import { usePageContext } from "../../contexts/page_context";
import SearchForm from "../user_components/Forms/SearchForm";
import BrandFilter from "./BrandFilter";
import CategoriesFilter from "./CategoriesFilter";
import ColorFilter from "./ColorFilter";
import MaterialFilter from "./MaterialFilter";
import PriceFilter from "./PriceFilter";

const MobileFilter = () => {
    	const {
			updateFilters,
			filters: {
				text,
				category,
				min_price,
				max_price,
				price,
				mainMaterial,
				brand,
				color,
			},
  } = useFilterContext();

  const { isMobileFiltersOpen } = usePageContext();

  return (
		<Styles className={isMobileFiltersOpen ? "open-filters" : null}>
			<SearchForm text={text} data='products' updateData={updateFilters} />
			<CategoriesFilter category={category} updateFilters={updateFilters} />
			<PriceFilter
				price={price}
				min_price={min_price}
				max_price={max_price}
				updateFilters={updateFilters}
			/>
			<MaterialFilter
				mainMaterial={mainMaterial}
				updateFilters={updateFilters}
			/>
			<BrandFilter brand={brand} updateFilters={updateFilters} />
			<ColorFilter color={color} updateFilters={updateFilters} />
		</Styles>
	);
}
 

const Styles = styled.div`
	position: absolute;
	display: block;
	top: 1rem;
	z-index: 20;

	width: 0;
	overflow: hidden;

	transition: width 0.3s ease;

	min-height: 60vh;
	background: var(--white-color);
	padding: 2rem 1rem;

	box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.25);
	-webkit-box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.25);
	-moz-box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.25);

	text-align: start;
	& > * {
		margin-bottom: 2.5rem;
	}

	@media only screen and (max-width: 60rem) {
		right: -6rem;
	}

	@media only screen and (max-width: 40.25rem) {
		right: -4rem;
	}

	@media only screen and (max-width: 31.15rem) {
		right: -2rem;
	}
`;
export default MobileFilter;