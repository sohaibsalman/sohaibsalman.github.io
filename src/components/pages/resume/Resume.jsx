import React, { Component } from "react";
import Header from "../../common/page/header";
import Body from "../../common/page/body";
import { Divider, Grid, Paper, Typography } from "@material-ui/core";
import useStyles from "../../../styles/resumeStyle";
import Heading from "../../common/heading";
import { getEducationalInfo } from "../../../services/resumeService";

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
      {Education()}
    </Paper>
  );
};

function ResumeHeader(classes) {
  return (
    <React.Fragment>
      <Grid container>
        <Grid item md={9}>
          <Typography variant="h4" className={classes.nameHeading}>
            Sohaib Salman
          </Typography>
          <Typography variant="subtitle1">Software Developer</Typography>
        </Grid>
        <Grid item md={3}>
          <div>+92 3164141068</div>
          <div>sohaibsalman10@gmail.com</div>
          <div>www.linkedin.com/in/sohaibsalman</div>
          <div>Lahore, Pakistan</div>
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
      {education.map((info) => {
        return (
          <React.Fragment>
            <Typography variant="h6">
              <strong>{`${info.degree} (${info.slogan})`}</strong>
            </Typography>
            <Typography>{info.date}</Typography>
            <Typography>{info.institute}</Typography>
            <Typography>{info.percentage}</Typography>
          </React.Fragment>
        );
      })}
    </div>
  );
}
