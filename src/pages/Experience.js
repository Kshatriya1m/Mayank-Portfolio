import React from "react";

const Experience = (props) => {
  const isDark = props.mode === "dark";

  return (
    <div
      className={`min-h-screen ${
        isDark ? "text-white bg-gray-900" : "text-black bg-gray-50"
      } text-white px-10 py-16`}
    >
      <h2 className="text-4xl font-bold mb-12 text-red-500">Experience</h2>

      <div className="relative border-l border-red-600 pl-8 space-y-14">
        <div>
          <div className="absolute -left-3 w-6 h-6 bg-red-600 rounded-full"></div>
          <h3
            className={`${
              isDark ? "text-white" : "text-black"
            } text-2xl font-semibold`}
          >
            Full Stack Web Developer Intern
          </h3>
          <p className={`${isDark ? "text-gray-400" : "text-gray-900"} italic`}>
            Appz Global Tech, Noida (Aug 2025 - Nov 2025)
          </p>
          <ul
            className={`mt-3 ${
              isDark ? "text-gray-300" : "text-gray-700"
            } space-y-2 list-disc ml-5`}
          >
            <li>
              Developed MERN applications handling 100+ daily transactions.
            </li>
            <li>
              Implemented authentication, REST APIs & optimized MongoDB queries.
            </li>
            <li>Built responsive UIs using React, Tailwind CSS, JavaScript.</li>
            <li>Worked in Agile sprints with Git version control.</li>
          </ul>
        </div>

        <div>
          <div className="absolute -left-3 w-6 h-6 bg-red-600 rounded-full"></div>
          <h3
            className={`${
              isDark ? "text-white" : "text-black"
            } text-2xl font-semibold`}
          >
            Hackathon Participant
          </h3>
          <p className={`${isDark ? "text-gray-400" : "text-gray-800"} italic`}>
            Dev Bhoomi Uttarakhand University
          </p>
          <p className={`mt-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
            Participated in a 2-day competitive coding event, building solutions
            under time pressure.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
