import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function TransitionsModal(props: any) {
  const classes = useStyles();
  const order = useSelector((state: any) => state.order);
  const { email, username, address, total, cartItems, id, createdAt } = order

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={props.open}
        onClose={props.handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.open}>
          <div className={classes.paper}>
            <h2>Your Order</h2>
            <p id="transition-modal-description">Order ID: {id}</p>
            <h3 id="transition-modal-title">Name: {username}</h3>
            <h3 id="transition-modal-title">Total Amount ${total}</h3>
            <p id="transition-modal-description">Address: {address}</p>
            <p id="transition-modal-description">Email: {email}</p>
            <p id="transition-modal-description">Time: {createdAt}</p>
            <p id="transition-modal-description">Items Count: {cartItems.length}</p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}