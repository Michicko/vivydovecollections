import styled from "styled-components";
import Footercontacts from "./Footercontacts";
import Footerlinks from "./Footerlinks";
import Footerlogo from "./Footerlogo";
import Footersocials from "./Footersocials";

const Footer = () => {
  return (
		<FooterStyles>
			<div className='container'>
				<Footercontacts />
				<Footersocials />
				<Footerlinks />
				<Footerlogo />
			</div>
		</FooterStyles>
	);
}
 

const FooterStyles = styled.footer`
	width: 100%;
	padding: 6rem 4rem;
	background: var(--color-grey-1);

	.container {
		width: 100%;
		display: grid;
		grid-template-columns: auto auto auto;
		grid-template-areas:
			"contact socials logo"
			"contact socials links";

		grid-column-gap: 3rem;
		grid-row-gap: 3rem;

		@media only screen and (max-width: 58.5rem) {
			grid-template-columns: auto auto auto auto;
			grid-template-areas: "contact socials links logo";
		}

		@media only screen and (max-width: 47.5rem) {
			grid-template-columns: auto auto;
			grid-template-areas:
				"logo links"
				"contact socials";
		}

		@media only screen and (max-width: 28.75rem) {
			grid-template-columns: auto;
			grid-template-areas:
				"logo"
				"links"
				"contact"
				"socials";
		}
	}
`

export default Footer;