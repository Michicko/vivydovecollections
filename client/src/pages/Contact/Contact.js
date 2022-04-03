import styled from "styled-components";
import ContactDetails from "../../components/user_components/Contact/ContactDetails";
import ContactForm from "../../components/user_components/Contact/ContactForm";
import UserTemplate from "../../components/user_components/User_Template";

const Contact = () => {
  return (
		<UserTemplate page='contact'>
			<Container>
				<h1 className='primary-heading contact-heading'>Get in touch</h1>
				<div className='content'>
					<ContactDetails />
					<ContactForm />
				</div>
			</Container>
		</UserTemplate>
	);
}
 
const Container = styled.main`
	width: 100%;
	padding: 4rem 8rem;

	@media only screen and (max-width: 56.25rem) {
		padding: 4rem;
	}

	.contact-heading {
		margin-bottom: 1.5rem;
	}

	.contact-text {
		font-size: 1.6rem;
		color: var(--dark-color);
		margin-bottom: 4rem;
	}

	.content {
		display: grid;
		grid-template-columns: 45% 50%;
		grid-column-gap: 5%;

		@media only screen and (max-width: 43.5rem) {
			grid-template-columns: 100%;
			grid-row-gap: 5rem;
		}
	}
`;
export default Contact;