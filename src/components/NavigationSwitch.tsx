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
import Baltie from "./projects/Baltie";
import Minimoj from "./projects/Minimoj";
import Okamih from "./projects/Okamih";
import Jard from "./projects/Jard";
import PersonalSite from "./projects/PersonalSite";
import AdventOfCode from "./projects/AdventOfCode";
import MedicQuiz from "./projects/MedicQuiz";
import MarriageStats from "./projects/MarriageStats";
import UpdatRRR from "./projects/UpdatRRR";
import Minecraft from "./projects/Minecraft";
import ChatBot from "./projects/ChatBot";

function NavigationSwitch() {
  return (
    <Switch>
      <Route exact path={HOME_URL} component={Home} />
      <Route exact path={ABOUT_URL} component={About} />
      <Route exact path={PROJECTS_URL} component={Projects} />
      <Route exact path={PROJECT_URL(ProjectId.Baltie)} component={Baltie} />
      <Route exact path={PROJECT_URL(ProjectId.Minimoj)} component={Minimoj} />
      <Route exact path={PROJECT_URL(ProjectId.Okamih)} component={Okamih} />
      <Route
        exact
        path={PROJECT_URL(ProjectId.Minecraft)}
        component={Minecraft}
      />
      <Route
        exact
        path={PROJECT_URL(ProjectId.UpdatRRR)}
        component={UpdatRRR}
      />
      <Route exact path={PROJECT_URL(ProjectId.ChatBot)} component={ChatBot} />
      <Route
        exact
        path={PROJECT_URL(ProjectId.MarriageStats)}
        component={MarriageStats}
      />
      <Route
        exact
        path={PROJECT_URL(ProjectId.MedicQuiz)}
        component={MedicQuiz}
      />
      <Route
        exact
        path={PROJECT_URL(ProjectId.AdventOfCode)}
        component={AdventOfCode}
      />
      <Route
        exact
        path={PROJECT_URL(ProjectId.PersonalSite)}
        component={PersonalSite}
      />
      <Route exact path={PROJECT_URL(ProjectId.Jard)} component={Jard} />
      <Route exact path={CONTACT_URL} component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default NavigationSwitch;
