import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      {/* Header Navigation */}
      <header className="bg-gray-800 text-white py-4">
        <nav className="flex justify-center space-x-8">
          <Link href="/about" className="hover:text-yellow-400">About</Link>
          <Link href="/contact" className="hover:text-yellow-400">Contact</Link>
          <Link href="/experience" className="hover:text-yellow-400">Experience</Link>
          <Link href="/projects" className="hover:text-yellow-400">Projects</Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="min-h-screen flex flex-col justify-center items-center bg-gray-100 text-gray-800 p-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to Portfolio Pro</h1>
        <p className="text-center max-w-md">
          Hi! I'm a passionate developer. Explore my work, learn about my experience, and feel free to reach out!
        </p>
      </main> 
    </div>
  );
}
