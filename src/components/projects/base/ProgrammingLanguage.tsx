import { Label, SemanticCOLORS } from "semantic-ui-react";
import React from "react";

const colorMapping: Record<ProgrammingLanguage, SemanticCOLORS> = {
  Java: "red",
  Kotlin: "blue",
  JavaScript: "teal",
  TypeScript: "teal",
  Python: "green",
  HTML: "orange",
  CSS: "violet",
  PHP: "brown",
  Baltie: "yellow",
};

export enum ProgrammingLanguage {
  Java = "Java",
  Kotlin = "Kotlin",
  TypeScript = "TypeScript",
  JavaScript = "JavaScript",
  Python = "Python",
  PHP = "PHP",
  HTML = "HTML",
  CSS = "CSS",
  Baltie = "Baltie",
}

export function ProgrammingLanguageLabel({
  language,
}: {
  language: ProgrammingLanguage;
}) {
  return (
    <Label horizontal size="large" color={colorMapping[language]}>
      {language}
    </Label>
  );
}
