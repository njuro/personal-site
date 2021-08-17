import React from "react";
import { Helmet } from "react-helmet";
import { Header } from "semantic-ui-react";
import { Project } from "../projects";

interface ProjectDetailsProps {
  project: Project;
  children: React.ReactNode;
}
function ProjectDetails({ project, children }: ProjectDetailsProps) {
  return (
    <div>
      <Helmet title={project.name} />
      <Header as="h1">{project.name}</Header>
      <Header.Subheader>{project.active}</Header.Subheader>
      {children}
    </div>
  );
}

export default ProjectDetails;
