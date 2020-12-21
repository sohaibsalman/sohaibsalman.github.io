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
          {description && <Description description={description} />}
        </Grid>
        <Grid item md={1}></Grid>
      </Grid>
      <Divider />
    </React.Fragment>
  );
};

const Description = ({ description }) => {
  const classes = useStyles();
  return (
    <div className={classes.description}>
      {description.map((item) => {
        return <Typography key={item.id}>{item.text}</Typography>;
      })}
    </div>
  );
};

export default Header;
