import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    position: "fixed",
    zIndex: 9999,
    height: "100vh",
    width: "100%",
    backgroundColor: "black",
  },
  inner: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
});

const Preloader = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.inner}>
        <h1>LOADING</h1>
      </div>
    </div>
  );
};

export default Preloader;
