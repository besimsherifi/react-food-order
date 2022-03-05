import React from 'react'
import classes from './Checkout.module.css'
import { useRef, useState } from 'react';

const isEmpty = (value) => value.trim() === '';
const isFiveChars = (value) => value.trim().length === 5;



function Checkout(props) {

    const [formValidity, setFormValidity] = useState({
        name: true,
        street: true,
        city: true,
        postalCode: true
    })

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

        const enteredNameIsValid = !isEmpty(name);
        const enteredStreetIsValid = !isEmpty(street);
        const enteredCityIsValid = !isEmpty(city);
        const enteredPostalCodeIsvalid = isFiveChars(postal);

        setFormValidity({
            name: enteredCityIsValid,
            street: enteredStreetIsValid,
            city: enteredCityIsValid,
            postalCode: enteredPostalCodeIsvalid
        })

        const formIsValid = 
            enteredNameIsValid && 
            enteredStreetIsValid && 
            enteredCityIsValid &&
            enteredPostalCodeIsvalid

        if (!formIsValid){
            return
        }
        props.onConfirm({
            name: name,
            steet: street,
            city: city,
            postal: postal 
        });

    }

  return (
    <form className={classes.form} onSubmit={submitted}>
        <div className={`${classes.control} ${formValidity.name ? '' : classes.invalid}`}>
            <label htmlFor="name">Your name</label>
            <input type="text" id="name" ref={nameRef} />
            {!formValidity.name && <p>PLease enter a valid name</p>}
        </div>
        <div className={`${classes.control} ${formValidity.street ? '' : classes.invalid}`}>
            <label htmlFor="street">Street</label>
            <input type="text" id="street" ref={streetRef} />
            {!formValidity.street && <p>PLease enter a valid street</p>}
        </div>
        <div className={`${classes.control} ${formValidity.postalCode ? '' : classes.invalid}`}>
            <label htmlFor="postal">Postal Code</label>
            <input type="text" id="postal" ref={postalRef} />
            {!formValidity.postalCode && <p>PLease enter a valid postal code (5 char. long)</p>}
        </div>
        <div className={`${classes.control} ${formValidity.city ? '' : classes.invalid}`}>
            <label htmlFor="city">City</label>
            <input type="text" id="city" ref={cityRef} />
            {!formValidity.city && <p>PLease enter a valid city</p>}
        </div>
        <div className={classes.actions}>
            <button type='button' onClick={props.onCancel}>Cancel</button>
            <button className={classes.submit}>Confirm</button>
        </div>
    </form>
  )
}

export default Checkout