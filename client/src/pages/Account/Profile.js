import styled from "styled-components";
import HeaderTtitle from "../../components/typography/HeaderTitle";
import AccountSidebar from "../../components/user_components/Account/AccountSidebar";
import PersonalForm from "../../components/user_components/Account/PersonalForm";
import SecurityForm from "../../components/user_components/Account/SecurityForm";
import UserTemplate from "../../components/user_components/User_Template";

const Profile = () => {
	return (
		<UserTemplate>
			<Styles>
				<div className='container'>
					<AccountSidebar link='profile' />
					<div className='content'>
						<HeaderTtitle title='My Profile' type='big' />
						<div className='title-container'>
							<h4>Personal information</h4>
						</div>
						<PersonalForm />
						<div className='title-container'>
							<h4>Password</h4>
						</div>
						<SecurityForm />
					</div>
				</div>
			</Styles>
		</UserTemplate>
	);
};

const Styles = styled.main`
	width: 100%;
	min-height: 80vh;
	height: 100%;
	padding: 4rem;

	@media only screen and (max-width: 31.25rem) {
		padding: 4rem 2rem;
	}

	.container {
		width: 100%;
		background: var(--color-grey-1);
		height: 100%;
		padding: 4rem;
		display: grid;
		grid-template-columns: 20rem auto;
		grid-column-gap: 4rem;

		@media only screen and (max-width: 66.25rem) {
			grid-template-columns: 6rem auto;
			grid-column-gap: 2rem;

			padding: 4rem 2rem;
		}

		@media only screen and (max-width: 37.5rem) {
			grid-template-columns: 4rem auto;
			/* grid-column-gap: 2rem; */
		}
		@media only screen and (max-width: 31.25rem) {
      position: relative;
			grid-template-columns: auto;
      padding-top: 8rem;
		}
	}

	.content {
		width: 100%;
		background: var(--white-color);
		border-radius: 0.5rem;
		padding: 4rem;

		@media only screen and (max-width: 37.5rem) {
			padding: 2rem;
		}
	}

	.title-container {
		margin-top: 3rem;
		margin-bottom: 3rem;
		border-bottom: 1px solid var(--color-grey-1);
		padding-bottom: 1rem;

		h4 {
			font-size: 1.4rem;
			font-weight: 600;
			color: var(--dark-color);
		}
	}
`;
export default Profile;
