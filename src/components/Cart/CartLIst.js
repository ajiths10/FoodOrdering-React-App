import { Fragment, useContext } from "react";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";

const CartList = (props) => {
  const cartctx = useContext(CartContext);

  const orderhandler = () => {
    console.log("Ordering...");
  };

  const CartItems = (
    <ul className={classes["cart-items"]}>
      {cartctx.items.map((item) => (
        <li>Name:{item.name} Amount:{item.price} quantity:{item.quantity} </li>
      ))}
    </ul>
  );

  return (
    <Fragment>
      {CartItems}{console.log(props)}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>

      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button} onClick={orderhandler}>
          Order
        </button>
      </div>
    </Fragment>
  );
};

export default CartList;
