import { Fragment } from "react";
import ReactDOM  from 'react-dom';

import classes from "../UI/Modal.module.scss";

const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onClose}/>
};

const ModalOverlay = (props) => {
    return (
<div className={classes.modal}>
    <div className={classes.content}>{props.children}</div>
</div>
    );
};

const Modal = (props) => {
    return <Fragment>
        <Backdrop onClick={props.onClose}/>
        <ModalOverlay>{props.children}</ModalOverlay>
    </Fragment>
};

export default Modal;

