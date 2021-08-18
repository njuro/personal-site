import React from "react";
import ProjectDetails from "./base/ProjectDetails";
import { ProjectId, PROJECTS } from "./projects";

function ChatBot() {
  return (
    <ProjectDetails project={PROJECTS[ProjectId.ChatBot]}>
      <p>
        I think the majority of programmers attempted to create some kind of
        chatbot in their lifetime, and I am no exception here. As I am a bit of
        an old schooler in this area, I prefer IRC for group chatting with
        people I don&apos;t know personally over modern alternatives (like{" "}
        <em>Discord</em>). So my first bot was written with the{" "}
        <em>Limnoria</em> framework in Python and then ported to Java using the{" "}
        <em>PircBotX</em> framework. It wasn&apos;t too fancy, the basic
        commands were outputting ASCII art images stored in text files, parsing
        titles of HTTP links posted in the chatroom, or scanning RSS feed of
        local newspapers for news labeled as <em>Breaking</em>.
      </p>
      <p>
        Then for some time, I was active on a <em>vBulletin forum</em>, which
        made use of the{" "}
        <a
          href="https://www.vbulletin.org/forum/showthread.php?t=168992"
          target="_blank"
          className="content-link"
          rel="noreferrer"
        >
          <em>MGC Chatbox Evo</em>
        </a>{" "}
        plugin. There wasn&apos;t any developer API for this chatbox, so I
        resorted to the classic workaround - I examined the HTTP requests my
        browser was making when I sent a message (or edited/deleted one) via{" "}
        <em>Network</em> tab in developer tools. Then I created a regular user
        account for my bot and wrote script that authenticated with its
        credentials, periodically parsed the content of the chatbox and if the
        command was recognized (usually starting with &quot;!&quot;), it replied
        with an appropriate message. Functionality included tracking of the top
        posters, checking which administrators are in the game right now and
        even sending a notification when a new song was being played in the
        connected <em>plug.dj</em> room (to get this working I did a very dirty
        hack - I had JavaScript program with plug.dj API wrapper running, and
        upon detection of a song it wrote the song name to the text file from
        which the Python chatbot program read it - the poor man&apos;s message
        queue).
      </p>
    </ProjectDetails>
  );
}

export default ChatBot;
