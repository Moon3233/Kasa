import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Title.scss";

function Title() {
    const { id } = useParams(); // Récupère l'ID du logement depuis l'URL
    const [title, setTitle] = useState(""); // État pour stocker le titre du logement

    useEffect(() => {
        // Effectue une requête pour récupérer les données du logement
        fetch("/logements.json")
            .then((response) => response.json())
            .then((data) => {
                // Trouve le logement correspondant à l'ID
                const selectedLogement = data.find((logement) => logement.id === id);
                if (selectedLogement) {
                    // Met à jour le titre du logement
                    setTitle(selectedLogement.title);
                }
            })
            .catch((error) => console.error("Erreur lors du chargement du titre :", error));
    }, [id]);

    if (!title) {
        return <p>Chargement du titre...</p>; // Message pendant le chargement
    }

    return (
        <h1 className="logement-title">{title}</h1>
    );
}

export default Title;
