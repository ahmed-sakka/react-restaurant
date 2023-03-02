import { MOCK_MEALS } from '../../data/mockMeals';
import classes from './MealsList.module.css';

const MealsList = () => {
  const mealsList = MOCK_MEALS.map((meal) => (
    <li key={meal.id}>{meal.name}</li>
  ));
  return (
    <section className={classes.meals}>
      <ul>{mealsList}</ul>
    </section>
  );
};

export default MealsList;
