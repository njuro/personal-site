import React from "react";
import ProjectDetails from "./base/ProjectDetails";
import { ProjectId, PROJECTS } from "./projects";

function UpdatRRR() {
  return (
    <ProjectDetails project={PROJECTS[ProjectId.UpdatRRR]}>
      <p>
        At the time I was using StylRRR addon for Firefox browser, which enabled
        me to enhance my regularly visited websites with custom styles developed
        by other users. The problem was that popular websites’ designs change
        rapidly and custom styles maintainers need to keep pace with them,
        otherwise the users end up with ugly looking, broken look. But every
        time when you wanted to update a given style, you’d need to head to
        userstyles.org, find the desired style and re-download it. So I answered
        the natural urge of programmers to automate everything and set out to
        develop a little app to make this process easier. As an exercise, I
        developed both command line and graphical interface, the latter with the
        help of a great tool called SceneBuilder, which enables you to create UI
        by drag & drop and export it as a FXML file, to be used by JavaFx
        application. I even implemented the fancy option to switch between light
        and dark themes. The UpdatRRR loaded and parsed custom styles from JSON
        file created by StylRRR and then you could select them, edit their
        metadata (including the CSS) and most importantly, automatically check
        if there is a more recent version available at userstyles.org and
        download it, if necessary.
      </p>
      <p>
        Shortly after I considered this project to be finished, I discovered the
        Stylus extension, which has this edit/update functionality already built
        in, so I switched to that one and still use it today. While writing this
        article, I discovered that the StylRRR extension disappeared almost
        without a trace and userstyles.org updated their design so it is no
        longer possible to scrape the style’s last update date without
        evaluating JavaScript, therefore rendering my little application
        entirely useless apart from the experience and fun it gave me.
      </p>
    </ProjectDetails>
  );
}

export default UpdatRRR;
