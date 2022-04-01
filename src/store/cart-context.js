import React from "react";

const CartContext = React.createContext({
    item:[],
    total: 0,
    addItem: (item) =>{},
    removeItem:(id) => {},
});

export default CartContext;