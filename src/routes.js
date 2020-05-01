import React from "react";
import { About } from "./components/about/about";
import { Viewer } from "./components/viewer/Viewer";
import Projects from "./components/projects/projects";
import { Landing } from "./components/landing";
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
      <Route path="/game">
        <Viewer />
      </Route>
    </Switch>
  );
};
