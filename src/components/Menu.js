import React from 'react';
import './Menu.css';

function Menu() {
    const menuItems = [
        { name: 'Margherita Pizza', price: '$10.99' },
        { name: 'Beef Stroganoff', price: '$14.99' },
        { name: 'Chicken Tikka Masala', price: '$13.99' },
        { name: 'Greek Salad', price: '$9.99' },
        { name: 'Pasta Primavera', price: '$11.99' },
        { name: 'Spicy Tofu stir-fry', price: '$11.99' },
        { name: 'Shrimp Fried Rice', price: '$8.99' },
        { name: 'Classic Cheeseburger', price: '$7.99' },

    ];

    return (
        <section id ="menu" className="menu">
            <h2>Explore Our Delectable Menus</h2>
            <div className="menu-items">
                {menuItems.map((item, index) => (
                    <div key={index} className="menu-item">
                        <h3>{item.name}</h3>
                        <p>{item.price}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Menu;