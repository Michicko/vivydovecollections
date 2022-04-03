import Footer from "./Footer/Footer";
import Navigation from "./Navigation/Navigation";

const UserTemplate = ({ children, page }) => {
	

	return (
		<>
			<Navigation page={page} />
			{children}
			<Footer />
		</>
	);
};

export default UserTemplate;
