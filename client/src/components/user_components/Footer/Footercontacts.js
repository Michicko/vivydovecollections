import styled from "styled-components";

const Footercontacts = () => {
  return (
		<FooterContactsStyles>
			<h2>Contacts</h2>
			<div className='content'>
				<p className='para'>+234 7067069711</p>
				<p className='para'>vivydove@gmail.com</p>
				<p className='para'>support@vivydovecollections.com</p>
			</div>
		</FooterContactsStyles>
	);
}
 

const FooterContactsStyles = styled.div`
	width: 100%;
	grid-area: contact;

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
		flex-direction: column;

		& > *:not(:last-child) {
			margin-bottom: 1rem;
		}
	}
`;
export default Footercontacts;