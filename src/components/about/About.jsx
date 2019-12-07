import React from "react";
import { SocialPanel } from "./social/SocialPanel";
import { AboutContent } from "./AboutContent";
import { Image } from "./Image";
import { Grid } from "@material-ui/core";
import Technologies from "./technologies/Technologies";

export const About = () => {
  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignContent="center"
      alignItems="center"
      style={{ fontSize: "2em" }}
    >
      <Grid
        direction="column"
        justify="center"
        alignItems="center"
        alignContent="center"
      >
        <Image />
        <SocialPanel />
      </Grid>
      <Grid>
        <AboutContent />
      </Grid>

      <Technologies />
    </Grid>
  );
};
