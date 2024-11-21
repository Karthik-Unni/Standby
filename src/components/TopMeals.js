import React from 'react';
import './TopMeals.css';

function TopMeals() {
    const meals = [
        { name: 'Grilled Chicken', price: '$12.99', description: 'Freshly grilled chicken served on a bed of crisp greens with a light vinaigrette.', image: '/Assets/grilled-chicken.jpg' },
        { name: 'Classic Breakfast', price: '$9.99', description: 'Eggs, bacon, toast, and a side of fruit for the perfect start to your day.', image: '/Assets/classic-breakfast.jpg' },
        { name: 'Beef Burger', price: '$14.99', description: 'Juicy beef patty with fresh lettuce, tomato, and a special sauce.', image: '/Assets/Beef-Burger.jpg' },
        { name: 'Spaghetti Bolognese', price: '$11.99', description: 'Classic Italian pasta with rich meat sauce and parmesan cheese.', image: '/Assets/spaghetti-bolognese.jpg' },
        { name: 'Chicken Caesar Wrap', price: '$10.99', description: 'Grilled chicken, romaine lettuce, and Caesar dressing in a soft tortilla.', image: '/Assets/chicken-caesar-wrap.jpg' },
        { name: 'Veg Sushi Platter', price: '$13.99', description: 'A colorful assortment of vegetarian sushi rolls.', image: '/Assets/veg-sushi-platter.jpg' },
    ];

    return (
        <section className="top-meals">
            <h2>Our Top Meals</h2>
            <div className="meal-list">
                {meals.map((meal, index) => (
                    <div key={index} className="meal">
                        <img src={meal.image} alt={meal.name} className="meal-image" />
                        <h3>{meal.name}</h3>
                        <p>{meal.description}</p>
                        <span>{meal.price}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default TopMeals;
