import React from 'react';
import './Header.css';

function Header() {
    return (
        <header className="header">
            <div className="logo">FoodEx</div>
            <nav>
                <a href="#home">Home</a>
                <a href="#menu">Dish Categories</a>
                <a href="#shop">Shop</a>
                <a href="#more">More</a>
                <button>Login</button>
            </nav>
        </header>
    );
}

export default Header;
