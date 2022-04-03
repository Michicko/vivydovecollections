import { Link } from "react-router-dom";
import styled from "styled-components";
import { BiUserCircle, BiShoppingBag } from "react-icons/bi";
import { CgLogOut } from "react-icons/cg";

const AccountSidebar = ({ link }) => {
  return (
		<LinksStyles>
			<Link
				to='/profile'
				className={link === "profile" ? "link active" : "link"}
			>
				<BiUserCircle className='icon' />
				<span>Personal Details</span>
			</Link>
			<Link
				to='/user-orders'
				className={link === "user-orders" ? "link active" : "link"}
			>
				<BiShoppingBag className='icon' />
				<span>Orders</span>
			</Link>
			<button className='link'>
				<CgLogOut className='icon' />
				<span>Logout</span>
			</button>
		</LinksStyles>
	);
}
 
const LinksStyles = styled.aside`
	padding-top: 2rem;
	width: 20rem;
	display: flex;
	flex-direction: column;

	& > *:not(:last-child) {
		margin-bottom: 1rem;
	}

	@media only screen and (max-width: 66.25rem) {
		width: 6rem;
	}

	@media only screen and (max-width: 37.5rem) {
		width: 4rem;
	}

	@media only screen and (max-width: 31.25rem) {
		width: 100%;
		padding-top: 0;
		position: absolute;
		left: 2rem;
		top: 2em;
		flex-direction: row;

		& > * {
			margin-right: 1rem;
		}

		& > * {
			margin-bottom: 1rem;
		}
	}

	.link {
		display: flex;
		align-items: center;
		text-decoration: none;
		color: var(--dark-grey);
		padding: 1rem 0.6rem;

		background: none;
		border: none;
		outline: none;
		cursor: pointer;

		@media only screen and (max-width: 66.25rem) {
			padding: 1rem 0;
			justify-content: center;
		}

		@media only screen and (max-width: 31.25rem) {
			padding: 1rem;
		}

		.icon {
			height: 2.5rem;
			width: 2.5rem;

			margin-right: 1rem;

			@media only screen and (max-width: 66.25rem) {
				margin-right: 0;
			}
		}

		span {
			display: block;
			font-size: 1.5rem;
			font-weight: 500;
			text-transform: capitalize;

			@media only screen and (max-width: 66.25rem) {
				display: none;
			}
		}

		&:hover,
		&.active {
			background: var(--light-blue);
			color: var(--dark-blue);
			border-radius: 5px;
		}
	}
`;
export default AccountSidebar;