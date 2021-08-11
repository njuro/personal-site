import React from "react";
import { Header, Icon, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import useNavigation from "../useNavigation";
import { ABOUT_URL, CONTACT_URL } from "../mappings";
import Tooltip from "./Tooltip";
import Goodreads from "./Goodreads";

function About() {
  useNavigation(ABOUT_URL);
  return (
    <div>
      <Header as="h2">Who the hell are you?</Header>
      <p>
        A 23 years old guy who likes to order computers to do things, which make
        life easier for me, or others. I was born & raised in{" "}
        <em>Bratislava, Slovakia</em> and currently reside in{" "}
        <em>Brno, Czech Republic</em>.
      </p>
      <p>
        I’ve been attracted to computers almost all my life. My journey as a
        programmer began before I even realized. Then, at age of 10, my dad
        brought me a book from his job about{" "}
        <Tooltip
          content="Yes, I know these aren't programming languages, shhh"
          trigger="HTML and CSS"
        />{" "}
        (released before I was born) and the never-ending learning process has
        officially started.
      </p>
      <Header as="h2">What can you do?</Header>
      <p>
        Right now, I am most comfortable building backends for web applications
        with <em>Java</em> and <em>Kotlin</em> (and the great{" "}
        <em>Spring Framework</em>). But during my not-so-long life, I have been
        exposed to many more languages and concepts such as{" "}
        <em>
          Python, JavaScript/TypeScript (React), Bash, SQL, C, C++, C#, Haskell,
          Prolog
        </em>{" "}
        etc. I do not believe there is <em>One Right Way&trade;</em> to do
        everything, so I am always happy to expand my horizons and build my{" "}
        <Tooltip
          content={
            <>
              Term borrowed from <em>Pragmatic Programmer</em> book
            </>
          }
          trigger="Knowledge Portfolio"
        />{" "}
        further.
      </p>
      <p>
        I am also familiar with the various tools software developers use in
        their everyday lives, such as <em>git, Docker, CI/CD pipelines</em> and
        so on - check out my CV for more details.
      </p>
      <Header as="h2">Do you have something to prove it?</Header>
      <p>
        I have been paid to make applications for others for some time now, but
        respecting the <Tooltip content="Don't Repeat Yourself" trigger="DRY" />{" "}
        principle I will refer you to my{" "}
        <Link
          to="https://www.linkedin.com/in/juraj-noge#oc-background-section"
          className="content-link"
        >
          LinkedIn
        </Link>{" "}
        for that part.
      </p>
      <p>
        I also made an effort to document my hobby/side projects on this
        website, with some of them having a code publicly available, so check it
        out.
      </p>
      <Header as="h2">What are you currently working on?</Header>
      <p>
        My current company is <strong>CleverFarm</strong>. As for side projects,
        this information changes so often, that the best I can do is to provide
        you with information about the public last commit on my GitHub.
      </p>
      <p>
        My last public commit was to [name] repository on [date] with message
        [message].
      </p>
      <Header as="h2">What are you currently reading?</Header>
      <p>Fetching the latest data from GoodReads just for you!</p>
      <p>
        <Goodreads />
      </p>
      <Header as="h2">What is your current favorite...?</Header>
      <Header as="h4">
        <Icon name="question circle" color="grey" />
        Operation system?
      </Header>
      <p>
        Linux. I am running Ubuntu 20.04 LTS with Cinnamon DE and it{" "}
        <Tooltip
          content="...most of the time"
          trigger={
            <>
              <em>Just Works&trade;</em>
            </>
          }
        />
      </p>

      <Header as="h4">
        <Icon name="question circle" color="grey" />
        Programming language?
      </Header>
      <p>
        Kotlin. I love the combination of simplicity + static typing + full
        interoperability with Java
      </p>
      <Header as="h4">
        <Icon name="question circle" color="grey" />
        IDE?
      </Header>
      <p>
        IntelliJ IDEA Ultimate - or anything from JetBrains, really. These guys
        know their craft really well (no wonder they created the most amazing
        programming language too!)
      </p>
      <Header as="h4">
        <Icon name="question circle" color="grey" />
        Browser?
      </Header>
      <p>
        Mozilla Firefox. I just wish they would get their priorities straight
        and stop trying to be Chrome 2.0
      </p>
      <Header as="h4">
        <Icon name="question circle" color="grey" />
        Compound lift?
      </Header>
      <p>
        Overhead press (OHP) - there is something primal and raw about pushing a
        heavy weight above your head
      </p>
      <Header as="h4">
        <Icon name="question circle" color="grey" />
        TV Show?
      </Header>
      <p>
        I loved watching Breaking Bad, Mr. Robot, or House of Cards. Right now I
        am excited for the final season of La Casa De Papel.
      </p>
      <Header as="h2">
        Do you have a life besides sitting in front of a computer?
      </Header>
      <p>
        I like to think so. I discovered that if I go longer without significant
        physical activity my mental state deteriorates, I am less motivated and
        focused and my productivity as a programmer is also significantly lower.
      </p>
      <p>
        Therefore I lift weights 3-6 times a week. I love going to the gym,
        because it is very flexible - there is a gym in every city, I don’t have
        to rely on anyone and I can choose whatever time suits me best. My other
        lifelong sport is volleyball (both in the gyms and on the sand) - I used
        to play in the club when I was 10-17 and since then I play
        semi-regularly with various groups. I think it is a great sport, because
        it forces you to communicate, cooperate with your team and own your
        mistakes, which are all important soft skills even for a software
        engineer.
      </p>
      <p>
        My other spare time activities include avid book reading (although I
        have yet to recover the attention span I had as an early teenager),
        going to the pub with friends, or attending a rave/rap concert/festival.
        <Image
          rounded
          size="medium"
          src="/images/beach-volleyball.jpg"
          style={{
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />
      </p>
      <Header as="h2">How can I reach you?</Header>
      <p>
        See{" "}
        <Link to={CONTACT_URL} className="content-link">
          Contacts
        </Link>
        .
      </p>
    </div>
  );
}

export default About;
