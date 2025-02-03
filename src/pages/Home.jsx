import React, { useState, useEffect } from "react";
import LogementList from "../components/LogementList/LogementList";
import './Home.scss';


function Home() {
    const [logements, setLogements] = useState([]);

    useEffect(() => {
        // Un seul fetch au chargement de la page pour récupérer tous les logements
        fetch("/logements.json")
            .then((response) => response.json())
            .then((data) => setLogements(data))
            .catch((error) =>
                console.error("Erreur lors du chargement des logements :", error)
            );
    }, []);

    return (
        <div className="home">
            <div className="banner">
                {/* Version desktop du titre */}
                <h1 className="title-desktop">Chez vous, partout et ailleurs</h1>
                
                {/* Version mobile du titre avec retour à la ligne */}
                <h1 className="title-mobile">Chez vous,<br />partout et ailleurs</h1>
                <img
                    src="/images/background-home.png"
                    alt="Bannière Home"
                    className="banner-image"
                />
            </div>

            <LogementList logements={logements} /> {/* On passe logements en props */}
        </div>
    );
}

export default Home;
