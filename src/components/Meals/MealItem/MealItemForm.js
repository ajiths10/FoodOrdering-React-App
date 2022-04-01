import React, { useContext } from "react";
import classes from './MealItemForm.module.css';
import Input from '../../UI/Input';
import CartContext from "../../../store/cart-context";

const MealItemForm =(props) => {
const CartCntx = useContext(CartContext);

    const addContextHandler=(event)=>{
        event.preventDefault();
        CartCntx.addItem(props.item)
        
    }

    return (
        <form className={classes.form} >
            <Input label="Amount" input={{
                id:"amount",
                types: 'number',
                min:'1',
                max:'5',
                step:'1',
                defaultValue:'1',
            }} />
            <button onClick={addContextHandler} > + Add  </button>
        </form>
    )
};

export default MealItemForm;