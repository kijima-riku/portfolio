import IDElayout from "@/components/ui/IDElayout";
import CodeEditor from "@/components/ui/CodeEditor";

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
    <IDElayout>
      <CodeEditor fileName="About.tsx" code={aboutCode} language="typescript" />
    </IDElayout>
  );
}
