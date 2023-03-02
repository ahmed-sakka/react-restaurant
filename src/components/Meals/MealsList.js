import Card from '../UI/Card';
import { MOCK_MEALS } from '../../data/mock-meals';
import classes from './MealsList.module.css';
import MealItem from './MealItem/MealItem';

const MealsList = () => {
  const mealsList = MOCK_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default MealsList;
