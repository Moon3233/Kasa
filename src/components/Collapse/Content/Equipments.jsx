import React from "react";
import Collapse from "../Collapse";

function Equipments({ equipments = [] }) {
    if (!equipments) {
        return <p>Chargement des équipements...</p>;
    }

    return <Collapse title="Équipements" content={equipments} />;
}

export default Equipments;
