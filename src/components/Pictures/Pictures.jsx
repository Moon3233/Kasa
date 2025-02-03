import React, { useState } from "react";
import "./Pictures.scss";

function Pictures({ pictures }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    if (!pictures || pictures.length === 0) {
        return <p>Chargement des images...</p>;
    }

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
        );
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="carousel">
            <img
                src={pictures[currentIndex]}
                alt={`Logement ${currentIndex + 1}`}
                className="carousel-image"
            />
            <button className="prev" onClick={handlePrevClick}>
                &#10094;
            </button>
            <button className="next" onClick={handleNextClick}>
                &#10095;
            </button>
            <div className="carousel-indicator">
                {currentIndex + 1}/{pictures.length}
            </div>
        </div>
    );
}

export default Pictures;
