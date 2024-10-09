import dynamic from "next/dynamic";
import CodeEditor from "@/components/CodeEditor";

const VSCodeLayout = dynamic(() => import("@/components/IDElayout"), {
  ssr: false,
});

const aboutCode = `
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

export default function About() {
  return (
    <VSCodeLayout>
      <CodeEditor fileName="About.tsx" code={aboutCode} language="typescript" />
    </VSCodeLayout>
  );
}
