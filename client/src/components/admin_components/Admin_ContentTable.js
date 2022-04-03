import styled from "styled-components";
import { BsThreeDotsVertical } from "react-icons/bs";
import { usePageContext } from "../../contexts/page_context";
import { useProductsContext } from "../../contexts/product_context";
import tableHeads from "../../utils/tableHeads";
import { useBlogsContext } from "../../contexts/blog_context";
import { useOrdersContext } from "../../contexts/order_context";
import { useUserContext } from "../../contexts/user_context";
import PanelMenu from "./PanelMenu";


const AdminContentTable = ({ link, content }) => {
  	const { products, product_options } = useProductsContext();
		const { blogs } = useBlogsContext();
		const { orders } = useOrdersContext();
		const { users:customers } = useUserContext();
		const { openPanelMenu } = usePageContext();
		const heads = [
			...tableHeads.find((tableHead) => tableHead.link === link).headings,
			"",
  ];

  	const displayPanelMenu = (e, item) => {
			const rect = e.currentTarget.getBoundingClientRect();
			const tempPanelContent = item;
			const center = rect.left;
			const bottom = rect.bottom - 3;
			const tempPanelPosition = {
				center,
				bottom,
			};

			openPanelMenu(tempPanelContent, tempPanelPosition);
		};
  


	return (
		<>
			<PanelMenu content={content} />
			<ContentWrapper>
				<div className='container'>
					<div className='head'>
						<div className={content === "customers" ? "row customer" : "row"}>
							{heads.map((head, i) => {
								return (
									<div className='col' key={i}>
										<h4>{head}</h4>
									</div>
								);
							})}
						</div>
					</div>
					<div className='body'>
						{content === "blogs"
							? blogs.map((blog, i) => {
									const { id, title } = blog;
									return (
										<div className='row' key={i}>
											<div className='col'>
												<p>{id}</p>
											</div>
											<div className='col'>
												<p>{title}</p>
											</div>
											<div className='col'>
												<button
													type='button'
													className='option-btn'
													onClick={(e) => displayPanelMenu(e, blog)}
												>
													<BsThreeDotsVertical className='icon' />
												</button>
											</div>
										</div>
									);
							  })
							: null}
						{content === "products"
							? products.map((product, i) => {
									const {
										_id,
										name,
										image,
										category,
										price,
										status,
										discount,
									} = product;

									return (
										<div className='row' key={i}>
											<div className='col'>
												<p>{_id}</p>
											</div>
											<div className='col'>
												<span className='img-box'>
													{/* img */}
													<img
														src={image.url}
														alt={name}
														className='img'
													/>
												</span>
												<p>{name}</p>
											</div>
											<div className='col'>
												<p>{category}</p>
											</div>
											<div className='col'>
												<p>5</p>
											</div>
											<div className='col'>
												{/* naira img */}
												<span className='naira bg'>&#8358;</span>
												<p>{price}</p>
											</div>
											<div className='col'>
												<p>{discount}</p>
											</div>
											<div className='col'>
												<p>{status}</p>
											</div>
											<div className='col'>
												<button
													type='button'
													className='option-btn'
													onClick={(e) => displayPanelMenu(e, product)}
												>
													<BsThreeDotsVertical className='icon' />
												</button>
											</div>
										</div>
									);
							  })
							: null}
						{content === "orders"
							? orders.map((order, i) => {
									const { _id, date, customer, deliveryDate, status, amount } =
										order;
									return (
										<div className='row order' key={i}>
											<div className='col'>
												<p>{_id}</p>
											</div>
											<div className='col'>
												<p>{date}</p>
											</div>
											<div className='col'>
												<p>{customer}</p>
											</div>
											<div className='col'>
												<p>{deliveryDate}</p>
											</div>
											<div className='col'>
												<p>{status}</p>
											</div>
											<div className='col'>
												{/* naira img */}
												<span className='naira bg'>&#8358;</span>
												<p>{amount}</p>
											</div>
											<div className='col'>
												<button
													type='button'
													className='option-btn'
													onClick={(e) => displayPanelMenu(e, order)}
												>
													<BsThreeDotsVertical className='icon' />
												</button>
											</div>
										</div>
									);
							  })
							: null}
						{content === "customers"
							? customers.map((customer, i) => {
									const { name, email, address, phoneNumber } = customer;

									return (
										<div className='row customer' key={i}>
											<div className='col'>
												<p>{name}</p>
											</div>
											<div className='col'>
												<p>{email}</p>
											</div>
											<div className='col'>
												<p>{`${address.street}, ${address.closestBusstop}, ${address.lga}. ${address.region}`}</p>
											</div>
											<div className='col'>
												<p>+234 {phoneNumber}</p>
											</div>
											<div className='col'>
												<button
													type='button'
													className='option-btn'
													onClick={(e) => displayPanelMenu(e, customer)}
												>
													<BsThreeDotsVertical className='icon' />
												</button>
											</div>
										</div>
									);
							  })
							: null}
						{content === 'productOptions' ? product_options.map((productOption, i) => {
							const {
								_id,
								color,
								mainMaterial,
								size: { footSize, heelHeight },
								quantity,
							} = productOption;
							return (
								<div className='row productOptions' key={i}>
									<div className='col'>
										<p>{_id}</p>
									</div>
									<div className='col'>
										<p>{color}</p>
									</div>
									<div className='col'>
										<p>{mainMaterial}</p>
									</div>
									<div className='col'>
										<p>{footSize}</p>
									</div>
									<div className='col'>
										<p>{heelHeight ? heelHeight : 'unavailable'}</p>
									</div>
									<div className='col'>
										<p>{quantity}</p>
									</div>

									<div className='col'>
										<button
											type='button'
											className='option-btn'
											onClick={(e) => displayPanelMenu(e, productOption)}
										>
											<BsThreeDotsVertical className='icon' />
										</button>
									</div>
								</div>
							);
						}) : null}
					</div>
				</div>
			</ContentWrapper>
		</>
	);
};


const ContentWrapper = styled.div`
	height: 100%;
	min-width: 100%;
	overflow: auto;

	display: flex;

	.container {
		position: relative;
		height: 100%;
	}

	.head {
		position: sticky;
		top: 0;
		height: 5.5rem;
		width: 100%;
		background: var(--white-color);
		z-index: 5;

		padding: 0.65rem;
	}

	.head .row {
		height: 100%;
		min-width: 100%;
		background: var(--light-blue);
		display: inline-flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 1rem;

		border-radius: 5px;
	}

	h4 {
		font-size: 1.4rem;
		color: var(--dark-color);
		font-weight: 600;
		text-transform: capitalize;
	}

	.body {
		padding: 0.6rem 0;

		& > *:last-child {
			margin-bottom: 20rem;
		}
	}

	.col p {
		font-size: 1.3rem;
		font-weight: 500;
		color: var(--dark-color);
	}

	.body .row {
		height: 100%;
		min-width: 100%;
		display: inline-flex;
		justify-content: space-between;
		align-items: center;
		padding: 1.5rem 1rem;
		border-bottom: 1px solid #000;
	}

	.option-btn {
		position: relative;
		height: 2rem;
		width: 2rem;
		color: var(--dark-color);
		border: none;
		background: transparent;
		z-index: 1;

		&::before {
			display: block;
			content: "";
			position: absolute;
			height: 100%;
			width: 100%;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			z-index: 3;
		}

		.icon {
			height: 2rem;
			width: 2rem;
			color: var(--dark-color);
		}
	}

	.body .row > *:nth-child(2) p,
	.body .row > *:nth-child(3) p {
		/* width: 80%; */
		max-width: 250px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		padding-right: 2px;
	}

	.row > *:not(:last-child) {
		margin-right: 4rem;
	}

	.row > *:last-child {
		min-width: 4rem;
		max-width: 4rem;
	}

	.row > * {
		min-width: 7rem;
	}

	.row > *:nth-child(1),
	.row > *:nth-child(2),
	.row.customer > *:nth-child(4) {
		min-width: 16rem;
		max-width: 16rem;
	}

	.row.customer > *:nth-child(3) {
		min-width: 15rem;
		max-width: 15rem;
	}

	.body .row > *:nth-child(2),
	.body .row > *:nth-child(5) {
		display: flex;
		align-items: center;
	}

	.body .row > *:nth-child(6) {
		display: flex;
		align-items: center;
	}

	.img-box {
		height: 4rem;
		width: 4rem;
		margin-right: 0.5rem;
	}

	.img {
		height: 4rem;
		width: 4rem;
		border-radius: 50%;
	}
`;

 
export default AdminContentTable;