import { Link } from "react-router-dom";
import styled from "styled-components";
import footerlinks from "../../../utils/footerlinks";

const Footerlinks = () => {
  return (
		<Styles>
			<div className='links'>
				{footerlinks.map((footerlink, i) => {
					return (
						<Link to={`/${footerlink}`} className='link sm-link' key={i}>
							{footerlink}
						</Link>
					);
				})}
			</div>
		</Styles>
	);
}
 
const Styles = styled.div`
width: 100%;
	grid-area: links;

	.links {
		display: flex;
		justify-content: end;

		@media only screen and (max-width: 58.5rem) {
			flex-direction: column;
		}

		& > *:not(:last-child) {
			margin-right: 4rem;

			@media only screen and (max-width: 58.5rem) {
				margin-right: 0;
				margin-bottom: 1rem;
			}
		}
	}
`
export default Footerlinks;