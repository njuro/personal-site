import React from "react";
import ProjectDetails from "./base/ProjectDetails";
import { ProjectId, PROJECTS } from "./projects";

function Jard() {
  return (
    <ProjectDetails project={PROJECTS[ProjectId.Jard]}>Hello</ProjectDetails>
  );
}

export default Jard;
