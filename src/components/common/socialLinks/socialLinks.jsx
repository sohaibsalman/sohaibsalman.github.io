import React from "react";

import { GitHub, Facebook, Instagram, LinkedIn } from "@material-ui/icons";
import { Grid, Typography } from "@material-ui/core";

const socialIcons = [
  {
    id: 1,
    icon: <GitHub />,
    url: "",
  },
  {
    id: 2,
    icon: <LinkedIn />,
    url: "",
  },
  {
    id: 3,
    icon: <Instagram />,
    url: "",
  },
  {
    id: 4,
    icon: <Facebook />,
    url: "",
  },
];

const SocialLinks = () => {
  return (
    <React.Fragment>
      <Grid container justify="center" spacing={1}>
        {socialIcons.map((item) => {
          return (
            <Grid item>
              <a href={item.url} key={item.id}>
                {item.icon}
              </a>
            </Grid>
          );
        })}
      </Grid>
    </React.Fragment>
  );
};

export default SocialLinks;
