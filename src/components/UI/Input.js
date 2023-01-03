import classes from '../UI/Input.module.css';

const Input =props=>{
    return (
        <div className={classes.input}>
            <label htmlFor={props.input.id}>{props.input.label}</label>
            <input {...props.input} onChange={props.onChange}></input>
        </div>
    );


}
export default Input