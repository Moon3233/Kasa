import React, { useState } from "react";
import "./Collapse.scss";

function Collapse({ title, content }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSection = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="collapse">
            <div className="collapse-header" onClick={toggleSection}>
                <h2>{title}</h2>
                <span className={`chevron ${isOpen ? "open" : ""}`}>
                    &#10092;
                </span>
            </div>
            <div className={`collapse-content ${isOpen ? "open" : ""}`}>
                {typeof content === "string" ? (
                    <p>{content}</p>
                ) : (
                    <ul>
                        {content.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default Collapse;
