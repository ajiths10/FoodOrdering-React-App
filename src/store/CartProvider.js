import React, { useContext } from "react";
import CartContext from "./cart-context";

let  items =[];
const CartProvider = (props) => {
    
    const addItemToCartHandler = (item) =>{
        items.push(item);
        console.log(`inside=== ${cartContext}`)
    };

    const removeItemFromCartHandler = (id) =>{};

    const cartContext = {
        items : items,
        totalAmount: 0,
        addItem: addItemToCartHandler ,
        removeItem: removeItemFromCartHandler,
    };

    return <CartContext.Provider value={cartContext} >
        {props.children}
    </CartContext.Provider>
}

export default CartProvider;