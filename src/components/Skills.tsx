"use client";

import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import CodeEditor from "./CodeEditor";

const skillsCodeEn = `
const SkillSet = [
  { 
    category: "Frontend",
    subcategories: [
      {
        name: "Languages",
        skills: [
          { name: "HTML", proficiency: 5 },
          { name: "CSS", proficiency: 5 },
          { name: "JavaScript", proficiency: 5 },
          { name: "TypeScript", proficiency: 4 }
        ]
      },
      {
        name: "Preprocessors",
        skills: [
          { name: "SCSS", proficiency: 4 }
        ]
      },
      {
        name: "Frameworks/Libraries",
        skills: [
          { name: "React", proficiency: 4 },
          { name: "Next.js", proficiency: 4 }
        ]
      }
    ]
  },
  {
    category: "Backend",
    subcategories: [
      {
        name: "Languages",
        skills: [
          { name: "Java", proficiency: 3 },
          { name: "PHP", proficiency: 4 }
        ]
      },
      {
        name: "Frameworks",
        skills: [
          { name: "Spring Boot", proficiency: 3 },
          { name: "Laravel", proficiency: 4 }
        ]
      }
    ]
  },
  {
    category: "Database",
    skills: [
      { name: "MySQL", proficiency: 4 },
      { name: "PostgreSQL", proficiency: 3 }
    ]
  },
  {
    category: "DevOps & Tools",
    skills: [
      { name: "Git", proficiency: 5 },
      { name: "Docker", proficiency: 3 },
      { name: "AWS", proficiency: 3 }
    ]
  },
  {
    category: "API",
    skills: [
      { name: "REST API", proficiency: 4 }
    ]
  }
];

export default SkillSet;
`;

const skillsCodeJa = `
const SkillSet = [
  { 
    category: "フロントエンド",
    subcategories: [
      {
        name: "言語",
        skills: [
          { name: "HTML", proficiency: 5 },
          { name: "CSS", proficiency: 5 },
          { name: "JavaScript", proficiency: 5 },
          { name: "TypeScript", proficiency: 4 }
        ]
      },
      {
        name: "プリプロセッサ",
        skills: [
          { name: "SCSS", proficiency: 4 }
        ]
      },
      {
        name: "フレームワーク/ライブラリ",
        skills: [
          { name: "React", proficiency: 4 },
          { name: "Next.js", proficiency: 4 }
        ]
      }
    ]
  },
  {
    category: "バックエンド",
    subcategories: [
      {
        name: "言語",
        skills: [
          { name: "Java", proficiency: 3 },
          { name: "PHP", proficiency: 4 }
        ]
      },
      {
        name: "フレームワーク",
        skills: [
          { name: "Spring Boot", proficiency: 3 },
          { name: "Laravel", proficiency: 4 }
        ]
      }
    ]
  },
  {
    category: "データベース",
    skills: [
      { name: "MySQL", proficiency: 4 },
      { name: "PostgreSQL", proficiency: 3 }
    ]
  },
  {
    category: "DevOpsとツール",
    skills: [
      { name: "Git", proficiency: 5 },
      { name: "Docker", proficiency: 3 },
      { name: "AWS", proficiency: 3 }
    ]
  },
  {
    category: "API",
    skills: [
      { name: "REST API", proficiency: 4 }
    ]
  }
];

export default SkillSet;
`;

export default function Skills() {
  const { language } = useLanguage();

  return (
    <CodeEditor
      fileName="SkillSet.tsx"
      code={language === "en" ? skillsCodeEn : skillsCodeJa}
      language="typescript"
    />
  );
}
