import React from "react";
import { Card, Divider } from "semantic-ui-react";
import useNavigation from "../useNavigation";
import { PROJECTS_URL } from "../mappings";
import ProjectCard from "./ProjectCard";

function Projects() {
  useNavigation(PROJECTS_URL);
  return (
    <div style={{ fontSize: "18px" }}>
      <p>
        Here is a collection of my hobby & side programming projects that formed
        me as a programmer. Each project contains year(s) I was working on it,
        technology I used and lessons learned [1].
      </p>
      <p>
        This is not an exhaustive collection, as I omitted projects done in
        university, interview assignments for various companies and some other
        projects I haven&apos;t recalled much.
      </p>
      <p style={{ fontSize: "14px", color: "grey" }}>
        [1] Also a story on how and why I started it, which probably is of a
        little interest for anyone but me, but it was a nice trip down the
        memory line writing it.
      </p>
      <Divider />
      <Card.Group centered>
        <ProjectCard
          name="Baltík"
          image="baltik.gif"
          active="2003 - 2006"
          languages={["Baltik"]}
          summary="The sweet beginnings"
        />
      </Card.Group>
    </div>
  );
}

export default Projects;
