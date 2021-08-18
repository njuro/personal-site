import React from "react";
import ProjectDetails from "./base/ProjectDetails";
import { ProjectId, PROJECTS } from "./projects";

function MarriageStats() {
  return (
    <ProjectDetails project={PROJECTS[ProjectId.MarriageStats]}>
      <p>
        One evening while scrolling Facebook I noticed an offer in our
        university study group. The task was to obtain statistics about
        marriages in the Czech republic - specifically the ages of grooms and
        brides. The guy was willing to pay pretty good money (from the
        student&apos;s perspective) for the data, so I did not hesitate.
      </p>
      <p>
        Fortunately,{" "}
        <a
          href="https://www.czso.cz/csu/czso/home"
          target="_blank"
          className="content-link"
          rel="noreferrer"
        >
          <em>Czech Statistical Office</em>
        </a>{" "}
        has a pretty solid online portal with public datasets, so I found and
        downloaded data from all available years in XSL(X) documents. All that
        was left was to put together a script that would parse them, extract the
        desired information, and merge it together into a new spreadsheet. One
        last request from a client was to generate a heatmap from the
        statistics, which I promptly did and that&apos;s how I got my expenses
        for that year&apos;s summer festival covered :)
      </p>
    </ProjectDetails>
  );
}

export default MarriageStats;
