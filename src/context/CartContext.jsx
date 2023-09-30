// React
import { createContext, useState } from "react";
// Context
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
 
    const [cartItems, setCartItems] = useState(0);
  
  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
};
