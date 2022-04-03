import styled from "styled-components";
import logo from "../../../assets/images/logo-full.png";

const Footerlogo = () => {
  return (
		<>
			<FooterImg src={logo} alt='logo' className='logo-img' />
		</>
	);
}

 
const FooterImg = styled.img`
	grid-area: logo;
	height: 5rem;
	width: auto;
	justify-self: end;

	@media only screen and (max-width: 47.5rem) {
		justify-self: start;
	}
  `
export default Footerlogo;