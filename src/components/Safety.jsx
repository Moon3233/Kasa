import React, { useState } from "react";

import "./Safety.scss";

function Safety() {
    const [isOpen, setIsOpen] = useState(false);

    // Fonction pour basculer l'état d'affichage
    const toggleSafety = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="safety">
            <div className="safety-header" onClick={toggleSafety}>
                <h2>Safety</h2>
                <span className={`chevron ${isOpen ? "open" : ""}`}>
                    &#10092;
                </span>
            </div>

            <div className={`safety-content ${isOpen ? "open" : ""}`}>
                <p>
                    La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité
                    établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards
                    sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
                </p>
            </div>
        </div>
    );
}

export default Safety;
