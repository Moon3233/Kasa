import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";

function Header() {
    return (
        <header>
            {/* Logo pour le bureau */}
            <img
                src="/images/desktop-logo.png"
                alt="Logo Desktop"
                className="logo-desktop"
            />

            {/* Logo pour le mobile */}
            <img
                src="/images/mobile-logo.png"
                alt="Logo Mobile"
                className="logo-mobile"
            />

            <nav>
                <ul>
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? "active" : undefined
                            }
                        >
                            Accueil
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                isActive ? "active" : undefined
                            }
                        >
                            A propos
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
