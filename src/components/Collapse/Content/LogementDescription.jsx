import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Collapse from "../Collapse";

function LogementDescription() {
    const { id } = useParams(); 
    const [description, setDescription] = useState("");

    useEffect(() => {
        fetch("/logements.json")
            .then((response) => response.json())
            .then((data) => {
                const selectedLogement = data.find((logement) => logement.id === id);
                if (selectedLogement) {
                    setDescription(selectedLogement.description);
                }
            })
            .catch((error) => console.error("Erreur lors du chargement des logements :", error));
    }, [id]);

    if (!description) {
        return <p>Chargement de la description...</p>;
    }

    return <Collapse title="Description" content={description} />;
}

export default LogementDescription;
