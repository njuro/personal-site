import React from "react";
import ProjectDetails from "./base/ProjectDetails";
import { ProjectId, PROJECTS } from "./projects";

function Okamih() {
  return (
    <ProjectDetails project={PROJECTS[ProjectId.Okamih]}>
      <p>
        In my high school, there was a decades-old tradition of 3 months long{" "}
        <em>Olympic games</em>, organized by junior (3rd grade) students for the
        rest of the school. It consisted of many different games and events.
        When the time for me and my peers to organize came, I volunteered to
        take care of the Olympics website where announcements and results are
        placed. This was usually handled by <em>WordPress</em> websites in the
        previous years, but I found that lame. I wanted to build the real thing
        from scratch - and I mean really from scratch, as a brief look at
        frameworks like <em>Laravel</em> or <em>Symfony</em> gave me an
        impression, that they are unnecessarily complicated and hard to
        customize (yes, I was very naive).
      </p>
      <p>
        Fortunately, I was aware that this is not an easy feat for an
        inexperienced programmer, so I started sometime in May or June (the
        games were to start in late September). I didn&apos;t enjoy as much sun
        and fresh air as I was supposed to during that summer break, as I was
        fully immersed in this task, looking at <em>Eclipse IDE</em> most of the
        time. As you can tell from the screenshot, UI/UX design were not my
        strong suit (and still aren&apos;t), but I finished the project in time
        (including some gimmicks like user avatars, nested comment replies,
        polls, and live chatbox). The website successfully worked for the
        intended purposes (aside from few bugs, like page sometimes crashing
        right before submitting long article - sorry about that). This was the
        first time I felt like a real programmer and it was awesome. It also
        made me realize that PHP might not be the greatest language ever (
        <em>mysqli_totally_real_escape_string</em>), although I heard it has
        improved quite a bit since then.
      </p>
    </ProjectDetails>
  );
}

export default Okamih;
