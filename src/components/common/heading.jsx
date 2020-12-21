import { Typography } from "@material-ui/core";
import React from "react";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  headingDiv: {
    borderLeft: "5px solid #3f51b5",
    padding: "0 15px",
    margin: "20px 0",
  },
  heading: {
    fontWeight: "bolder",
  },
});

const Heading = ({ heading, size, uppercase }) => {
  const classes = useStyles();
  const variant = size ? size : "h4";
  const style = uppercase
    ? { textTransform: "uppercase", letterSpacing: "3px" }
    : {};
  return (
    <div className={classes.headingDiv}>
      <Typography variant={variant} className={classes.heading} style={style}>
        {heading}
      </Typography>
    </div>
  );
};

export default Heading;
