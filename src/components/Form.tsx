import React from "react";

const Form: React.FC = () => {

    return (
        <form action="" className="section-2">
            <div className="url-input-block">
                <input type="text" className="url-input" placeholder="Shorten a link here..." />
                <em className="error-msg"></em>
            </div>
            <button type="submit" className="url-button cyan-btn">Shorten It!</button>
        </form>
    );
};

export default Form;
