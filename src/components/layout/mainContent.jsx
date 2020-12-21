import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import About from "../pages/about/about";
import Portfolio from "../pages/portfolio/portfolio";
import Services from "../pages/services/services";
import Contact from "../pages/contact/contact";

import Footer from "./../common/page/footer";

import { useStyles } from "../../styles/mainContentStyle";
import Resume from "../pages/resume/Resume";
// import NotFound from "./../pages/error/notFound";

const MainContent = () => {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      {/* // <div className={classes.toolbar} /> */}
      <Switch>
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/services" component={Services} />
        <Route path="/resume" component={Resume} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
        <Redirect from="/" to="/about" />
        {/* <Route component={NotFound} /> */}
      </Switch>
      <Footer />
    </main>
  );
};

export default MainContent;
