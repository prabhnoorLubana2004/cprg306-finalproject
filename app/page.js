import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      {/* Header Navigation */}
      <header className="bg-gradient-to-r from-gray-800 to-blue-900 text-white py-6 shadow-lg">
        <nav className="flex justify-center space-x-6 font-sans">
          <Link
            href="/about"
            className="text-lg font-bold hover:text-yellow-300 transition-colors duration-300 transform hover:scale-110"
          >
            About
          </Link>
          <Link
            href="/experience"
            className="text-lg font-bold hover:text-yellow-300 transition-colors duration-300 transform hover:scale-110"
          >
            Experience
          </Link>
          <Link
            href="/projects"
            className="text-lg font-bold hover:text-yellow-300 transition-colors duration-300 transform hover:scale-110"
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="text-lg font-bold hover:text-yellow-300 transition-colors duration-300 transform hover:scale-110"
          >
            Contact
          </Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="min-h-screen flex flex-col justify-center items-center bg-gray-50 text-gray-800 p-8">
        <h1 className="text-6xl font-bold text-blue-900 mb-8 font-serif shadow-lg p-5 rounded-lg bg-gradient-to-br from-yellow-100 to-white transform transition-all duration-300 hover:scale-105">
          Welcome to Portfolio Pro
        </h1>
        <p className="text-center max-w-2xl mb-8 text-xl text-gray-700 font-mono leading-relaxed">
          Hello! I'm <strong>Prabhnoor Singh Lubana</strong>, a passionate software developer dedicated to crafting efficient and innovative solutions. With a strong technical foundation and a focus on emerging technologies, I aim to build impactful applications that solve real-world problems and enhance user experiences. 
          <br />
          Currently pursuing my Software Development diploma, I am constantly exploring new technologies and expanding my skill set.
        </p>
        <p className="text-center max-w-xl text-lg text-gray-600 font-mono leading-relaxed">
          Navigate through the menu above to explore more about me. Check out the <strong>About</strong> page to know my story, <strong>Experience</strong> for my professional journey, <strong>Projects</strong> to see my work, and <strong>Contact</strong> to get in touch.
        </p>
      </main>
    </div>
  );
}
