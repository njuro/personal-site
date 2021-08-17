import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, Image, Modal } from "semantic-ui-react";
import { Project, ProjectId } from "../projects";
import { ProgrammingLanguageLabel } from "./ProgrammingLanguage";
import { PROJECT_URL, PROJECTS_IMAGES_PATH } from "../../../mappings";

interface ProjectOverviewProps {
  id: ProjectId;
  project: Project;
}
function ProjectOverview({ id, project }: ProjectOverviewProps) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Card>
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={
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
            alt={project.name}
          />
        }
      >
        <Modal.Header>
          {project.name} ({project.active})
        </Modal.Header>
        <Modal.Content image>
          <Image
            wrapped
            size="massive"
            src={`${PROJECTS_IMAGES_PATH}/${project.image}`}
            alt={project.name}
          />
        </Modal.Content>
      </Modal>
      <Card.Content>
        <Card.Header>{project.name}</Card.Header>
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
