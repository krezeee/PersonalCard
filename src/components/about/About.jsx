import React from "react";
import { SocialPanel } from "./social/SocialPanel";
import { AboutContent } from "./AboutContent";
import { Image } from "./Image";
import { Grid, Container, Box } from "@material-ui/core";
import { Technologies } from "./technologies/Technologies";

export const About = () => {
  return (
    <Container maxWidth="sm">
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="center"
        spacing={2}
      >
        <Grid item>
          <Image />
          <SocialPanel />
        </Grid>
        <Grid item>
          <AboutContent />
        </Grid>
        <Grid item>
          <Box m={2} />
          <Technologies />
        </Grid>
      </Grid>
    </Container>
  );
};
