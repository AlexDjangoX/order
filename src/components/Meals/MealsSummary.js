import React from "react";

import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious food delivered</h2>
      <p>Choose your favorite meals from our great selection</p>
      <p>Only good natural ingredients</p>
    </section>
  );
};

export default MealsSummary;
