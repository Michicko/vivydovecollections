import styled from "styled-components";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useRef } from "react";
import ProductCard from "./ProductCard";
import SkeletonProductCard from "../../skeletons/SkeletonProductCard";
import SkeletonSlider from "../../skeletons/SkeletonSlider";

const Productslider = ({ products, error, loading }) => {
	const slider = useRef(null);

	const nextSlide = () => {
		
	};
	const prevSlide = () => {
		
	};

	if (error) {
		return <div>
			<h2>{error}</h2>
		</div>
	}

  return (
		<Styles>
			<div className='slider-btns'>
				<IoIosArrowBack className='slider-btn prev' onClick={prevSlide} />
				<IoIosArrowForward className='slider-btn next' onClick={nextSlide} />
			</div>
			<div className='slider'>
				{loading && <SkeletonSlider/>}
				{products && products.map((product, i) => {
					return <ProductCard key={i} product={product} loading={loading} />;
				})}
			</div>
		</Styles>
	);
}
 
const Styles = styled.div`
	position: relative;
	padding: 2rem 4rem;
	height: 35rem;
	width: 100%;

	.slider{
		display: flex;
	}

	@media only screen and (max-width: 47.5rem) {
		padding: 2rem;
	}

	@media only screen and (max-width: 22rem) {
		padding: 0;
	}

	.slider-btns {
		@media only screen and (max-width: 22rem) {
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: end;
		}
	}

	.slider-btn.prev,
	.slider-btn.next {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		height: 3rem;
		width: 3rem;
		color: var(--dark-color);

		@media only screen and (max-width: 22rem) {
			top: 0;
			transform: 0;
			position: relative;
			height: 2rem;
			width: 2rem;
		}
	}

	.slider-btn.prev {
		left: 0;

		@media only screen and (max-width: 22rem) {
		}
	}
	.slider-btn.next {
		right: 0;
		@media only screen and (max-width: 22rem) {
		}
	}
`;
export default Productslider;