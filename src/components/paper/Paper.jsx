import React from "react";

import "./paper.css";

const Paper = (props) => {
    return <div className="paper">{props.children}</div>;
};

export default Paper;
