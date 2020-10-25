import React from "react";

import { useStyles } from "../../constants/constMainContent";

const MainContent = () => {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis iure
      tempore necessitatibus, repudiandae minima quasi sapiente, alias quibusdam
      maxime quam deserunt aperiam fugiat dicta explicabo labore optio
      reprehenderit ipsa nobis.
    </main>
  );
};

export default MainContent;
