import React from "react";
import LogementList from "../components/LogementList";
import './Home.scss'; // Importation des styles pour cette page

function Home() {
    return (
        <div className="home">
            <div className="banner">
                <h1>Chez vous, partout et ailleurs</h1>
                <img
                    src="/images/background-home.png"
                    alt="Bannière Home"
                    className="banner-image"
                />
            </div>

            <LogementList />
        </div>
    );
}

export default Home;
