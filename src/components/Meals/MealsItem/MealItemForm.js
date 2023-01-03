import { useContext ,useState} from 'react';
import classes from '../MealsItem/MealItemForm.module.css';
import Input from '../../UI/Input';
import CartContext from '../../../store/cart-context';

const MealItemForm =props =>{
    const [amount,setAmount]=useState(1);
    const [isValidAmount,setIsValid]=useState(true);
    const changeAmount=(event)=>{
        if(event.target.value.trim().length!==0 && (+event.target.value.trim() >5 || +event.target.value.trim()<1)){
            setIsValid(false);
            return;
        }
        setAmount(event.target.value);
        setIsValid(true);
    }
    const ctx=useContext(CartContext);
    const addItem=(event)=>{
        // console.log(event.target.value);
        const data={
            amount:+amount,
            ...props.meal
        }
        // setAmount(1);
        // console.log(data);
        ctx.addItem(data);

        event.preventDefault();

    }

    return (
        <form className={classes.form} onSubmit={addItem}>
            <Input
            input={{
                label:'Amount',
                id:'amount_'+ props.id,
                step:'1',
                min:'1',
                max:'5',
                defaultValue:'1',
                type:'number'
            } } onChange={changeAmount}
            />
            <button type='submit'>+ Add</button>
            { !isValidAmount &&<p>Enter valid amount for dish is should be (1-5)</p>}
        </form>
    );
}



export default MealItemForm;