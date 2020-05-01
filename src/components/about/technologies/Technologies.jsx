import React from "react";
import withTechIcon from "./withTechIcon";
import DotNetIcon from "./icons/DotNetIcon";
import CSSIcon from "./icons/CSSIcon";
import ReactIcon from "./icons/ReactIcon";
import HTMLIcon from "./icons/HTMLIcon";
import ReduxIcon from "./icons/ReduxIcon";
import JavascriptIcon from "./icons/JavascriptIcon";
import CSharpIcon from "./icons/CSharpIcon";
import AngularIcon from "./icons/AngularIcon";
import { Grow, Grid } from "@material-ui/core";
import "./technologies.scss";
import TypescriptIcon from "./icons/TypescriptIcon";

export const Technologies = (props) => {
  return (
    <Grow in={true} timeout={1000}>
      <Grid container spacing={2} justify="center">
        {withTechIcon(DotNetIcon)}
        {withTechIcon(CSharpIcon)}
        {withTechIcon(AngularIcon)}
        {withTechIcon(ReactIcon)}
        {withTechIcon(ReduxIcon)}
        {withTechIcon(TypescriptIcon)}
        {withTechIcon(JavascriptIcon)}
        {withTechIcon(HTMLIcon)}
        {withTechIcon(CSSIcon)}
      </Grid>
    </Grow>
  );
};
