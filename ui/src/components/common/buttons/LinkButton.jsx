import React from "react";
import { useNavigate } from "react-router-dom";

import "./button.css";

const LinkButton = ({ text, link }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/contact");
    };

    return (
        <React.Fragment>
            <button className="button-primary" onClick={handleClick}>
                {text}
            </button>
        </React.Fragment>
    );
};

export default LinkButton;
