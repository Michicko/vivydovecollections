import { createContext, useContext, useReducer } from "react"
import reducer from '../reducers/cart_reducer';


const initialState = {
  cart : [],
  total_items: 0,
  total_amount: 0,
  shipping_fee: 0,
}

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <CartContext.Provider value={{...state}}>
    {children}
  </CartContext.Provider>
}

export const useCartContext = () => {
  return useContext(CartContext);
}