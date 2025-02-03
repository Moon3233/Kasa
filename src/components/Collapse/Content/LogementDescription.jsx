import React from "react";
import Collapse from "../Collapse";

function LogementDescription({ description }) {
    if (!description) {
        return <p>Chargement de la description...</p>;
    }

    return <Collapse title="Description" content={description} />;
}

export default LogementDescription;
