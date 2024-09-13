import React from "react";
import "./Footer.scss";

function Footer() {
    return (
        <footer>
            {/* Logo pour le bureau */}
            <img
                src="/images/desktop-header.png"
                alt="Header desktop"
                className="desktop-header"
            />
            {/* Logo pour le mobile */}
            <img
                src="/images/mobile-header.png"
                alt="Header mobile"
                className="mobile-header"
            />
        </footer>
    );
}

export default Footer;
