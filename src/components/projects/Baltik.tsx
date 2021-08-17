import React from "react";
import ProjectDetails from "./base/ProjectDetails";
import { ProjectId, PROJECTS } from "./projects";

function Baltik() {
  return (
    <ProjectDetails project={PROJECTS[ProjectId.Baltik]}>
      <p>
        My first contact with programming was quite early - when I was 5 or 6, a
        single computer appeared in our kindergarten class, which was unheard of
        at the time. I don&apos;t remember much, but I know we were taking turns
        in front of it, &quot;playing&quot; Baltík - programming language and
        IDE designed for kids - quite similar to Scratch, which seems to be
        popular nowadays.
      </p>
      <p>
        Created by Czech company SGP Systems, it featured a list of tiles with
        various commands you could drag-and-drop to compose sequences (i.e.
        programs) and then watch a little wizard executing them. There were many
        concepts I couldn&apos;t wrap my head around at that age (such as
        drawers representing variables, or robots/helpers representing
        functions), but I still had tons of fun with it (both in kindergarten
        and at home), building houses, drawing shapes, embedding MIDI audio etc.
      </p>
    </ProjectDetails>
  );
}

export default Baltik;
