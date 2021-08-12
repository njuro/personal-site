import React from "react";
import { Card, Divider } from "semantic-ui-react";
import { Helmet } from "react-helmet";
import useNavigation from "../useNavigation";
import { PROJECTS_URL } from "../mappings";
import ProjectCard from "./ProjectCard";

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
          name="jard"
          image="jard.jpg"
          active="2017 - Present"
          languages={["Java", "Kotlin", "TypeScript"]}
          summary="My biggest and most ambitious project - software for anonymous imageboard management"
        />
        <ProjectCard
          name="Personal site"
          image="personal-site.jpg"
          active="2021 - Present"
          languages={["TypeScript", "HTML", "CSS"]}
          summary="The page you are reading right now"
        />
        <ProjectCard
          name="Medic Quiz"
          image="medic-quiz.jpg"
          active="2020"
          languages={["Kotlin", "HTML", "CSS"]}
          summary="Digitization and automatic evaluation of tests for future medics"
        />
        <ProjectCard
          name="Advent of Code"
          image="advent-of-code.jpg"
          active="2017 - Present"
          languages={["Kotlin", "Python"]}
          summary="Annual coding event I participate in"
        />
        <ProjectCard
          name="Marriage Stats"
          image="marriages.jpg"
          active="2017"
          languages={["Python"]}
          summary="Extracting and parsing of statistical data"
        />
        <ProjectCard
          name="UpdatRRR"
          image="updatrrr.jpg"
          active="2017"
          languages={["Java"]}
          summary="Desktop application for automatic update of custom stylesheets (CLI + GUI)"
        />
        <ProjectCard
          name="IRC Bot / MGC Chat Bot"
          image="ircbot.jpg"
          active="2017-2019"
          languages={["Java", "Python"]}
          summary="Chat bots for online communities I was part of"
        />
        <ProjectCard
          name="SuvaCraft / ToDo plugin"
          image="todo.jpg"
          active="2015"
          languages={["Java"]}
          summary="Management of own Minecraft portal + custom plugin"
        />
        <ProjectCard
          name="OH OkamiH"
          image="okamih.jpg"
          active="2014"
          languages={["PHP", "HTML", "JavaScript"]}
          summary="Web portal + CMS for high school event"
        />
        <ProjectCard
          name="Svet Minimojov / PokéSvet"
          image="minimoj.jpg"
          active="2007 - 2008"
          languages={["HTML", "CSS"]}
          summary="Simple static websites I made as a child"
        />
        <ProjectCard
          name="Baltík 3"
          image="baltik.gif"
          active="2003 - 2006"
          languages={["Baltik"]}
          summary="My first contact with world of programming"
        />
      </Card.Group>
    </div>
  );
}

export default Projects;
