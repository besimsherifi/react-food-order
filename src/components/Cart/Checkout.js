import React from 'react'
import classes from './Checkout.module.css'
import { useRef } from 'react';

function Checkout(props) {

    const nameRef = useRef();
    const streetRef = useRef();
    const postalRef = useRef();
    const cityRef = useRef();

    function submitted(event){
        event.preventDefault();
        const name = nameRef.current.value;
        const street = streetRef.current.value;
        const postal = postalRef.current.value;
        const city = cityRef.current.value;
    }

  return (
    <form onSubmit={submitted}>
        <div className={classes.control}>
            <label htmlFor="name">Your name</label>
            <input type="text" id="name" ref={nameRef} />
        </div>
        <div className={classes.control}>
            <label htmlFor="street">Street</label>
            <input type="text" id="street" ref={streetRef} />
        </div>
        <div className={classes.control}>
            <label htmlFor="postal">Postal Code</label>
            <input type="text" id="postal" ref={postalRef} />
        </div>
        <div className={classes.control}>
            <label htmlFor="city">City</label>
            <input type="text" id="city" ref={cityRef} />
        </div>
        <div className={classes.actions}>
            <button type='button' onClick={props.onCancel}>Cancel</button>
            <button className={classes.submit}>Confirm</button>
        </div>
    </form>
  )
}

export default Checkout