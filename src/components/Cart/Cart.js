import { useContext } from 'react';
import classes from '../Cart/Cart.module.css';
import Modal from '../UI/Modal';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';
const Cart=props=>{
    const ctx=useContext(CartContext);
    const CartItems=<ul className={classes['cart-items']}>{ctx.items.map((item)=> item.amount>0 && <CartItem amount={item.amount} name={item.title} price={item.price} id={item.id} key={item.id}></CartItem>)}</ul>
    const closeCart =()=>{
        props.close();
    }
    return (
        <Modal onClose={closeCart}>
            {ctx.totalAmount>0 && CartItems}
            <div className={classes.total}>
                <span>Total Amout</span>
                <span>{ctx.totalAmount.toFixed(2)}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={closeCart}>Close</button>
               {ctx.totalAmount>0 && <button className={classes.button} >Order</button>}
            </div>
        </Modal>
    );
}
export default Cart;