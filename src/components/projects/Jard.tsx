import React from "react";
import { Link } from "react-router-dom";
import ProjectDetails from "./base/ProjectDetails";
import { ProjectId, PROJECTS } from "./projects";
import { EMAIL_ADDRESS, PROJECT_URL } from "../../mappings";
import Tooltip from "../Tooltip";

function Jard() {
  return (
    <ProjectDetails project={PROJECTS[ProjectId.Jard]}>
      <p>
        As you can see on the rest of this website, I worked on plenty of side
        projects in my life. But usually, they are only short-lived projects
        occupying me for few weeks, intending to solve a{" "}
        <Link className="content-link" to={PROJECT_URL(ProjectId.UpdatRRR)}>
          single problem
        </Link>{" "}
        or{" "}
        <Link className="content-link" to={PROJECT_URL(ProjectId.MedicQuiz)}>
          satisfy a paying customer
        </Link>
        . What I was lacking, was a larger-scale software project, one, that
        could be extended and polished indefinitely. And thus, <em>jard</em> was
        born.
      </p>
      <p>
        I created the repository in 2017 and since then, the following pattern
        has emerged - I would develop it almost religiously every day, during a
        month (or three), and then put it to rest due to burning out, or lack of
        time caused by work/school/life in general, only to come back a few
        months later and start the cycle again. This may not be the most
        effective strategy, but it allowed me to work on the project without
        pressure, so I could maintain a very caring approach to code quality.
      </p>
      <p>
        During the years the codebase has evolved, undergoing several major
        refactors like switching from traditional{" "}
        <Tooltip content="Model-View-Controller" trigger="MVC" /> pattern with{" "}
        <em>Thymeleaf</em> templates to exposing <em>REST API</em> and having a
        separate client codebase (written in <em>React</em>), separating{" "}
        <em>Hibernate</em> entities from{" "}
        <Tooltip content="Data Transfer Object" trigger="DTOs" />, or most
        recently - rewriting the test suite from Java to Kotlin.
      </p>
      <p>
        This is by far my biggest and most ambitious project and one I am really
        proud of. It taught me things I didn&apos;t even know could be learned
        (the{" "}
        <a
          href="https://www.wikiwand.com/en/There_are_known_knowns"
          target="_blank"
          className="content-link"
          rel="noreferrer"
        >
          <em>unknown unknowns</em>
        </a>
        ). Not just from the perspective of writing the code, but the whole
        process of developing, deploying, and releasing a software product -
        like setting up a{" "}
        <a
          href="https://circleci.com/"
          target="_blank"
          className="content-link"
          rel="noreferrer"
        >
          <em>CI pipeline</em>
        </a>
        , deploying with{" "}
        <a
          href="https://www.heroku.com/"
          target="_blank"
          className="content-link"
          rel="noreferrer"
        >
          <em>PaaS</em>
        </a>
        , or setting up{" "}
        <a
          href="https://www.alexblackie.com/articles/email-authenticity-dkim-spf-dmarc/"
          target="_blank"
          className="content-link"
          rel="noreferrer"
        >
          DNS records for confirming an outgoing e-mail authenticity
        </a>
        .
      </p>
      <p>
        If you are interested in learning more about this endeavor of mine,
        please consult the{" "}
        <a
          href="https://github.com/njuro/jard"
          target="_blank"
          className="content-link"
          rel="noreferrer"
        >
          README
        </a>{" "}
        of the GitHub repository, or write me{" "}
        <a
          href={`mailto:${EMAIL_ADDRESS}`}
          target="_blank"
          className="content-link"
          rel="noreferrer"
        >
          an e-mail
        </a>
        . Right now, I am very close to finally releasing the 1.0 version and
        sharing it with relevant communities to get feedback from other people -
        very exciting.
      </p>
    </ProjectDetails>
  );
}

export default Jard;
