import styled from "styled-components";

const PersonalForm = () => {
	return (
		<Styles>
			<form className='personal'>
				<div className='form-group'>
					<label htmlFor='firstName'>First name</label>
					<input
						type='text'
						name='firstName'
						id='firstName'
						className='text-input bl'
					/>
				</div>
				<div className='form-group'>
					<label htmlFor='lastName'>last name</label>
					<input
						type='text'
						name='lastName'
						id='lastName'
						className='text-input bl'
					/>
				</div>
				<div className='form-group'>
					<label htmlFor='email'>email</label>
					<input type='email' name='email' id='email' className='text-input bl' />
				</div>
				<div className='form-group'>
					<label htmlFor='phoneNumber'>Phone Number</label>
					<div className='form-control'>
						<span>+234</span>
						<input
							type='number'
							name='phoneNumber'
							id='phoneNumber'
							className='number-input bl'
						/>
					</div>
				</div>
				<div className='form-group'>
					<label htmlFor='address'>address</label>
					<input
						type='text'
						name='street'
						id='address'
						className='text-input bl'
					/>
				</div>
				<div className='form-group'>
					<label htmlFor='address'>closest busstop</label>
					<input
						type='text'
						name='closestBusstop'
						id='closestBusstop'
						className='text-input bl'
					/>
				</div>
				{/* lga select */}
				<div className='btn-container'>
					<button className='btn bl-btn submit-btn' type='submit'>
						Save
					</button>
				</div>
			</form>
		</Styles>
	);
};

const Styles = styled.div`
	.personal {
		width: 100%;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-column-gap: 2rem;
		grid-row-gap: 2rem;

		grid-template-areas:
			"a b"
			"c d"
			"e f"
			"btn btn";

		@media only screen and (max-width: 53.75rem) {
			grid-template-columns: 1fr;
			grid-template-areas:
				"a"
				"b"
				"c"
				"d"
				"e"
				"f"
				"btn";
		}

		& > *:nth-child(1) {
			grid-area: a;
		}
		& > *:nth-child(2) {
			grid-area: b;
		}
		& > *:nth-child(3) {
			grid-area: c;
		}
		& > *:nth-child(4) {
			grid-area: d;
		}
		& > *:nth-child(5) {
			grid-area: e;
		}
		& > *:nth-child(6) {
			grid-area: f;
		}
		& > *:nth-child(7) {
			grid-area: btn;
		}
	}

 

	.form-control {
		display: flex;
		align-items: center;
		padding: 0 1rem;
		border: 1px solid var(--dark-grey);
		background: var(--color-grey-1);
		border-radius: 5px;

		span {
			display: inline-block;
			font-size: 1.4rem;
			font-weight: 500;
			margin-right: 0.5rem;
			padding: 1rem 0;
			width: 4rem;
			border-bottom: none;
		}

		.number-input,
		.text-input {
			border: none;
			outline: none;
			background: transparent;
			-moz-appearance: textfield;
			padding: 1rem 0;
			font-size: 1.4rem;
			font-weight: 500;
			width: 100%;

			&::-webkit-outer-spin-button,
			&::-webkit-inner-spin-button {
				-webkit-appearance: none;
				margin: 0;
			}
		}
	}
`;
export default PersonalForm;
