import React from "react";
import { Grow, Grid, Box, Typography } from "@material-ui/core";

export const Landing = () => {
  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      spacing={4}
    >
      <Box m={10} />
      <Grid item>
        <Grow in={true} timeout={1000}>
          <Typography variant="h1" align="center">
            Hello!
          </Typography>
        </Grow>
      </Grid>
      <Grid item>
        <Grow in={true} timeout={1300}>
          <Typography variant="h5" align="center">
            I'm Paweł and I'm a Software Engineer.
          </Typography>
        </Grow>
      </Grid>
    </Grid>
  );
};
