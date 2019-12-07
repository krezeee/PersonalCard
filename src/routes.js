import React from "react";
import { About } from "./components/about/About";
import { Viewer } from "./components/viewer/Viewer";
import Projects from "./components/projects/Projects";
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
      <Route path="/game">
        <Viewer />
      </Route>
    </Switch>
  );
};
