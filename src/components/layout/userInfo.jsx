import { Divider, Typography } from "@material-ui/core";
import React from "react";
import dp from "../../static/images/profile/sohaib.jpg";
import SocialLinks from "../common/socialLinks";

import { getUserInfo } from "../../services/sidebarService";

import { useStyles } from "../../styles/userInfoStyle";

const user = getUserInfo();

const UserInfo = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.userInfo}>
        <center>
          <Typography variant="h5" className={classes.headingName}>
            {user.fullName}
          </Typography>
          <img src={dp} alt="Sohaib Salman" className={classes.userImage} />
          <Typography className={classes.description}>
            {user.description}
          </Typography>

          {/* User Social Links */}
          <SocialLinks />
        </center>
        <Divider style={{ marginTop: "15px" }} />
      </div>
    </React.Fragment>
  );
};

export default UserInfo;
