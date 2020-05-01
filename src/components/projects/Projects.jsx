import React from "react";
import { Container, Box } from "@material-ui/core";
import ProjectTemplate from "./ProjectTemplate";
import * as contents from "./project-contents";

export const Projects = () => {
  return (
    <Container maxWidth="sm">
      <Box m={5} />
      <ProjectTemplate
        title={contents.PrescientProject.title}
        description={contents.PrescientProject.description}
        timeout={700}
        animate={true}
      />
      <Box m={5} />
      <ProjectTemplate
        title={contents.Where2devProject.title}
        description={contents.Where2devProject.description}
        timeout={900}
        animate={true}
      />
      <Box m={5} />
      <ProjectTemplate
        title={contents.SohoDesign.title}
        description={contents.SohoDesign.description}
        timeout={1100}
        animate={true}
      />
    </Container>
  );
};
