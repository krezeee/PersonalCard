import React from "react";
import { Grow, Grid, Typography } from "@material-ui/core";
import { Description } from "./ProjectDescription";

export const ProjectTemplate = (props) => {
  let paragraphs = props.description.map((paragraph, index) => {
    return <Description key={index} description={paragraph} />;
  });

  return (
    <Grow
      in={props.animate}
      style={{ transformOrigin: "0 0 0" }}
      {...(props.animate ? { timeout: props.timeout } : {})}
    >
      <Grid container direction="column" alignItems="flex-start">
        <Grid item>
          <Typography variant="h6" gutterBottom>
            {props.title}
          </Typography>
        </Grid>
        <Grid item>{paragraphs}</Grid>
      </Grid>
    </Grow>
  );
};
