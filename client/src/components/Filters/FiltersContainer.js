import styled from "styled-components";
import { useFilterContext } from "../../contexts/filter_contex";
import SearchForm from "../user_components/Forms/SearchForm";
import BrandFilter from "./BrandFilter";
import CategoriesFilter from "./CategoriesFilter";
import ClearFilterBtn from "./ClearFilterBtn";
import ColorFilter from "./ColorFilter";
import MaterialFilter from "./MaterialFilter";
import PriceFilter from "./PriceFilter";

const FiltersContainer = () => {

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

	return (
		<Styles>
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
			<div className="filter-btn-container">
				<ClearFilterBtn/>
			</div>
		</Styles>
	);
};

const Styles = styled.main`
	width: 100%;
	min-height: 60vh;
	background: var(--white-color);

	@media only screen and (max-width: 60rem) {
		display: none;
	}

	& > *:not(:last-child) {
		margin-bottom: 3rem;
	}
`;
export default FiltersContainer;
