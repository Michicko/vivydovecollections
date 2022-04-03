import { Link } from "react-router-dom";

const Navlink = ({ link, page }) => {
	return (
		<Link
			to={`/${link === "home" ? "" : link}`}
			className={page === link ? "link big-link active" : "link big-link"}
		>
			{link}
		</Link>
	);
};

export default Navlink;
