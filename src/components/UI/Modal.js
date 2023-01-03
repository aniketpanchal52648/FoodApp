import  ReactDOM  from 'react-dom';
import { Fragment } from 'react';
import classes from '../UI/Modal.module.css';
const Backdrop =props=>{
    return <div className={classes.backdrop} onClick={props.onClose}></div>
}
const ModalOverlays =props=>{
    return (<div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>)
};
const Modal =props=>{
    const PortalLocation=document.getElementById('overlays');
    return <Fragment>

    {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>,PortalLocation)}
    {ReactDOM.createPortal(<ModalOverlays>{props.children}</ModalOverlays>,PortalLocation)}
    </Fragment>
};

export default Modal;