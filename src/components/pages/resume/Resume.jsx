import React, { Component } from "react";
import Header from "../../common/page/header";
import Body from "../../common/page/body";
import { Divider, Grid, Paper, Typography } from "@material-ui/core";
import useStyles from "../../../styles/resumeStyle";
import Heading from "../../common/heading";
import {
  getEducationalInfo,
  getExperienceInfo,
  getProjectsInfo,
  getSkillsInfo,
  getAwardsInfo,
  getLanguagesInfo,
} from "../../../services/resumeService";

class Resume extends Component {
  render() {
    return (
      <React.Fragment>
        <Header heading="Online Resume" />
        <Body>
          <ResumeOuter />
        </Body>
      </React.Fragment>
    );
  }
}
export default Resume;

class ResumeOuter extends Component {
  render() {
    return <ResumeInner />;
  }
}

const ResumeInner = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper} elevation={0} square>
      {ResumeHeader(classes)}
      {Summary(classes)}
      <Grid container spacing={3}>
        <Grid item md={9}>
          {Education()}
          {Experience()}
          {Projects()}
        </Grid>
        <Grid item md={3}>
          {Skills(classes)}
          {Awards(classes)}
          {Languages(classes)}
        </Grid>
      </Grid>
      <Divider className={classes.divider} />
      {Footer(classes)}
    </Paper>
  );
};

function ResumeHeader(classes) {
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item md={9}>
          <Typography variant="h4" className={classes.nameHeading}>
            Sohaib Salman
          </Typography>
          <Typography variant="subtitle1">Software Developer</Typography>
        </Grid>
        <Grid item md={3}>
          <ul className={classes.ul}>
            <li className={classes.li}></li>
            <li className={classes.li}>sohaibsalman10@gmail.com</li>
            <li className={classes.li}>www.linkedin.com/in/sohaibsalman</li>
            <li className={classes.li}>Lahore, Pakistan</li>
          </ul>
        </Grid>
      </Grid>
      <Divider className={classes.divider} />
    </React.Fragment>
  );
}

function Summary(classes) {
  return (
    <div>
      <Typography>
        An enthusiastic self-learner and a student of Information Technology
        from PUCIT, with good learning and problemsolving skills, looking
        forward to enhancing my educational and professional skills in a stable
        and dynamic workplace. Hardworking, energetic, enthusiastic and eager to
        consider new challenges, with ability to grasp new skills.
      </Typography>
      <Divider className={classes.divider} />
    </div>
  );
}

function Education(classes) {
  const education = getEducationalInfo();
  return (
    <div>
      <Heading heading="Education" size="h5" uppercase="true" />
      {education.map((info, index) => {
        return (
          <div style={{ marginTop: "10px" }} key={index}>
            <Typography>
              <strong>{`${info.degree} (${info.slogan})`}</strong>
            </Typography>
            <Typography>{info.date}</Typography>
            <Typography>{info.institute}</Typography>
            <Typography>
              {index === 0}
              {info.percentage}
            </Typography>
          </div>
        );
      })}
    </div>
  );
}

function Experience() {
  const experience = getExperienceInfo();
  return (
    <div style={{ marginTop: "40px" }}>
      <Heading heading="Work Experience" size="h5" uppercase="true" />
      {experience.map((info, index) => {
        return (
          <div style={{ marginTop: "10px" }} key={index}>
            <Typography>
              <strong>{`${info.designation}, ${info.place}`}</strong>
            </Typography>
            <Typography>{info.tenure}</Typography>
            <Typography>{info.position}</Typography>
          </div>
        );
      })}
    </div>
  );
}

function Projects() {
  const projcets = getProjectsInfo();
  return (
    <div style={{ marginTop: "40px" }}>
      <Heading heading="Projects" size="h5" uppercase="true" />
      {projcets.map((info, index) => {
        return (
          <div style={{ marginTop: "10px" }} key={index}>
            <Typography>
              <strong>{info.title}</strong>
            </Typography>
            <span style={{ fontStyle: "italic" }}>{info.description}</span>
          </div>
        );
      })}
    </div>
  );
}

function Skills(classes) {
  const skills = getSkillsInfo();
  return (
    <div>
      <Heading heading="Skills" size="h5" uppercase="true" />
      <Typography style={{ marginBottom: "-8px" }}>
        <strong>Technical</strong>
      </Typography>
      <ul className={classes.ul}>
        {skills.technical.map((skill, index) => {
          return (
            <li key={index} className={classes.li}>
              {skill}
            </li>
          );
        })}
      </ul>
      <Typography style={{ marginBottom: "-8px" }}>
        <strong>Professional</strong>
      </Typography>
      <ul className={classes.ul}>
        {skills.professional.map((skill, index) => {
          return (
            <li key={index} className={classes.li}>
              {skill}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function Awards(classes) {
  const awards = getAwardsInfo();
  return (
    <div style={{ marginTop: "40px" }}>
      <Heading heading="Awards & Honors" size="h5" uppercase="true" />
      {awards.map((award, index) => {
        return (
          <div key={index} style={{ marginTop: "10px" }}>
            <Typography>
              <strong>{award.titlte}</strong>
            </Typography>
            {award.year}
          </div>
        );
      })}
    </div>
  );
}

function Languages(classes) {
  const languages = getLanguagesInfo();
  return (
    <div style={{ marginTop: "40px" }}>
      <Heading heading="Languages" size="h5" uppercase="true" />
      <ul className={classes.ul}>
        {languages.map((lang, index) => {
          return (
            <li key={index} className={classes.li}>
              {`${lang.name} (${lang.info})`}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function Footer(classes) {
  return (
    <div>
      <Grid container spacing={5}>
        <Grid item md={6} style={{ textAlign: "right" }}>
          <div>
            <span className={classes.center}>github.com/sohaibsalman</span>
          </div>
        </Grid>
        <Grid item md={6}>
          <div>
            <span className={classes.center}>sohaibsalman.github.io</span>
          </div>
        </Grid>
      </Grid>
      <span></span>
    </div>
  );
}
