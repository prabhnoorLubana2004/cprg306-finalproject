export default function ExperiencePage() {
    return (
      <div className="p-8 bg-gray-100 text-gray-800 min-h-screen">
        <h1 className="text-3xl font-bold mb-4">My Professional Experience</h1>
        <p className="mb-6">
          I have been fortunate to gain valuable experience through diverse internships in the software development field. Below are detailed insights into my roles and contributions.
        </p>
  
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Python-Centric Internship</h2>
          <p className="mb-2">
            <strong>Duration:</strong> 2022 - Present
          </p>
          <p className="mb-2">
            <strong>Role:</strong> Software Development Intern
          </p>
          <p className="mb-2">
            <strong>Responsibilities:</strong>
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Developed and maintained automation scripts using Python to streamline internal processes, improving efficiency by over 20%.</li>
            <li>Collaborated with senior developers to create data pipelines for ETL processes, ensuring the integrity of large datasets.</li>
            <li>Wrote unit tests to ensure high code quality and minimize bugs in production environments.</li>
            <li>Assisted in debugging and resolving issues in Python-based applications, reducing downtime for critical systems.</li>
          </ul>
          <p>
            <strong>Key Achievements:</strong> Enhanced the scalability of internal tools by implementing optimized algorithms, resulting in faster performance.
          </p>
        </div>
  
        <div>
          <h2 className="text-2xl font-semibold mb-2">C#-Centric Internship</h2>
          <p className="mb-2">
            <strong>Duration:</strong> October 2024 - Present
          </p>
          <p className="mb-2">
            <strong>Role:</strong> Software Developer Intern (External Client)
          </p>
          <p className="mb-2">
            <strong>Responsibilities:</strong>
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Developed enterprise-grade applications using C#, focusing on functionality, security, and scalability.</li>
            <li>Participated in design discussions and implemented features based on client requirements.</li>
            <li>Optimized existing codebases by refactoring for performance and readability, reducing runtime by up to 15%.</li>
            <li>Integrated third-party APIs to enhance application capabilities and ensure seamless user experiences.</li>
          </ul>
          <p>
            <strong>Key Achievements:</strong> Delivered a critical application module ahead of schedule, receiving commendation from the client for exceptional quality.
          </p>
        </div>
      </div>
    );
  }
  