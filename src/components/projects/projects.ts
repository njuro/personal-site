import { ProgrammingLanguage } from "./base/ProgrammingLanguage";

export enum ProjectId {
  Jard = "jard",
  PersonalSite = "personal-site",
  MedicQuiz = "medic-quiz",
  AdventOfCode = "advent-of-code",
  MarriageStats = "marriage-stats",
  UpdatRRR = "updatrrr",
  ChatBot = "chat-bot",
  Minecraft = "minecraft",
  Okamih = "okamih",
  Minimoj = "minimoj",
  Baltie = "baltie",
}
export interface Project {
  featured?: boolean;
  name: string;
  active: string;
  summary: string;
  languages: ProgrammingLanguage[];
  image: string;
  lessons: string;
  repository?: string;
}

export const PROJECTS: Record<ProjectId, Project> = {
  [ProjectId.Jard]: {
    featured: true,
    name: "jard",
    active: "2017 - Present",
    summary: "Software for anonymous imageboard management",
    languages: [
      ProgrammingLanguage.Java,
      ProgrammingLanguage.Kotlin,
      ProgrammingLanguage.TypeScript,
    ],
    image: "jard.png",
    lessons:
      "Too many to be listed here. Management of software project during the whole lifecycle, from initial development, through several major refactors, to building CI/CD pipelines and releasing.",
    repository: "https://github.com/njuro/jard",
  },
  [ProjectId.PersonalSite]: {
    name: "Personal site",
    active: "2021 - Present",
    summary: "The page you are reading right now",
    languages: [
      ProgrammingLanguage.TypeScript,
      ProgrammingLanguage.HTML,
      ProgrammingLanguage.CSS,
    ],
    image: "personal-site.png",
    lessons:
      "How to showcase a portfolio and design a modern, responsive webpage.",
    repository: "https://github.com/njuro/personal-site",
  },
  [ProjectId.MedicQuiz]: {
    name: "Medic Quiz",
    active: "2020",
    summary: "Digitization and automatic evaluation of tests for future medics",
    languages: [
      ProgrammingLanguage.Kotlin,
      ProgrammingLanguage.HTML,
      ProgrammingLanguage.CSS,
    ],
    image: "medic-quiz.png",
    lessons:
      "How to digitize documents and parse them into meaningful structures.",
    repository: "https://github.com/njuro/MedicQuiz-Public",
  },
  [ProjectId.AdventOfCode]: {
    name: "Advent of Code",
    active: "2017 - Present",
    summary: "The annual coding event I participate in",
    languages: [ProgrammingLanguage.Kotlin, ProgrammingLanguage.Python],
    image: "advent-of-code.png",
    lessons:
      "Increased knowledge of common algorithms, data structures, and Python/Kotlin standard libraries.",
    repository: "https://github.com/njuro/advent-of-code-2020",
  },
  [ProjectId.MarriageStats]: {
    name: "Marriage Stats",
    active: "2017",
    summary: "Extracting and parsing of statistical data",
    languages: [ProgrammingLanguage.Python],
    image: "marriages.png",
    lessons:
      "How to parse Excel sheets and plot graphs with Python. Also how to make quick money on the side with programming.",
  },
  [ProjectId.UpdatRRR]: {
    name: "UpdatRRR",
    active: "2017",
    summary:
      "Desktop application for automatic update of custom stylesheets (CLI + GUI)",
    languages: [ProgrammingLanguage.Java],
    image: "updatrrr.png",
    lessons:
      "How to build a simple desktop application (CLI + GUI), how to parse HTML.",
    repository: "https://github.com/njuro/updatrrr",
  },
  [ProjectId.ChatBot]: {
    name: "IRC Bot / MGC Chat Bot",
    active: "2017 - 2019",
    summary: "Chat bots for online communities I was part of",
    languages: [ProgrammingLanguage.Java, ProgrammingLanguage.Python],
    image: "ircbot.png",
    lessons: "How to scrape websites and mimic browser requests.",
  },
  [ProjectId.Minecraft]: {
    name: "SuvaCraft / ToDo plugin",
    active: "2015",
    summary: "Management of own Minecraft portal + custom plugin",
    languages: [ProgrammingLanguage.Java],
    image: "mcplugin.png",
    lessons:
      "Set up Java project with Maven, integrate with 3rd party API (Spigot), running and managing a gaming server and community.",
  },
  [ProjectId.Okamih]: {
    name: "OH OkamiH",
    active: "2014",
    summary: "Web portal + CMS for high school event",
    languages: [
      ProgrammingLanguage.PHP,
      ProgrammingLanguage.HTML,
      ProgrammingLanguage.JavaScript,
    ],
    image: "okamih.png",
    lessons:
      "How to build a dynamic web page with a register/login system, simple CMS for publishing, editing and deleting articles, comment system, polls, etc. Also, frameworks are actually really useful and can save you a ton of time.",
  },
  [ProjectId.Minimoj]: {
    name: "Svet Minimojov / PokéSvet",
    active: "2007 - 2008",
    summary: "Simple static websites I made as a child",
    languages: [ProgrammingLanguage.HTML, ProgrammingLanguage.CSS],
    image: "minimoj.png",
    lessons:
      "How to make basic static web pages and style them, DRY principle.",
  },
  [ProjectId.Baltie]: {
    name: "Baltie 3",
    active: "2003 - 2006",
    summary: "My first contact with the world of programming",
    languages: [ProgrammingLanguage.Baltie],
    image: "baltik.gif",
    lessons:
      "It is actually quite fun to give commands to a computer and watch it executing them precisely and tirelessly.",
  },
};
