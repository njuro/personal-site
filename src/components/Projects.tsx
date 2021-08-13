import React from "react";
import { Card, Divider } from "semantic-ui-react";
import { Helmet } from "react-helmet";
import useNavigation from "../useNavigation";
import { PROJECTS_URL } from "../mappings";
import ProjectCard, { ProgrammingLanguage } from "./ProjectCard";

function Projects() {
  useNavigation(PROJECTS_URL);
  return (
    <div style={{ fontSize: "18px" }}>
      <Helmet title="Projects" />
      <p>
        Here is a collection of my hobby & side programming projects that formed
        me as a programmer. Each project contains year(s) I was working on it,
        technology I used and lessons learned{" "}
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
        [1] Also a story on how and why I started it, which probably is of a
        little interest for anyone but me, but it was a nice trip down the
        memory lane writing it.
      </p>
      <Divider section />
      <Card.Group centered>
        <ProjectCard
          featured
          name="jard"
          image="jard.png"
          active="2017 - Present"
          languages={[
            ProgrammingLanguage.Java,
            ProgrammingLanguage.Kotlin,
            ProgrammingLanguage.TypeScript,
          ]}
          summary="My biggest and most ambitious project - software for anonymous imageboard management"
        />
        <ProjectCard
          name="Personal site"
          image="personal-site.png"
          active="2021 - Present"
          languages={[
            ProgrammingLanguage.TypeScript,
            ProgrammingLanguage.HTML,
            ProgrammingLanguage.CSS,
          ]}
          summary="The page you are reading right now"
        />
        <ProjectCard
          name="Medic Quiz"
          image="medic-quiz.png"
          active="2020"
          languages={[
            ProgrammingLanguage.Kotlin,
            ProgrammingLanguage.HTML,
            ProgrammingLanguage.CSS,
          ]}
          summary="Digitization and automatic evaluation of tests for future medics"
        />
        <ProjectCard
          name="Advent of Code"
          image="advent-of-code.png"
          active="2017 - Present"
          languages={[ProgrammingLanguage.Kotlin, ProgrammingLanguage.Python]}
          summary="Annual coding event I participate in"
        />
        <ProjectCard
          name="Marriage Stats"
          image="marriages.png"
          active="2017"
          languages={[ProgrammingLanguage.Python]}
          summary="Extracting and parsing of statistical data"
        />
        <ProjectCard
          name="UpdatRRR"
          image="updatrrr.png"
          active="2017"
          languages={[ProgrammingLanguage.Java]}
          summary="Desktop application for automatic update of custom stylesheets (CLI + GUI)"
        />
        <ProjectCard
          name="IRC Bot / MGC Chat Bot"
          image="ircbot.png"
          active="2017-2019"
          languages={[ProgrammingLanguage.Java, ProgrammingLanguage.Python]}
          summary="Chat bots for online communities I was part of"
        />
        <ProjectCard
          name="SuvaCraft / ToDo plugin"
          image="mcplugin.png"
          active="2015"
          languages={[ProgrammingLanguage.Java]}
          summary="Management of own Minecraft portal + custom plugin"
        />
        <ProjectCard
          name="OH OkamiH"
          image="okamih.png"
          active="2014"
          languages={[
            ProgrammingLanguage.PHP,
            ProgrammingLanguage.HTML,
            ProgrammingLanguage.JavaScript,
          ]}
          summary="Web portal + CMS for high school event"
        />
        <ProjectCard
          name="Svet Minimojov / PokéSvet"
          image="minimoj.png"
          active="2007 - 2008"
          languages={[ProgrammingLanguage.HTML, ProgrammingLanguage.CSS]}
          summary="Simple static websites I made as a child"
        />
        <ProjectCard
          name="Baltík 3"
          image="baltik.gif"
          active="2003 - 2006"
          languages={[ProgrammingLanguage.Baltik]}
          summary="My first contact with world of programming"
        />
      </Card.Group>
    </div>
  );
}

export default Projects;
