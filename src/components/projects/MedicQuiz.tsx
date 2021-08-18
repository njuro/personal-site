import React from "react";
import ProjectDetails from "./base/ProjectDetails";
import { ProjectId, PROJECTS } from "./projects";

function MedicQuiz() {
  return (
    <ProjectDetails project={PROJECTS[ProjectId.MedicQuiz]}>
      <p>
        Another &quot;side hustle&quot; task for a client. This one I got from
        an acquaintance of a guy I met at a beach volleyball tournament. She was
        working with students preparing for admission exams at medical faculty.
        The assignment was to digitize tests from biology and chemistry, so they
        could be taken and evaluated online with a time limit.
      </p>
      <p>
        At first, I received the materials in the form of scanned papers in PDF.
        I tried to apply{" "}
        <a
          href="https://www.wikiwand.com/en/Optical_character_recognition"
          target="_blank"
          className="content-link"
          rel="noreferrer"
        >
          <em>OCR</em>
        </a>{" "}
        on them, and although I was quite impressed with the results, it was
        impossible to detect the structure of a question (with a number, the
        question itself, and multiple answers, each denoted by a letter). So I
        asked for some other source and fortunately, she was able to provide me
        with tests in DOCX format and answer sheets in XLSX. Much better.
      </p>
      <p>
        I quickly researched the ways to parse a Word document and finally
        settled on converting it with{" "}
        <a
          href="https://mike.zwobble.org/projects/mammoth/"
          target="_blank"
          className="content-link"
          rel="noreferrer"
        >
          <em>Mammoth</em>
        </a>{" "}
        library to HTML and then simply parse it as a webpage with{" "}
        <a
          href="https://jsoup.org/"
          target="_blank"
          className="content-link"
          rel="noreferrer"
        >
          <em>JSoup</em>
        </a>
        . The process was quite tedious, as there were irregularities in the
        tests requiring manual correction and some answers were in a form of an
        embedded image (which Mammoth can&apos; convert), so it took some time.
        On the other hand, parsing the answer sheets was straightforward with
        the help of the{" "}
        <a
          href="https://poi.apache.org/"
          target="_blank"
          className="content-link"
          rel="noreferrer"
        >
          <em>Apache POI</em>
        </a>{" "}
        library.
      </p>
      <p>
        When I was done (having converted both the questions and answers to
        structured <em>YAML</em> files), all that was left was to put it online.
        I chose{" "}
        <a
          href="https://spring.io/"
          target="_blank"
          className="content-link"
          rel="noreferrer"
        >
          <em>Spring Boot</em>
        </a>{" "}
        framework and{" "}
        <a
          href="https://thymeleaf.org/"
          target="_blank"
          className="content-link"
          rel="noreferrer"
        >
          <em>Thymeleaf</em>
        </a>{" "}
        template engine (for UI I opted for{" "}
        <a
          href="https://semantic-ui.com/"
          target="_blank"
          className="content-link"
          rel="noreferrer"
        >
          <em>Semantic UI</em>
        </a>{" "}
        components). I also added basic authentication, allowed the
        administrator to preview all tests and implemented a system for
        generating a one-time link with access token for a specific test to be
        given to students. I deployed the whole thing with{" "}
        <a
          href="https://heroku.com/"
          target="_blank"
          className="content-link"
          rel="noreferrer"
        >
          <em>Heroku</em>
        </a>{" "}
        and handed it to the client, who was satisfied with the results.
      </p>
    </ProjectDetails>
  );
}

export default MedicQuiz;
