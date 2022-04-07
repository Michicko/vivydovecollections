import styled from "styled-components";
import CartContent from "../../components/user_components/Cart/CartContent";
import UserTemplate from "../../components/user_components/User_Template";
import { useCartContext } from "../../contexts/cart_context";

const Cart = () => {
	const { cart: cartItems } = useCartContext();

  return (
    <UserTemplate>
      <Styles>
        <div className="cart-content">
          <CartContent cartItems={cartItems}/>
        </div>
    </Styles>
  </UserTemplate> );
}
 

const Styles = styled.div`
	width: 100%;
	min-height: 60vh;
	padding: 4rem 8rem;

	@media only screen and (max-width: 62.5rem) {
		padding: 4rem;
	}
	@media only screen and (max-width: 31.25rem) {
		padding: 4rem 2rem;
	}

	.cart-content {
		width: 100%;
		margin-top: 3rem;
	}
`;
export default Cart;