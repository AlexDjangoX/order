import React from "react";
import { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = () => {
  return <div className={classes.backdrop}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays"); // where to portal to...

// What to portal...<Backdrop/>, <ModalOverlay> </ModalOverlay>

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>, // pass props.children so that in ModalOverlay it can be used
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
