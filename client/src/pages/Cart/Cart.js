import styled from "styled-components";
import HeaderTtitle from "../../components/typography/HeaderTitle";
import UserTemplate from "../../components/user_components/User_Template";

const Cart = () => {
  return (
    <UserTemplate>
      <Styles>
        <HeaderTtitle title="Shopping cart" type="big" />
        <div className="cart-content">
          
        </div>
    </Styles>
  </UserTemplate> );
}
 

const Styles = styled.div`
	width: 100%;
	min-height: 60vh;
	padding: 4rem 8rem;

  .cart-content{
    width: 100%;
    margin-top: 2rem;
  }
  
`;
export default Cart;