import { Grid } from "@material-ui/core";
import React, { Component } from "react";
import SideImageCard from "../../common/cards/sideImagCard";
import Body from "../../common/page/body";

import Header from "../../common/page/header";

import {
  getPortfolioHeader,
  getProjectFilters,
  getProjects,
} from "./../../../services/portfolioService";
import FilterButtons from "./../../common/filterButtons";

class Portfolio extends Component {
  state = {
    selectedButton: 0,
    projects: getProjects(),
  };

  render() {
    const header = getPortfolioHeader();
    const buttons = getProjectFilters();

    const { projects } = this.state;

    const handleButtonClick = (selectedButton) => {
      this.setState({ selectedButton });
    };

    return (
      <React.Fragment>
        {/* Page Header */}
        <Header heading={header.heading} description={header.description} />

        <Body>
          {/* Filter Buttons */}
          <FilterButtons
            buttons={buttons}
            selected={this.state.selectedButton}
            onButtonClick={handleButtonClick}
          />
          {/* Project Cards */}
          <Grid container spacing={3}>
            {projects.map((project) => {
              return (
                <Grid item md={6}>
                  <SideImageCard
                    heading={project.title}
                    image={project.image}
                    description={project.description}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Body>
      </React.Fragment>
    );
  }
}

export default Portfolio;
