import React from "react";

import "./timeline.css";

const Timeline = ({ heading, date, subHeading, description }) => {
    return (
        <div className="timeline-item">
            {/* Heading */}
            <h6 style={{ fontWeight: "bold", textTransform: "uppercase" }}>{heading}</h6>
            {/* Date */}
            <TimelineDate date={date} />
            {/* Sub Heading */}
            <h6 style={{ fontStyle: "italic", fontSize: "18px" }}>{subHeading}</h6>
            {/* Description */}
            <h6 style={{ margin: "12px 0" }}>{description}</h6>
        </div>
    );
};

const TimelineDate = ({ date }) => {
    return (
        <React.Fragment>
            <div className="timeline-date">{date}</div>
        </React.Fragment>
    );
};

export default Timeline;
