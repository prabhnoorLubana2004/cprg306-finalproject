import React from "react";

export default function ExperiencePage() {
  return (
    <div className="p-8 bg-gradient-to-br from-gray-100 to-white text-gray-800 min-h-screen">
      <h1 className="text-5xl text-blue-900 font-extrabold mb-12 font-serif text-center shadow-lg p-4 rounded-lg bg-gradient-to-r from-yellow-100 to-blue-50 transform transition-all duration-300 hover:scale-105">
        My Professional Experience
      </h1>
      <p className="text-xl mb-12 text-gray-700 font-mono leading-relaxed text-center max-w-3xl mx-auto">
        I have been fortunate to gain valuable experience through diverse internships in the software development field. Below are detailed insights into my roles and contributions. During both internships, I worked for individuals who would assign me tasks, and I was compensated directly by them, rather than being employed by the company itself.
      </p>

      <div className="grid grid-cols-1 gap-12">
        {/* Python-Centric Internship */}
        <div className="bg-white shadow-lg rounded-xl p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl">
          <h2 className="text-2xl text-blue-800 font-semibold mb-4 font-serif">
            Python-Centric Internship
          </h2>
          <p className="mb-2 font-mono">
            <strong>Duration:</strong> 2022 - Present
          </p>
          <p className="mb-2 font-mono">
            <strong>Role:</strong> Software Development Intern (Freelance)
          </p>
          <p className="mb-4 font-mono">
            <strong>Responsibilities:</strong>
          </p>
          <ul className="list-disc list-inside mb-4 text-gray-700 font-mono">
            <li>Developed and maintained automation scripts using Python to streamline internal processes, improving efficiency by over 20%.</li>
            <li>Collaborated with senior developers to create data pipelines for ETL processes, ensuring the integrity of large datasets.</li>
            <li>Wrote unit tests to ensure high code quality and minimize bugs in production environments.</li>
            <li>Assisted in debugging and resolving issues in Python-based applications, reducing downtime for critical systems.</li>
          </ul>
          <p className="font-mono">
            <strong>Key Achievements:</strong> Enhanced the scalability of internal tools by implementing optimized algorithms, resulting in faster performance.
          </p>
          <p className="font-mono mt-4 text-gray-600">
            <strong>Note:</strong> During this internship, I was hired by an individual who assigned me tasks and compensated me directly for my work, rather than being employed by the company itself.
          </p>
        </div>

        {/* C#-Centric Internship */}
        <div className="bg-white shadow-lg rounded-xl p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl">
          <h2 className="text-2xl text-blue-800 font-semibold mb-4 font-serif">
            C#-Centric Internship
          </h2>
          <p className="mb-2 font-mono">
            <strong>Duration:</strong> October 2024 - Present
          </p>
          <p className="mb-2 font-mono">
            <strong>Role:</strong> Software Developer Intern (Freelance, External Client)
          </p>
          <p className="mb-4 font-mono">
            <strong>Responsibilities:</strong>
          </p>
          <ul className="list-disc list-inside mb-4 text-gray-700 font-mono">
            <li>Developed enterprise-grade applications using C#, focusing on functionality, security, and scalability.</li>
            <li>Participated in design discussions and implemented features based on client requirements.</li>
            <li>Optimized existing codebases by refactoring for performance and readability, reducing runtime by up to 15%.</li>
            <li>Integrated third-party APIs to enhance application capabilities and ensure seamless user experiences.</li>
          </ul>
          <p className="font-mono">
            <strong>Key Achievements:</strong> Delivered a critical application module ahead of schedule, receiving commendation from the client for exceptional quality.
          </p>
          <p className="font-mono mt-4 text-gray-600">
            <strong>Note:</strong> Similar to my previous internship, I worked for an individual who provided me with tasks directly, and I was compensated by them for my work instead of being formally employed by the company.
          </p>
        </div>
      </div>
    </div>
  );
}
