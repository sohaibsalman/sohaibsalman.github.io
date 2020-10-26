import React from "react";
import { Route, Switch } from "react-router-dom";

import { useStyles } from "../../constants/constMainContent";
import About from "../pages/about/about";

const MainContent = () => {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Switch>
        <Route path="/" component={About} />
      </Switch>
    </main>
  );
};

export default MainContent;
