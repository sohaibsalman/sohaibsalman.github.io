import { Typography } from "@material-ui/core";
import React from "react";
import dp from "../../static/images/profile/sohaib.jpg";

const user = {
  fullName: "Sohaib Salman",
  description:
    "Hi, my name is Sohaib Salman and I'm a Software Developer. Welcome to my personal website",
};

const UserInfo = () => {
  return (
    <React.Fragment>
      <center style={{ padding: "20px 10px" }}>
        <Typography variant="h5" style={{ fontWeight: "bold" }}>
          {user.fullName}
        </Typography>
        <img
          src={dp}
          alt="Sohaib Salman"
          style={{ width: "180px", borderRadius: "50%", margin: "18px 0" }}
        />
        <Typography style={{ fontSize: "14px" }}>{user.description}</Typography>
      </center>
    </React.Fragment>
  );
};

export default UserInfo;
