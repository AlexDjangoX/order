import React from "react";
import { DUMMY_MEALS } from "../../assets/dummy-data";

import classes from "./AvailableMeals.module.css";

const AvailableMeals = () => {
  console.log(DUMMY_MEALS);
  const mealsList = DUMMY_MEALS.map((meal) => {
    return <li>{meal.name}</li>;
  });
  return (
    <section className={classes.meals}>
      <ul>{mealsList}</ul>
    </section>
  );
};

export default AvailableMeals;
