import React from "react";

import { useStyles } from "../../constants/constMainContent";

const MainContent = () => {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
    </main>
  );
};

export default MainContent;
