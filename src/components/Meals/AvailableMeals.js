import classes from '../Meals/AvailabelMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealsItem/MealItem';
const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
    {
      id:'m5',
      name:'Misal Pav',
      description:'Spicy and heavy',
      price:10
    }
  ];
const AvailableMeals =()=>{
    const Meals=DUMMY_MEALS.map( meal=> <MealItem title={meal.name} desc={meal.description} price={meal.price} id={meal.id} key={meal.id}></MealItem>)
    return (
      <Card>
        <ul className={classes.meals}>
            {Meals}
        </ul>
        </Card>
    );
}
export default AvailableMeals;