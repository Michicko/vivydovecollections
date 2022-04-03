import { useRef } from "react";
import styled from "styled-components";
import { usePageContext } from "../../../contexts/page_context";
import { useProductsContext } from "../../../contexts/product_context";
import axios from "axios";

const ProductForm = ({ productId }) => {
	const formContainer = useRef(null);
	const submitButton = useRef(null);
	const { activateButton, disableButtton, activateAlert } = usePageContext();

	const {
		set_product_form_data,
		add_new_product,
		clear_form_data,
		isEditingProduct,
		product_form_data: {
			name,
			category,
			brand,
			price,
			discount,
			status,
			image,
			otherImages,
		},
	} = useProductsContext();

	const clearForm = () => {
		clear_form_data();
		formContainer.current.reset();
	};

	const productRequest = async (config) => {
		try {
			const res = await axios.request(config);

			if (res.data.status === "success") {
				// clear form data
				clearForm();

				// activate submit button
				activateButton(submitButton.current);

				// set success message
				activateAlert("success", "Product added successfully");
				// set new product data
				add_new_product(res.data.data.data);
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

	// create config for axios request
	const createConfig = (method, url, data) => {
		return {
			method: method,
			url: url,
			data,
		};
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const data = new FormData();

		data.append("name", name);
		data.append("category", category);
		data.append("brand", brand);
		data.append("price", price);
		data.append("discount", discount);
		data.append("status", status);

		if (image) {
			data.append("image", image);
		}

		if (otherImages) {
			for (let i = 0; i < otherImages.length; i++) {
				data.append("otherImages", otherImages[i]);
			}
		}

		let config;

		if (isEditingProduct) {
			config = createConfig(
				"PATCH",
				`http://127.0.0.1:8000/products/${productId}`,
				data
			);
		} else {
			config = createConfig("POST", "http://127.0.0.1:8000/products", data);
		}

		disableButtton(submitButton.current);
		productRequest(config);
	};

	return (
		<FormWrapper>
			<form
				encType='multipart/form-data'
				ref={formContainer}
				onSubmit={handleSubmit}
			>
				<div className='imgs-section'>
					<div className='singleImg-box'>
						<h4>Upload Main Image - select only one image</h4>
						<div className='file-con'>
							<input
								type='file'
								name='image'
								id='image'
								accept='image/png, image/jpeg'
								className='main-img'
								required
								onChange={set_product_form_data}
							/>
						</div>
					</div>
					<div className='otherImgs-box'>
						<h4>Upload Other Images - select more than one</h4>
						<div className='file-con'>
							<input
								type='file'
								name='otherImages'
								multiple
								id='otherImages'
								accept='image/png, image/jpeg'
								className='other-imgs'
								required
								onChange={set_product_form_data}
							/>
						</div>
					</div>
				</div>
				<div className='text-section'>
					<div className='form-group'>
						<label htmlFor='name' className='input-label'>
							Product Name
						</label>
						<input
							type='text'
							name='name'
							id='name'
							className='text-input bl'
							required
							value={name}
							onChange={set_product_form_data}
						/>
					</div>
					<div className='form-group'>
						<label htmlFor='category' className='input-label'>
							Category
						</label>
						<input
							type='text'
							name='category'
							id='category'
							className='text-input bl'
							required
							value={category}
							onChange={set_product_form_data}
						/>
					</div>
					<div className='form-group'>
						<label htmlFor='brand' className='input-label'>
							Brand
						</label>
						<input
							type='text'
							name='brand'
							id='brand'
							className='text-input bl'
							required
							value={brand}
							onChange={set_product_form_data}
						/>
					</div>
					<div className='form-group'>
						<label htmlFor='price' className='input-label'>
							Price
						</label>
						<input
							type='number'
							name='price'
							id='price'
							className='number-input bl'
							required
							value={price}
							onChange={set_product_form_data}
						/>
					</div>
					<div className='form-group'>
						<label htmlFor='discount' className='input-label'>
							Discount
						</label>
						<input
							type='number'
							name='discount'
							id='discount'
							className='number-input bl'
							required
							value={discount}
							onChange={set_product_form_data}
						/>
					</div>
					<div className='form-group'>
						<label htmlFor='status' className='input-label'>
							Status
						</label>
						<select
							name='status'
							id='status'
							className='select-input'
							value={status}
							onChange={set_product_form_data}
						>
							<option value='new' className='option'>
								new
							</option>
							<option value='recommended' className='option'>
								recommended
							</option>
							<option value='regular' className='option'>
								regular
							</option>
						</select>
					</div>
					<div className='btn-container'>
						<button className='btn create-btn' type='submit' ref={submitButton}>
							{isEditingProduct ? "Update Product" : "Create Product"}
						</button>
						<button
							className='btn cancel-btn'
							type='button'
							onClick={clearForm}
						>
							Cancel
						</button>
					</div>
				</div>
			</form>
		</FormWrapper>
	);
};

const FormWrapper = styled.div`
	width: 100%;
	height: 100%;
	padding: 2rem;
	padding-bottom: 25rem;
	overflow-y: scroll;

	.text-section {
		& > * {
			margin-bottom: 2rem;
		}
	}

	.select-input {
		padding: 1rem;
	}

	.cancel-btn {
		color: var(--dark-color);
		font-weight: 500;
		border: 1px solid var(--dark-color);
		background: var(--white-blue);
	}

	.create-btn {
		color: var(--white-color);
		font-weight: 500;
		background: var(--dark-blue);
	}

	.create-btn.disabled {
		background: #7aa9ee;
	}

	.create-btn.ative {
		background: var(--light-blue);
	}

	.imgs-section {
		h4 {
			font-size: 1.5rem;
			font-weight: 500;
			margin-bottom: 2rem;
			color: var(--dark-color);

			@media only screen and (max-width: 27.25rem) {
				font-size: 1.3rem;
			}
		}
	}

	.singleImg-box,
	.otherImgs-box {
		margin-bottom: 2.5rem;
	}
`;
export default ProductForm;
