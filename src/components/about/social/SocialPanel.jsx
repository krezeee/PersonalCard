import React from "react";
import withPress from "./withPress";
import LinkedInIcon from "./icons/LinkedInIcon";
import GitHubIcon from "./icons/GitHubIcon";
import TwitterIcon from "./icons/TwitterIcon";
import { Grow, Grid } from "@material-ui/core";

export const SocialPanel = () => {
  return (
    <Grow in={true} timeout={900} style={{ transformOrigin: "0 0 0" }}>
      <Grid container justify="center">
        {withPress(LinkedInIcon)}
        {withPress(GitHubIcon)}
        {withPress(TwitterIcon)}
      </Grid>
    </Grow>
  );
};
