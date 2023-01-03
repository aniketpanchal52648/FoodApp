import classes from '../MealsItem/Mealtem.module.css';
import MealItemForm from './MealItemForm';

const MealItem = props => {
    // const price=props.price.toFit(2);
    const data={
        title:props.title,
        description:props.desc,
        price:props.price,
        id:props.id
    }


    return (
       
        <li className={classes.meal} key={props.id}>
            <div >
                <h3>{props.title}</h3>
                <div className={classes.description}>{props.desc}</div>
                <div className={classes.price}>{props.price}</div>
            </div>
            <div>
                <MealItemForm meal={data} />
            </div>
        </li>
    );
}
export default MealItem;