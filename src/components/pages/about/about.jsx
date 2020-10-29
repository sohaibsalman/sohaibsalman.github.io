import React from "react";
import { Divider, Grid, Paper, Typography } from "@material-ui/core";

import PageHeader from "../../common/pageHeader";
import Heading from "../../common/heading";

import {
  getAboutHeader,
  getWhatIDo,
  getSkills,
  getAcademicInfo,
} from "../../../services/aboutService";

import { useStyles } from "../../../styles/pageStyle";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@material-ui/lab";

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

const Education = () => {
  const academic = getAcademicInfo();
  const classes = useStyles();
  return (
    <React.Fragment>
      <Heading heading={academic.heading} />
      <Typography>{academic.description}</Typography>
      <Timeline>
        {academic.education.map((education) => {
          return (
            <TimelineItem style={{ flex: 0 }}>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Typography
                  variant="h6"
                  style={{ textTransform: "uppercase", fontWeight: "bold" }}
                >
                  {education.degree}
                </Typography>
                <Typography>{education.duration}</Typography>
                <Typography>{education.institute}</Typography>
              </TimelineContent>
            </TimelineItem>
          );
        })}
      </Timeline>
    </React.Fragment>
  );
};

export default About;
