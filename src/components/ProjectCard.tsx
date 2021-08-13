import React, { useState } from "react";
import { Card, Image, Label, Modal, SemanticCOLORS } from "semantic-ui-react";

const colorMapping: Record<ProgrammingLanguage, SemanticCOLORS> = {
  Java: "red",
  Kotlin: "blue",
  JavaScript: "teal",
  TypeScript: "teal",
  Python: "green",
  HTML: "orange",
  CSS: "violet",
  PHP: "brown",
  Baltik: "yellow",
};
export enum ProgrammingLanguage {
  Java = "Java",
  Kotlin = "Kotlin",
  TypeScript = "TypeScript",
  JavaScript = "JavaScript",
  Python = "Python",
  PHP = "PHP",
  HTML = "HTML",
  CSS = "CSS",
  Baltik = "Baltik",
}
interface ProjectProps {
  name: string;
  featured?: boolean;
  image: string;
  active: string;
  languages: ProgrammingLanguage[];
  summary: string;
}
function ProjectCard({
  name,
  featured,
  image,
  active,
  languages,
  summary,
}: ProjectProps) {
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
              featured
                ? { as: "a", corner: "left", icon: "star", color: "yellow" }
                : undefined
            }
            style={{ cursor: "pointer" }}
            wrapped
            ui={false}
            src={`/images/projects/${image}`}
            alt={name}
          />
        }
      >
        <Modal.Header>
          {name} ({active})
        </Modal.Header>
        <Modal.Content image>
          <Image
            wrapped
            size="massive"
            src={`/images/projects/${image}`}
            alt={name}
          />
        </Modal.Content>
      </Modal>
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>{active}</Card.Meta>
        <Card.Description>{summary}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div
          style={{
            display: "flex",
            flexFlow: "row nowrap",
            justifyContent: "space-around",
          }}
        >
          {languages.map((language) => (
            <Label
              horizontal
              size="large"
              key={language}
              color={colorMapping[language]}
            >
              {language}
            </Label>
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
        <a href="https://google.com">See details & story</a>
      </Card.Content>
    </Card>
  );
}

export default ProjectCard;
