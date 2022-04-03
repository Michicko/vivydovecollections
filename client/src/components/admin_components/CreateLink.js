import { Link } from "react-router-dom";
import styled from "styled-components";
import { BsPlus } from "react-icons/bs";

const AdminCreateLink = ({ link, text }) => {
	return (
		<StyledLink to={`/${link}`}>
			<BsPlus className='icon' />
			<span className='text'>{text}</span>
		</StyledLink>
	);
};

const StyledLink = styled(Link)`
	display: flex;
	align-items: center;
	justify-content: center;
	color: var(--white-color);
	background: var(--dark-blue);
	text-decoration: none;
	padding: 1rem 2rem;
	border-radius: 5px;

	.text {
		font-size: 1.4rem;
		font-weight: 400;
		text-transform: capitalize;
	}

	.icon {
		height: 2rem;
		width: 2rem;
	}
`;
export default AdminCreateLink;
