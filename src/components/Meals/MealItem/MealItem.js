import MealItemForm from "./MealItemForm";
import React from "react";
import classes from "./MealItem.module.css";

// props.id

const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} />
      </div>
    </li>
  );
};

export default MealItem;

// We just have to make sure that the id props is passed correctly to
// <MealItemForm /> when that component is being used
// (i.e. inside of the MealItem component):

//     <MealItemForm id={props.id} />
