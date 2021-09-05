import React from "react";

import "./social-items.css";

const Email = ({ emailAddress }) => {
    return (
        <div className="social-item--email">
            <a href={`mailto:${emailAddress}`}>{emailAddress}</a>
            <div className="line-div" />
        </div>
    );
};

export default Email;
