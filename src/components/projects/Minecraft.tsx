import React from "react";
import ProjectDetails from "./base/ProjectDetails";
import { ProjectId, PROJECTS } from "./projects";

function Minecraft() {
  return (
    <ProjectDetails project={PROJECTS[ProjectId.Minecraft]}>
      <p>
        Throughout high school (and the freshman year of university), the PC
        game I was playing the most was definitely Minecraft. I discovered the
        game sometimes in 2012 and since the beginning I was bored by the lone,
        single-player experience, so I quickly joined a local multiplayer
        survival server where I found a nice community and made few online
        friends (some of them later turned into real life friends and we are in
        touch to this day, even though we no longer play).
      </p>
      <p>
        As the time progressed I climbed the ranks, became one of the
        administrators of the server and was given FTP and SSH access, meaning I
        could fiddle with server and plugin configurations. Even later, the
        server shut down, so me and some of my buddies decided to continue the
        legacy and build our own community. I was placed in charge of Dev(Ops)
        side of things, so I registered a domain, set proper DNS records, rented
        a VPS and orchestrated all the different plugins for authentication,
        permissions, grief/cheat prevention, terrain forming etc. to neatly work
        together.
      </p>
      <p>
        Then came a time when I found myself in need of a plugin that would
        periodically remind my “staff” of builders, event masters, moderators
        etc. of tasks that need to be done. For the first time, the existing
        catalogue of plugins online didn’t contain a solution I would be
        satisfied with. I was already learning Java at that point, so I launched
        IntelliJ IDEA (my favorite IDE to this day), read Spigot (a wrapper
        around the official Minecraft Server API, providing performance
        improvements and additional capabilities) docs and in a few days I had
        working ToDo plugin. It could assign tasks to different user groups,
        periodically show them to relevant users, and admins could edit and
        check them off once they were done.
      </p>
      <p>
        I published it as a free plugin on Spigot portal and even though I lost
        interest in the server and game shortly after, to this day it amassed
        over 250 downloads from server administrators and even a handful of
        positive reviews. I am not sure if it still works today, as breaking
        changes happen in Spigot/Minecraft API and last review is from 2019, but
        it was definitely an interesting learning experience.
      </p>
    </ProjectDetails>
  );
}

export default Minecraft;
