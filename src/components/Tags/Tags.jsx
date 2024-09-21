import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Tags.scss";

function Tags() {
    const { id } = useParams(); // Récupère l'ID du logement depuis l'URL
    const [tags, setTags] = useState([]); // State pour stocker les tags

    useEffect(() => {
        fetch("/logements.json")
            .then((response) => response.json())
            .then((data) => {
                const selectedLogement = data.find((logement) => logement.id === id);
                if (selectedLogement) {
                    setTags(selectedLogement.tags);
                }
            })
            .catch((error) => console.error("Erreur lors du chargement des tags :", error));
    }, [id]);

    if (tags.length === 0) {
        return <p>Chargement des tags...</p>;
    }

    return (
        <div className="tags-container">
            {tags.map((tag, index) => (
                <span key={index} className="tag">
                    {tag}
                </span>
            ))}
        </div>
    );
}

export default Tags;
