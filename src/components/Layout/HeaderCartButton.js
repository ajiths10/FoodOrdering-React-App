import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartButton.module.css';
import Cart from "../Cart/Cart";
import { useState } from "react";

const HaederCartButton = (props) => {

  const clickHandler = ()=>{
    props.cartPass(true);
  }
  

 
  return (
    <button className={classes.button} onClick={clickHandler} >
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>0</span>
    </button>
  );
};

export default HaederCartButton;
