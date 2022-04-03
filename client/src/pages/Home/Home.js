import BlogSection from "../../components/user_components/Home/BlogSection"
import CategorySection from "../../components/user_components/Home/CategorySection"
import Featured from "../../components/user_components/Home/Featured"
import Hero from "../../components/user_components/Home/Hero"
import Instagram from "../../components/user_components/Home/Instagram"
import UserTemplate from "../../components/user_components/User_Template"


const Home = () => {
  return (
		<>
			<UserTemplate page='home'>
        <Hero />
				<Featured />
				<CategorySection/>
				<BlogSection />
				<Instagram/>
			</UserTemplate>
		</>
	);
}
 
export default Home;