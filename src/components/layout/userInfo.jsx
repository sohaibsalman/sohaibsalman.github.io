import { Divider, Typography } from "@material-ui/core";
import React from "react";
import dp from "../../static/images/profile/sohaib.jpg";
import SocialLinks from "../common/socialLinks/socialLinks";

const user = {
  fullName: "Sohaib Salman",
  description:
    "Hi, my name is Sohaib Salman and I'm a Software Developer. Welcome to my personal website",
};

const UserInfo = () => {
  return (
    <React.Fragment>
      <div className="userInfo">
        <center>
          <Typography
            variant="h5"
            style={{ fontWeight: "bold", margin: "18px 0" }}
          >
            {user.fullName}
          </Typography>
          <img
            src={dp}
            alt="Sohaib Salman"
            style={{ width: "180px", borderRadius: "50%" }}
          />
          <Typography style={{ fontSize: "14px", margin: "20px 0" }}>
            {user.description}
          </Typography>

          <SocialLinks />
        </center>
      </div>
    </React.Fragment>
  );
};

export default UserInfo;
