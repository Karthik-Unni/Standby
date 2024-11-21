import React from 'react';
import './CuisineCategories.css';

function CuisineCategories() {
    const cuisines = [
        { name: 'Italian', description: 'Savor the rich flavors of Italy with classics like pasta, pizza, and more.', image: '/Assets/2.jpg' },
        { name: 'Chinese', description: 'Dive into the vibrant world of Chinese cuisine with dim sum and stir-fries.', image: '/Assets/3.jpg'  },
        { name: 'Mexican', description: 'Enjoy bold, zesty flavors with tacos and burritos.', image: '/Assets/m.jpg' },
        { name: 'Indian', description: 'Experience the rich, aromatic spices of India with curries and tandoori.', image: '/Assets/d.jpg' },
        { name: 'Japanese', description: 'Indulge in Japanese cuisine with sushi and ramen.', image: '/Assets/su.jpg' },
        { name: 'Mediterranean', description: 'Relish the healthy Mediterranean diet with seafood and hummus.', image: '/Assets/me.jpg'  },
    ];

    return (
        <section className="cuisines">
            <h2>Explore International Cuisines</h2>
            <div className="cuisine-container">
                <div className="cuisine-list">
                    {cuisines.slice(0, 3).map((cuisine, index) => (
                        <div key={index} className="cuisine">
                            <img src={cuisine.image} alt={cuisine.name} />
                            <h3>{cuisine.name}</h3>
                            <p>{cuisine.description}</p>
                        </div>
                    ))}
                </div>
                <div className="center-image">
                    <img src='/Assets/21.jpeg'  alt="Featured Cuisine" />
                </div>
                <div className="cuisine-list">
                    {cuisines.slice(3, 6).map((cuisine, index) => (
                        <div key={index} className="cuisine">
                            <img src={cuisine.image} alt={cuisine.name} />
                            <h3>{cuisine.name}</h3>
                            <p>{cuisine.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default CuisineCategories;
