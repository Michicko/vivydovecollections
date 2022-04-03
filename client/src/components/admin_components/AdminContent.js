import styled from "styled-components";

const AdminContent = ({children}) => {
  return (
    <Content>
      {children}
    </Content>
  );
}
 

const Content = styled.div`
width: 100%;
height: 100%;

`;
export default AdminContent;