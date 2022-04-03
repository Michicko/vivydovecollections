import styled from "styled-components";

const ContactForm = () => {
  return (
		<Form>
			<div className='form-group'>
				<label htmlFor='name' className='label'>
					Your Name
				</label>
				<input type='text' name='name' id='name' className='text-input' />
			</div>
			<div className='form-group'>
				<label htmlFor='phone' className='label'>
					Phone
				</label>
				<input type='text' name='phone' id='phone' className='text-input' />
			</div>
			<div className='form-group'>
				<label htmlFor='email' className='label'>
					Email Address
				</label>
				<input type='email' name='email' id='email' className='text-input' />
			</div>
			<div className='form-group'>
				<label htmlFor='message' className='label'>
					Message
				</label>
				<textarea
					name='message'
					id='message'
					className='text-input'
					cols='30'
					rows='10'
				></textarea>
			</div>
			<div className='form-btn-container'>
				<button type='submit' className='btn btn-primary'>
					Send message
				</button>
			</div>
		</Form>
	);
}
 
const Form = styled.form`
display: flex;
	flex-direction: column;
	height: 100%;
	width: 100%;

	& > * {
		margin-bottom: 2rem;
	}


	.form-group {
		display: flex;
		flex-direction: column;
	}

	.btn-container {
		width: 100%;
		text-align: center;
	}

	.form-control {
		display: flex;
		width: 100%;
		align-items: center;

		span {
			width: 100%;
			display: block;
			border-bottom: 1px solid var(--primary-color);
		}

		.icon {
			height: 2rem;
			width: 2rem;
			color: var(--dark-color);
		}
	}

	label {
		font-size: 1.4rem;
		margin-bottom: 0.6rem;
		color: var(--dark-color);
		font-weight: 400;
	}

	.text-input {
		padding: 1.2rem 0.5rem;
		outline: none;
		border: none;
		border: 1px solid var(--primary-color);
		border-radius: 5px;
		resize: none;
	}
`;
export default ContactForm;