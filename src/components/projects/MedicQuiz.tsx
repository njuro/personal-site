import React from "react";
import ProjectDetails from "./base/ProjectDetails";
import { ProjectId, PROJECTS } from "./projects";

function MedicQuiz() {
  return (
    <ProjectDetails project={PROJECTS[ProjectId.MedicQuiz]}>
      <p>
        Another “side hustle” task for a client. This one I got from an
        acquaintance of a guy I met at a beach volleyball tournament. She was
        working with students preparing for admission exams at medical faculty.
        The assignment was to digitize tests from biology and chemistry, so they
        could be taken and evaluated online with a time limit.{" "}
      </p>
      <p>
        At first I received the materials in the form of scanned papers in PDF.
        I tried to apply OCR on it and although I was quite impressed with the
        results, it was impossible to detect the structure of a question (with a
        number, the question itself and multiple answers each denoted by a
        letter). So I asked for some other source and fortunately she was able
        to provide me with tests in DOCX format and answer sheets in XLSX. Much
        better.
      </p>
      <p>
        I quickly researched the ways to parse a Word document and finally
        settled on converting it with Mammoth library to HTML and then simply
        parse it as webpage with JSoup. The process was quite tedious as there
        was irregularities in the tests requiring manual correction and some
        answers were in a form of embedded image which Mammoth doesn’t convert,
        so it took some time. On the other hand, parsing the answer sheets was
        straightforward with the help of Apache POI library.
      </p>
      <p>
        When I was done (having converted both the questions and answers to
        structured YAML files), all that was left was to put it online. I chose
        Spring Boot framework and Thymeleaf template engine (for UI I opted for
        Semantic UI components). I also added basic authentication, allowed the
        administrator to preview all tests and implemented a system for
        generating one-time link with access token for specific test to be given
        to students. I deployed the whole thing with Heroku and handed it to the
        client, who was satisfied with the results.
      </p>
    </ProjectDetails>
  );
}

export default MedicQuiz;
