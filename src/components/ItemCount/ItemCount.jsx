// Hooks
import { useContext, useState } from "react";

// Context
import { CartContext } from "../../context/CartContext.jsx";

// Styles
import styles from './ItemCount.module.css';

const ItemCount = () => {
  const [count, setCount] = useState(0); //
  const { cartItems, setCartItems } = useContext(CartContext);

  const handleAddProduct = () => {
    setCartItems(cartItems + 1);
    setCount(count + 1);
  };
  const handleRemoveProduct = () => {
    if(cartItems > 0) {
      setCartItems(cartItems - 1);
      setCount(count - 1);
    }
  };

  return (
    <div className={styles.itemCountContainer}>
      <button className={styles.button1} onClick={handleRemoveProduct}>-</button>
      <label className={styles.number} style={{margin: 10, fontSize: "2rem"}}>{count}</label>
      <button className={styles.button2} onClick={handleAddProduct}>+</button>
    </div>
  );
};

export default ItemCount;
