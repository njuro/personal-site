import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Card, Image } from "semantic-ui-react";
import styled from "styled-components";
import { Project, ProjectId } from "../projects";
import { ProgrammingLanguageLabel } from "./ProgrammingLanguage";
import { PROJECT_URL, PROJECTS_IMAGES_PATH } from "../../../mappings";
import { primaryColor } from "../../../theme";

const ProjectLink = styled(Link)`
  color: ${primaryColor} !important;

  &:hover,
  &:active {
    color: black !important;
  }
`;
interface ProjectOverviewProps {
  id: ProjectId;
  project: Project;
}
function ProjectOverview({ id, project }: ProjectOverviewProps) {
  const history = useHistory();

  return (
    <Card>
      <Image
        label={
          project.featured
            ? { as: "a", corner: "left", icon: "star", color: "yellow" }
            : undefined
        }
        style={{ cursor: "pointer" }}
        wrapped
        ui={false}
        src={`${PROJECTS_IMAGES_PATH}/${project.image}`}
        onClick={() => history.push(PROJECT_URL(id))}
        alt={project.name}
      />
      <Card.Content>
        <Card.Header>
          <ProjectLink to={PROJECT_URL(id)}>{project.name}</ProjectLink>
        </Card.Header>
        <Card.Meta>{project.active}</Card.Meta>
        <Card.Description>{project.summary}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div
          style={{
            display: "flex",
            flexFlow: "row nowrap",
            justifyContent: "space-around",
          }}
        >
          {project.languages.map((language) => (
            <ProgrammingLanguageLabel language={language} key={language} />
          ))}
        </div>
      </Card.Content>
      <Card.Content
        extra
        style={{
          textAlign: "center",
          color: "gray",
          fontWeight: "bold",
        }}
      >
        <Link to={PROJECT_URL(id)}>See details & story</Link>
      </Card.Content>
    </Card>
  );
}

export default ProjectOverview;
