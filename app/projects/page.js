import Link from "next/link";
import React from "react";

const Project = () => {
  return (
    <div className="p-8 bg-gradient-to-br from-gray-100 to-white text-gray-800 min-h-screen">
      {/* My Projects Section */}
      <h1 className="text-5xl text-blue-900 font-extrabold mb-12 font-serif text-center shadow-lg p-4 rounded-lg bg-gradient-to-r from-yellow-100 to-blue-50 transform transition-all duration-300 hover:scale-105">
        My Projects
      </h1>
      <p className="text-xl mb-12 text-gray-700 font-mono leading-relaxed text-center max-w-3xl mx-auto">
        Here are some of the projects I’ve worked on:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Individual Project Cards */}
        {[
          {
            title: "Robot Booking Website",
            description:
              "A website that allows users to book a robot for a chosen duration, with the cost calculated and displayed accordingly.",
            technologies: ["HTML", "CSS", "JavaScript"],
            link: "https://github.com/prabhnoorLubana2004/FrontEndProjects/tree/main/JSProject",
          },
          {
            title: "Dog DayCare",
            description:
              "A Web application built with HTML, CSS, and JavaScript where users can book daycare for their dogs and calculate the price.",
            technologies: ["HTML", "CSS", "JavaScript"],
            link: "https://github.com/prabhnoorLubana2004/FrontEndProjects/tree/main/Project",
          },
          {
            title: "Hair Salon Program",
            description:
              "Using Python, I created a program for booking appointments at a Salon.",
            technologies: ["Python", "VS Code"],
            link: "https://github.com/prabhnoorLubana2004/PythonProjects/blob/main/AppointmentManage.py",
          },
          {
            title: "Modern Appliances Management System",
            description:
              "A C# application for managing appliance data, including functionalities like checking out appliances, searching by brand, and displaying appliance types.",
            technologies: ["C#", "OOP", "Visual Studio"],
            link: "https://github.com/prabhnoorLubana2004/CSharpProjects/tree/main/Assignment%201",
          },
        ].map((project, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            <h3 className="text-blue-800 text-2xl font-semibold mb-4 font-serif">
              {project.title}
            </h3>
            <p className="text-gray-600 mb-4 font-mono">{project.description}</p>
            <h4 className="text-blue-800 text-lg font-semibold mb-2 font-serif">
              Technologies Used:
            </h4>
            <ul className="list-disc list-inside mb-4 text-gray-700 font-mono">
              {project.technologies.map((tech, techIndex) => (
                <li key={techIndex}>{tech}</li>
              ))}
            </ul>
            <Link
              href={project.link}
              className="text-blue-600 font-semibold underline hover:text-blue-800"
            >
              View Project
            </Link>
          </div>
        ))}
      </div>

      {/* Current Projects Section */}
      <h2 className="text-4xl text-blue-900 font-extrabold mb-12 font-serif text-center shadow-lg p-4 rounded-lg bg-gradient-to-r from-yellow-100 to-blue-50 transform transition-all duration-300 hover:scale-105">
        Currently Working On
      </h2>
      <p className="text-xl mb-12 text-gray-700 font-mono leading-relaxed text-center max-w-3xl mx-auto">
        Here are some of the projects I am currently working on:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Current Project Cards */}
        {[
          {
            title: "Word Scramble Game",
            description:
              "Developed a WPF application game using C# that challenges users to find hidden words in a long string within a time limit. Implemented a TCP client-server architecture with a custom protocol to enable communication and file transfer between the server and multiple clients. Optimized performance using multithreading and async/await techniques.",
            technologies: ["WPF", "C#", "XAML"],
          },
          {
            title: "Online Notepad Application",
            description:
              "Developed an online notepad application using the ASP.NET framework and C# for both front-end and back-end logic. Implemented AJAX and jQuery for communication between the front and back without reloading the page. Integrated Azure Blob Storage to store and retrieve text files on the cloud.",
            technologies: ["JavaScript", "ASP.NET Framework", "jQuery", "AJAX"],
          },
          {
            title: "Multiple Choice Quiz Game",
            description:
              "Built a .NET MAUI-based application that allows admins to perform CRUD operations on questions and options. Implemented a random quiz generator that selects a set of questions for the user when they choose to play. Utilized an SQL database to store and retrieve quiz data and user information.",
            technologies: ["C#", ".NET MAUI", "SQL"],
          },
        ].map((project, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            <h3 className="text-blue-800 text-2xl font-semibold mb-4 font-serif">
              {project.title}
            </h3>
            <p className="text-gray-600 mb-4 font-mono">{project.description}</p>
            <h4 className="text-blue-800 text-lg font-semibold mb-2 font-serif">
              Technologies Used:
            </h4>
            <ul className="list-disc list-inside mb-4 text-gray-700 font-mono">
              {project.technologies.map((tech, techIndex) => (
                <li key={techIndex}>{tech}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
