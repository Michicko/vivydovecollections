import styled from "styled-components";
import { useProductsContext } from "../../contexts/product_context";
import { BsSlash } from "react-icons/bs";
import { BiCheck } from "react-icons/bi";
import getItemsArray from "../../utils/getItemsArray";
import getUniqueValues from "../../utils/getUniqueValues";

const ColorFilter = ({color, updateFilters}) => {
  const { products } = useProductsContext();
  const colors = getUniqueValues(getItemsArray(products, "color"));
  
  return (
		<Styles>
			<h5 className='filter_heading'>Colors</h5>
			<div className='colors-box'>
				{colors.map((c, i) => {
					if (c === "all") {
						return (
							<button
								type='button'
								className={
									c === color ? "colors-btn all active" : "colors-btn all "
								}
								name='color'
								key={i}
								data-color={c}
								onClick={updateFilters}
							>
								<BsSlash className='icon' />
							</button>
						);
					}
					return (
						<button
							className={c === color ? "colors-btn active" : "colors-btn"}
							type='button'
							name='color'
							data-color={c}
							style={{ background: c }}
							key={i}
							onClick={updateFilters}
						>
							{c === color ? (
								<BiCheck className={color === "white" ? "icon dark" : "icon"} />
							) : null}
						</button>
					);
				})}
			</div>
		</Styles>
	);
}
 
const Styles = styled.div`
	.colors-box {
		display: flex;
		flex-wrap: wrap;

		& > *:not(:last-child) {
			margin-right: 1rem;
		}
	}

	.colors-btn {
		height: 2rem;
		width: 2rem;
		border: none;
		border-radius: 50%;
		cursor: pointer;
		overflow: hidden;
		opacity: 0.65;
		position: relative;
		margin-bottom: 1rem;

		box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.4);
		-webkit-box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.4);
		-moz-box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.4);

		&::before {
			position: absolute;
			top: 0;
			left: 0;
			bottom: 0;
			right: 0;
			width: 100%;
			height: 100%;
			content: "";
			display: block;
		}

		.icon {
			height: 100%;
			width: 100%;
			color: var(--white-color);
		}

		.icon.dark {
			color: var(--primary-color);
		}
	}

	.colors-btn.active,
	.colors-btn:hover {
		opacity: 1;
	}

	.colors-btn.all {
		background: transparent;

		.icon {
			color: var(--dark-color);
		}
	}
`;
export default ColorFilter;