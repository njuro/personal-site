import React from "react";
import ProjectDetails from "./base/ProjectDetails";
import { ProjectId, PROJECTS } from "./projects";

function ChatBot() {
  return (
    <ProjectDetails project={PROJECTS[ProjectId.ChatBot]}>
      <p>
        I think the majority of programmers attempted to create some kind of
        chat bot in their lifetime, and I am no exception here. As I am a bit of
        an oldschooler in this area, I prefer IRC for group chatting with people
        I don’t know personally over modern alternatives, like Discord. So my
        first bot was written with the Limnoria framework in Python and then
        ported to Java using the PircBotX framework. It wasn’t too fancy, the
        basic commands were outputting ASCII art images stored in text files,
        parsing titles of HTTP links posted in the chatroom, or scanning RSS
        feed of local newspapers for news labeled as Breaking.
      </p>
      <p>
        Then for some time I was active on vBulletin forum, which made use of
        the MGC Chatbox Evo plugin. There wasn’t any developer API for this
        chatbox, so I resorted to the classic workaround - I examined the HTTP
        requests my browser was making when I sent a message (or edited/deleted
        one) via Network tab in developer tools. Then I created an regular user
        account for my bot and wrote script that authenticated with its
        credentials, periodically parsed the content of chatbox and if command
        was recognized (usually starting with “!”), it replied with an
        appropriate message. Functionality included tracking of the top posters,
        checking which administrators are in the game right now and even sending
        notification when new song was being played in the connected plug.dj
        room (to get this working I did a very dirty hack - I had javascript
        program with plug.dj API wrapper running and upon detection of song it
        wrote the song name to the text file from which the Python chatbot
        program read it - the poor man`s message queue).
      </p>
    </ProjectDetails>
  );
}

export default ChatBot;
