"use client";

import React, { useState } from "react";
import IDELayout from "./IDElayout";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import { LanguageProvider } from "@/contexts/LanguageContext";

export default function MainContent() {
  const [activeTab, setActiveTab] = useState<string>("about");

  const handleTabChange = (newTab: string) => {
    setActiveTab(newTab);
  };

  const renderComponent = () => {
    switch (activeTab) {
      case "about":
        return <About />;
      case "skills":
        return <Skills />;
      case "projects":
        return <Projects />;
      default:
        return <About />;
    }
  };

  return (
    <LanguageProvider>
      <IDELayout activeTab={activeTab} setActiveTab={handleTabChange}>
        {renderComponent()}
      </IDELayout>
    </LanguageProvider>
  );
}
