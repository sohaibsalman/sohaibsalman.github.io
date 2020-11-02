import React from "react";
import { Divider, Grid, Typography } from "@material-ui/core";

import AboutHeader from "../../common/aboutHeader";
import Heading from "../../common/heading";
import Timeline from "../../common/timeline";

import {
  getAboutHeader,
  getWhatIDo,
  getSkills,
  getAcademicInfo,
} from "../../../services/aboutService";

import { useStyles } from "../../../styles/pageStyle";

const About = () => {
  const headerData = getAboutHeader();
  return (
    <React.Fragment>
      <AboutHeader headerData={headerData} />
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
        <Divider style={{ margin: "40px 0" }} />
        {/* Section 2 */}
        <Education />
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
            {skill.icons.map((icon, index) => {
              return (
                <i
                  key={index}
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

const Education = () => {
  const academic = getAcademicInfo();
  return (
    <React.Fragment>
      <Heading heading={academic.heading} />
      <Typography>{academic.description}</Typography>
      <div className="timeline">
        {academic.education.map((education) => {
          return (
            <Timeline
              key={education.id}
              heading={education.degree}
              date={education.duration}
              subHeading={education.institute}
              description={education.description}
            />
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default About;
