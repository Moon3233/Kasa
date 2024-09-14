import React, { useState } from "react";

import "./Reliability.scss";

function Reliability() {
    const [isOpen, setIsOpen] = useState(false);

    // Fonction pour basculer l'état d'affichage
    const toggleReliability = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="reliability">
            <div className="reliability-header" onClick={toggleReliability}>
                <h2>Fiabilité</h2>
                <span className={`chevron ${isOpen ? "open" : ""}`}>
                    &#10092;
                </span>
            </div>

            <div className={`reliability-content ${isOpen ? "open" : ""}`}>
                <p>
                    Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont
                    régulièrement vérifiées par nos équipes.
                </p>
            </div>
        </div>
    );
}

export default Reliability;
