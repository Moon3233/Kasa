import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Host.scss";

function Host() {
    const { id } = useParams(); // Récupère l'ID du logement depuis l'URL
    const [host, setHost] = useState(null); // État pour stocker les informations de l'hôte

    useEffect(() => {
        // Effectue une requête pour récupérer les données du logement
        fetch("/logements.json")
            .then((response) => response.json())
            .then((data) => {
                // Trouve le logement correspondant à l'ID
                const selectedLogement = data.find((logement) => logement.id === id);
                if (selectedLogement) {
                    // Met à jour les informations de l'hôte
                    setHost(selectedLogement.host);
                }
            })
            .catch((error) => console.error("Erreur lors du chargement des informations de l'hôte :", error));
    }, [id]);

    if (!host) {
        return <p>Chargement des informations de l'hôte...</p>; // Message pendant le chargement
    }

    // Séparation du prénom et du nom
    const [firstName, lastName] = host.name.split(' ');

    return (
        <div className="host">
            <img src={host.picture} alt={host.name} className="host-picture" />
            <div className="host-name">
                <p>{firstName}</p>
                <p>{lastName}</p>
            </div>
        </div>
    );
}

export default Host;
