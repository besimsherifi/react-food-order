import React from 'react'
import classes from './Header.module.css'
import mealsImage from '../../assets/meals.jpeg'
import HeaderCardButton from './HeaderCardButton'


function Header(props) {
  return (
    <>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <HeaderCardButton onClick={props.onShowCart}/>
        </header>
        <div className={classes['main-image'] }>
            <img src={mealsImage} alt="" />
        </div>
    </>
  )
}

export default Header