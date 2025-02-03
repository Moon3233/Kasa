import React from "react";
import "./About.scss";
import CollapseContainer from "../components/Collapse/Content/CollapseContainer";

function About() {
    return (
        <div className="about">

            <img
                    src="/images/faq-img.png"
                    alt="Bannière de la section à propos"
                    className="banner-image"
                />

            <div className="faq">
                <CollapseContainer />
            </div>
        </div>
    );
}

export default About;
