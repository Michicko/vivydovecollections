import styled from "styled-components";
import UserTemplate from "../../components/user_components/User_Template";

const UserOrders = () => {
  return (<UserTemplate>
    <Styles>
      <h3>user Orders page</h3>
    </Styles>
  </UserTemplate> );
}
 

const Styles = styled.main`
padding: 4rem;
min-height: 60vh;
`;
export default UserOrders;