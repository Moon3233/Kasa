import React from "react";
import LogementList from "../components/LogementList";
import './Home.scss';


function Home() {
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

            <LogementList />
        </div>
    );
}

export default Home;
