"use client";

import IDElayout from "@/components/IDElayout";
import CodeEditor from "@/components/CodeEditor";
import { useLanguage } from "@/components/LanguageContext";

const skillsCodeEn = `
const SkillSet = {
  languages: ["JavaScript", "TypeScript", "Python", "Java"],
  frontEnd: ["React", "Next.js", "Vue.js", "HTML5", "CSS3", "Sass"],
  backEnd: ["Node.js", "Express", "Django", "Spring Boot"],
  databases: ["MongoDB", "PostgreSQL", "MySQL", "Redis"],
  tools: ["Git", "Docker", "Kubernetes", "AWS", "GCP"],
  other: ["GraphQL", "REST API", "TDD", "Agile/Scrum"]
};

export default SkillSet;
`;

const skillsCodeJa = `
const SkillSet = {
  言語: ["JavaScript", "TypeScript", "Python", "Java"],
  フロントエンド: ["React", "Next.js", "Vue.js", "HTML5", "CSS3", "Sass"],
  バックエンド: ["Node.js", "Express", "Django", "Spring Boot"],
  データベース: ["MongoDB", "PostgreSQL", "MySQL", "Redis"],
  ツール: ["Git", "Docker", "Kubernetes", "AWS", "GCP"],
  その他: ["GraphQL", "REST API", "TDD", "アジャイル/スクラム"]
};

export default SkillSet;
`;

export default function Skills() {
  const { language } = useLanguage();

  return (
    <IDElayout>
      <CodeEditor
        fileName="SkillSet.tsx"
        code={language === "en" ? skillsCodeEn : skillsCodeJa}
        language="typescript"
      />
    </IDElayout>
  );
}
