import styled from "styled-components";
import logo from "../../assets/images/logo-full.png";
import sidebarLinks from "../../utils/sidebarLinks";
import { Link } from "react-router-dom";

const AdminSidebar = ({ page }) => {
	return (
		<SidebarStyles>
			<div className='logo-box'>
				<img src={logo} alt='logo' className='logo' />
			</div>
			<div className='links-container'>
				<ul className='links'>
					{sidebarLinks.map((lin, i) => {
						const { link, icon } = lin;
						if (link === "logout") {
							return (
								<button className='logout-btn' type='button' key={i}>
									{icon}
									<span className='text'>{link}</span>
								</button>
							);
						}
						return (
							<li className='link-item' key={i}>
								<Link
									className={page === link ? "link active" : "link"}
									to={`/${link}`}
								>
									{icon}
									<span className='text'>{link}</span>
								</Link>
							</li>
						);
					})}
				</ul>
			</div>
		</SidebarStyles>
	);
};

const SidebarStyles = styled.aside`
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	height: 100%;
	width: 25rem;
	background: var(--white-color);
	z-index: 22;
	border-right: 1px solid rgb(179, 181, 179, 0.2);

	@media only screen and (max-width: 47.5rem) {
		width: 6rem;
	}

	.logo-box {
		margin-top: 10rem;
		display: flex;
		/* justify-content: center; */
		margin-bottom: 4rem;
		margin-left: 4rem;

		@media only screen and (max-width: 47.5rem) {
			margin-left: 0;
			display: flex;
			justify-content: center;
		}
	}
	.logo {
		height: 4.5rem;
		width: auto;

		@media only screen and (max-width: 47.5rem) {
			height: 2.5rem;
		}
	}

	.links-container {
		width: 100%;
		/* display: flex;
		justify-content: center; */
	}

	.links {
		list-style: none;
		& > *:not(:last-child) {
			margin-bottom: 1rem;
		}
	}

	.link,
	.logout-btn {
		display: flex;
		align-items: center;
		text-decoration: none;
		padding: 1rem 0 1rem 4rem;
		color: var(--dark-grey);

		@media only screen and (max-width: 47.5rem) {
			padding: 1rem 0;
			justify-content: center;
		}

		&:hover,
		&.active {
			color: var(--dark-blue);
			background: var(--light-blue);
		}

		svg {
			height: 2rem;
			width: 2rem;
			/* color: var(--dark-grey); */
			margin-right: 1rem;
		}

		.text {
			/* color: var(--dark-grey); */
			font-size: 1.4rem;
			font-weight: 500;
			text-transform: capitalize;

			@media only screen and (max-width: 47.5rem) {
				display: none;
			}
		}
	}

	.logout-btn {
		width: 100%;
		border: none;
		background: transparent;
		cursor: pointer;
	}
`;
export default AdminSidebar;
