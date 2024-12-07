export default function ContactPage() {
  return (
    <div className="p-8 bg-gray-100 text-gray-800 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
      <ul className="space-y-2">
        <li>
          <a
            href="https://github.com/prabhnoorLubana2004"
            target="_blank"
            className="text-blue-600 hover:underline"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/prabhnoor-lubana-897836256/"
            target="_blank"
            className="text-blue-600 hover:underline"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </div>
  );
}
