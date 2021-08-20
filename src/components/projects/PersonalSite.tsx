import React from "react";
import { Link } from "react-router-dom";
import ProjectDetails from "./base/ProjectDetails";
import { ProjectId, PROJECTS } from "./projects";
import {
  GITHUB_URL,
  LINKEDIN_URL,
  PROJECT_URL,
  PROJECTS_URL,
} from "../../mappings";

function PersonalSite() {
  return (
    <ProjectDetails project={PROJECTS[ProjectId.PersonalSite]}>
      <p>
        For some time, I was toying with the idea of having my own, personal
        corner on the Internet. Sure,{" "}
        <a
          href={GITHUB_URL}
          target="_blank"
          className="content-link"
          rel="noreferrer"
        >
          <em>GitHub</em>
        </a>{" "}
        and{" "}
        <a
          href={LINKEDIN_URL}
          target="_blank"
          className="content-link"
          rel="noreferrer"
        >
          <em>LinkedIn</em>
        </a>{" "}
        exist for self-presentation, but I wanted something more. A place, where
        I could articulate my thoughts, showcase my{" "}
        <Link to={PROJECTS_URL} className="content-link">
          Projects
        </Link>{" "}
        and generally express myself without constraints imposed by the
        aforementioned social networks. And then I finally sit down and began
        working on it.
      </p>
      <p>
        The first task was to determine a tech stack. As I already knew some{" "}
        <em>React</em>, I decided to go with it. Then I wondered if I should
        take time to learn a framework for more effective creating of static
        websites, such as{" "}
        <a
          href="https://www.gatsbyjs.com/"
          target="_blank"
          className="content-link"
          rel="noreferrer"
        >
          <em>Gatsby</em>
        </a>
        . I decided it&apos;s not worth the effort, as my functional
        requirements were very simple, but I might come back to it in the future
        and attempt a rewrite. Then the most challenging part began - creating
        the content.
      </p>
      <p>
        I am fairly used to watching English movies, reading English books, and
        even using English in informal discussions. But it was unusual for me,
        to formulate longer, coherent paragraphs in English, where I need to
        focus on proper grammar, sentence structure, and word choices.
        Thankfully, tools like{" "}
        <a
          href="https://www.grammarly.com/"
          target="_blank"
          className="content-link"
          rel="noreferrer"
        >
          <em>Grammarly</em>
        </a>{" "}
        exist to help in these cases. The result is not perfect (maybe because I
        was not willing to pay 30$ for their <em>Premium</em> plan), but I hope
        it is readable. If you spot a typo or really poor wording, please let me
        know.
      </p>
      <p>
        Another difficulty was collecting information about projects I have done
        throughout my life. Some of them I haven&apos;t thought about in many
        years and I sure as hell didn&apos;t have screenshots of them in action.
        So I started to scan through old repositories, hard drives, and e-mails
        to put the pieces together. For example, in order to recreate the
        illustration images, I had to set up a{" "}
        <Link to={PROJECT_URL(ProjectId.Minecraft)} className="content-link">
          new Minecraft server
        </Link>
        ,{" "}
        <Link to={PROJECT_URL(ProjectId.ChatBot)} className="content-link">
          re-connect my IRC bot
        </Link>
        , dig through my{" "}
        <Link to={PROJECT_URL(ProjectId.Okamih)} className="content-link">
          high school student groups on Facebook
        </Link>
        , or fix a broken{" "}
        <Link to={PROJECT_URL(ProjectId.UpdatRRR)} className="content-link">
          JavaFx application
        </Link>
        . As a reward, I got the nostalgic feelings from bringing long-forgotten
        projects that were once very close to my heart back to life.
      </p>
      <p>
        Then came the fun part - adding various whistles and bells, like the
        pronunciation of my name, or automatic fetching of my last{" "}
        <em>GitHub</em> commit information. I hope I didn&apos;t overdo it (even
        if I did, I still like it too much to remove it,{" "}
        <strong>#sorrynotsorry</strong>).
      </p>
      <p>
        When I was finally done, all that was left was to share the result with
        the world. I was glad I finally had an opportunity to try out{" "}
        <a
          href="https://www.netlify.com/"
          target="_blank"
          className="content-link"
          rel="noreferrer"
        >
          <em>Netlify</em>
        </a>{" "}
        for hosting static web pages (and I am very satisfied with their user
        experience) and I convinced myself yet again, that{" "}
        <a
          href="https://www.porkbun.com/"
          target="_blank"
          className="content-link"
          rel="noreferrer"
        >
          <em>Porkbun</em>
        </a>{" "}
        is a solid domain provider. And just like that, we were live!
      </p>
    </ProjectDetails>
  );
}

export default PersonalSite;
