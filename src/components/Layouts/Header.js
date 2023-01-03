import { Fragment } from "react";
import mealImg from '../../assets/meals.jpg';
import classes from '../Layouts/Header.module.css';
import CardButton from "./CardButton";
const Header=(props)=>{
    const openCart=()=>{
        props.openC();
    }
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>Food At Home</h1>
                <CardButton open={openCart}/>
            </header>
            <div className={classes['main-image']}>
                <img src={mealImg} alt='Food on table' />
            </div>
        </Fragment>
    );
}
export default Header;