import React from "react";
import Collapse from "../Collapse";

function Respect() {
    const content = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.";

    return <Collapse title="Respect" content={content} />;
}

export default Respect;
