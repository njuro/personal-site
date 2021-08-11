import React from "react";
import { Card, Image } from "semantic-ui-react";

interface ProjectProps {
  name: string;
  image: string;
  active: string;
  languages: string[];
  summary: string;
}
function ProjectCard({
  name,
  image,
  active,
  languages,
  summary,
}: ProjectProps) {
  return (
    <Card>
      <Image wrapped ui={false} src={`/images/projects/${image}`} />
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>{active}</Card.Meta>
        <Card.Description>{summary}</Card.Description>
      </Card.Content>
      <Card.Content extra>{languages.join(", ")} See Details</Card.Content>
    </Card>
  );
}

export default ProjectCard;
