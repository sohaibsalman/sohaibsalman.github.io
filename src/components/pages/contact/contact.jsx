import React, { Component } from "react";
import emailjs from "emailjs-com";
import { Button, Grid, TextField, Typography } from "@material-ui/core";

import Header from "../../common/page/header";
import Body from "./../../common/page/body";
import Snackbar from "./../../common/snackbar";

import { getContactHeader } from "./../../../services/contactService";

class Contact extends Component {
  state = { status: null, message: "" };

  sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "sohaib_portfolio",
        e.target,
        "user_TW0R5ZfvNxFcdDHKwLhU0"
      )
      .then(
        (result) => {
          const status = "success";
          const message = "Email sent successfully!";
          this.setState({ status, message });
        },
        (error) => {
          const status = "error";
          const message = "There was an error sending the email";
          this.setState({ status, message });
        }
      );

    e.target.reset();
  };

  render() {
    const header = getContactHeader();
    const { status, message } = this.state;
    return (
      <React.Fragment>
        {status && <Snackbar type={status} message={message} />}
        <Header heading={header.heading} description={header.description} />
        <Body>
          <div style={{ textAlign: "center" }}>
            <Typography variant="h5" style={{ fontWeight: "bold" }}>
              Get In Touch
            </Typography>
            <Typography
              color="textSecondary"
              style={{ margin: "20px 0 40px 0" }}
            >
              Fill the following form, or simply send an email to{" "}
              <a href="mailto:sohaib.it40@gmail.com" style={{ color: "white" }}>
                sohaib.it40@gmail.com
              </a>
            </Typography>
            <div>
              <form onSubmit={this.sendEmail}>
                <Grid container spacing={2}>
                  <Grid item md={6} sm={12} xs={12}>
                    <TextField
                      name="name"
                      required
                      variant="outlined"
                      label="Full Name"
                      size="small"
                      fullWidth
                    />
                  </Grid>
                  <Grid item md={6} sm={12} xs={12}>
                    <TextField
                      name="email"
                      required
                      variant="outlined"
                      label="Email"
                      size="small"
                      fullWidth
                    />
                  </Grid>
                  <Grid item md={12} sm={12} xs={12}>
                    <TextField
                      name="subject"
                      required
                      variant="outlined"
                      label="Subject"
                      size="small"
                      fullWidth
                    />
                  </Grid>
                  <Grid item md={12} sm={12} xs={12}>
                    <TextField
                      name="message"
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
                  type="submit"
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
  }
}

export default Contact;
