import React from "react";
import { Divider, Grid, Typography } from "@material-ui/core";

import PageHeader from "../../common/pageHeader";
import Heading from "../../common/heading";

import {
  getAboutHeader,
  getWhatIDo,
  getSkills,
} from "../../../services/aboutService";

import { useStyles } from "../../../styles/pageStyle";

const About = () => {
  const headerData = getAboutHeader();
  return (
    <React.Fragment>
      <PageHeader headerData={headerData} />
      <AboutBody />
    </React.Fragment>
  );
};

const AboutBody = () => {
  const bodyData = getWhatIDo();
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.root}>
        {/* Section 1 Heading */}
        <Heading heading={bodyData.heading} />
        <Typography>{bodyData.description}</Typography>
        <Skills />
      </div>
    </React.Fragment>
  );
};

const Skills = () => {
  const skills = getSkills();

  return (
    <Grid container spacing={4} style={{ marginTop: "20px" }}>
      {skills.map((skill) => {
        return (
          <Grid item md={3} sm={6} key={skill.id}>
            {skill.icons.map((icon) => {
              return (
                <i
                  className={icon}
                  style={{ fontSize: "35px", marginRight: "10px" }}
                />
              );
            })}
            <Typography
              variant="h6"
              style={{
                fontWeight: "bolder",
                margin: "5px 0",
                fontSize: "16px",
              }}
            >
              {skill.title}
            </Typography>
            <Typography>{skill.desription}</Typography>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default About;
