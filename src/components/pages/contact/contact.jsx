import React from "react";
import Header from "../../common/page/header";
import { getContactHeader } from "./../../../services/contactService";

const Contact = () => {
  const header = getContactHeader();
  return (
    <React.Fragment>
      <Header heading={header.heading} description={header.description} />
    </React.Fragment>
  );
};

export default Contact;
