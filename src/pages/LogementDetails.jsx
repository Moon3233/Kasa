import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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
    const { id } = useParams(); // Récupère l'ID du logement depuis l'URL
    const [logement, setLogement] = useState(null);

    useEffect(() => {
        fetch("/logements.json")
            .then((response) => response.json())
            .then((data) => {
                const selectedLogement = data.find((logement) => logement.id === id);
                if (selectedLogement) {
                    setLogement(selectedLogement);
                }
            })
            .catch((error) => console.error("Erreur lors du chargement du logement :", error));
    }, [id]);

    if (!logement) {
        return <p>Chargement des détails du logement...</p>;
    }

    return (
        <div className="logement-details">
            <Pictures pictures={logement.pictures} />
            <div className="details">
                <div className="left">
                    <Title title={logement.title} />
                    <Location location={logement.location} />
                    <Tags tags={logement.tags} />
                </div>
                <div className="right">
                    <Host host={logement.host} />
                    <Rating rating={logement.rating} />
                </div>
            </div>

            <div className="more-details">
                <LogementDescription description={logement.description} />
                <Equipments equipments={logement.equipments} />
            </div>
        </div>
    );
}

export default LogementDetails;
