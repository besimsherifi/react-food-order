import React, {useRef, useState} from 'react'
import Input from '../../UI/Input'
import classes from './MealItemForm.module.css'

function MealItemForm(props) {

    const amountRef = useRef();
    const [amountValid, setAmountValid] = useState(true)

    function submited(event) {
        event.preventDefault();
        const enteredAmount = amountRef.current.value;
        const amount = +enteredAmount;
        if(enteredAmount.trim().legnth === 0 || enteredAmount < 1 || enteredAmount > 5){
            setAmountValid(false);
            return
        }
        props.onAddToChart(amount);
    }

  return (
    <>
        <form className={classes.form} onSubmit={submited}>
            <Input 
                ref={amountRef}
                label="Amount"
                input={{
                    id:'amount',
                    type:'number',
                    min:'1',
                    max:'5',
                    step:'1',
                    defaultValue:'1'
                }}
            />
            <button>Add</button>
            {!amountValid && <p>Please enter a valid amount</p>}
        </form>
    </>
  )
}

export default MealItemForm