import React from "react";

import { GitHub, Facebook, Instagram, LinkedIn } from "@material-ui/icons";
import { Grid, Typography } from "@material-ui/core";

const socialIcons = [
  {
    id: 1,
    icon: <GitHub />,
    url: "https://github.com/sohaibsalman",
  },
  {
    id: 2,
    icon: <LinkedIn />,
    url: "https://www.linkedin.com/in/sohaibsalman/",
  },
  {
    id: 3,
    icon: <Instagram />,
    url: "https://www.instagram.com/sohaib.salman/",
  },
  {
    id: 4,
    icon: <Facebook />,
    url: "https://www.facebook.com/S0haibSalman",
  },
];

const SocialLinks = () => {
  return (
    <React.Fragment>
      <Grid container justify="center" spacing={1}>
        {socialIcons.map((item) => {
          return (
            <Grid item>
              <a
                href={item.url}
                key={item.id}
                target="_blank"
                style={{ color: "white" }}
              >
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
