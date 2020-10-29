import React from "react";
import { Typography } from "@material-ui/core";

import "./timeline.css";

const Timeline = ({ heading, date, subHeading, description }) => {
  return (
    <div class="timeline-item">
      {/* Heading */}
      <Typography
        variant="h6"
        style={{ fontWeight: "bold", textTransform: "uppercase" }}
      >
        {heading}
      </Typography>
      {/* Date */}
      <TimelineDate date={date} />
      {/* Sub Heading */}
      <Typography style={{ fontStyle: "italic", fontSize: "18px" }}>
        {subHeading}
      </Typography>
      {/* Description */}
      <Typography style={{ margin: "12px 0" }}>{description}</Typography>
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
