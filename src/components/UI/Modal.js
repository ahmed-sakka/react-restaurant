import ReactDOM from 'react-dom';
import classes from './Modal.module.css';

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClick} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const overlays = document.getElementById('overlays');

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClick={props.onClick} />, overlays)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        overlays
      )}
    </>
  );
};

export default Modal;
