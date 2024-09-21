import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStar as faEmptyStar } from "@fortawesome/free-solid-svg-icons";
import "./Rating.scss";

function Rating() {
    const { id } = useParams(); // Récupère l'ID du logement depuis l'URL
    const [rating, setRating] = useState(0); // State pour stocker le rating

    useEffect(() => {
        fetch("/logements.json")
            .then((response) => response.json())
            .then((data) => {
                const selectedLogement = data.find((logement) => logement.id === id);
                if (selectedLogement) {
                    setRating(parseFloat(selectedLogement.rating));
                }
            })
            .catch((error) => console.error("Erreur lors du chargement du rating :", error));
    }, [id]);

    // Génère les étoiles en fonction du rating
    const renderStars = () => {
        const totalStars = 5;
        const stars = [];

        for (let i = 1; i <= totalStars; i++) {
            if (i <= rating) {
                stars.push(<FontAwesomeIcon key={i} icon={faStar} size="sm" className="star filled" />);
            } else {
                stars.push(<FontAwesomeIcon key={i} icon={faEmptyStar} size="sm" className="star empty" />);
            }
        }

        return stars;
    };

    return (
        <div className="rating">
            {renderStars()}
        </div>
    );
}

export default Rating;
