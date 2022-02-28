import React, {useContext} from 'react'
import CartContext from '../../store/cart-context'
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCardButton.module.css'


function HeaderCardButton(props) {

    const cartCtx = useContext(CartContext)

    const numberOfItems = cartCtx.items.reduce((curentNumber, item) => {
        return curentNumber + item.amount;
    }, 0);

  return (
    <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon></CartIcon>
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfItems}</span>
    </button>
  )
}

export default HeaderCardButton