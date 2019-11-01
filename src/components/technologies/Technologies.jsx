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
import { Grow } from "@material-ui/core";
import "./technologies.scss";
import TypescriptIcon from "./icons/TypescriptIcon";

function Technologies(props) {
  return (
    <Grow in={props.animate} {...(props.animate ? { timeout: 1000 } : {})}>
      <div className="centered">
        <p className="title">- SKILLS -</p>
        <div className="technologies-row">
          {withTechIcon(DotNetIcon)}
          {withTechIcon(CSharpIcon)}
        </div>
        <div className="technologies-row">
          {withTechIcon(AngularIcon)}
          {withTechIcon(ReactIcon)}
          {withTechIcon(ReduxIcon)}
        </div>
        <div className="technologies-row">
          {withTechIcon(TypescriptIcon)}
          {withTechIcon(JavascriptIcon)}
          {withTechIcon(HTMLIcon)}
          {withTechIcon(CSSIcon)}
        </div>
      </div>
    </Grow>
  );
}

export default Technologies;
