import React from "react";
import "./About.scss";
import Reliability from "../components/Collapse/Content/Reliability";
import Respect from "../components/Collapse/Content/Respect";
import Service from "../components/Collapse/Content/Service";
import Safety from "../components/Collapse/Content/Safety";

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
                <Respect/>
                <Service/>
                <Safety/>
            </div>
        </div>
    );
}

export default About;
