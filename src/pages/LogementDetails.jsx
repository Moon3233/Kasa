import React from "react";
import LogementDescription from "../components/LogementDescription";
import "./LogementDetails.scss";
import Equipments from "../components/Equipments";
import Pictures from "../components/Pictures";
import Tags from "../components/Tags";
import Rating from "../components/Rating";
import Host from "../components/Host";
import Title from "../components/Title";
import Location from "../components/Location";

function LogementDetails() {
    return (
        <div className="logement-details">
            <Pictures />
            <div className="details">
                <div className="left">
                    <Title/>
                    <Location/>
                    <Tags />
                </div>
                <div className="right">
                    <Host/>
                    <Rating />
                </div>
            </div>

            <div className="more-details">
                <LogementDescription />
                <Equipments />
            </div>
        </div>
    );
}

export default LogementDetails;
