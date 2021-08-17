import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import NotFound from "./NotFound";
import {
  ABOUT_URL,
  CONTACT_URL,
  HOME_URL,
  PROJECT_URL,
  PROJECTS_URL,
} from "../mappings";
import { ProjectId } from "./projects/projects";
import Baltik from "./projects/Baltik";

function NavigationSwitch() {
  return (
    <Switch>
      <Route exact path={HOME_URL} component={Home} />
      <Route exact path={ABOUT_URL} component={About} />
      <Route exact path={PROJECTS_URL} component={Projects} />
      <Route exact path={PROJECT_URL(ProjectId.Baltik)} component={Baltik} />
      <Route exact path={CONTACT_URL} component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default NavigationSwitch;
