import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  paper: {
    padding: "45px",
  },
  nameHeading: {
    textTransform: "uppercase",
    fontWeight: "bolder",
    fontSize: "45px",
    letterSpacing: "3px",
  },
  divider: {
    margin: "20px 0",
  },
  ul: {
    listStyle: "none",
    padding: "0",
  },
  li: {
    marginBottom: "5px",
  },
  center: {
    display: "inline-block",
  },
});

export default useStyles;
