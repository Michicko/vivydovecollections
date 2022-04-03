import styled from "styled-components";
import headerImg from "../../../assets/images/header-img.png";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
		<Styles>
			<div className='container'>
				<div className='text-box'>
					<div className='text-content'>
						<h1 className='header-heading'>
							<span>Give your Feet </span>
							<span>A New Look</span>
						</h1>
						<Link to='/shop' className='btn btn-primary'>
							<span className='btn-text'>Shop now</span>
							<BsArrowRight className='btn-icon' />
						</Link>
					</div>
				</div>
				<div className='img-box'>
					<img
						src={headerImg}
						alt='legs displaying heel'
						className='header-img'
					/>
				</div>
			</div>
		</Styles>
	);
}
 
const Styles = styled.header`
	height: calc(100vh - 7rem);
	width: 100%;

	.container {
		width: 100%;
		height: 100%;
		display: grid;
		grid-template-columns: 45% 55%;

		@media only screen and (max-width: 47.5rem) {
			grid-template-columns: 100%;
			grid-template-rows: 45% 50%;
			grid-row-gap: 5%;
			padding: 4rem;
		}

		@media only screen and (max-width: 35.25rem) {
			padding: 2rem;
		}
	}

	.text-content {
		position: absolute;
		color: var(--dark-color);
		top: 40%;
		transform: translateY(-40%);
		padding-left: 4rem;

		@media only screen and (max-width: 47.5rem) {
			position: relative;
			top: 0%;
			transform: none;
			padding-left: 0;
		}
	}

	.header-heading {
		display: flex;
		flex-direction: column;
		font-size: 5rem;
		text-transform: capitalize;
		line-height: 1;
		margin-bottom: 4rem;

		@media only screen and (max-width: 60rem) {
			font-size: 4rem;
		}

		@media only screen and (max-width: 47.5rem) {
			margin-top: 2rem;
			margin-bottom: 3rem;
		}

		@media only screen and (max-width: 32.5rem) {
			font-size: 2.5rem;
			margin-bottom: 2.5rem;
		}
		@media only screen and (max-width: 23.5rem) {
			font-size: 2rem;
			margin-bottom: 2.5rem;
		}
	}

	.img-box,
	.text-box {
		height: 100%;
		width: 100%;
		position: relative;

		@media only screen and (max-width: 47.5rem) {
			height: 100%;
		}
	}

	.img-box {
		align-self: center;
		height: 75%;
		background: #bcc4bc;
		border-top-left-radius: 30rem;
		border-bottom-left-radius: 30rem;
		overflow: hidden;

		@media only screen and (max-width: 60rem) {
			height: 65%;
		}

		@media only screen and (max-width: 47.5rem) {
			width: 100%;
			height: 100%;

			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
			border-top-right-radius: 35rem;
			border-top-left-radius: 35rem;

			width: 40rem;
			justify-self: center;
		}
		@media only screen and (max-width: 31.5rem) {
			width: 35rem;
		}
		@media only screen and (max-width: 28.5rem) {
			width: 28rem;
		}
	}

	.header-img {
		height: 85%;

		@media only screen and (max-width: 60rem) {
			height: 90%;
		}

		position: absolute;
		left: 20%;
		filter: drop-shadow(-2px 4px 4px rgb(28, 28, 28, 0.6));

		@media only screen and (max-width: 47.5rem) {
			top: 0;
			left: 50%;
			transform: translateX(-50%);
			height: 85%;
		}
	}
`;
export default Hero;