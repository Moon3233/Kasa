import React from "react";
import LogementDescription from "../components/LogementDescription";
import './LogementDetails.scss';
import Equipments from "../components/Equipments";


function LogementDetails() {
    return (

        <div className="more-details">
            <LogementDescription />
            <Equipments />
        </div>
    );
}

export default LogementDetails;
