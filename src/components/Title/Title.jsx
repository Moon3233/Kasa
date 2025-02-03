import React from "react";
import "./Title.scss";

function Title({ title }) {
    if (!title) {
        return <p>Chargement du titre...</p>;
    }

    return <h1 className="logement-title">{title}</h1>;
}

export default Title;
