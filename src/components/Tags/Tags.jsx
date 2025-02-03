import React from "react";
import "./Tags.scss";

function Tags({ tags }) {
    if (!tags || tags.length === 0) {
        return <p>Chargement des tags...</p>;
    }

    return (
        <div className="tags-container">
            {tags.map((tag, index) => (
                <span key={index} className="tag">
                    {tag}
                </span>
            ))}
        </div>
    );
}

export default Tags;
