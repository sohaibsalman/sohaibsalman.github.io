import React from "react";
import { Typography } from "@material-ui/core";
import Body from "./../../common/page/body";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  errorCode: {
    display: "inline-block",
    backgroundColor: "#bdbdbd2d",
    padding: "5px 15px",
    borderRadius: "3px",
  },
  heading: {
    margin: "10px 0",
  },
});

const NotFound = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Body>
        <div className={classes.errorCode}>
          <Typography color="textSecondary">Error 404</Typography>
        </div>
        <Typography
          variant="h4"
          color="textSecondary"
          className={classes.heading}
        >
          Page not available
        </Typography>
        <Typography
          variant="h5"
          color="textSecondary"
          className={classes.heading}
        >
          But Sohaib is! Don't Worry.
        </Typography>
        <Typography>
          Return back to the <Link to="/about">homepage</Link> to know more
          about me, or visit my <Link to="/portfolio">online portfolio</Link> to
          explore my skills, or see the <Link to="/services">services</Link> I
          provide. Have any questions or want to work with me? You can{" "}
          <Link to="contact">contact</Link> me anytime!
        </Typography>
      </Body>
    </React.Fragment>
  );
};

export default NotFound;
