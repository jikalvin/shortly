import React from "react";
import illustration from "../assets/images/illustration-working.svg";

const Hero: React.FC = () => {

    return (
        <div className="section-1">
            <div className="main-info">
                <h1>More than just shorter links</h1>
                <p className="gray-p">Build your brand's recognition and get detailed insights on how your links are performing.</p>
                <a className="cyan-btn" href="" aria-hidden="true">Get Started</a>
            </div>
            <img src={illustration} alt="" aria-hidden="true" />

        </div>
    );
};

export default Hero;
