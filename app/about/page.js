export default function AboutPage() {
  return (
    <div className="p-8 bg-gray-100 text-gray-800 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">About Me</h1>
      <p className="mb-4">
        Hello! I'm a passionate software developer who loves building user-friendly applications and solving complex problems through technology.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Education</h2>
      <ul className="list-disc list-inside mb-4">
        <li>
          <strong>Lovely Professional University (2022 - 2023):</strong> Gained foundational knowledge in programming and software development.
        </li>
        <li>
          <strong>Southern Alberta Institute of Technology (SAIT):</strong> Currently pursuing a Software Development diploma to expand my skills in modern software technologies.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">Skills</h2>
      <ul className="list-disc list-inside">
        <li>Programming Languages: JavaScript, Python, Java, SQL</li>
        <li>Frontend Development: React.js, React Native, HTML, CSS, Tailwind CSS</li>
        <li>Backend Development: Node.js, Express.js, Flask</li>
        <li>Databases: MySQL, MongoDB</li>
        <li>Tools: Git, GitHub, VS Code, Figma</li>
      </ul>
    </div>
  );
}
