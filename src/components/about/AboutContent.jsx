import React from "react";
import { Grow, Container, Typography, Box } from "@material-ui/core";

export const AboutContent = () => {
  return (
    <Grow in={true} timeout={1100} style={{ transformOrigin: "0 0 0" }}>
      <Container maxWidth="sm">
        <Typography variant="h5">
          My name is Paweł Krężel. <br />
          I'm a Software Engineer.
        </Typography>
        <Box m={4} />
        <Typography variant="subtitle2" align="justify">
          A passionate for innovation and new technology person, with strong
          background in Civil Engineering. With most of my career spent around
          Building Information Modelling, I am interrested in exploring new ways
          of automation in the building industry! I also like web technologies,
          especially 3D graphics in the browser, thats so fun!
        </Typography>
        <Box m={4} />
        <Typography variant="h6">Any idea for a project?</Typography>
        <Box m={1} />
        <Typography variant="h6">Reach me out!</Typography>
      </Container>
    </Grow>
  );
};

export default AboutContent;
