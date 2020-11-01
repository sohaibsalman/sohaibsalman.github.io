import React from "react";
import { Button, Divider, Grid, Typography } from "@material-ui/core";

import { useStyles } from "../../styles/headerStyle";
import { Link } from "react-router-dom";

const AboutHeader = ({ headerData }) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.root}>
        {/* Text Data */}
        <Grid container spacing={1}>
          <Grid item md={headerData.column && headerData.column.size}>
            <Typography variant="h3" className={classes.heading}>
              {headerData.heading}
            </Typography>
            <Typography variant="h5" className={classes.subHeading}>
              {headerData.subHeading}
            </Typography>
            <Typography>{headerData.description}</Typography>
            {/* Buttons if any */}
            {headerData.buttons && (
              <HeaderButtons buttons={headerData.buttons} />
            )}
          </Grid>
          <Grid item md={headerData.column && 12 - headerData.column.size}>
            <img src={headerData.image} alt="" width="100%" />
          </Grid>
        </Grid>
      </div>
      <Divider />
    </React.Fragment>
  );
};

const HeaderButtons = ({ buttons }) => {
  const classes = useStyles();
  return (
    <div className={classes.buttons}>
      {buttons.map((button) => {
        return (
          <Button
            key={button.id}
            variant="contained"
            component={Link}
            to={button.to}
            color={button.id === 1 ? "primary" : "default"}
          >
            {button.text}
          </Button>
        );
      })}
    </div>
  );
};

export default AboutHeader;
