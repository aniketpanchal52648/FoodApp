import { useContext } from "react";
import CartIcon from "../Cart/CardIcon";
import classes from '../Layouts/CardButton.module.css';
import CartContext from "../../store/cart-context";
const CardButton =props =>{
    const Cartctx=useContext(CartContext);
    // console.log(Cartctx);
    const openCart=() =>{
        // console.log('clicked!!');
        props.open();
    }
    // let num=0;
    // const numberOfItems=Cartctx.items.reduce((currNum,item)=>{
    //     // num+=item.amount;
    //     return +(currNum+item.amount);
    // },0);
    let numberOfItems=0;
    // console.log(Cartctx.items);
    Cartctx.items.forEach(ele =>{
        numberOfItems+= (+ele.amount);
    })
    return (
        <button className={classes.button} onClick={openCart}>
            <span className={classes.icon}>
                <CartIcon/>
            </span>
            <span>
                Your Order
            </span>
            <span className={classes.badge}> {numberOfItems}</span>
        </button>
    );

}
export default CardButton ;