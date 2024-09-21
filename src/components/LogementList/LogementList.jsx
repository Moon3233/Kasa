import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './LogementList.scss';

function LogementList() {
    const [logements, setLogements] = useState([]);

    useEffect(() => {
        // Chargement des données depuis le fichier logements.json
        fetch("/logements.json")
            .then((response) => response.json())
            .then((data) => setLogements(data))
            .catch((error) =>
                console.error(
                    "Erreur lors du chargement des logements :",
                    error
                )
            );
    }, []);

    return (
        <div className="logement-list">
            <div className="logement-grid">
                {logements.map((logement) => (
                    <div key={logement.id} className="logement-card">
                        <Link to={`/logement/${logement.id}`}>
                            <div className="logement-image-wrapper">
                                <img
                                    src={logement.cover}
                                    alt={logement.title}
                                    className="logement-image"
                                />
                                <h2 className="logement-title">{logement.title}</h2>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default LogementList;
