import classes from "../Meals/AvailableMeals.module.scss"; 
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
    {
            id:'m1',
            name: 'Sushi',
            discription: 'Finest fish & veggies',
            price: 22.99,
    },
    {
            id:'m2',
            name: 'Schnitzel',
            discription: 'A german specialty!',
            price: 16.5,
    },
    {
        id:'m3',
        name: 'Barbecue Burger',
        discription: 'American, raw, meaty',
        price: 12.99,
    },
    {
        id:'m4',
        name: 'Green Bowl',
        discription: 'Healthy...and green...',
        price: 18.99, 
    },
];
const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map((meal) => (
        <MealItem 
        key={meal.id} 
        id= {meal.id}
        name={meal.name}
        discription={meal.discription} 
        price={meal.price} />
    ));

    return (
    <section className={classes.meals}>
        <ul>
        <Card>
            {mealsList}
        </Card>
        </ul>
    </section>
    )
}; 

export default AvailableMeals;