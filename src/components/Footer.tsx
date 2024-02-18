import React from "react";
import logo from "../assets/images/logo.svg";
import icon1 from "../assets/images/icon-facebook.svg";
import icon2 from "../assets/images/icon-twitter.svg";
import icon3 from "../assets/images/icon-pinterest.svg";
import icon4 from "../assets/images/icon-instagram.svg";

const Footer: React.FC = () => {

    return (
        <footer>
            <article>
                <img className="logo-img" src={logo} alt="Shortly" />
            </article>
            <section className="footer-menu">
                <article>
                    <h4>Features</h4>
                    <ul className="gray-p">
                        <li><a href="/">Link Shortening</a></li>
                        <li><a href="/">Branded Links</a></li>
                        <li><a href="/">Analytics</a></li>
                    </ul>
                </article>
                <article>
                    <h4>Resources</h4>
                    <ul className="gray-p">
                        <li><a href="/">Blog</a></li>
                        <li><a href="/">Developers</a></li>
                        <li><a href="/">Support</a></li>
                    </ul>
                </article>
                <article>
                    <h4>Company</h4>
                    <ul className="gray-p">
                        <li><a href="/">About</a></li>
                        <li><a href="/">Our Team</a></li>
                        <li><a href="/">Careers</a></li>
                        <li><a href="/">Contact</a></li>
                    </ul>
                </article>
                <article className="social-media">
                    <a href="/" target="_blank"><img src={icon1} alt="Facebook link" /></a>
                    <a href="/" target="_blank"><img src={icon2} alt="Twitter link" /></a>
                    <a href="/" target="_blank"><img src={icon3} alt="Pinterest link" /></a>
                    <a href="/" target="_blank"><img src={icon4} alt="Instagram link" /></a>
                </article>
            </section>
        </footer>
    );
};

export default Footer;
