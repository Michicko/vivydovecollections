import styled from "styled-components";

const AdminMainGreyContainer = ({ children }) => {
	return (
		<Wrapper>
			<div className='container'>{children}</div>
		</Wrapper>
	);
};

const Wrapper = styled.main`
	position: relative;
	height: calc(100vh - 7rem);
	top: 7rem;
	left: 25rem;
	width: calc(100% - 25rem);
	background: var(--color-grey-1);
	z-index: 4;
	padding: 2rem 4rem 0 2rem;
	overflow: hidden;

	@media only screen and (max-width: 47.5rem) {
		padding: 2rem 2rem 0 2rem;
		width: calc(100% - 6rem);
		left: 6rem;
	}

	@media only screen and (max-width: 25.5rem) {
		padding: 2rem 1rem 0 1rem;
	}

	.container {
		height: 100%;
		width: 100%;
	}
`;
export default AdminMainGreyContainer;
