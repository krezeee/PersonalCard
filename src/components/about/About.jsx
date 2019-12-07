import React from "react";
import { SocialPanel } from "./social/SocialPanel";
import { AboutContent } from "./AboutContent";
import { Image } from "./Image";
import { Box } from "@material-ui/core";
import Technologies from "./technologies/Technologies";

export const About = () => {
  return (
    <Box
      direction="column"
      justify="center"
      alignItems="center"
      style={{ fontSize: "2em" }}
    >
      <Box direction="column" justify="center" alignItems="center">
        <Image />
        <SocialPanel />
      </Box>
      <Box direction="column" justify="center" alignItems="center">
        <AboutContent />
      </Box>
      <Technologies />
    </Box>
  );
};
