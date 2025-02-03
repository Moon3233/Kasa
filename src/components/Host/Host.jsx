import React from "react";
import "./Host.scss";

function Host({ host }) {
    if (!host) {
        return <p>Chargement des informations de l'hôte...</p>;
    }

    const [firstName, lastName] = host.name.split(' ');

    return (
        <div className="host">
            <img src={host.picture} alt={host.name} className="host-picture" />
            <div className="host-name">
                <p>{firstName}</p>
                <p>{lastName}</p>
            </div>
        </div>
    );
}

export default Host;
