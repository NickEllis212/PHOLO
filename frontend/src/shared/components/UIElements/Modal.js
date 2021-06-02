import React from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group'; //enables to have the forms slide in and out.

import Backdrop from './Backdrop'; //reusing the back drop to allow a backdrop behind the map form
import './Modal.css';

const ModalOverlay = props => { //this is the visable map overlay 
  const content = (
    <div className={`modal ${props.className}`} style={props.style}>
      <header className={`modal__header ${props.headerClass}`}>
        <h2>{props.header}</h2>
      </header>
      <form
        onSubmit={
          props.onSubmit ? props.onSubmit : event => event.preventDefault()
        }
      >
        <div className={`modal__content ${props.contentClass}`}>  {/* `` is a dynamic class that allows the headers and content to be flexible.*/}
          {props.children}
        </div>
        <footer className={`modal__footer ${props.footerClass}`}>
          {props.footer}
        </footer>
      </form>
    </div>
  );
  return ReactDOM.createPortal(content, document.getElementById('modal-hook'));
};

const Modal = props => {
  return (
    <React.Fragment>
      {props.show && <Backdrop onClick={props.onCancel} />} {/*When the form is open, clicking on the background with cancel it*/}
      <CSSTransition
        in={props.show}
        mountOnEnter
        unmountOnExit
        timeout={200}
        classNames="modal"
      >
        <ModalOverlay {...props} />{/* takes the props past to modal and forwards them to modaloverlay*/}
       </CSSTransition>
    </React.Fragment>
  );
};

export default Modal;
