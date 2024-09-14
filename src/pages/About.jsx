import React from "react";
import "./About.scss";
import Reliability from "../components/Reliability";
import Respect from "../components/Respect";
import Service from "../components/Service";
import Safety from "../components/Safety";

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
