import { Typography } from "@material-ui/core";
import React from "react";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  headingDiv: {
    borderLeft: "5px solid black",
    padding: "0 15px",
    margin: "20px 0",
  },
  heading: {
    fontWeight: "bolder",
  },
});

const Heading = ({ heading }) => {
  const classes = useStyles();
  return (
    <div className={classes.headingDiv}>
      <Typography variant="h4" className={classes.heading}>
        {heading}
      </Typography>
    </div>
  );
};

export default Heading;
