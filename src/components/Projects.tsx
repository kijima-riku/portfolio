"use client";

import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import CodeEditor from "./CodeEditor";

const projectsCodeEn = `
const Projects = [
  {
    name: "Corporate Dashboard",
    description: "A comprehensive dashboard developed solo, using React with TypeScript for the frontend and PHP for the backend. It features graphical visualizations of usage trends with auto-updating via polling and implements JWT authentication.",
    technologies: ["React", "TypeScript", "PHP", "JWT", "Redux"],
    github: "Not available (proprietary)",
    url: "Not available (proprietary)"
  },
  {
    name: "AI Image Generator",
    description: "An AI-powered image generation application built with Next.js and TypeScript. It utilizes Supabase for storage and integrates with the Stability AI API. Users can input prompts to generate images, which are then displayed in a gallery format.",
    technologies: ["Next.js", "TypeScript", "Supabase", "Stability AI API"],
    github: "https://github.com/kijima-riku/next-image-generator"
  },
  {
    name: "Campus Bulletin Board",
    description: "A bulletin board system aimed at enhancing on-campus communication. Primarily responsible for frontend development using Next.js. ",
    technologies: ["Next.js", "TypeScript"],
    github: "https://github.com/yourusername/campus-bulletin-board",
    url: "Coming soon"
  },
  {
    name: "Kokokara-snap",
    description: "A photo-centric social networking service. As a backend developer, I used Spring Boot to develop the application. My responsibilities included designing the relational database and API architecture. ",
    technologies: ["Spring Boot", "Java", "PostgreSQL"],
    github: "Not available (private repository)",
    url: "Coming soon"
  },
  {
    name: "Portfolio Website",
    description: "This portfolio website showcasing my projects and skills. Developed using Next.js, deployed on AWS S3, and distributed via CloudFront CDN for optimal performance and global accessibility.",
    technologies: ["Next.js", "React", "TypeScript", "AWS S3", "AWS CloudFront"],
    github: "https://github.com/kijima-riku/portfolio",
    url: "https://your-portfolio-url.com"
  }
];

export default Projects;
`;

const projectsCodeJa = `
const Projects = [
  {
    name: "企業向けダッシュボード",
    description: "フロントエンドにReactとTypeScript、バックエンドにPHPを使用し、1人で開発した包括的なダッシュボード。利用状況の推移をグラフで可視化し、ポーリングによる自動更新機能を実装。JWT認証も導入。",
    technologies: ["React", "TypeScript", "PHP", "JWT", "Redux"],
    github: "非公開（企業秘密）",
    url: "非公開（企業秘密）"
  },
  {
    name: "AI画像生成アプリ",
    description: "Next.jsとTypeScriptを使用し、SupabaseをストレージとしてStability AI APIと統合したAI画像生成アプリケーション。ユーザーがプロンプトを入力すると画像が生成され、ギャラリー形式で表示される。",
    technologies: ["Next.js", "TypeScript", "Supabase", "Stability AI API"],
    github: "https://github.com/kijima-riku/next-image-generator"
  },
  {
    name: "学内掲示板",
    description: "学内のコミュニケーションを活性化させるための掲示板システム。主にNext.jsを使用したフロントエンド開発を担当。",
    technologies: ["Next.js", "TypeScript"],
    github: "https://github.com/yourusername/campus-bulletin-board",
    url: "近日公開予定"
  },
  {
    name: "Kokokara-snap",
    description: "写真投稿に特化したSNSサービス。バックエンド開発者として、Spring Bootを使用してアプリケーションを開発。関係データベースの設計やAPI設計を担当。 ",
    technologies: ["Spring Boot", "Java", "PostgreSQL"],
    github: "非公開（プライベートリポジトリ）",
    url: "近日公開予定"
  },
  {
    name: "ポートフォリオウェブサイト",
    description: "私のプロジェクトとスキルを紹介するこのポートフォリオウェブサイト。Next.jsを使用して開発し、AWS S3にデプロイ、CloudFront CDNを通じて配信することで、最適なパフォーマンスとグローバルなアクセシビリティを実現。",
    technologies: ["Next.js", "React", "TypeScript", "AWS S3", "AWS CloudFront"],
    github: "https://github.com/kijima-riku/portfolio",
    url: "https://your-portfolio-url.com"
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
