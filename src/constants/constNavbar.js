import { makeStyles } from "@material-ui/core/styles";
import { drawerWidth } from "./sidebarConsts";

const brandName = "Sohaib Salman";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  title: {
    flexGrow: 1,
  },
}));

export { brandName, useStyles };
