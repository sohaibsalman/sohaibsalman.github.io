import { makeStyles } from "@material-ui/core/styles";

import { drawerWidth } from "./sidebarStyle";

const useStyles = makeStyles((theme) => ({
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    [theme.breakpoints.down("xs")]: {
      paddingTop: theme.spacing(5),
    },
  },
}));

export { useStyles };
