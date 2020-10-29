import React from "react";
import Header from "../../common/header";
import { getPortfolioHeader } from "./../../../services/portfolioService";

const Portfolio = () => {
  const header = getPortfolioHeader();
  return (
    <React.Fragment>
      <Header heading={header.heading} description={header.description} />
    </React.Fragment>
  );
};

export default Portfolio;
