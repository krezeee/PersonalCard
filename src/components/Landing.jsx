import React from "react";
import { Grow, Grid } from "@material-ui/core";

export const Landing = () => {
  return (
    <Grid
      container
      justify="center"
      direction="column"
      alignItems="center"
      style={{ margin: "0.5em", paddingBottom: "10em" }}
    >
      <Grow in={true} timeout={1000}>
        <p style={{ fontSize: "4.5em", whiteSpace: "nowrap", lineHeight: "0" }}>
          Hello!
        </p>
      </Grow>
      <Grow in={true} timeout={1300}>
        <p style={{ fontSize: "1.8em", whiteSpace: "nowrap", lineHeight: "0" }}>
          I'm Paweł and I'm a Software Engineer.
        </p>
      </Grow>
    </Grid>
  );
};
