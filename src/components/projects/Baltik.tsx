import React from "react";
import ProjectDetails from "./base/ProjectDetails";
import { ProjectId, PROJECTS } from "./projects";

function Baltik() {
  return (
    <ProjectDetails project={PROJECTS[ProjectId.Baltik]}>
      Hello from Baltik
    </ProjectDetails>
  );
}

export default Baltik;
