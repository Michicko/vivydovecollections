import { Link } from "react-router-dom";
import styled from "styled-components";
import { BsArrowRight } from "react-icons/bs";

const BlogComp = ({ blog }) => {
	const { image, title, slug } = blog;
	return (
		<Styles>
			<div className='img-box'>
				<img
					src={require(`../../../assets/images/${image}`).default}
					alt={title}
					className='blog-img'
				/>
			</div>
			<div className='body'>
				<div className='content'>
					<h5>{title}</h5>
					<Link to={`/blogs/${slug}`} className='blog-link'>
						<span>Read more</span>
						<BsArrowRight className='icon' />
					</Link>
				</div>
			</div>
		</Styles>
	);
};

const Styles = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: auto;
	grid-template-rows: 22rem auto;
	position: relative;

	h5 {
		font-size: 1.5rem;
		margin-bottom: 1rem;
		color: var(--dark-color);
		font-weight: 500;
		max-width: 250px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		padding-right: 2px;
	}

	.blog-link {
		font-size: 1.4rem;
		font-weight: 400;
		text-decoration: none;
		border-bottom: 1px solid var(--dark-color);
		display: inline-flex;
		align-items: center;
		color: var(--dark-color);
	}

	.img-box {
		width: 100%;
		height: 100%;
	}

	.blog-img {
		width: 100%;
		height: 100%;
	}

	.body {
		width: 100%;
		padding: 2rem;
		position: absolute;
		bottom: -6.5rem;
		left: 0;
	}

	.content {
		background: var(--white-color);
		width: 100%;
		height: 100%;
		padding: 2rem 1rem;

		box-shadow: 0px 2px 7px 0px rgba(179, 181, 179, 0.4);
		-webkit-box-shadow: 0px 2px 7px 0px rgba(179, 181, 179, 0.4);
		-moz-box-shadow: 0px 2px 7px 0px rgba(179, 181, 179, 0.4);
	}
`;
export default BlogComp;
