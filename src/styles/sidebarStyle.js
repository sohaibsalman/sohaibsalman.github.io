import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 270;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  active: {
    backgroundColor: "#303030",
  },
}));

export { useStyles, drawerWidth };
