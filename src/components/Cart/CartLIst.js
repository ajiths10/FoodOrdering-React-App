import { Fragment, useContext } from "react";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";

const CartList = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const check = cartCtx.items.length > 0;

  const orderhandler = () => {
    console.log("Ordering...");
  };

  const CartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <li>Name:{item.name} Amount:{item.price} quantity:{item.quantity} </li>
      ))}
    </ul>
  );

  return (
    <Fragment>
      {CartItems}{console.log(props)}
      { !check && <label>Cart empty</label>}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>

      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        { check && <button className={classes.button} onClick={orderhandler}>
          Order
        </button>}
      </div>
    </Fragment>
  );
};

export default CartList;
