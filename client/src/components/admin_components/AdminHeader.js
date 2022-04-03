import styled from "styled-components";

const AdminHeader = ({children}) => {
  return (
    <Styles>
    {children}
    </Styles>
  );
}
 

const Styles = styled.header`
	width: 100%;
	min-height: 4rem;
	padding-bottom: 2rem;
`;
export default AdminHeader;