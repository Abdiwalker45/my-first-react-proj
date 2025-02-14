import { useState } from "react";
import { Sun, Moon, Github, Linkedin, Mail } from "lucide-react";

function Portfolio() {
  // State to manage dark mode
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white p-6 sm:p-10">
        {/* Navbar */}
        <nav className="flex sm:flex-row justify-between items-center py-6">
          <h1 className="text-3xl sm:text-4xl font-bold text-center sm:text-left">My Portfolio</h1>
          {/* Button to toggle dark mode */}
          <button onClick={() => setDarkMode(!darkMode)} className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 text-xl mt-4 sm:mt-0">
            {darkMode ? <Sun /> : <Moon />}
          </button>
        </nav>

        {/* Hero Section */}
        <header className="text-center mt-12 sm:mt-16">
          <img src="" alt="" />
          <h2 className="text-4xl sm:text-6xl font-bold">Hello, welcome <br /> I'm Abdiwalker</h2>
          <p className="text-lg sm:text-2xl mt-4 text-gray-600 dark:text-gray-300">Full-Stack Developer & Designer</p>
        </header>

        {/* Projects Section */}
        <section className="mt-12 sm:mt-16">
          <h3 className="text-3xl sm:text-4xl text-center font-semibold">My Recent Projects</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 mt-6">
            <div className="bg-white dark:bg-gray-800 p-5 sm:p-6 rounded-xl shadow-lg">
              <h4 className="text-xl sm:text-2xl font-semibold">project Qalin</h4>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300">I build this project using tailwindcss.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-5 sm:p-6 rounded-xl shadow-lg">
              <h4 className="text-xl sm:text-2xl font-semibold">Project Resturant</h4>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300">I build this for a local caffee and restaurant.</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <footer className="mt-12 sm:mt-16 text-center">
          <h3 className="text-3xl sm:text-4xl font-semibold">Get in Touch</h3>
          <div className="flex justify-center space-x-4 sm:space-x-6 mt-6">
            <a href="#" className="p-3 sm:p-4 rounded-full bg-gray-200 dark:bg-gray-700 text-xl sm:text-2xl"><Github /></a>
            <a href="#" className="p-3 sm:p-4 rounded-full bg-gray-200 dark:bg-gray-700 text-xl sm:text-2xl"><Linkedin /></a>
            <a href="#" className="p-3 sm:p-4 rounded-full bg-gray-200 dark:bg-gray-700 text-xl sm:text-2xl"><Mail /></a>
          </div>
        </footer>
      </div>
    </div>
  );
}
export default Portfolio;