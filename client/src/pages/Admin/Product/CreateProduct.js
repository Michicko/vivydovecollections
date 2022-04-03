import { Link } from "react-router-dom";
import styled from "styled-components";
import AdminHeader from "../../../components/admin_components/AdminHeader";
import AdminTemplate from "../../../components/admin_components/Admin_Template";
import { IoIosArrowBack } from "react-icons/io";
import { useEffect, useRef } from "react";
import useGetHeight from "../../../hooks/useGetHeight";
import AdminMain from "../../../components/admin_components/AdminMain";
import ProductForm from "../../../components/admin_components/Form/ProductForm";
import { useProductsContext } from "../../../contexts/product_context";

const CreateProduct = () => {
  const headerContainer = useRef(null);
  const { headerHeight } = useGetHeight(headerContainer);
  const { creating } = useProductsContext();
  
  useEffect(() => {
    creating('product');
  },[creating]);
  
  return (
		<AdminTemplate>
			<Styles>
				<AdminHeader>
					<div className='top' ref={headerContainer}>
						<Link to='/products' className='back-link'>
							<IoIosArrowBack className='icon' />
							<span className='text'>Back</span>
						</Link>
					</div>
				</AdminHeader>
				<AdminMain headerHeight={headerHeight}>
					<div className='form-box'>
						<ProductForm />
					</div>
				</AdminMain>
			</Styles>
		</AdminTemplate>
	);
}
 

const Styles = styled.div`
	width: 100%;
	height: 100%;
	position: relative;

	.top {
		position: sticky;
		top: 0;
		height: 3rem;
		padding: 1rem;
		margin-bottom: 2rem;
	}

	.back-link {
		display: inline-flex;
		align-items: center;
		text-decoration: none;
		color: var(--dark-color);

		.text {
			display: block;
			font-size: 1.5rem;
			text-transform: capitalize;
			font-weight: 500;
			color: var(--dark-color);
		}
	}

	.form-box {
		overflow-y: hidden;
		width: 100%;
		height: 100%;
	}
`;
export default CreateProduct;