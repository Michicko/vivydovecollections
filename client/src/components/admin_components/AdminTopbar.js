import styled from "styled-components";
import avatar from "../../assets/images/avatar.jpg";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { usePageContext } from "../../contexts/page_context";

const AdminTopbar = () => {
	const { isMobile, isAdminSidebarOpen } = usePageContext();
	return (
		<TopbarStyles>
			<div className='container'>
				{/* {isMobile && (
					<div className='menu-container'>
						{isAdminSidebarOpen ? (
							<button className='menu-btn close'>
								<AiOutlineClose className='icon' />
							</button>
						) : (
							<button className='menu-btn open'>
								<AiOutlineMenu className='icon' />
							</button>
						)}
					</div>
				)} */}
				<div className='profile'>
					<div className='avatar-container'>
						<img src={avatar} alt='user' className='profile-img' />
					</div>
					<div className='body'>
						<h5 className='name'>Vivian Akpasubi</h5>
						<p className='role'>Admin</p>
					</div>
				</div>
			</div>
		</TopbarStyles>
	);
};

const TopbarStyles = styled.nav`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 7rem;
	background: var(--white-color);
	z-index: 20;

	padding-right: 4rem;
	padding-left: 25rem;

	@media only screen and (max-width: 47.5rem) {
		padding-left: 6rem;
		padding-right: 2rem;
	}

	.container {
		height: 100%;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: flex-end;

		/* @media only screen and (max-width: 47.5rem) {
			justify-content: space-between;
		} */
	}

	@media only screen and (max-width: 31.5rem) {
		/* padding: 0 2rem; */
	}

	.profile {
		display: flex;
		align-items: center;
	}

	.name {
		font-size: 1.4rem;
		font-weight: 500;
		color: var(--dark-color);
		text-transform: capitalize;

		@media only screen and (max-width: 47.5rem) {
			font-size: 1.2rem;
		}
	}
	.role {
		font-size: 1rem;
		font-weight: 500;
		color: var(--dark-color);
		text-transform: capitalize;

		@media only screen and (max-width: 47.5rem) {
			font-size: 0.8rem;
		}
	}
	.profile-img {
		height: 4rem;
		width: 4rem;
		float: left;
		margin-right: 1rem;
		border-radius: 50%;
		-webkit-shape-outside: circle();
		shape-outside: circle();
		border: 1px solid rgb(179, 181, 179, 0.4);
		border-radius: 50%;

		@media only screen and (max-width: 47.5rem) {
			height: 3rem;
			width: 3rem;
		}
	}
`;
export default AdminTopbar;
