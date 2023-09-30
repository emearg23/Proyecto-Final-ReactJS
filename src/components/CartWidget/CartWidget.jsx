// Hooks
import { useContext } from "react";

// FontAwesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

// Context
import { CartContext } from "../../context/CartContext";

// Styles
import styles from "./CartWidget.module.css";


const CartWidget = () => {

  const {cartItems} = useContext(CartContext);

  return (
    <div className={styles.cartContainer}>
      <FontAwesomeIcon className={styles.cart}icon={faCartShopping} />
      <strong> { cartItems } </strong>
    </div>
  );
};

export default CartWidget;
