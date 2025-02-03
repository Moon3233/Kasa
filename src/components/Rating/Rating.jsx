import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStar as faEmptyStar } from "@fortawesome/free-solid-svg-icons";
import "./Rating.scss";

function Rating({ rating }) {
    const totalStars = 5;
    const renderStars = () => {
        return Array.from({ length: totalStars }, (_, i) => (
            <FontAwesomeIcon 
                key={i} 
                icon={i < rating ? faStar : faEmptyStar} 
                size="sm" 
                className={`star ${i < rating ? "filled" : "empty"}`} 
            />
        ));
    };

    return <div className="rating">{renderStars()}</div>;
}

export default Rating;
