import styled from "styled-components";
import UserTemplate from "../../components/user_components/User_Template";

const Cart = () => {
  return (
    <UserTemplate>
      <Styles>
        <h2>Cart page</h2>
    </Styles>
  </UserTemplate> );
}
 

const Styles = styled.div`
	width: 100%;
	min-height: 60vh;
	padding: 4rem 8rem;

  
`;
export default Cart;