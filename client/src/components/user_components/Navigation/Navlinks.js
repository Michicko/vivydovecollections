import styled from "styled-components";
import navlinks from "../../../utils/navlinks";
import Navlink from "./Navlink";

const Navlinks = ({ page }) => {
  return (
		<LinksList className='hr-fl-list'>
			{navlinks.map((link, i) => {
				return (
					<li key={i} className='nav-item'>
						<Navlink link={link} page={page} />
					</li>
				);
			})}
		</LinksList>
	);
}
 
const LinksList = styled.ul`
	& > *:not(:last-child) {
		margin-right: 2rem;
	}

	.nav-item {
		min-width: 8rem;
	}

`;
export default Navlinks;