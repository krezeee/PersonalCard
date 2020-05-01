import React from "react";
import posed from "react-pose";
import { Grid } from "@material-ui/core";

const withTechIcon = (Component) => {
  const Wrapped = posed.div({
    hoverable: true,
    init: {
      scale: 1,
    },
    hover: {
      scale: 1.2,
    },
  });

  return (
    <Grid item>
      <Wrapped>
        <Component />
      </Wrapped>
    </Grid>
  );
};

export default withTechIcon;
