import React from "react";
import LogementDescription from "../components/Collapse/Content/LogementDescription";
import "./LogementDetails.scss";
import Equipments from "../components/Collapse/Content/Equipments";
import Pictures from "../components/Pictures/Pictures";
import Tags from "../components/Tags/Tags";
import Rating from "../components/Rating/Rating";
import Host from "../components/Host/Host";
import Title from "../components/Title/Title";
import Location from "../components/Location/Location";

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
