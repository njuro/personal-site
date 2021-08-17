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
  Baltik = "baltik",
}
export interface Project {
  featured?: boolean;
  name: string;
  active: string;
  summary: string;
  languages: ProgrammingLanguage[];
  image: string;
}

export const PROJECTS: Record<ProjectId, Project> = {
  [ProjectId.Jard]: {
    featured: true,
    name: "jard",
    active: "2017 - Present",
    summary:
      "My biggest and most ambitious project - software for anonymous imageboard management",
    languages: [
      ProgrammingLanguage.Java,
      ProgrammingLanguage.Kotlin,
      ProgrammingLanguage.TypeScript,
    ],
    image: "jard.png",
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
  },
  [ProjectId.MedicQuiz]: {
    name: "Medic Quiz",
    active: "Medic Quiz",
    summary: "Digitization and automatic evaluation of tests for future medics",
    languages: [
      ProgrammingLanguage.Kotlin,
      ProgrammingLanguage.HTML,
      ProgrammingLanguage.CSS,
    ],
    image: "medic-quiz.png",
  },
  [ProjectId.AdventOfCode]: {
    name: "Advent of Code",
    active: "2017 - Present",
    summary: "Annual coding event I participate in",
    languages: [ProgrammingLanguage.Kotlin, ProgrammingLanguage.Python],
    image: "advent-of-code.png",
  },
  [ProjectId.MarriageStats]: {
    name: "Marriage Stats",
    active: "2017",
    summary: "Extracting and parsing of statistical data",
    languages: [ProgrammingLanguage.Python],
    image: "marriages.png",
  },
  [ProjectId.UpdatRRR]: {
    name: "UpdatRRR",
    active: "2017",
    summary:
      "Desktop application for automatic update of custom stylesheets (CLI + GUI)",
    languages: [ProgrammingLanguage.Java],
    image: "updatrrr.png",
  },
  [ProjectId.ChatBot]: {
    name: "IRC Bot / MGC Chat Bot",
    active: "2017 - 2019",
    summary: "Chat bots for online communities I was part of",
    languages: [ProgrammingLanguage.Java, ProgrammingLanguage.Python],
    image: "ircbot.png",
  },
  [ProjectId.Minecraft]: {
    name: "SuvaCraft / ToDo plugin",
    active: "2015",
    summary: "Management of own Minecraft portal + custom plugin",
    languages: [ProgrammingLanguage.Java],
    image: "mcplugin.png",
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
  },
  [ProjectId.Minimoj]: {
    name: "Svet Minimojov / PokéSvet",
    active: "2007 - 2008",
    summary: "Simple static websites I made as a child",
    languages: [ProgrammingLanguage.HTML, ProgrammingLanguage.CSS],
    image: "minimoj.png",
  },
  [ProjectId.Baltik]: {
    name: "Baltík 3",
    active: "2003 - 2006",
    summary: "My first contact with world of programming",
    languages: [ProgrammingLanguage.Baltik],
    image: "baltik.gif",
  },
};
