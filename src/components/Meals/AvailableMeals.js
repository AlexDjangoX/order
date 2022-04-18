import React from "react";
import { DUMMY_MEALS } from "../../assets/dummy-data";
import Card from "../UI/Card";
import classes from "../Meals/AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

// props.key, props.name, props.description, props.price, props.id => MealItem

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => {
    return (
      <MealItem
        id={meal.id}
        key={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
    );
  });
  console.log(mealsList);
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;

// Last but not least, for that to work, we should also
// pass id as a prop to MealItem, hence inside of the
// AvailableMeals component, we should create <MealItem />
// elements like this:

//     <MealItem
//         id={meal.id} // this is new!
