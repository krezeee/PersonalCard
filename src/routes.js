import React from "react";
import { About } from "./components/about/About";
import { Projects } from "./components/projects/Projects";
import { Landing } from "./components/Landing";
import { Switch, Route } from "react-router-dom";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Landing />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/projects">
        <Projects />
      </Route>
    </Switch>
  );
};
