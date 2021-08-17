import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Divider, Header, Icon, Image, Label, Popup } from "semantic-ui-react";
import { Project } from "../projects";
import { PROJECTS_IMAGES_PATH, PROJECTS_URL } from "../../../mappings";
import { ProgrammingLanguageLabel } from "./ProgrammingLanguage";

interface ProjectDetailsProps {
  project: Project;
  children: React.ReactNode;
}
function ProjectDetails({ project, children }: ProjectDetailsProps) {
  return (
    <div>
      <Helmet title={project.name} />
      <Header as="h1">
        {project.repository && (
          <Popup
            inverted
            position="top center"
            content="Browse the source code"
            trigger={
              <Icon
                style={{
                  opacity: ".45",
                }}
                name="github"
                link
                onClick={() =>
                  window.open(project.repository, "_blank", "noreferrer")
                }
              />
            }
          />
        )}
        <Header.Content>
          {project.name}
          <Header.Subheader>{project.active}</Header.Subheader>
        </Header.Content>
      </Header>
      {project.featured && (
        <Label
          horizontal
          size="large"
          color="yellow"
          style={{ marginBottom: "10px" }}
        >
          <Icon name="star" />
          Featured
        </Label>
      )}
      <div
        style={{
          marginBottom: "10px",
          display: "flex",
          flexFlow: "row nowrap",
          justifyContent: "flex-start",
        }}
      >
        {project.languages.map((language) => (
          <ProgrammingLanguageLabel language={language} key={language} />
        ))}
      </div>
      <div
        style={{ marginTop: "20px", marginBottom: "20px", fontSize: "16px" }}
      >
        {children}
        <Divider />
        <p>
          <strong>Lessons learned: {project.lessons}</strong>
        </p>
      </div>
      <Image
        bordered
        alt={project.name}
        size="massive"
        centered
        src={`${PROJECTS_IMAGES_PATH}/${project.image}`}
        style={{ marginBottom: "20px", borderColor: "grey", cursor: "pointer" }}
        onClick={() =>
          window.open(`${PROJECTS_IMAGES_PATH}/${project.image}`, "_blank")
        }
      />
      <div style={{ textAlign: "right", fontSize: "16px" }}>
        <em>
          Back to{" "}
          <Link to={PROJECTS_URL} className="content-link">
            Projects
          </Link>
        </em>{" "}
        <Icon name="arrow right" color="grey" />
      </div>
    </div>
  );
}

export default ProjectDetails;
