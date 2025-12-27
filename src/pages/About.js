import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaPhp,
  FaDatabase,
  FaJava,
  FaPython,
  FaGitAlt,
  FaBootstrap,
} from "react-icons/fa";
import { SiTailwindcss, SiMysql, SiExpress, SiDotnet } from "react-icons/si";

const About = ({ mode }) => {
  const frontendSkills = [
    {
      name: "HTML5",
      icon: <FaHtml5 className="inline mr-2 text-orange-500" />,
    },
    { name: "CSS3", icon: <FaCss3Alt className="inline mr-2 text-blue-500" /> },
    {
      name: "JavaScript (ES6+)",
      icon: <FaJsSquare className="inline mr-2 text-yellow-400" />,
    },
    {
      name: "React.js",
      icon: <FaReact className="inline mr-2 text-blue-400" />,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="inline mr-2 text-teal-400" />,
    },
    {
      name: "Bootstrap",
      icon: <FaBootstrap className="inline mr-2 text-purple-500" />,
    },
  ];

  const backendSkills = [
    {
      name: "Node.js",
      icon: <FaNodeJs className="inline mr-2 text-green-500" />,
    },
    {
      name: "Express.js",
      icon: <SiExpress className="inline mr-2 text-gray-400" />,
    },
    { name: "PHP", icon: <FaPhp className="inline mr-2 text-indigo-500" /> },
  ];

  const databaseSkills = [
    {
      name: "MongoDB",
      icon: <FaDatabase className="inline mr-2 text-green-600" />,
    },
    { name: "MySQL", icon: <SiMysql className="inline mr-2 text-blue-600" /> },
    { name: "SQL", icon: <FaDatabase className="inline mr-2 text-gray-500" /> },
  ];

  const languageSkills = [
    {
      name: "C",
      icon: <img src="c.png" alt="C" className="inline mr-2 w-6 h-6" />,
    },
    {
      name: "C++",
      icon: <img src="cpp.png" alt="C++" className="inline mr-2 w-6 h-6" />,
    },
    {
      name: "C#",
      icon: <img src="c-sharp.png" alt="C#" className="inline mr-2 w-6 h-6" />,
    },
    {
      name: "Python",
      icon: <FaPython className="inline mr-2 text-yellow-400" />,
    },
    { name: "Java", icon: <FaJava className="inline mr-2 text-red-500" /> },
    {
      name: "Visual Basic",
      icon: (
        <img src="visual-basic.png" alt="VB" className="inline mr-2 w-6 h-6" />
      ),
    },
  ];

  const toolsSkills = [
    {
      name: "Visual Studio Code",
      icon: (
        <img
          src="visual-studio.png"
          alt="VSCode"
          className="inline mr-2 w-6 h-6"
        />
      ),
    },
    {
      name: "Git & GitHub",
      icon: <FaGitAlt className="inline mr-2 text-red-500" />,
    },
    {
      name: "Notepad++",
      icon: (
        <img
          src="notepadpp.png"
          alt="Notepad++"
          className="inline mr-2 w-6 h-6"
        />
      ),
    },
    {
      name: "Apache NetBeans",
      icon: (
        <img
          src="netbeans.png"
          alt="NetBeans"
          className="inline mr-2 w-6 h-6"
        />
      ),
    },
    {
      name: ".NET",
      icon: <SiDotnet className="inline mr-2 text-purple-600" />,
    },
  ];

  const renderSkills = (skills) =>
    skills.map((skill) => (
      <div
        key={skill.name}
        className={`p-3 rounded-xl text-center shadow-md transition flex items-center justify-center space-x-2 border hover:scale-105 duration-200
          ${
            mode === "dark"
              ? "bg-gray-800 border-gray-700 hover:bg-gray-700"
              : "bg-white border-gray-300 hover:bg-red-50"
          }`}
      >
        {skill.icon} <span className="font-medium">{skill.name}</span>
      </div>
    ));

  return (
    <div
      className={`min-h-screen px-10 py-16 transition
        ${
          mode === "dark"
            ? "bg-gray-900 text-white"
            : "bg-gray-50 text-gray-900"
        }`}
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-red-500">About Me</h2>

        <p className="max-w-3xl leading-7 mb-10 text-lg opacity-90">
          I'm a Full Stack Developer with experience in MERN Stack, REST APIs,
          PHP/MySQL applications, and Java desktop software. I love designing
          modern UIs and building high-performance applications.
        </p>

        <h3 className="text-red-500 text-3xl font-bold mb-8">Skills</h3>

        <section className="mb-10">
          <h4 className="text-xl font-semibold mb-4 text-red-400">
            Frontend Technologies
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {renderSkills(frontendSkills)}
          </div>
        </section>

        <section className="mb-10">
          <h4 className="text-xl font-semibold mb-4 text-red-400">
            Backend Technologies
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {renderSkills(backendSkills)}
          </div>
        </section>

        <section className="mb-10">
          <h4 className="text-xl font-semibold mb-4 text-red-400">Databases</h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {renderSkills(databaseSkills)}
          </div>
        </section>

        <section className="mb-10">
          <h4 className="text-xl font-semibold mb-4 text-red-400">
            Programming Languages
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {renderSkills(languageSkills)}
          </div>
        </section>

        <section className="mb-10">
          <h4 className="text-xl font-semibold mb-4 text-red-400">Tools</h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {renderSkills(toolsSkills)}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
