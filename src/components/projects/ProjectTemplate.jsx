import React from "react";
import { Grow, Grid } from "@material-ui/core";
import DescriptionParagraph from "./DescriptionParagraph";

function ProjectTemplate(props) {
  let paragraphs = props.description.map((paragraph, index) => {
    return <DescriptionParagraph key={index} description={paragraph} />;
  });

  return (
    <Grow
      in={props.animate}
      style={{ transformOrigin: "0 0 0" }}
      {...(props.animate ? { timeout: props.timeout } : {})}
    >
      <Grid container item spacing={5} justify="center">
        <Grid item xs={2}>
          <p
            style={{
              fontSize: "0.8em",
              marginTop: "5px",
              textAlign: "left"
            }}
          >
            {props.title}
          </p>
        </Grid>
        <Grid item xs={4}>
          {paragraphs}
        </Grid>
      </Grid>
    </Grow>
  );
}

export default ProjectTemplate;
