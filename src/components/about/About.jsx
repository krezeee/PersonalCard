import React from "react";
import { SocialPanel } from "./social/social-panel";
import { AboutContent } from "./about-content";
import { Image } from "./image";
import { Grid, Container } from "@material-ui/core";
import { Technologies } from "./technologies/technologies";

export const About = () => {
  return (
    <Container maxWidth="sm">
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="center"
        spacing={5}
      >
        <Grid item>
          <Image />
          <SocialPanel />
        </Grid>
        <Grid item>
          <AboutContent />
        </Grid>
        <Grid item>
          <Technologies />
        </Grid>
      </Grid>
    </Container>
  );
};
