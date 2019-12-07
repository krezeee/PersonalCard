import React from "react";
import { Grow, Grid } from "@material-ui/core";

export const Landing = () => {
  return (
    <Grid
      container
      justify="center"
      direction="column"
      alignItems="center"
      style={{ padding: "1em" }}
    >
      <Grow in={true} timeout={1000}>
        <p style={{ fontSize: "2.5em", whiteSpace: "nowrap" }}>Hello!</p>
      </Grow>
      <Grow in={true} timeout={1300}>
        <p style={{ fontSize: "1.8em", whiteSpace: "nowrap" }}>
          I'm Paweł and I'm a Software Engineer.
        </p>
      </Grow>
    </Grid>
  );
};
