import styled from "styled-components";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";

const Footersocials = () => {
  return (
		<Styles>
			<h2>Socials</h2>
			<div className='content'>
				<a
					href='https://instagram.com/vivdydove'
					target='_blank'
					rel='noreferrer'
					className='social-link'
				>
					<AiOutlineInstagram className='social-icon' />
				</a>
				<a
					href='https://instagram.com/vivdydove'
					target='_blank'
					rel='noreferrer'
					className='social-link'
				>
					<AiOutlineTwitter className='social-icon' />
				</a>
				<a
					href='https://facebook.com/vivdydove'
					target='_blank'
					rel='noreferrer'
					className='social-link'
				>
					<FaFacebookF className='social-icon' />
				</a>
			</div>
		</Styles>
	);
}
 

const Styles = styled.div`
	width: 100%;
	grid-area: socials;

	h2 {
		font-size: 2rem;
		color: var(--dark-color);
		font-weight: 600;
		margin-bottom: 2rem;

		@media only screen and (max-width: 47.5rem) {
			font-size: 1.6rem;
		}
	}

	.content {
		display: flex;

		& > *:not(:last-child) {
			margin-right: 1rem;
		}
	}
`;
export default Footersocials;