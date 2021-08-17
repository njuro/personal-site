import React from "react";
import ProjectDetails from "./base/ProjectDetails";
import { ProjectId, PROJECTS } from "./projects";

function PersonalSite() {
  return (
    <ProjectDetails project={PROJECTS[ProjectId.PersonalSite]}>
      Hello
    </ProjectDetails>
  );
}

export default PersonalSite;
