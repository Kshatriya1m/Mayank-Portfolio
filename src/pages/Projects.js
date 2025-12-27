import React from "react";

const projects = [
  {
    title: "Restaurant Web App (MERN)",
    desc: "Full-stack menu, orders, reservations with real-time order tracking.",
  },
  {
    title: "Coffee Shop App (MERN)",
    desc: "Order system, customer profiles, online payments & MongoDB APIs.",
  },
  {
    title: "Snack Game (Java)",
    desc: "2D game with movement, collision & 60fps smooth gameplay.",
  },
  {
    title: "Bank Management System (PHP/MySQL)",
    desc: "Secure banking operations: deposits, withdrawals, history.",
  },
  {
    title: "CRUD Application (PHP/MySQL)",
    desc: "Create-read-update-delete + advanced search & validation.",
  },
  {
    title: "Café Management System (Java)",
    desc: "Order processing & bill generation with 80% error reduction.",
  },
];

const Projects = (props) => {
  const isDark = props.mode === "dark";

  return (
    <div
      className={`min-h-screen ${
        isDark ? "text-white bg-gray-900" : "text-black bg-gray-50"
      } px-10 py-16`}
    >
      <h2 className="text-4xl font-bold mb-8 text-red-500">Projects</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p, index) => (
          <div
            key={index}
            className={`${
              isDark ? "bg-gray-800" : "bg-white"
            } p-6 rounded-xl shadow-lg hover:scale-105 transition`}
          >
            <h3
              className={`text-xl font-bold ${
                isDark ? "text-red-400" : "text-red-500"
              } mb-2`}
            >
              {p.title}
            </h3>
            <p className={`${isDark ? "text-gray-300" : "text-gray-700"}`}>
              {p.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
