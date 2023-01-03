import { useContext } from 'react';
import classes from '../Cart/CartItem.module.css';
import CartContext from '../../store/cart-context';


const CartItem = (props) => {
  const cartCtx=useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;
  const onRemove=()=>{
    // console.log(props.id);
    cartCtx.removeItem(props.id);
  }
  const onAdd=()=>{
    cartCtx.addItem({
      title:props.title,
      id:props.id,
      amount:1,
      price:props.price

    })
  };
  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={onRemove}>−</button>
        <button onClick={onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
