import styled from "styled-components";
import BlogComp from "../../components/user_components/Blog/BlogComp";
import UserTemplate from "../../components/user_components/User_Template";
import blogData from "../../utils/blogData";

const Blog = () => {
	return (
		<UserTemplate page='blog'>
			<BlogHeader className='header'>
				<div className='container'>
					<h1 className='primary-heading'>Featured Articles</h1>
				</div>
			</BlogHeader>
			<BlogContent>
				<div className='container'>
					<div className='blogs'>
						{blogData.map((blog, i) => {
							return <BlogComp key={i} blog={blog} />;
						})}
					</div>
				</div>
			</BlogContent>
		</UserTemplate>
	);
};

const BlogHeader = styled.header`
	height: 3rem;
	width: 100%;
	padding: 4rem 6rem;
	margin-bottom: 3rem;

	.container {
		height: 100%;
		width: 100%;
	}
`;

const BlogContent = styled.section`
	width: 100%;
	min-height: 100vh;
	padding: 2rem 6rem;
	margin-bottom: 10rem;

	.blogs {
		width: 100%;
		display: grid;
		justify-content: center;
		grid-template-columns: repeat(auto-fit, minmax(22rem, 1fr));
		grid-column-gap: 4rem;
		grid-row-gap: 10rem;
	}

	.container {
		height: 100%;
		width: 100%;
	}
`;


export default Blog;
