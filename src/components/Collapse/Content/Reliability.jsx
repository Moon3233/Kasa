import React from "react";
import Collapse from "../Collapse";

function Reliability() {
    const content = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.";

    return <Collapse title="Fiabilité" content={content} />;
}

export default Reliability;
