import { useRef, useState } from 'react';
import styled from 'styled-components';
import { usePageContext } from '../../../contexts/page_context';
import { useProductsContext } from '../../../contexts/product_context';
import axios from 'axios';

const ProductOptionsForm = ({productOption}) => {
  const submitButton = useRef(null);
  const formContainer = useRef(null);
  const { activateButton, disableButtton, activateAlert } = usePageContext();
  
  const {
		clear_form_data,
		set_productOption_form_data,
		isEditingProductOption,
		product,
		productOption_form_data: {
			color,
			mainMaterial,
			quantity,
			size: { footSize, heelHeight },
		},
	} = useProductsContext();
  
  const productOptionRequest = async (config) => {
		try {
			const res = await axios.request(config);

			if (res.data.status === "success") {
				// clear form data
				clearForm();

				// activate submit button
				activateButton(submitButton.current);

				// set success message
				activateAlert("success", "Product Option added successfully");
			}
		} catch (error) {
			if (error.response) {
				activateAlert("error", error.response.data.message);
			} else if (error.request) {
				activateAlert("error", "Something went wrong, try again later!");
			} else {
				activateAlert("error", error.message);
			}
			// activate submit button
			activateButton(submitButton.current);
		}
  };
  
  const createConfig = (method, url, data) => {
    return {
			method: method,
			url: url,
			data,
		};
  }

  // "http://127.0.0.1:8000/api/v1/productOptions";

	const clearForm = () => {
		clear_form_data();
		formContainer.current.reset();
	};

  	const handleSubmit = (e) => {
			e.preventDefault();
			const data = {
				color,
				size: { footSize },
				mainMaterial,
				quantity,
				product: product._id,
			};

			if (product.category === "heels") {
				data.heelHeight.size = heelHeight;
      }
      
			let config;
			
			if (isEditingProductOption) {
				config = createConfig(
					"PATCH",
					`http://127.0.0.1:8000/api/v1/productOptions/${productOption._id}`,
					data
				);
			} else {
				config = createConfig(
					"POST",
					`http://127.0.0.1:8000/api/v1/productOptions`,
					data
				);
			}

			disableButtton(submitButton.current);
			productOptionRequest(config)
		};

  
  return (
		<FormWrapper>
			<form ref={formContainer} onSubmit={handleSubmit}>
				<div className='form-group'>
					<label htmlFor='color' className='input-label'>
						Color
					</label>
					<input
						type='text'
						name='color'
						id='color'
            className='text-input bl'
            value={color}
						onChange={set_productOption_form_data}
					/>
				</div>
				<div className='form-group'>
					<label htmlFor='footSize' className='input-label'>
						Foot Size
					</label>
					<input
						type='text'
						name='footSize'
						id='footSize'
            className='text-input bl'
            value={footSize}
						onChange={set_productOption_form_data}
					/>
				</div>
				{product.category === "heels" ? (
					<div className='form-group'>
						<label htmlFor='heelHeight' className='input-label'>
							Heel Height
						</label>
						<input
							type='text'
							name='heelHeight'
							id='heelHeight'
              className='text-input bl'
              value={heelHeight}
							onChange={set_productOption_form_data}
						/>
					</div>
				) : null}
				<div className='form-group'>
					<label htmlFor='mainMaterial' className='input-label'>
						Main Material
					</label>
					<input
						type='text'
						name='mainMaterial'
						id='mainMaterial'
            className='text-input bl'
            value={mainMaterial}
						onChange={set_productOption_form_data}
					/>
				</div>
				<div className='form-group'>
					<label htmlFor='quantity' className='input-label'>
						Quantity
					</label>
					<input
						type='number'
						name='quantity'
						id='quantity'
            className='number-input bl'
            value={quantity}
						onChange={set_productOption_form_data}
					/>
				</div>
				<input
					type='hidden'
					name='product'
					id='product'
					className='hidden-input'
					value={`${product._id}`}
				/>
				<div className='btn-container'>
					<button
						className='btn bl-btn create-btn'
						type='submit'
						ref={submitButton}
					>
						Create Product Option
					</button>
					<button className='btn cancel-btn' type='button' onClick={clearForm}>
						Cancel
					</button>
				</div>
			</form>
		</FormWrapper>
	);
}
 


const FormWrapper = styled.div`
	width: 100%;
	height: 100%;
	padding: 2rem;
	padding-bottom: 26rem;
	overflow-y: scroll;

	form {
		& > * {
			margin-bottom: 2rem;
		}
	}

	.cancel-btn {
		color: var(--dark-color);
		font-weight: 500;
		border: 1px solid var(--dark-color);
		background: var(--white-blue);
	}
`;
export default ProductOptionsForm;