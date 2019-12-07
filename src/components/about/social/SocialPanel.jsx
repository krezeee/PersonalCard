import React from "react";
import withPress from "./withPress";
import LinkedInIcon from "./icons/LinkedInIcon";
import GitHubIcon from "./icons/GitHubIcon";
import TwitterIcon from "./icons/TwitterIcon";
import { Grow } from "@material-ui/core";

export const SocialPanel = () => {
  return (
    <Grow in={true} timeout={1000}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        {withPress(LinkedInIcon)}
        {withPress(GitHubIcon)}
        {withPress(TwitterIcon)}
      </div>
    </Grow>
  );
};
