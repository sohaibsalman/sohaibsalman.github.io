import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  footer: {
    padding: "30px 20px",
    textAlign: "center",
  },
});

const Footer = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.footer}>
        <Typography variant="p" color="textSecondary">
          This portfolio is developed by{" "}
          <span style={{ color: "white" }}> Sohaib Salman </span> using React js
          and Material UI.
        </Typography>
        <br />
        <Typography
          variant="p"
          style={{ margin: "10px 0", display: "block" }}
          color="textSecondary"
        >
          All rights reserved &copy; {new Date().getFullYear()}
        </Typography>
      </div>
    </React.Fragment>
  );
};

export default Footer;
