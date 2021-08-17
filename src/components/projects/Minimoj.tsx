import React from "react";
import ProjectDetails from "./base/ProjectDetails";
import { ProjectId, PROJECTS } from "./projects";

function Minimoj() {
  return (
    <ProjectDetails project={PROJECTS[ProjectId.Minimoj]}>
      <p>
        Oh, the sweet beginnings. Armed with PSPad editor and HTML book from
        1997, I set to design and develop my very first webpage. The topic was
        Minimoys, fictional creatures created by director and producer Luc
        Besson - I was a big fan of both the books and movies back then. I think
        I did a pretty good job recreating the famous three column layout with
        tables. There is also a banner (carefully composed in MS Paint), menu
        with custom styled lists, status bar and footer kindly informing the
        user, that this page is optimized for resolutions 800x600 pixels or
        higher and either Firefox 2.0 or Internet Explorer 7 browsers.
      </p>
      <p>
        I took inspiration from some of my favorite websites at the time (like
        Slovak portal about Harry Potter), browsing their source codes and even
        “borrowing” some cool javascript widgets like displaying the current
        time or name day (I had no idea how these worked). As this was pure HTML
        and CSS, I had to copy & paste all the common elements to every new
        page, that’s why you can notice slight inconsistencies as you are
        reading different sections.
      </p>
      <p>
        My dad helped me to put it online, utilizing free web hosting space
        provided by our ISP to their clients. Amazingly, 14 years later the
        website is still available and you can fully appreciate the efforts of
        my 10 years old self.
      </p>
      <p>
        There was also a second website of mine around that time, this time
        dedicated to the Pokemon franchise (called Poké-Svet), however it is no
        longer online and I don’t have any screenshot, so you have to take my
        word for it.
      </p>
    </ProjectDetails>
  );
}

export default Minimoj;
