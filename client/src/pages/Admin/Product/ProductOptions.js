import {useRef} from "react";
import styled from "styled-components";
import AdminContent from "../../../components/admin_components/AdminContent";
import AdminHeader from "../../../components/admin_components/AdminHeader";
import AdminMain from "../../../components/admin_components/AdminMain";
import AdminContentTable from "../../../components/admin_components/Admin_ContentTable";
import AdminTemplate from "../../../components/admin_components/Admin_Template";
import HeaderTtitle from "../../../components/typography/HeaderTitle";
import useGetHeight from "../../../hooks/useGetHeight";
import AdminSearchForm from "../../../components/admin_components/Form/AdminSearchForm";
import { IoIosArrowBack } from "react-icons/io";
import { Link, useParams } from "react-router-dom";
import useGetProductFromSlug from "../../../hooks/useGetProductFromSlug";


const ProductOptions = () => {
	const headerContainer = useRef(null);
  const { headerHeight } = useGetHeight(headerContainer);
	const { slug } = useParams();
	// get product from slug and fetch singl product
	useGetProductFromSlug(slug);

	return (
		<AdminTemplate page='products'>
			<AdminContent>
				<AdminHeader>
					<HeaderStyles ref={headerContainer}>
						<Link to='/products' className='back-link'>
							<IoIosArrowBack className='icon' />
							<span className='text'>Back</span>
						</Link>
						<div className='header-box with-b'>
							<HeaderTtitle title='Product Options' type='big' />
							<AdminSearchForm content='product options' />
						</div>
					</HeaderStyles>
				</AdminHeader>
				<AdminMain headerHeight={headerHeight}>
					<MainStyles>
						<AdminContentTable link='productOptions' content='productOptions' />
					</MainStyles>
				</AdminMain>
			</AdminContent>
		</AdminTemplate>
	);
};

const HeaderStyles = styled.div`
	height: 100%;
	width: 100%;

	.back-link {
		display: inline-flex;
		align-items: center;
		text-decoration: none;
		color: var(--dark-color);
    margin-bottom: 1.5rem;

		.text {
			display: block;
			font-size: 1.5rem;
			text-transform: capitalize;
			font-weight: 500;
			color: var(--dark-color);
		}
	}
`;


const MainStyles = styled.div`
	height: 100%;
	width: 100%;
	padding-bottom: 1rem;
`;
export default ProductOptions;
