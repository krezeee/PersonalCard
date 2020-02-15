import React from "react";
import { Grid } from "@material-ui/core";
import ProjectTemplate from "./ProjectTemplate";
import * as contents from "./ProjectContents";

function Projects() {
  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      style={{ fontSize: "2em" }}
    >
      <ProjectTemplate
        title={contents.PrescientProject.title}
        description={contents.PrescientProject.description}
        timeout={700}
        animate={true}
      />
      <ProjectTemplate
        title={contents.Where2devProject.title}
        description={contents.Where2devProject.description}
        timeout={900}
        animate={true}
      />
      <ProjectTemplate
        title={contents.SohoDesign.title}
        description={contents.SohoDesign.description}
        timeout={1100}
        animate={true}
      />
    </Grid>
  );
}

export default Projects;
