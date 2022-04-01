import React, { useRef, useState } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";


const MealItemForm = (props) => {
  const amountInputRef = useRef();
  const [amountIsValid , setAmountIsValid] = useState(true);

  const addContextHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;


  if (
    enteredAmount.trim().length === 0 ||
    enteredAmountNumber < 1 ||
    enteredAmountNumber > 5
  ) {
        setAmountIsValid(false);
        return;
  }

  props.onAddToCart(enteredAmountNumber);
};
  return (
    <form className={classes.form} onSubmit={addContextHandler} >
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          types: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button > + Add </button>
      {!amountIsValid  &&  <label>Please enter a valid amount (1-5). </label>}
    </form>
  );
};

export default MealItemForm;
