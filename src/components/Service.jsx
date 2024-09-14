import React, { useState } from "react";

import "./Service.scss";

function Service() {
    const [isOpen, setIsOpen] = useState(false);

    // Fonction pour basculer l'état d'affichage
    const toggleService = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="service">
            <div className="service-header" onClick={toggleService}>
                <h2>Service</h2>
                <span className={`chevron ${isOpen ? "open" : ""}`}>
                    &#10092;
                </span>
            </div>

            <div className={`service-content ${isOpen ? "open" : ""}`}>
                <p>
                    La qualité du service est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos
                    hôtes ou nos locataires, soit empreinte de respect et de bienveillance.
                </p>
            </div>
        </div>
    );
}

export default Service;
