import React from "react";
import Collapse from "../Collapse";

function Service() {
    const content = "La qualité du service est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.";

    return <Collapse title="Service" content={content} />;
}

export default Service;
