import IDElayout from "@/components/ui/IDElayout";
import CodeEditor from "@/components/ui/CodeEditor";

const projectsCode = `
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

export default function Projects() {
  return (
    <IDElayout>
      <CodeEditor
        fileName="Projects.tsx"
        code={projectsCode}
        language="typescript"
      />
    </IDElayout>
  );
}
