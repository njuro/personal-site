import React from "react";
import ProjectDetails from "./base/ProjectDetails";
import { ProjectId, PROJECTS } from "./projects";

function UpdatRRR() {
  return (
    <ProjectDetails project={PROJECTS[ProjectId.UpdatRRR]}>
      <p>
        At the time I was using <em>StylRRR</em> addon for Firefox browser,
        which enabled me to enhance my regularly visited websites with custom
        styles developed by other users. The problem was that popular
        websites&apos; designs change rapidly and custom styles maintainers need
        to keep pace with them. Otherwise, the users end up with ugly looking,
        broken look. But whenever you wanted to update a given style, you&apos;d
        need to head to{" "}
        <a
          href="https://userstyles.org"
          target="_blank"
          className="content-link"
          rel="noreferrer"
        >
          <em>userstyles.org</em>
        </a>
        , find the desired style, and re-download it. So I answered the natural
        urge of programmers to automate everything and set out to develop a
        little app to make this process easier. As an exercise, I developed both
        command line and graphical interface. The latter was made with the help
        of a tool called{" "}
        <a
          href="https://gluonhq.com/products/scene-builder/"
          target="_blank"
          className="content-link"
          rel="noreferrer"
        >
          <em>SceneBuilder</em>
        </a>
        , which enables you to create UI by drag & drop. When you are done, you
        can export it to a special <em>FXML</em> which will be parsed by JavaFx
        application. I even implemented the fancy option to switch between light
        and dark themes. The UpdatRRR loaded and parsed custom styles from JSON
        file created by StylRRR and then you could select them, edit their
        metadata (including the CSS) and most importantly, automatically check
        if there is more recent version available at userstyles.org and download
        it.
      </p>
      <p>
        Shortly after I considered this project to be finished, I discovered the{" "}
        <a
          href="https://addons.mozilla.org/en-US/firefox/addon/styl-us/"
          target="_blank"
          className="content-link"
          rel="noreferrer"
        >
          <em>Stylus</em>
        </a>{" "}
        extension, which has this edit/update functionality already built-in, so
        I switched to that one and still use it today. While writing this
        article, I discovered that the StylRRR extension disappeared almost
        without a trace and userstyles.org updated their design - so it is no
        longer possible to scrape the style&apos;s last update date without
        evaluating JavaScript, therefore rendering my little application
        entirely useless apart from the experience and fun it gave me.
      </p>
    </ProjectDetails>
  );
}

export default UpdatRRR;
