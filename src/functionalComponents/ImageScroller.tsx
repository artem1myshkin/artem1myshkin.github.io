import React, { useState } from 'react';
import { Image } from "react-bootstrap";
import "../styles/imageScroller.scss";

interface ImageSliderProps {
    images: string[]; // Массив строк с путями к изображениям
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="image-slider">
            {/* Левая стрелка */}
            <button
                onClick={handlePrev}
                className="slider-button slider-button--left"
            >
                &#10094;
            </button>

            {/* Изображение */}
            <Image
                src={images[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
                className="slider-image"
            />

            {/* Правая стрелка */}
            <button
                onClick={handleNext}
                className="slider-button slider-button--right"
            >
                &#10095;
            </button>
        </div>
    );
};

export default ImageSlider;

