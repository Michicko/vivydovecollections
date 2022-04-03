import styled from "styled-components";
import { BsSearch } from "react-icons/bs";

const SearchForm = ({ text, data, updateData }) => {
	return (
		<Form>
			<div className='form-group with-control'>
				<div className='form-control'>
					<BsSearch className='form-icon' />
					<input
						type='search'
						name='text'
						id='search'
						autoComplete='new-password'
						className='text-input'
						placeholder={`Search ${data}`}
						value={text}
						onChange={updateData}
					/>
				</div>
			</div>
		</Form>
	);
};

const Form = styled.form`
	.search-icon {
		margin-right: 0.8rem;
	}
`;
export default SearchForm;
