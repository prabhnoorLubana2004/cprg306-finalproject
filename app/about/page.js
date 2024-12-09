export default function AboutPage() {
  return (
    <div className="p-8 bg-gradient-to-br from-gray-100 to-white text-gray-800 min-h-screen">
      {/* Page Header */}
      <h1 className="text-5xl text-blue-900 font-extrabold mb-12 font-serif text-center shadow-lg p-4 rounded-lg bg-gradient-to-r from-yellow-100 to-blue-50 transform transition-all duration-300 hover:scale-105">
        About Me
      </h1>

      <p className="text-xl mb-12 text-gray-700 font-mono leading-relaxed text-center max-w-3xl mx-auto">
        Hello! I'm a passionate software developer who loves building user-friendly applications and solving complex problems through technology.
      </p>

      <div className="space-y-16">
        {/* Education Section */}
        <div className="bg-white shadow-lg rounded-xl p-8 transform transition duration-300 hover:scale-105 hover:shadow-2xl">
          <h2 className="text-3xl text-blue-900 font-semibold mb-8 font-serif border-b-2 border-yellow-300 pb-2">
            Education
          </h2>
          <div className="space-y-12">
            {/* High School */}
            <div>
              <h3 className="font-bold text-2xl text-blue-800 mb-2">
                Rayat International School, Punjab, India
              </h3>
              <p className="text-gray-600 font-semibold">
                High School (Non-Medical) - June 2022
              </p>
              <ul className="text-gray-700 list-disc pl-5">
                <li>
                  <span className="font-bold">Marks:</span> 85%
                </li>
                <li>
                  <span className="font-bold">Subjects:</span> Maths, Chemistry, Physics
                </li>
                <li>
                  <span className="font-bold">Details:</span> Gained a solid foundation in scientific principles, analytical skills, and problem-solving.
                </li>
              </ul>
            </div>

            {/* B.Tech */}
            <div>
              <h3 className="font-bold text-2xl text-blue-800 mb-2">
                Lovely Professional University, Punjab, India
              </h3>
              <p className="text-gray-600 font-semibold">
                Bachelors in Computer Science (2022 - 2023)
              </p>
              <ul className="text-gray-700 list-disc pl-5">
                <li>
                  <span className="font-bold">Completed:</span> 2 Semesters
                </li>
                <li>
                  <span className="font-bold">CGPA:</span> 8.0
                </li>
                <li>
                  <span className="font-bold">Subjects:</span> HTML, Python, C, Technical Subjects, Mathematics
                </li>
                <li>
                  <span className="font-bold">Details:</span> Built a foundation in programming languages and software principles.
                </li>
              </ul>
            </div>

            {/* SAIT */}
            <div>
              <h3 className="font-bold text-2xl text-blue-800 mb-2">
                Southern Alberta Institute of Technology (SAIT), Calgary, Alberta, Canada
              </h3>
              <p className="text-gray-600 font-semibold">
                Software Development Diploma (2023 - Present)
              </p>
              <ul className="text-gray-700 list-disc pl-5">
                <li>
                  <span className="font-bold">GPA:</span> 3.5
                </li>
                <li>
                  <span className="font-bold">Subjects:</span> C#, Java, JavaScript, UI/UX, Software Analysis
                </li>
                <li>
                  <span className="font-bold">Details:</span> Developing expertise in modern programming and user-centered software design.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="bg-white shadow-lg rounded-xl p-8 transform transition duration-300 hover:scale-105 hover:shadow-2xl">
          <h2 className="text-3xl text-blue-900 font-semibold mb-8 font-serif border-b-2 border-yellow-300 pb-2">
            Skills
          </h2>
          <ul className="space-y-4 text-gray-700 font-mono leading-relaxed">
            <li>
              <span className="font-bold text-blue-700">Programming Languages:</span> JavaScript, Python, Java, SQL
            </li>
            <li>
              <span className="font-bold text-blue-700">Frontend Development:</span> React.js, React Native, HTML, CSS, Tailwind CSS
            </li>
            <li>
              <span className="font-bold text-blue-700">Backend Development:</span> Node.js, Express.js, Flask
            </li>
            <li>
              <span className="font-bold text-blue-700">Databases:</span> MySQL, MongoDB
            </li>
            <li>
              <span className="font-bold text-blue-700">Tools:</span> Git, GitHub, VS Code, Figma
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
