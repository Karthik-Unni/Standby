import React from 'react';
import './WhyChooseUs.css';

function WhyChooseUs() {
    return (
        <section className="why-choose-us">
            <h2>Why Our Menus Stand Out</h2>
            <div className="features">
                <div className="feature">
                    <h3>Fresh Ingredients</h3>
                    <p>Only the freshest, high-quality ingredients go into our dishes, ensuring every bite bursts with flavor and nutrients.</p>
                </div>
                <div className="feature">
                    <h3>Authentic Recipes</h3>
                    <p>Our chefs use authentic recipes from around the world to bring you a taste of different cultures, right to your table.</p>
                </div>
                <div className="feature">
                    <h3>Fast Delivery</h3>
                    <p>Get your meals hot and fresh, delivered quickly so you can enjoy restaurant-quality food in the comfort of your home.</p>
                </div>
                <div className="feature">
                    <h3>Customizable Options</h3>
                    <p>Relish the healthy and flavorful Mediterranean diet, with fresh seafood, hummus, falafel, and vibrant salads.</p>
                </div>
            </div>
        </section>
    );
}

export default WhyChooseUs;
