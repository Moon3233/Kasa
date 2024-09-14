import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Location.scss";

function Location() {
    const { id } = useParams(); // Récupère l'ID du logement depuis l'URL
    const [location, setLocation] = useState(""); // État pour stocker la localisation du logement

    useEffect(() => {
        // Effectue une requête pour récupérer les données du logement
        fetch("/logements.json")
            .then((response) => response.json())
            .then((data) => {
                // Trouve le logement correspondant à l'ID
                const selectedLogement = data.find((logement) => logement.id === id);
                if (selectedLogement) {
                    // Met à jour la localisation du logement
                    setLocation(selectedLogement.location);
                }
            })
            .catch((error) => console.error("Erreur lors du chargement de la localisation :", error));
    }, [id]);

    if (!location) {
        return <p>Chargement de la localisation...</p>; // Message pendant le chargement
    }

    return (
        <p className="logement-location">{location}</p>
    );
}

export default Location;
