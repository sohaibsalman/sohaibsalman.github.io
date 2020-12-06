import { Grid, Paper, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  cardImage: {
    width: "100%",
    minHeight: "150px",
    height: "100%",
  },
  cardContent: {
    padding: "20px",
  },
  heading: {
    fontWeight: "bold",
    textDecoration: "underline",
  },
  description: {
    margin: "10px 0",
    fontSize: "12px",
  },
});

const SideImageCard = ({ image, heading, description, footer }) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Paper square elevation={0}>
        <Grid container>
          <Grid item md={4} sm={12} xs={12}>
            <div
              className={classes.cardImage}
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          </Grid>
          <Grid item md={8} sm={12} xs={12}>
            <div className={classes.cardContent}>
              <Typography variant="h6" className={classes.heading}>
                {heading}
              </Typography>
              <Typography className={classes.description} color="textSecondary">
                {description}
              </Typography>
              <Typography className="">{footer}</Typography>
            </div>
          </Grid>
        </Grid>
      </Paper>
    </React.Fragment>
  );
};

export default SideImageCard;
