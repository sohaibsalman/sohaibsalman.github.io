import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import About from "../pages/about/about";
import Skills from "../pages/skills/skills";
import Portfolio from "../pages/portfolio/portfolio";
import Services from "../pages/services/services";
import Contact from "../pages/contact/contact";

import { useStyles } from "../../constants/constMainContent";

const MainContent = () => {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Switch>
        <Route path="/skills" component={Skills} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/services" component={Services} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
        <Redirect from="/" to="/about" />
      </Switch>
    </main>
  );
};

export default MainContent;
