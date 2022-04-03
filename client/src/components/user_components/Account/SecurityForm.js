import styled from "styled-components";
import { BsEyeFill } from "react-icons/bs";

const SecurityForm = () => {
	return (
		<Styles>
			<form className='security'>
				<div className='form-group'>
					<label htmlFor='currentPassword'>current password</label>
					<div className='form-control'>
						<input
							type='password'
							name='currentPassword'
							id='currentPassword'
							className='text-input bl'
						/>
						<button className='pass-btn' type='button'>
							<BsEyeFill className='icon' />
						</button>
					</div>
				</div>
				<div className='form-group'>
					<label htmlFor='newPassword'>New password</label>
					<div className='form-control'>
						<input
							type='password'
							name='newPassword'
							id='newPassword'
							className='text-input bl'
						/>
						<button className='pass-btn' type='button'>
							<BsEyeFill className='icon' />
						</button>
					</div>
				</div>
				<div className='form-group'>
					<label htmlFor='passwordConfirm'>confirrm password</label>
					<div className='form-control'>
						<input
							type='password'
							name='passwordConfirm'
							id='passwordConfirm'
							className='text-input bl'
						/>
						<button className='pass-btn' type='button'>
							<BsEyeFill className='icon' />
						</button>
					</div>
				</div>
				<div className='btn-container save'>
					<button type='submit' className='btn bl-btn submit-btn'>
						Save
					</button>
				</div>
			</form>
		</Styles>
	);
};

const Styles = styled.div`
	.security {
		width: 100%;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-column-gap: 2rem;
		grid-row-gap: 2rem;

		grid-template-areas:
			"a"
			"b"
			"c"
			"btn";

      @media only screen and (max-width: 53.75rem) {
			grid-template-columns: 1fr;
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

		/* & > *:not(:last-child) {
			margin-bottom: 2rem;
		} */

		.save {
			grid-area: btn;
		}

		.pass-btn {
			height: 2.5rem;
			width: 2.5rem;
			cursor: pointer;
			border: none;
			background: transparent;
			z-index: 1;
			position: relative;

			&::before {
				position: absolute;
				top: 0;
				left: 0;
				right: 0;
				bottom: 0;
				height: 100%;
				width: 100%;
				content: "";
				display: block;
				z-index: 1;
			}
		}
	}

	.text-input {
		width: 100%;
		border: none;
	}

	.form-control {
		display: flex;
		align-items: center;
		padding: 0;
		padding-right: 1rem;
		border: 1px solid var(--dark-grey);
		background: var(--color-grey-1);
		border-radius: 5px;

		span {
			display: inline-block;
			font-size: 1.4rem;
			font-weight: 500;
			margin-right: 0.5rem;
			padding: 1rem 0;
			max-width: 4rem;
			border-bottom: none;
		}
	}
`;
export default SecurityForm;
