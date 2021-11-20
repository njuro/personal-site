import React from "react";
import ProjectDetails from "./base/ProjectDetails";
import { ProjectId, PROJECTS } from "./projects";

function Minimoj() {
  return (
    <ProjectDetails project={PROJECTS[ProjectId.Minimoj]}>
      <p>
        Oh, the sweet beginnings. Armed with a PSPad editor and{" "}
        <a
          href="https://www.kosek.cz/html/"
          target="_blank"
          rel="noreferrer"
          className="content-link"
        >
          HTML book from 1998
        </a>
        , I set to design and develop my very first webpage. The topic was{" "}
        <a
          href="https://www.wikiwand.com/en/Arthur_and_the_Invisibles"
          target="_blank"
          className="content-link"
          rel="noreferrer"
        >
          <em>Minimoys</em>
        </a>
        , fictional creatures created by director and producer Luc Besson - I
        was a big fan of both the books and movies back then. I think I did a
        pretty good job recreating the famous three-column layout with tables.
        There is also a banner (carefully composed in MS Paint), menu with
        custom styled lists, status bar and footer kindly informing the user,
        that this page is optimized for resolutions 800x600 pixels or higher and
        either Firefox 2.0 or Internet Explorer 7 browsers.
      </p>
      <p>
        I took inspiration from some of my favorite websites at the time (like
        the Slovak portal about Harry Potter), browsing their source codes and
        even &quot;borrowing&quot; some cool JavaScript widgets like displaying
        the current time or name day (I had no idea how these worked). As this
        was pure HTML and CSS, I had to copy & paste all the common elements to
        every new page - that&apos;s why you can notice slight inconsistencies,
        as you are reading different sections.
      </p>
      <p>
        My dad helped me to put it online, utilizing free web hosting space
        provided by our ISP to their clients. Amazingly, 14 years later, the
        website is still available and you can fully appreciate the efforts of
        my 10 years old self (
        <em>
          Update: this is no longer the case. The ISP stopped to provide this
          service in October 2021. Fortunately, I managed to archive the page
          for your viewing pleasure{" "}
          <a
            href="https://web.archive.org/web/20210721072559/http://members.chello.sk/michal.noge/minimoj.html"
            className="content-link"
            target="_blank"
            rel="noreferrer"
          >
            here
          </a>
          .)
        </em>
        .
      </p>
      <p>
        There was also a second website of mine around that time, this time
        dedicated to the Pokemon franchise (called Poké-Svet). However, it is no
        longer online and I don&apos;t have any screenshot, so you will have to
        take my word for it.
      </p>
    </ProjectDetails>
  );
}

export default Minimoj;
