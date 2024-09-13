import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./LogementDescription.scss";

function LogementDescription() {
    const { id } = useParams(); // Récupère l'ID du logement depuis l'URL
    const [description, setDescription] = useState("");
    const [isOpen, setIsOpen] = useState(false); // Gère l'affichage ou non de la description

    // Fonction pour basculer l'état d'affichage
    const toggleDescription = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        fetch("/logements.json")
            .then((response) => response.json())
            .then((data) => {
                const selectedLogement = data.find((logement) => logement.id === id);
                if (selectedLogement) {
                    setDescription(selectedLogement.description);
                }
            })
            .catch((error) =>
                console.error("Erreur lors du chargement des logements :", error)
            );
    }, [id]);

    if (!description) {
        return <p>Chargement de la description...</p>;
    }

    return (
        <div className="logement-description">
            <div className="description-header" onClick={toggleDescription}>
                <h2>Description</h2>
                <span className={`chevron ${isOpen ? "open" : ""}`}>
                    &#10092;
                </span>
            </div>

            {/* Détails de la description, qui s'affichent seulement si isOpen est true */}
            <div className={`description-content ${isOpen ? "open" : ""}`}>
            <p>{description}</p>
            </div>
        </div>
    );
}

export default LogementDescription;
