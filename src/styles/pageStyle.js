import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "50px",
    [theme.breakpoints.down("sm")]: {
      padding: "50px 20px",
    },
  },
  paper: {
    padding: "15px 30px",
  },
  timeline: {
    "*": {
      flex: 0,
    },
  },
}));

export { useStyles };
