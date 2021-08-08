import React from "react";
import useNavigation from "../useNavigation";
import { PROJECTS_URL } from "../mappings";

function Projects() {
  useNavigation(PROJECTS_URL);
  return <div>Projects</div>;
}

export default Projects;
