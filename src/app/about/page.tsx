"use client";

import dynamic from "next/dynamic";
import CodeEditor from "@/components/CodeEditor";
import { useLanguage } from "@/components/LanguageContext";

const VSCodeLayout = dynamic(() => import("@/components/IDElayout"), {
  ssr: false,
});

const aboutCodeEn = `
const AboutMe = {
  name: "Your Name",
  role: "Full Stack Developer",
  location: "Tokyo, Japan",
  interests: ["Web Development", "AI", "Open Source"],
  currentlyLearning: "Rust",
  funFact: "I can solve a Rubik's cube in under 2 minutes!"
};

export default AboutMe;
`;

const aboutCodeJa = `
const AboutMe = {
  name: "あなたの名前",
  role: "フルスタック開発者",
  location: "東京、日本",
  interests: ["ウェブ開発", "AI", "オープンソース"],
  currentlyLearning: "Rust",
  funFact: "ルービックキューブを2分以内に解けます！"
};

export default AboutMe;
`;

export default function About() {
  const { language } = useLanguage();

  return (
    <VSCodeLayout>
      <CodeEditor
        fileName="About.tsx"
        code={language === "en" ? aboutCodeEn : aboutCodeJa}
        language="typescript"
      />
    </VSCodeLayout>
  );
}
