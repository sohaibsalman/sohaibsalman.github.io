import { Button, Grid, TextField, Typography } from "@material-ui/core";
import React from "react";
import Header from "../../common/page/header";
import { getContactHeader } from "./../../../services/contactService";
import Body from "./../../common/page/body";

const Contact = () => {
  const header = getContactHeader();
  return (
    <React.Fragment>
      <Header heading={header.heading} description={header.description} />
      <Body>
        <div style={{ textAlign: "center" }}>
          <Typography variant="h5" style={{ fontWeight: "bold" }}>
            Get In Touch
          </Typography>
          <Typography color="textSecondary" style={{ margin: "20px 0 40px 0" }}>
            Fill the following form, or simply send an email to{" "}
            <a href="mailto:sohaib.it40@gmail.com" style={{ color: "white" }}>
              sohaib.it40@gmail.com
            </a>
          </Typography>
          <div>
            <form>
              <Grid container spacing={2}>
                <Grid item md={6} sm={12} xs={12}>
                  <TextField
                    required
                    variant="outlined"
                    label="Full Name"
                    size="small"
                    fullWidth
                  />
                </Grid>
                <Grid item md={6} sm={12} xs={12}>
                  <TextField
                    required
                    variant="outlined"
                    label="Email"
                    size="small"
                    fullWidth
                  />
                </Grid>
                <Grid item md={12} sm={12} xs={12}>
                  <TextField
                    required
                    variant="outlined"
                    label="Subject"
                    size="small"
                    fullWidth
                  />
                </Grid>
                <Grid item md={12} sm={12} xs={12}>
                  <TextField
                    required
                    variant="outlined"
                    label="Enter your message"
                    size="small"
                    fullWidth
                    multiline
                    rows={14}
                  />
                </Grid>
              </Grid>
              <Button
                color="primary"
                variant="contained"
                fullWidth
                style={{ margin: "15px 0" }}
              >
                Send Now
              </Button>
            </form>
          </div>
        </div>
      </Body>
    </React.Fragment>
  );
};

export default Contact;
