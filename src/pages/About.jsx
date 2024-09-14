import React from "react";
import Reliability from "../components/Reliability";
import "./About.scss";

function About() {
    return (
        <div className="about">

            <img
                    src="/images/faq-img.png"
                    alt="Bannière de la section à propos"
                    className="banner-image"
                />

            <div className="faq">
                <Reliability />
            </div>
        </div>
    );
}

export default About;
