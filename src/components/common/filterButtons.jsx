import React from "react";
import { Button, Chip, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
}));

const FilterButtons = ({ buttons, selected, onButtonClick }) => {
  const classes = useStyles();
  return (
    <div className={classes.root} style={{ marginBottom: "40px" }}>
      {buttons.map((button, index) => {
        return (
          <Button
            key={index}
            color="default"
            variant={selected === index ? "contained" : "outlined"}
            onClick={() => onButtonClick(index)}
          >
            {button}
          </Button>
        );
      })}
    </div>
  );
};

export default FilterButtons;
