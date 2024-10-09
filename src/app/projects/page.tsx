"use client";

import IDElayout from "@/components/IDElayout";
import CodeEditor from "@/components/CodeEditor";
import { useLanguage } from "@/components/LanguageContext";

const projectsCodeEn = `
const Projects = [
  {
    name: "E-commerce Platform",
    description: "A full-stack e-commerce solution with React and Node.js",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Redux"],
    github: "https://github.com/yourusername/ecommerce-platform"
  },
  {
    name: "AI Chatbot",
    description: "An AI-powered chatbot using natural language processing",
    technologies: ["Python", "TensorFlow", "Flask", "React"],
    github: "https://github.com/yourusername/ai-chatbot"
  },
  {
    name: "Portfolio Website",
    description: "This website! Built with Next.js and TypeScript",
    technologies: ["Next.js", "TypeScript", "Material-UI"],
    github: "https://github.com/yourusername/portfolio"
  }
];

export default Projects;
`;

const projectsCodeJa = `
const Projects = [
  {
    name: "Eコマースプラットフォーム",
    description: "ReactとNode.jsを使用したフルスタックEコマースソリューション",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Redux"],
    github: "https://github.com/yourusername/ecommerce-platform"
  },
  {
    name: "AIチャットボット",
    description: "自然言語処理を使用したAI駆動のチャットボット",
    technologies: ["Python", "TensorFlow", "Flask", "React"],
    github: "https://github.com/yourusername/ai-chatbot"
  },
  {
    name: "ポートフォリオウェブサイト",
    description: "このウェブサイトです！Next.jsとTypeScriptで構築",
    technologies: ["Next.js", "TypeScript", "Material-UI"],
    github: "https://github.com/yourusername/portfolio"
  }
];

export default Projects;
`;

export default function Projects() {
  const { language } = useLanguage();

  return (
    <IDElayout>
      <CodeEditor
        fileName="Projects.tsx"
        code={language === "en" ? projectsCodeEn : projectsCodeJa}
        language="typescript"
      />
    </IDElayout>
  );
}
