import React from 'react'

function Input(props) {
  return (
    <>
        <div>
            <label htmlFor="">{props.input.id}</label>
            <input type="text" />
        </div>
    </>
  )
}

export default Input