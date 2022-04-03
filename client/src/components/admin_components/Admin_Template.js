import AdminMainGreyContainer from "./AdminGreyContainer";
import AdminSidebar from "./AdminSidebar";
import AdminTopbar from "./AdminTopbar";

const AdminTemplate = ({ children, page }) => {
	return (
		<>
			<AdminSidebar page={page} />
			<AdminTopbar />
			<AdminMainGreyContainer>{children}</AdminMainGreyContainer>
		</>
	);
};

export default AdminTemplate;
