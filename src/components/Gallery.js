import React from 'react';
import './Gallery.css';

function Gallery() {
    return (
        <section className="gallery">
            <h2>Our Gallery</h2>
            <div className="gallery-images">
                <img src="/Assets/7.jpeg" ></img>
                <img src="/Assets/9.jpeg" ></img>
                <img src="/Assets/8.jpeg" ></img>
                <img src="/Assets/6.jpg" ></img>
            </div>
        </section>
    );
}

export default Gallery;
