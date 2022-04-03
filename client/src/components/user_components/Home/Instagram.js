import styled from "styled-components";
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineInstagram } from "react-icons/ai";
import instaPics from "../../../utils/dummyInsta";

const Instagram = () => {
	const settings = {
		infinite: false,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 4,
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
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	return (
		<Wrapper>
			<div className='container'>
				<Slider {...settings}>
					{instaPics.map((instaPic, i) => {
						if (instaPic === "insta") {
							return (
								<div className='special' key={i}>
									<div className='inner'>
										{/* icon */}
										<a
											href='https://instagram.com/vivdydove'
											target='_blank'
											rel='noreferrer'
											className='insta-link'
										>
											<AiOutlineInstagram className='icon big dark-icon' />
										</a>
										{/* name */}
										<h5>Check out our Instagram page</h5>
										{/* profile */}
										<p className='para'>@vivydovecollections</p>
									</div>
								</div>
							);
						}
						return (
							<div className='img-box' key={i}>
								<img
									src={
										require(`../../../assets/images/instagram-pics/${instaPic}`)
											.default
									}
									alt='instagram'
									className='insta-img'
								/>
							</div>
						);
					})}
				</Slider>
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.section`
	width: 100%;
	padding: 4rem 0;

	.container {
		width: 100%;
		height: 30rem;
	}

	.img-box {
		padding: 2rem;
		height: 25rem;
		width: 100%;

		.insta-img {
			width: 100%;
			height: 100%;
		}
	}

	.special {
		padding: 2rem;
		height: 25rem;
		width: 100%;

		.inner {
			height: 100%;
			width: 100%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			text-align: center;
			border: 2px solid var(--primary-color);
		}

		h5 {
			font-size: 1.5rem;
			color: var(--dark-color);
			font-weight: 500;
		}
	}

	.insta-icon {
		height: 2.5rem;
		width: 2.5rem;
		color: var(--dark-color);
	}
`;
export default Instagram;
