import React from "react";
import { Card, Divider } from "semantic-ui-react";
import { Helmet } from "react-helmet";
import useNavigation from "../useNavigation";
import { PROJECTS_URL } from "../mappings";
import ProjectOverview from "./projects/base/ProjectOverview";
import { ProjectId, PROJECTS } from "./projects/projects";

function Projects() {
  useNavigation(PROJECTS_URL);
  return (
    <div style={{ fontSize: "18px" }}>
      <Helmet title="Projects" />
      <p>
        Here is a collection of my hobby & side programming projects that formed
        me as a programmer. Each project contains the year(s) I was working on
        it, technology I used and lessons learned{" "}
        <sup>
          <em>[1]</em>
        </sup>
        . The projects are ordered chronologically from most to least recent.
      </p>
      <p>
        This is not an exhaustive collection, as I omitted projects done in
        university, interview assignments for various companies and some other
        projects I haven&apos;t recalled much.
      </p>
      <p style={{ fontSize: "14px", color: "grey" }}>
        [1] Also a story on how and why I started it, which probably is of
        little interest for anyone but me, but it was a nice trip down the
        memory lane writing it.
      </p>
      <Divider section />
      <Card.Group centered>
        {Object.entries(PROJECTS).map(([id, project]) => (
          <ProjectOverview id={id as ProjectId} project={project} key={id} />
        ))}
      </Card.Group>
    </div>
  );
}

export default Projects;
