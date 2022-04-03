import styled from "styled-components";
import blogData from "../../../utils/blogData";
import BlogComp from "../Blog/BlogComp";

const BlogSection = () => {
	return (
		<Styles>
			<div className='container'>
				<div className='title-box'>
					<h5 className='lead'>Latest from our blog</h5>
					<h2 className='secondary-heading'>our Blog</h2>
				</div>
				<div className='blog-content'>
					<div className='blogs'>
						{blogData.slice(0, 3).map((blog, i) => {
							return <BlogComp key={i} blog={blog} />;
						})}
					</div>
				</div>
			</div>
		</Styles>
	);
};

const Styles = styled.section`
	width: 100%;
	padding: 4rem 10rem;

	@media only screen and (max-width: 75rem) {
		padding: 4rem 6rem;
	}

	@media only screen and (max-width: 35.25rem) {
		padding: 4rem;
	}

	.container {
		width: 100%;
		margin-bottom: 4rem;
	}

	.blogs {
		width: 100%;
		display: grid;
		justify-content: center;
		grid-template-columns: repeat(auto-fit, minmax(22rem, 28rem));
		grid-column-gap: 4rem;
		grid-row-gap: 10rem;
	}
`;
export default BlogSection;
