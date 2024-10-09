import IDElayout from "@/components/IDElayout";
import CodeEditor from "@/components/CodeEditor";

const skillsCode = `
const SkillSet = {
  languages: ["JavaScript", "TypeScript", "Python", "Java"],
  frontEnd: ["React", "Next.js", "Vue.js", "HTML5", "CSS3", "Sass"],
  backEnd: ["Node.js", "Express", "Django", "Spring Boot"],
  databases: ["MongoDB", "PostgreSQL", "MySQL", "Redis"],
  tools: ["Git", "Docker", "Kubernetes", "AWS", "GCP"],
  other: ["GraphQL", "REST API", "TDD", "Agile/Scrum"]
};

export default SkillSet;
`;

export default function Skills() {
  return (
    <IDElayout>
      <CodeEditor
        fileName="SkillSet.tsx"
        code={skillsCode}
        language="typescript"
      />
    </IDElayout>
  );
}
