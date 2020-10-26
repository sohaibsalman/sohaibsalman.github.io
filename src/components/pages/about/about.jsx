import React from "react";
import { Divider } from "@material-ui/core";

import PageHeader from "../../common/pageHeader";

import { getAboutHeader } from "../../../services/aboutService";

const About = () => {
  const headerData = getAboutHeader();
  return (
    <React.Fragment>
      <PageHeader headerData={headerData}></PageHeader>
      <Divider />
    </React.Fragment>
  );
};

export default About;
