import React from 'react'
import Card from '../UI/Card';
import classes from './AvailableMeals.module.css'
import MealItem from './MealItem/MealItem';
import { useEffect, useState } from 'react';





function AvailableMeals() {

  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  async function fetchMeals(){
    try{
      const res = await fetch('https://react-http-c8db8-default-rtdb.europe-west1.firebasedatabase.app/meals.json');
      if (!res.ok) {
        throw new Error('Something went wrong');
      }
      const resData = await res.json();

      const loadedMeals = [];

      for (const key in resData){
        loadedMeals.push({
          id: key,
          name: resData[key].name,
          description: resData[key].description,
          price: resData[key].price,
        });
      }
      setMeals(loadedMeals);
      setIsLoading(false);
    }catch (error){
      setIsLoading(false);
      setError(error.message)
    }
      
     }

  useEffect(() => {
    fetchMeals();
  }, [])
  

  return (
    <>
        <section className={classes.meals}>
            <Card>
                <ul>
                  {isLoading && <p style={{'textAlign': 'center'}}>Loading...</p>}
                  {error && <p style={{'textAlign': 'center'}}>{error}</p>}
                    {meals.map(meal => (
                        <MealItem 
                            key={meal.id} 
                            id={meal.id}
                            name={meal.name} 
                            description={meal.description} 
                            price={meal.price}/>
                    ))}
                </ul>
            </Card>
        </section>
    </>
  )
}

export default AvailableMeals