import React from 'react'
import Modal from '../UI/Modal'
import classes from './Cart.module.css'

function Cart(props) {

    const cartItems = <ul className={classes['cart-items']}>{[{id:'1', name:'sushi', amount:2, price:12.99}].map((item) => <li key={item.id}>{item.name}</li>)}</ul>

  return (
    <>
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>12</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    </>
  )
}

export default Cart