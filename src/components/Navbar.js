import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar(props) {
  const [isOpen, setIsOpen] = useState(false);

  const handleContactClick = () => {
    const email = props.email;
    const subject = encodeURIComponent("Hello");
    const name = props.title.split(" ")[0];
    const body = encodeURIComponent(
      `Hi ${name}, I wanted to reach out to you.`
    );
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Projects", path: "/projects" },
    { label: "Experience", path: "/experience" },
  ];

  const linkClass = (isActive) =>
    `${props.mode === "dark" ? "text-gray-300" : "text-gray-700"} ${
      isActive
        ? "font-semibold text-red-600"
        : "hover:font-semibold hover:text-red-500"
    } transition`;

  return (
    <>
      {/* TOP NAVBAR */}
      <nav
        className={`${
          props.mode === "dark" ? "bg-gray-800" : "bg-gray-100"
        } shadow`}
      >
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          {/* Brand */}
          <NavLink
            to="/"
            className={`text-xl font-semibold ${
              props.mode === "dark" ? "text-white" : "text-gray-800"
            }`}
          >
            {props.title}
          </NavLink>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden ${
              props.mode === "dark" ? "text-white" : "text-gray-800"
            } focus:outline-none`}
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex lg:items-center">
            <ul className="flex space-x-6">
              {navItems.map((item) => (
                <li key={item.label}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) => linkClass(isActive)}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Desktop Contact Button */}
            <button
              onClick={handleContactClick}
              className="ml-6 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition"
            >
              Contact
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {isOpen && (
        <div
          className={`lg:hidden shadow-inner ${
            props.mode === "dark" ? "bg-gray-800" : "bg-gray-50"
          }`}
        >
          <ul className="flex flex-col px-4 py-3 space-y-3">
            {navItems.map((item) => (
              <li key={item.label}>
                <NavLink
                  onClick={() => setIsOpen(false)}
                  to={item.path}
                  className={({ isActive }) => linkClass(isActive)}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="px-4 pb-4">
            {/* Mobile Contact Button */}
            <button
              onClick={handleContactClick}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded w-full"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </>
  );
}
