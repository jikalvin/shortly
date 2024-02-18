import React, { useState } from "react";
import logo from "../assets/images/logo.svg";

const Navbar: React.FC = () => {
    const [menuVisible, setMenuVisible] = useState<boolean>(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    return (
        <nav>
            <img src={logo} alt="Shortly" />
            <section className={`menu-section ${menuVisible ? 'show' : ''}`}>
                <ul className="links-section gray-p">
                    <li><a href="/">Features</a></li>
                    <li><a href="/">Pricing</a></li>
                    <li><a href="/">Resources</a></li>
                </ul>
                {menuVisible && <hr className="menu-hr" />}
                <ul className="buttons-section">
                    <li><a className="gray-p" href="/">Login</a></li>
                    <li><a className="cyan-btn sign-up-btn" href="/">Sign Up</a></li>
                </ul>
            </section>
            <i className="fa-solid fa-bars" onClick={toggleMenu}></i>
        </nav>
    );
};

export default Navbar;
