import React, { useRef, useEffect } from 'react';
import '../components/ProductSlide.css'; // Import the CSS file for component styles

function ProductSlide({ images }) {
    const sliderRef = useRef(null);

    useEffect(() => {
        const slider = sliderRef.current;
        let scrollPosition = 0;

        const scroll = () => {
            scrollPosition += 1;
            slider.scroll(scrollPosition, 0);
        };

        const interval = setInterval(scroll, 10);


        return () => clearInterval(interval);
    }, []);

    return (
        <div className="horizontal-slider"  ref={sliderRef}>
            <div className="slider-container">
                {images.map((image, index) => (
                    <img key={index} src={image} alt={`Slide ${index + 1}`} className="slider-image" />
                ))}
            </div>
        </div>
    );
}

export default ProductSlide;
