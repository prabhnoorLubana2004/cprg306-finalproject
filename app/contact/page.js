import React from "react";

export default function ContactPage() {
  return (
    <div className="p-8 bg-gradient-to-br from-gray-100 to-white text-gray-800 min-h-screen">
      <h1 className="text-5xl text-blue-900 font-extrabold mb-12 font-serif text-center shadow-lg p-4 rounded-lg bg-gradient-to-r from-yellow-100 to-blue-50 transform transition-all duration-300 hover:scale-105">
        Contact Me
      </h1>
      <p className="text-xl mb-12 text-gray-700 font-mono leading-relaxed text-center max-w-3xl mx-auto">
        Feel free to reach out to me through any of the following platforms:
      </p>

      <div className="grid grid-cols-1 gap-12 max-w-3xl mx-auto">
        {/* GitHub */}
        <div className="bg-white shadow-lg rounded-xl p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl">
          <h2 className="text-2xl text-blue-800 font-semibold mb-4 font-serif">
            GitHub
          </h2>
          <a
            href="https://github.com/prabhnoorLubana2004"
            target="_blank"
            className="text-blue-600 hover:underline text-lg font-roboto"
            rel="noopener noreferrer"
          >
            Visit my GitHub Profile
          </a>
        </div>

        {/* LinkedIn */}
        <div className="bg-white shadow-lg rounded-xl p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl">
          <h2 className="text-2xl text-blue-800 font-semibold mb-4 font-serif">
            LinkedIn
          </h2>
          <a
            href="https://www.linkedin.com/in/prabhnoor-lubana-897836256/"
            target="_blank"
            className="text-blue-600 hover:underline text-lg font-roboto"
            rel="noopener noreferrer"
          >
            Connect with me on LinkedIn
          </a>
        </div>

        {/* Email */}
        <div className="bg-white shadow-lg rounded-xl p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl">
          <h2 className="text-2xl text-blue-800 font-semibold mb-4 font-serif">
            Email
          </h2>
          <a
            href="mailto:pslubana2004@gmail.com"
            className="text-blue-600 hover:underline text-lg font-roboto"
          >
            Send me an Email: pslubana2004@gmail.com
          </a>
        </div>

        {/* Phone */}
        <div className="bg-white shadow-lg rounded-xl p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl">
          <h2 className="text-2xl text-blue-800 font-semibold mb-4 font-serif">
            Phone
          </h2>
          <a
            href="tel:+14037964894"
            className="text-blue-600 hover:underline text-lg font-roboto"
          >
            Call me: +1 403-796-4894
          </a>
        </div>
      </div>
    </div>
  );
}
