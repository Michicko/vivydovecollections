import { Link } from "react-router-dom";
import styled from "styled-components";
import { BiUserCircle } from "react-icons/bi";
import { BsBag } from "react-icons/bs";
import logo from "../../../assets/images/logo-full.png";
import Navlinks from "./Navlinks";
import { usePageContext } from "../../../contexts/page_context";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navigation = ({ page }) => {
		const { isMobile, isSidebarOpen } = usePageContext();

	return (
		<Nav>
			{/* btn hide on desktop - show on mobile */}
			{isMobile && (
				<div className='nav-btn-container'>
					{isSidebarOpen ? (
						<AiOutlineClose className='icon' />
					) : (
						<AiOutlineMenu className='icon' />
					)}
				</div>
			)}

			{/* logo move to center on mobile */}
			<Link to='/' className='logo-link'>
				<img src={logo} alt='logo' className='logo-img' />
			</Link>

			{!isMobile && <Navlinks page={page} />}

			{/* account && cart btn */}
			<div className='nav-container'>
				<Link to='/profile' className='link'>
					<BiUserCircle className='icon dark-icon' />
				</Link>
				<Link to='/cart' className='link cart-nav-icon'>
					<span className='cart-info'>2</span>
					<BsBag className='icon dark-icon' />
				</Link>
			</div>
		</Nav>
	);
};

const Nav = styled.nav`
	height: 7rem;
	width: 100%;
	background: var(--white-color);
	padding: 0 4rem;
	display: flex;
	align-items: center;
	justify-content: space-between;

	@media only screen and (max-width: 31.25rem) {
		padding: 0 2rem;
	}

	.logo-img {
		height: 4rem;
		width: auto;
	}

	.nav-container {
		display: flex;
		align-items: center;

		& > *:first-child {
			margin-right: 2rem;

			@media only screen and (max-width: 47.5rem) {
				margin-right: 1rem;
			}
		}
	}

	.cart-nav-icon {
		position: relative;
		margin-right: 0.8rem;
	}

	.cart-info {
		position: absolute;
		right: -0.8rem;
		top: -0.35rem;
		background: var(--primary-color);
		padding: 0.2rem 0.6em;
		color: var(--white-color);
		border-radius: 50%;
		font-size: 1rem;
		font-weight: 300;
	}
`;

export default Navigation;
