import styled from "styled-components";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import heels from "../../../assets/images/heels.jpg";
import flats from "../../../assets/images/flats.jpg";

const CategorySection = () => {
	return (
		<Styles>
			<div className='container'>
				<div className='box-a'>
					<div className='text-box'>
						<h1>Flats</h1>
						<Link to='/shop' className='btn btn-primary'>
							<span className='btn-text'>Shop now</span>
							<BsArrowRight className='icon' />
						</Link>
					</div>
					<div className='img-box'>
						<img src={flats} alt='flats' className='flats' />
					</div>
				</div>
				<div className='box-b'>
					<div className='img-box'>
						<img src={heels} alt='heels' className='heels' />
					</div>
					<div className='text-box'>
						<h1>Heels</h1>
						<Link to='/shop' className='btn btn-primary'>
							<span className='btn-text'>Shop now</span>
							<BsArrowRight className='icon' />
						</Link>
					</div>
				</div>
			</div>
		</Styles>
	);
};

const Styles = styled.section`
	width: 100%;
	padding: 4rem 0;

	.container {
		width: 100%;

		@media only screen and (max-width: 43.75rem) {
			display: flex;
			flex-direction: column;

			& > *:first-child {
				margin-bottom: 4rem;
			}
		}
	}

	.box-a,
	.box-b {
		width: 100%;
		display: grid;
		grid-template-rows: 45rem;
		grid-column-gap: 5%;
		align-items: center;

		h1 {
			font-size: 4rem;
			font-weight: 500;
			color: var(--dark-color);
			margin-bottom: 2rem;

			@media only screen and (max-width: 43.75rem) {
				font-size: 2.5rem;
			}

			@media only screen and (max-width: 31.25rem) {
				font-size: 2rem;
			}
		}

		.img-box {
			width: 100%;
			height: 45rem;
			background: #e6e6e6;

			@media only screen and (max-width: 31.25rem) {
				height: 30rem;
			}
		}

		img {
			width: 100%;
			height: 100%;
		}
	}

	.box-a {
		grid-template-columns: 45% 50%;
		margin-bottom: 5rem;

		@media only screen and (max-width: 43.75rem) {
			grid-template-columns: 100%;
			grid-template-rows: 45rem auto;
			grid-row-gap: 4rem;
		}

		@media only screen and (max-width: 31.25rem) {
			grid-template-rows: 30rem auto;
		}

		.img-box {
			@media only screen and (max-width: 43.75rem) {
				order: 0;
			}
		}

		.text-box {
			justify-self: end;

			@media only screen and (max-width: 43.75rem) {
				justify-self: center;
				text-align: center;
				order: 1;
			}
		}
	}

	.box-b {
		grid-template-columns: 50% 45%;
		grid-template-rows: 45rem;

		@media only screen and (max-width: 43.75rem) {
			grid-template-columns: 100%;
			grid-template-rows: 45rem auto;
			grid-row-gap: 4rem;
			align-items: start;
		}

		@media only screen and (max-width: 31.25rem) {
			grid-template-rows: 30rem auto;
		}

		.text-box {
			@media only screen and (max-width: 43.75rem) {
				justify-self: center;
				text-align: center;
			}
		}
	}
`;

export default CategorySection;
