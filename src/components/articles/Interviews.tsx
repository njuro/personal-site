import React from "react";
import { Header } from "semantic-ui-react";
import ArticleDetails from "./base/ArticleDetails";
import { ArticleId, ARTICLES } from "./articles";

function Interviews() {
  return (
    <ArticleDetails article={ARTICLES[ArticleId.Interviews]}>
      <p>
        As the headline of this article indicates, I have confession to make...
        I <strong>*like*</strong> taking interviews as a programmer. I
        don&apos;t mind taking one time to time, even when I am happy in my
        current job. And when I am actively looking for a new opportunity, I
        don&apos;t hesitate to talk to, let&apos;s say, 10-12 companies at the
        same time (do more than that and you are asking for burnout, if you are
        doing it in combination with working full-time). I don&apos;t think it
        is unethical, as long as you don&apos;t neglect your other
        responsibilities. Also, I don&apos;t believe you are wasting the other
        companies’ time, because:
      </p>
      <ol>
        <li>
          the people interviewing you (HRs, managers, fellow software engineers)
          are paid for it and it is just another part of their job,
        </li>
        <li>
          you never know if the offer presented to you at the end of the process
          won&apos;t be so good, that it will force you to reevaluate your
          current conditions and eventually accept it - even if you originally
          weren&apos;t going to. And that&apos;s a potentially huge win for the
          company.
        </li>
      </ol>
      <p>
        As for what it is in for me and why I don&apos;t agree with the general
        sentiment among programmers, that interview processes are
        &quot;necessary evil&quot; - I can come up with several (in my opinion)
        valid reasons:
      </p>
      <Header as="h2">You will improve your technical skills</Header>
      <p>
        Good companies will attempt to pick competent developers to join their
        ranks. They choose different approaches in order to achieve this goal.
        Examples include live coding sessions, take-home assignments, system
        design discussions, or tricky, trivia-like questions (please don’t
        choose the last one, if you are interviewer). What they have in common
        is that they will usually pull you out of your comfort zone and force
        you to use the parts of your brain you don’t usually need in your
        day-to-day tasks, implementing yet another CRUD API endpoints. You can
        learn a ton in the process and eventually become a better programmer.
        Even better, you may discover some new unknown unknowns – things you
        didn&apos;t know, that you didn&apos;t know. For example, I was asked
        how would I resolve a situation I never thought about before, but
        looking back at it, it is a perfectly real possibility. Thanks to that
        interview I will be prepared, if (when) it will happen in the future.
      </p>
      <Header as="h2">You will improve your soft skills</Header>
      <p>
        Gone are the times, when a programmer could take a printed hundred-page
        specification, lock himself in a dark room and emerge in a couple of
        weeks with a completed program. In these times, software development is
        a team sport and you need to clearly communicate your thoughts with your
        colleagues, managers, and sometimes even users/customers of your
        product, with each of these groups requiring slightly different
        communication styles and vocabulary. These soft skills are becoming
        almost as important as your technical competence. The interview process
        is a great opportunity to put them to the test and see if you can sell
        the product (yourself) to a bunch of people from different areas that
        have probably never seen you before.
      </p>
      <Header as="h2">You will improve your interviewing skills</Header>
      <p>
        Building on the previous paragraph, interviewing itself is definitely a
        (soft) skill. And it is a skill that can bring you many benefits once
        you become good at it. I compare it to dating, as the hiring process is
        basically you and the employer checking out each other and determining
        if there is mutual compatibility. When most people think about their
        dating beginnings, they remember the stress, the excessive sweat, and
        the constant worry that you will screw it up by saying the wrong thing.
        It is only with practice when you learn that it is actually not so bad,
        the other side is just as human as you are and it isn’t a big deal, even
        if it doesn&apos;t work out in the end. This helps you to act more
        confident, natural, and therefore more attractive. Taking interviews is
        the same. Once you complete a few of those, you will stop looking at
        them as a horrible trial in front of an uncompromising jury and instead
        more like a friendly chat about interesting topics. And I guarantee you
        that this alone will help you to make a more convincing impression and
        therefore get much better offers.
      </p>
      <Header as="h2">You will know your true worth</Header>
      <p>
        Data is power. And we, as the employees are often left in the dark when
        it comes to our true value on the job market. Talking about salaries is
        still a taboo topic in the majority of the world and the companies are
        taking advantage of this fact. Interviews are a brilliant way to find
        out where you stand and once you have several offers on the table, each
        of them significantly higher than what you are currently making, you may
        quickly discover, that your salary is not as competitive as your manager
        is trying to tell you. Even when you are satisfied with other aspects of
        your current job and don’t want to leave, this gives you the confidence
        to ask for a raise without feeling like ungrateful and greedy Uncle
        Scrooge. Same with seniority. Even though the titles with the same name
        may have different meanings in different companies, once you get
        evaluated multiple times as a Senior Engineer, you may conclude that you
        are not getting the promotion at your corporation not because you “don’t
        have what it takes (yet)”, but maybe it is just as an excuse to not pay
        you more.
      </p>
      <Header as="h2">You will grow your network</Header>
      <p>
        Last but not least, you will interact with a lot of interesting people,
        during the hiring process. Many companies will send their most
        experienced engineers to conduct the later interviewing rounds.
        Especially earlier in your career, you may get an hour or two of
        uninterrupted chit-chat about technology with folks who are in the
        business longer than you are alive. It is always eye-opening to observe
        what they care about, what kind of questions do they ask, and how they
        react to your answers. Plus there is a non-zero chance that if you make
        a good impression, they will remember you. So even if you don’t become
        colleagues right away, you might encounter them later in your career and
        have an advantage, because they will already know how good you are.
      </p>
      <p>
        These are the reasons why I am fond of taking interviews as a software
        developer. So next time, you see an interesting job listing on your
        Facebook feed, or in your LinkedIn inbox and you have some spare time,
        give it a chance. In the worst case, you will gain some extra experience
        that will help you in your career, and in the best case, you will land
        an offer for the job of your dreams.
      </p>
    </ArticleDetails>
  );
}

export default Interviews;
