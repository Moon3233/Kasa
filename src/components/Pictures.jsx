import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Pictures.scss";

function Pictures() {
    const { id } = useParams(); // Récupère l'ID du logement depuis l'URL
    const [pictures, setPictures] = useState([]); // State pour stocker les images
    const [currentIndex, setCurrentIndex] = useState(0); // Index de l'image actuelle

    useEffect(() => {
        fetch("/logements.json")
            .then((response) => response.json())
            .then((data) => {
                const selectedLogement = data.find((logement) => logement.id === id);
                if (selectedLogement) {
                    setPictures(selectedLogement.pictures);
                }
            })
            .catch((error) => console.error("Erreur lors du chargement des images :", error));
    }, [id]);

    // Gestion du bouton "Précédent"
    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
        );
    };

    // Gestion du bouton "Suivant"
    const handleNextClick = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
        );
    };

    if (pictures.length === 0) {
        return <p>Chargement des images...</p>;
    }

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
