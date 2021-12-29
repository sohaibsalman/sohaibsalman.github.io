import React from "react";

import "./button.css";

const Button = ({ text }) => {
    return (
        <React.Fragment>
            <button className="button-primary">{text}</button>
        </React.Fragment>
    );
};

export default Button;
