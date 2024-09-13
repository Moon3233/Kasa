import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Equipments.scss";

function Equipments() {
    const { id } = useParams(); // Récupère l'ID du logement depuis l'URL
    const [equipments, setEquipments] = useState([]);
    const [isOpen, setIsOpen] = useState(false); // Gère l'affichage ou non des équipements

    // Fonction pour basculer l'état d'affichage
    const toggleEquipments = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        fetch("/logements.json")
            .then((response) => response.json())
            .then((data) => {
                const selectedLogement = data.find((logement) => logement.id === id);
                if (selectedLogement) {
                    setEquipments(selectedLogement.equipments);
                }
            })
            .catch((error) =>
                console.error("Erreur lors du chargement des équipements :", error)
            );
    }, [id]);

    if (!equipments.length) {
        return <p>Chargement des équipements...</p>;
    }

    return (
        <div className="logement-equipments">
            <div className="equipments-header" onClick={toggleEquipments}>
                <h2>Équipements</h2>
                <span className={`chevron ${isOpen ? "open" : ""}`}>
                    &#10092;
                </span>
            </div>

            {/* Liste des équipements, qui s'affichent seulement si isOpen est true */}
            <div className={`equipments-content ${isOpen ? "open" : ""}`}>
                <ul>
                    {equipments.map((equipment, index) => (
                        <li key={index}>{equipment}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Equipments;
