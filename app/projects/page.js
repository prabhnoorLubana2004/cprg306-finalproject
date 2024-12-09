import Link from "next/link";
import React from "react";


const Project = () => {
  return (
    <div className="flex-1 p-4 mx-12">
      <h2 className="text-center text-3xl text-sky-700 font-extrabold mb-6">
        My Projects
      </h2>
      <p className="text-2xl text-center mb-6">
        Here are some of the projects I’ve worked on:
      </p>

      <div className="flex flex-col gap-8">
        {/* Project 1 */}
        <div className="bg-sky-100 shadow-md rounded-md p-6">
          <h3 className="text-sky-700 text-xl font-bold mb-4">
            Modern Appliances Management System
          </h3>
          <p className="mb-4">
            A C# application for managing appliance data, including
            functionalities like checking out appliances, searching by brand,
            and displaying appliance types.
          </p>
          <h4 className="text-sky-700 text-lg font-semibold mb-2">
            Technologies Used:
          </h4>
          <ul className="list-disc list-inside mb-4">
            <li>C#</li>
            <li>OOP</li>
            <li>Visual Studio</li>
          </ul>
          <Link
            href="https://github.com/prabhnoorLubana2004/CSharpProjects/tree/main/Assignment%201" 
            className="text-sky-700 font-bold underline"
          >
            View Project
          </Link>
        </div>

        {/* Project 2 */}
        <div className="bg-sky-100 shadow-md rounded-md p-6">
          <h3 className="text-sky-700 text-xl font-bold mb-4">
            Recipe app
          </h3>
          <p className="mb-4">
           Using Python I made a program used to book appointments at a Salon
          </p>
          <h4 className="text-sky-700 text-lg font-semibold mb-2">
            Technologies Used:
          </h4>
          <ul className="list-disc list-inside mb-4">
            <li>Python</li>
            <li> VS code</li>
            <li></li>
          </ul>
          <Link
            href="https://github.com/prabhnoorLubana2004/PythonProjects/blob/main/AppointmentManage.py" 
            className="text-sky-700 font-bold underline"
          >
            View Project
          </Link>
        </div>

        

        {/* Project 3 */}
        <div className="bg-sky-100 shadow-md rounded-md p-6">
          <h3 className="text-sky-700 text-xl font-bold mb-4">
            Dog DayCare
          </h3>
          <p className="mb-4">
            A Web application based on HTML, CSS, JavaScript where you user can book the daycare for their dog and also can calculate the price.
          </p>
          <h4 className="text-sky-700 text-lg font-semibold mb-2">
            Technologies Used:
          </h4>
          <ul className="list-disc list-inside mb-4">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>VS Code</li>
          </ul>
          <Link
            href="https://github.com/prabhnoorLubana2004/FrontEndProjects/tree/main/Project" 
            className="text-sky-700 font-bold underline"
          >
            View Project
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Project;