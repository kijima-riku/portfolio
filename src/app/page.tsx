import { Metadata } from "next";
import MainContent from "@/components/MainContent";

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "A portfolio website showcasing my skills and projects",
};

export default function Home() {
  return <MainContent />;
}
