import ReactDom from "react-dom";
// import { usePageContext } from "../context/page_context";

const Portal = ({ children }) => {
	// const { isAlertActive } = usePageContext();

	// if (!isAlertActive) return null;

	return ReactDom.createPortal(
		<div className='alert'>{children}</div>,
		document.getElementById("portal")
	);
};

export default Portal;
