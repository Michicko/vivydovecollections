import styled from "styled-components";

const Sort = () => {
  return (
		<Styles>
			<h4>Sort by: </h4>
			<div className='select-box'>
				<select name='sort' id='sort' className='sort'>
					<option value='name(a-z)' className='sort-option'>
						Name (A - Z)
					</option>
					<option value='name(z-a)' className='sort-option'>
						Name (Z - A )
					</option>
					<option value='price(lowest)' className='sort-option'>
						Price (Low - High)
					</option>
					<option value='price(highest)' className='sort-option'>
						Price (High - Low)
					</option>
					<option value='popular' className='sort-option'>
						Popular
					</option>
				</select>
			</div>
		</Styles>
	);
}
 
const Styles = styled.div`
justify-self: end;
	display: flex;
	align-items: center;

	h4 {
		color: var(--dark-color);
		font-size: 1.5rem;
		font-weight: 500;
		text-transform: capitalize;
		margin-right: 1rem;

		@media only screen and (max-width: 43.5rem) {
			font-size: 1.3rem;
			margin-right: 0.5rem;
		}
	}

	select {
		-webkit-padding-end: 20px;
		-moz-padding-end: 20px;
		-webkit-padding-start: 2px;
		-moz-padding-start: 2px;
		border: none;
		color: #555;
		font-size: 1.5rem;
		margin: 0;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		outline: none;
		max-width: 17rem;

		@media only screen and (max-width: 43.5rem) {
			font-size: 1.3rem;
			max-width: 15rem;
		}
	}
`;
export default Sort;