import IDElayout from "@/components/ui/IDElayout";
import CodeEditor from "@/components/ui/CodeEditor";

const welcomeCode = `
function Welcome() {
  return (
    <div>
      <h1>Welcome to My Portfolio</h1>
      <p>Explore the tabs on the left to learn more about me!</p>
    </div>
  );
}

export default Welcome;
`;

export default function Home() {
  return (
    <IDElayout>
      <CodeEditor
        fileName="Welcome.tsx"
        code={welcomeCode}
        language="typescript"
      />
    </IDElayout>
  );
}
