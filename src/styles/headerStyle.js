import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "50px",
    [theme.breakpoints.down("sm")]: {
      padding: "50px 20px",
    },
  },
  heading: {
    fontWeight: "bold",
  },
  subHeading: {
    margin: "10px 0",
    fontWeight: "lighter",
  },
  description: {
    margin: "20px 0",
  },
  buttons: {
    "& > *": {
      marginRight: theme.spacing(1),
    },
    margin: "15px 0",
  },
}));

export { useStyles };
