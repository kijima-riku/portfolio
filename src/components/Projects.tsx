"use client";

import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import CodeEditor from "./CodeEditor";

const projectsCodeEn = `
const Projects = [
  {
    name: "Corporate Dashboard",
    description: "A comprehensive dashboard developed solo, using React with TypeScript for the frontend and PHP for the backend. It features graphical visualizations of usage trends with auto-updating via polling and implements JWT authentication. Due to its proprietary nature, neither GitHub repository nor URL can be disclosed.",
    technologies: ["React", "TypeScript", "PHP", "JWT", "Data Visualization"],
    github: "Not available (proprietary)",
    url: "Not available (proprietary)"
  },
  {
    name: "AI Image Generator",
    description: "An AI-powered image generation application built with Next.js and TypeScript. It utilizes Supabase for storage and integrates with the Stability AI API. Users can input prompts to generate images, which are then displayed in a gallery format. While the project is on GitHub, it is not currently deployed.",
    technologies: ["Next.js", "TypeScript", "Supabase", "Stability AI API"],
    github: "https://github.com/yourusername/ai-image-generator"
  },
  {
    name: "Campus Bulletin Board",
    description: "A bulletin board system aimed at enhancing on-campus communication. Primarily responsible for frontend development using Next.js. This project is available on GitHub and is scheduled for deployment in the near future.",
    technologies: ["Next.js", "TypeScript"],
    github: "https://github.com/yourusername/campus-bulletin-board",
    url: "Coming soon"
  }
];

export default Projects;
`;

const projectsCodeJa = `
const Projects = [
  {
    name: "企業向けダッシュボード",
    description: "フロントエンドにReactとTypeScript、バックエンドにPHPを使用し、1人で開発した包括的なダッシュボード。利用状況の推移をグラフで可視化し、ポーリングによる自動更新機能を実装。JWT認証も導入。企業の機密情報のため、GitHubリポジトリとURLは非公開。",
    technologies: ["React", "TypeScript", "PHP", "JWT", "データ可視化"],
    github: "非公開（企業秘密）",
    url: "非公開（企業秘密）"
  },
  {
    name: "AI画像生成アプリ",
    description: "Next.jsとTypeScriptを使用し、SupabaseをストレージとしてStability AI APIと統合したAI画像生成アプリケーション。ユーザーがプロンプトを入力すると画像が生成され、ギャラリー形式で表示される。GitHubにプロジェクトは公開されているが、現在デプロイはされていない。",
    technologies: ["Next.js", "TypeScript", "Supabase", "Stability AI API"],
    github: "https://github.com/yourusername/ai-image-generator"
  },
  {
    name: "学内掲示板",
    description: "学内のコミュニケーションを活性化させるための掲示板システム。主にNext.jsを使用したフロントエンド開発を担当。GitHubで公開されており、近々デプロイ予定。",
    technologies: ["Next.js", "TypeScript"],
    github: "https://github.com/yourusername/campus-bulletin-board",
    url: "近日公開予定"
  }
];

export default Projects;
`;
export default function Projects() {
  const { language } = useLanguage();

  return (
    <CodeEditor
      fileName="Projects.tsx"
      code={language === "en" ? projectsCodeEn : projectsCodeJa}
      language="typescript"
    />
  );
}
