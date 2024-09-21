import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Collapse from "../Collapse";

function Equipments() {
    const { id } = useParams();
    const [equipments, setEquipments] = useState([]);

    useEffect(() => {
        fetch("/logements.json")
            .then((response) => response.json())
            .then((data) => {
                const selectedLogement = data.find((logement) => logement.id === id);
                if (selectedLogement) {
                    setEquipments(selectedLogement.equipments);
                }
            })
            .catch((error) => console.error("Erreur lors du chargement des équipements :", error));
    }, [id]);

    return <Collapse title="Équipements" content={equipments} />;
}

export default Equipments;
