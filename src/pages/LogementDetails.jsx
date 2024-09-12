import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function LogementDetails() {
    const { id } = useParams();
    const [logement, setLogement] = useState(null);

    useEffect(() => {
        fetch("/logements.json")
            .then((response) => response.json())
            .then((data) => {
                const foundLogement = data.find((item) => item.id === id);
                setLogement(foundLogement);
            })
            .catch((error) =>
                console.error("Erreur lors du chargement du logement :", error)
            );
    }, [id]);

    return (
        <div>
            <h1>{logement.title}</h1>
            <img src={logement.cover} alt={logement.title} width="500px" />
            <p>{logement.description}</p>
            <p>Localisation : {logement.location}</p>
            <p>Note : {logement.rating}/5</p>
            <p>Hôte : {logement.host.name}</p>
            <ul>
                {logement.equipments.map((equip, index) => (
                    <li key={index}>{equip}</li>
                ))}
            </ul>
        </div>
    );
}

export default LogementDetails;
