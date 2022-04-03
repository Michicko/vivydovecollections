import styled from "styled-components";

const FiltersHeading = ({ heading }) => {
	return <Heading>{heading}</Heading>;
};

const Heading = styled.h4`
	font-size: 1.6rem;
	font-weight: 600;
	text-transform: uppercase;
	color: var(--dark-color);

	@media only screen and (max-width: 43.5rem) {
		font-size: 1.4rem;
		font-weight: 600;
	}

	margin-bottom: 3rem;
`;

export default FiltersHeading;
