import React from "react";
import ProjectDetails from "./base/ProjectDetails";
import { ProjectId, PROJECTS } from "./projects";

function AdventOfCode() {
  return (
    <ProjectDetails project={PROJECTS[ProjectId.AdventOfCode]}>
      <p>
        This isn’t really a side project, but I think it’s worth mentioning
        here. For the last couple of years I have been participating in this
        annual coding puzzle game. It takes place during Advent (hence the name)
        and consists of 25 puzzles with one published each day. The puzzles can
        be solved in any language. I did the first year in 2017 in Python and
        other years in Kotlin (including past years, cause the archive of
        puzzles is open to everyone). AoC is a great opportunity to play with a
        new language, get more familiar with the standard library of language
        you already use and brush up your algorithms and data structures skills.
      </p>
      <p>
        Last year I encouraged some of my colleagues to participate, we set up a
        private company leaderboard and had a blast. Even our non-programmer COO
        joined in and put on a remarkable performance, solving the first days
        with his Excel magic and then trying Python for the first time.
      </p>
      <p>
        That being said, the biggest challenge for me in this competition is to
        wake up everyday at 6 AM for almost a month, cause that’s when the
        puzzle are published in my timezone :)
      </p>
    </ProjectDetails>
  );
}

export default AdventOfCode;
