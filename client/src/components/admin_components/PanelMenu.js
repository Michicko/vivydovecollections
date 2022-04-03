import { Link } from "react-router-dom";
import styled from "styled-components";
import { FiEdit } from "react-icons/fi";
import { AiOutlinePlus, AiOutlineLink } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { useEffect, useRef } from "react";
import { usePageContext } from "../../contexts/page_context";
import { useProductsContext } from "../../contexts/product_context";

const PanelMenu = ({ content }) => {
	const { isPanelMenuOpened, panelContent, panelPosition, closePanelMenu } =
		usePageContext();
	const { product } = useProductsContext();
	const panelContainer = useRef(null);

	useEffect(() => {
		const panelMenu = panelContainer.current;
		const panelRect = panelMenu.getBoundingClientRect();
		const { center, bottom } = panelPosition;
		const panelHeight = panelRect.height;
		const panelWidth = panelRect.width;
		panelMenu.style.left = `${center - panelWidth + 25}px`;
		panelMenu.style.top = `${bottom - panelHeight - 25}px`;
	}, [panelContent, panelPosition]);

	useEffect(() => {
		const closePanel = (e) => {
			if (e.target.classList.contains("option-btn")) {
				return;
			} else {
				closePanelMenu();
			}
		};

		if (isPanelMenuOpened) {
			document.body.addEventListener("click", closePanel);
		}

		return () => {
			document.body.removeEventListener("click", closePanel);
		};
	}, [isPanelMenuOpened, closePanelMenu]);

	return (
		<PanelStyles
			className={`${isPanelMenuOpened ? "panel-menu show" : null}`}
			ref={panelContainer}
		>
			{/* edit product option */}
			{content === "productOptions" ? (
				<Link
					to={`/products/${product.slug}/${content}/${panelContent._id}/edit-${
						content.split("s")[0]
					}`}
					className='panel-link'
				>
					<FiEdit className='panel-icon' />
					<span className='text'>Edit</span>
				</Link>
			) : null}

			{content === "products" ? (
				<>
					{/* edit product */}
					<Link
						to={`/${content}/${panelContent.slug}/edit-${
							content.split("s")[0]
						}`}
						className='panel-link'
					>
						<FiEdit className='panel-icon' />
						<span className='text'>Edit</span>
					</Link>

					{/* edit product option */}
					<Link
						to={`/${content}/${panelContent.slug}/create-${
							content.split("s")[0]
						}-option`}
						className='panel-link'
					>
						<AiOutlinePlus className='panel-icon' />
						<span className='text'>Add Product Option</span>
					</Link>

					{/* view product options belonging to product */}
					<Link
						to={`/${content}/${panelContent.slug}/${
							content.split("s")[0]
						}-options`}
						className='panel-link'
					>
						<AiOutlineLink className='panel-icon' />
						<span className='text'>View Product Options</span>
					</Link>
				</>
			) : null}

			<button className='delete-link'>
				<MdDelete className='panel-icon' />
				<span className='text'>Delete</span>
			</button>
		</PanelStyles>
	);
};

const PanelStyles = styled.section`
	position: fixed;
	top: 0;
	width: 20rem;
	display: none;
	flex-direction: column;
	background: var(--white-color);
	border-radius: 5px;
	z-index: 10;

	box-shadow: 0px 0px 4px 3px rgba(179, 181, 179, 0.3);
	-webkit-box-shadow: 0px 0px 4px 3px rgba(179, 181, 179, 0.3);
	-moz-box-shadow: 0px 0px 4px 3px rgba(179, 181, 179, 0.3);

	/* padding: 1rem; */

	& > * {
		padding: 1rem;
	}

	& > *:not(:last-child) {
		border-bottom: 1px solid var(--dark-blue);
	}

	.panel-link,
	.delete-link {
		text-decoration: none;
		display: flex;
		border: none;
		background: var(--white-color);
		color: var(--dark-blue);
		outline: none;
		cursor: pointer;
		align-items: center;

		.text {
			font-size: 1.4rem;
			font-weight: 400;
			text-transform: capitalize;
		}
	}

	.panel-icon {
		display: block;
		height: 2rem;
		width: 2rem;
		color: var(--dark-blue);
		margin-right: 1rem;
	}
`;
export default PanelMenu;
