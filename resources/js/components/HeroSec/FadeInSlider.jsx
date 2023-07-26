import React, { useState, useEffect } from 'react';
import './FadeInSlider.css';

function FadeInSlider({ images }) {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [images]);

    return (
        <div className="fade-in-slider">
            {images.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className={index === activeIndex ? 'active' : ''}
                    style={{ transitionDelay: `${index * 0.5}s` }}
                />
            ))}
        </div>
    );
}

export default FadeInSlider;

