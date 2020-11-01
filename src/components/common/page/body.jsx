import React from "react";

import { useStyles } from "../../../styles/pageStyle";

const Body = ({ children }) => {
  const classes = useStyles();
  return <div className={classes.root}>{children}</div>;
};

export default Body;
