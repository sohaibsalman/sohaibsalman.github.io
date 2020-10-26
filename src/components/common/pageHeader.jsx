import React from "react";
import { Button, Divider, Grid, Typography } from "@material-ui/core";

import { useStyles as commonStyles } from "../../styles/commonStyle";
import { useStyles } from "../../styles/headerStyle";

const PageHeader = ({ headerData }) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.root}>
        {/* Text Data */}
        <Grid container spacing={3}>
          <Grid item md={headerData.column && headerData.column.size}>
            <Typography variant="h3">{headerData.heading}</Typography>
            <Typography variant="h5" className={classes.subHeading}>
              {headerData.subHeading}
            </Typography>
            <Typography variant="p">{headerData.description}</Typography>
            {/* Buttons if any */}
            {headerData.buttons && (
              <HeaderButtons buttons={headerData.buttons} />
            )}
          </Grid>
          <Grid item>
            <Typography variant="h3">Image</Typography>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
};

const HeaderButtons = ({ buttons }) => {
  const classes = useStyles();
  return (
    <div className={classes.buttons}>
      <Grid container spacing={1}>
        {buttons.map((button) => {
          return (
            <Grid item key={button.id}>
              <Button
                variant="contained"
                color={button.id === 1 ? "primary" : ""}
              >
                {button.text}
              </Button>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default PageHeader;
