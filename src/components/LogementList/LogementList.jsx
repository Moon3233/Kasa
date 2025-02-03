import React from "react";
import { Link } from "react-router-dom";
import './LogementList.scss';

function LogementList({ logements }) {
    if (!logements || logements.length === 0) {
        return <p>Chargement des logements...</p>;
    }

    return (
        <div className="logement-list">
            <div className="logement-grid">
                {logements.map((logement) => (
                    <div key={logement.id} className="logement-card">
                        <Link to={`/logement/${logement.id}`}>
                            <div className="logement-image-wrapper">
                                <img
                                    src={logement.cover}
                                    alt={logement.title}
                                    className="logement-image"
                                />
                                <h2 className="logement-title">{logement.title}</h2>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default LogementList;
