import { useEffect, useState } from "react";
import styled from "styled-components";
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useProductsContext } from "../../../contexts/product_context";

const ProductImgView = ({product}) => {
  const settings = {
		infinite: false,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3,
		initialSlide: 0,
		swipe: true,
		arrows: false,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: false,
				},
			},
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
		],
  };

  const { product_images } = useProductsContext();
  const [imageIndex, setImageIndex] = useState(0);
	const [currentImage, setCurrentImage] = useState(product_images[imageIndex]);

  // setthe current image indexon click
  const setCurrentImageIndex = (i) => {
    setImageIndex(i)
  }

  // update current image as image index changes
  useEffect(() => {
    setCurrentImage(product_images[imageIndex]);
  }, [imageIndex, product_images])

  return (
		<Styles>
			<div className='main-img-box'>
				<img
					src={currentImage}
					alt={product.name}
					className='product-img'
				/>
			</div>
			<div className='otherImages-box'>
				<Slider {...settings}>
					{product_images.map((img, i) => {
						return (
							<div className='otherImg-box' key={i}>
								<img
									src={img}
									alt={product.name}
									className='other-img'
									onClick={() => setCurrentImageIndex(i)}
								/>
							</div>
						);
					})}
				</Slider>
			</div>
		</Styles>
	);
}
 
const Styles = styled.div`
	width: 100%;

	img {
		width: 100%;
		height: 100%;
	}

	.main-img-box {
		height: 35rem;
		width: 100%;

		@media only screen and (max-width: 31.25rem) {
			height: 32rem;
		}
	}

	.otherImages-box {
		margin-top: 2.5rem;
	}

	.otherImg-box {
		height: 15rem;
		width: 25rem;
		padding-right: 2rem;

		@media only screen and (max-width: 31.25rem) {
			height: 12rem;
			width: 20rem;
		}
	}
`;
export default ProductImgView;