import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 240;

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
}));

const links = [
  { id: 1, title: "About", url: "/about" },
  { id: 2, title: "Skills", url: "/skills" },
  { id: 3, title: "Portfolio", url: "/portfolio" },
  { id: 4, title: "Services", url: "/services" },
  { id: 5, title: "Contact", url: "/contact" },
];

export { links, useStyles, drawerWidth };
