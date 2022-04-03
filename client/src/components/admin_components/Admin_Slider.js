import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

import cardsDetails from "../../utils/cardDetails";

const AdminSlider = ({ link }) => {
	const cards = cardsDetails.find((card) => card.link === link).cards;

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
		<SliderStyles {...settings}>
			{cards.map((card, i) => {
				const { title, number, icon } = card;
				if (link === "dashboard" && title === "total earnings") {
					return (
						<div className='card-box' key={i}>
							<div className='card'>
								<div className='heading'>
									<h3>{title}</h3>
								</div>
								<div className='card-body'>
									<h5 className='amount'>
										<span className='naira bg'>&#8358;</span>
										<span className='fig'>{number}</span>
									</h5>
									<span className='icon-box earning'>{icon}</span>
								</div>
							</div>
						</div>
					);
				}
				return (
					<div className='card-box' key={i}>
						<div className='card'>
							<div className='heading'>
								<h3>{title}</h3>
							</div>
							<div className='card-body'>
								<h5 className='amount'>
									<span className='fig'>{number}</span>
								</h5>
								<span className='icon-box orders'>{icon}</span>
							</div>
						</div>
					</div>
				);
			})}
		</SliderStyles>
	);
};

const SliderStyles = styled(Slider)`
	.card-body {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.card {
		height: 100% !important;
	}

	.card-box {
		overflow: hidden;
		padding: 0 2rem 0 0;
		padding-bottom: 2rem;

		@media only screen and (max-width: 25.5rem) {
			padding-right: 0;
		}
	}

	.heading h3 {
		font-size: 1.6rem;
		font-weight: 500;
		color: var(--dark-color);
		text-transform: capitalize;
		margin-bottom: 1rem;
	}

	.naira .curr {
		height: 1.2rem;
		width: 1.2rem;
		margin-right: 0.2rem;
	}

	.amount {
		display: flex;
		align-items: center;
	}

	.icon-box {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 3.5rem;
		width: 3.5rem;
		border-radius: 50%;

		svg {
			height: 2rem;
			width: 2rem;
			color: var(--dark-color);
		}
	}

	.icon-box.earning {
		background: var(--neutral-color);
	}

	.icon-box.orders {
		background: var(--light-green);
	}

	.icon-box.deliveries {
		background: var(--light-yellow);
	}

	.icon-box.failed {
		background: var(--light-red);
	}

	.fig {
		font-size: 1.4rem;
		color: var(--dark-color);
		font-weight: 500;
	}

	.card {
		padding: 2rem;
		background: var(--white-color);
		border-radius: 5px;

		box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.2);
		-webkit-box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.2);
		-moz-box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.2);
	}
`;
export default AdminSlider;
