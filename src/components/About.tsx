"use client";

import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import CodeEditor from "./CodeEditor";

const aboutCodeEn = `
const AboutMe = {
  name: "Kijima Riku",
  role: "Aspiring Full Stack Developer",
  education: "Graduating in 2025",
  location: "From Niigata, Working in Tokyo, Japan",
  careerGoal: "Starting career as a Backend Engineer",
  engineerVision: "Aiming to become an engineer capable of making technology decisions across frontend, backend, and infrastructure.",
  currentFocus: {
    frontend: "Improving skills in SSG and overall performance optimization",
    backend: "Enhancing knowledge in OOP and database design"
  },
  interests: ["Web Development", "System Architecture", "Cloud Technologies"],
  currentlyLearning: ["Advanced Backend Concepts", "Infrastructure as Code"],
};

export default AboutMe;
`;

const aboutCodeJa = `
const AboutMe = {
  name: "木嶋 陸",
  role: "志望フルスタック開発者",
  education: "2025年卒業予定",
  location: "新潟県出身、東京都勤務",
  careerGoal: "バックエンドエンジニアとしてキャリアをスタート",
  engineerVision: "フロントエンド、バックエンド、インフラを問わず技術選定できるエンジニアを目指す",
  currentFocus: {
    frontend: "SSGなどの設計からパフォーマンス最適化まで習得",
    backend: "OOPやデータベース設計など、全体的なスキル向上"
  },
  interests: ["ウェブ開発", "システムアーキテクチャ", "クラウド技術"],
  currentlyLearning: ["高度なバックエンド概念", "Infrastructure as Code"],
};

export default AboutMe;
`;
export default function About() {
  const { language } = useLanguage();

  return (
    <CodeEditor
      fileName="About.tsx"
      code={language === "en" ? aboutCodeEn : aboutCodeJa}
      language="typescript"
    />
  );
}
