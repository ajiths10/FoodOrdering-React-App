import { Fragment, useContext } from "react";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import CartItem from "../../store/CartItem";

const CartList = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const check = cartCtx.items.length > 0;

  const orderhandler = () => {
    console.log("Ordering...");
  };

  const cartItemAddHandler =(id) => {};

  const cartItemRemoveHandler = (item) => {};

  const CartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler(null,item)}
        />
      ))}
    </ul>
  );

  return (
    <Fragment>
      {CartItems}
      {console.log(props)}
      {!check && <label>Cart empty</label>}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>

      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {check && (
          <button className={classes.button} onClick={orderhandler}>
            Order
          </button>
        )}
      </div>
    </Fragment>
  );
};

export default CartList;
