import React from "react";

import { useStyles } from "../../../styles/headerStyle";
import { Divider, Grid, Typography } from "@material-ui/core";

const Header = ({ heading, description }) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid container>
        <Grid item md={1}></Grid>
        <Grid
          item
          md={10}
          className={classes.root}
          style={{ textAlign: "center" }}
        >
          {/* Heading */}
          <Typography variant="h4" className={classes.heading}>
            {heading}
          </Typography>
          {/* Description */}
          <div className={classes.description}>
            {description.map((item) => {
              return <Typography key={item.id}>{item.text}</Typography>;
            })}
          </div>
        </Grid>
        <Grid item md={1}></Grid>
      </Grid>
      <Divider />
    </React.Fragment>
  );
};

export default Header;
