import React, {useReducer} from 'react'
import CartContext from './cart-context'

const defaultCartState = {
  items: [],
  totalAmount: 0
}

function cartReducer(state, action) {
  if(action.type === 'ADD'){
    const updatedItems = state.items.concat(action.item);
    const updatedAmount = state.totalAmount + action.item.price * action.item.amount;
    return{
      items: updatedItems,
      totalAmount: updatedAmount
    };
  }
  return defaultCartState
}

function CardProvider(props) {

    const [cartState, dispatchCart] = useReducer(cartReducer, defaultCartState)

    function addItemToChart(item){
      dispatchCart({type: 'ADD', item: item})
    }

    function removeItemFromChart(id){
      dispatchCart({type: 'REMOVE', id: id})
    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToChart,
        removeItem: removeItemFromChart
    }
  return (
    <>
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>  
    </>
  )
}

export default CardProvider