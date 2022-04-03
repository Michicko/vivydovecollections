import styled from "styled-components";
import { ImLocation } from "react-icons/im";
import { FaPhoneVolume } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const ContactDetails = () => {
  return (
		<Styles>
			<p className='contact-text'>
				We are always ready to help, send us a message and we'll get back to you
				as soon as possible.
			</p>
			<div className='infos'>
				<p>
					<ImLocation className='icon' />
					<span className='info'>Lagos</span>
				</p>
				<p>
					<FaPhoneVolume className='icon' />
					<span className='info'>07067069711</span>
				</p>
				<p>
					<FiMail className='icon' />
					<span className='info'>support@vivydovecollections.com</span>
				</p>
				<p>
					<FiMail className='icon' />
					<span className='info'>vivydove@gmail.com</span>
				</p>
			</div>
		</Styles>
	);
}
 

const Styles = styled.section`
	width: 100%;

	.infos {
		& > * {
			margin-bottom: 2rem;
		}
	}

	p {
		display: flex;
		align-items: center;

		.icon {
			height: 2.5rem;
			width: 2.5rem;
			color: var(--dark-color);
			margin-right: 1rem;
		}

		span {
			display: block;
			font-size: 1.5rem;
			font-weight: 500;
			color: var(--dark-color);
		}
	}
`;
export default ContactDetails;