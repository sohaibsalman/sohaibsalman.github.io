import React from "react";
import Header from "../../common/page/header";
import { getServicesHeader } from "./../../../services/servicesService";
import { Typography } from "@material-ui/core";

const Service = () => {
  const header = getServicesHeader();
  return (
    <React.Fragment>
      <Header heading={header.heading} description={header.description} />
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <Typography variant="h4" color="textSecondary">
          This page is currently under development!
        </Typography>
      </div>
    </React.Fragment>
  );
};

export default Service;
