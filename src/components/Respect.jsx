import React, { useState } from "react";

import "./Respect.scss";

function Respect() {
    const [isOpen, setIsOpen] = useState(false);

    // Fonction pour basculer l'état d'affichage
    const toggleRespect = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="respect">
            <div className="respect-header" onClick={toggleRespect}>
                <h2>Respect</h2>
                <span className={`chevron ${isOpen ? "open" : ""}`}>
                    &#10092;
                </span>
            </div>

            <div className={`respect-content ${isOpen ? "open" : ""}`}>
                <p>
                    La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage
                    entraînera une exclusion de notre plateforme.
                </p>
            </div>
        </div>
    );
}

export default Respect;
