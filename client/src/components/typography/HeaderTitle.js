import styled from "styled-components";

const HeaderTtitle = ({title ,  type}) => {
  if (type === "big") {
		return <BigTitle>{title}</BigTitle>;
	}

	if (type === "small") {
		return <SmallTitle>{title}</SmallTitle>;
	}

	return <h5>{title}</h5>;
}

 const BigTitle = styled.h2`
	font-size: 2.5rem;
	font-weight: 600;
	color: var(--dark-color);
	text-transform: capitalize;

	@media only screen and (max-width: 47.5rem) {
		font-size: 1.8rem;
	}
	@media only screen and (max-width: 31.5rem) {
		font-size: 1.6rem;
	}

	@media only screen and (max-width: 25.5rem) {
		font-size: 1.4rem;
	}
`;

const SmallTitle = styled.h4`
	font-size: 1.6rem;
	font-weight: 600;
	color: var(--dark-color);
	text-transform: capitalize;

	@media only screen and (max-width: 47.5rem) {
		font-size: 1.4rem;
	}

	@media only screen and (max-width: 25.5rem) {
		font-size: 1rem;
	}
`;

export default HeaderTtitle;