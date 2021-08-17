import React from "react";
import ProjectDetails from "./base/ProjectDetails";
import { ProjectId, PROJECTS } from "./projects";

function MarriageStats() {
  return (
    <ProjectDetails project={PROJECTS[ProjectId.MarriageStats]}>
      <p>
        One evening while scrolling Facebook I noticed an offer in our
        university study group. The task was to obtain statistics about
        marriages in Czech republic - specifically ages of grooms and brides.
        The guy was willing to pay a pretty good money (from student’s
        perspective) for the data, so I did not hesitate. Fortunately Czech
        Statistical Office has a pretty solid online portal with public
        datasets, so I found and downloaded data from all available years in
        XSL(X) documents. All that was left was to put together a script which
        would parse them, extract the desired information and merge it together
        into a new spreadsheet. One last request from a client was to generate a
        heatmap from the statistics, which I promptly did and that’s how I got
        my expenses for that year’s summer festival covered :)
      </p>
    </ProjectDetails>
  );
}

export default MarriageStats;
