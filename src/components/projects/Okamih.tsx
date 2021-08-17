import React from "react";
import ProjectDetails from "./base/ProjectDetails";
import { ProjectId, PROJECTS } from "./projects";

function Okamih() {
  return (
    <ProjectDetails project={PROJECTS[ProjectId.Okamih]}>
      <p>
        Things get serious here. In my highschool there was a decades old
        tradition of 3 months long “olympic games” organized by junior (3rd
        grade) students for the rest of the school, consisting of many different
        games and events. When the time for me and my peers to organize came, I
        volunteered to take care of the olympics website where announcements and
        results are placed. This was usually handled by Wordpress websites in
        the previous years, but I found that lame and wanted to build the real
        thing from scratch - and I mean really from scratch, as a brief look at
        frameworks like Laravel or Symfony gave me impression, that they are
        unnecessary complicated and hard to customize (yes, I was very naive).
      </p>
      <p>
        Fortunately, I was aware that this is not an easy feat for inexperienced
        programmer, so I started sometimes in May or June (the games were to
        start in late September). I didn’t enjoy as much sun and fresh air as I
        was supposed to during that summer break, as I was fully immersed in
        this task, looking at Eclipse IDE most of the time. But I can honestly
        say I managed to do it. As you can tell from the screenshot, UI/UX
        design were not my strong suit (and still aren’t), but I finished the
        project in time (including some gimmicks like user avatars, nested
        comment replies, polls and live chatbox) and it successfully worked for
        the intended purposes (aside from few bugs, like page sometimes crashing
        right before submitting long article - sorry about that). This was the
        first time I felt like a real programmer and it was awesome. It also
        made me realize that PHP might not be the greatest language ever
        (mysqli_totally_real_escape_string), although I heard it has improved
        quite a bit since then.
      </p>
    </ProjectDetails>
  );
}

export default Okamih;
