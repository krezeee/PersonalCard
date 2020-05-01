import React from "react";
import { Typography } from "@material-ui/core";

export const Description = (props) => {
  return (
    <Typography variant="subtitle2" align="justify" gutterBottom>
      {props.description}
    </Typography>
  );
};
