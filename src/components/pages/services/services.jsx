import React from "react";
import Header from "../../common/header";
import { getServicesHeader } from "./../../../services/servicesService";

const Service = () => {
  const header = getServicesHeader();
  return (
    <React.Fragment>
      <Header heading={header.heading} description={header.description} />
    </React.Fragment>
  );
};

export default Service;
