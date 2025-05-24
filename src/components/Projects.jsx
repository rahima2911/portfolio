"use client"

import { useState } from "react"

const Projects = () => {
  const [activeTab, setActiveTab] = useState("all")

  const projects = [
    {
      id: 1,
      title: "Community Connect",
      description:
        "A platform that connects community members for local events, services, and discussions. Features include user authentication, event creation, community forums, and real-time notifications.",
      image: "/placeholder.svg?height=400&width=600",
      category: "mern",
      techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "Socket.io", "Tailwind CSS"],
    },
    {
      id: 2,
      title: "Skill Swap",
      description:
        "A marketplace for people to exchange skills and services. Users can create profiles highlighting their expertise, search for skills they need, and arrange skill exchanges with other users.",
      image: "/placeholder.svg?height=400&width=600",
      category: "mern",
      techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "Bootstrap"],
    },
    {
      id: 3,
      title: "Airbnb Clone",
      description:
        "A pixel-perfect recreation of Airbnb's front page with responsive design and animations. Includes property listings, search functionality, and filtering options.",
      image: "/placeholder.svg?height=400&width=600",
      category: "frontend",
      techStack: ["React.js", "CSS3", "JavaScript", "Responsive Design"],
    },
  ]

  const filteredProjects = activeTab === "all" ? projects : projects.filter((project) => project.category === activeTab)

  return (
    <div className="py-20 px-4 md:px-8 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 relative text-gray-800 dark:text-gray-100">
          My Projects
          <span className="block w-20 h-1 bg-emerald-600 dark:bg-emerald-500 mx-auto mt-4"></span>
        </h2>

        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 bg-gray-100 dark:bg-gray-700 rounded-lg">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === "all"
                  ? "bg-white dark:bg-gray-600 text-emerald-600 dark:text-emerald-400 shadow-sm"
                  : "text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400"
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setActiveTab("mern")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === "mern"
                  ? "bg-white dark:bg-gray-600 text-emerald-600 dark:text-emerald-400 shadow-sm"
                  : "text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400"
              }`}
            >
              MERN Stack
            </button>
            <button
              onClick={() => setActiveTab("frontend")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === "frontend"
                  ? "bg-white dark:bg-gray-600 text-emerald-600 dark:text-emerald-400 shadow-sm"
                  : "text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400"
              }`}
            >
              Frontend
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">{project.description}</p>

                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-2">
                  <button className="px-3 py-1.5 bg-emerald-600 dark:bg-emerald-700 text-white text-sm rounded hover:bg-emerald-700 dark:hover:bg-emerald-600 transition-colors flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-eye mr-1"
                    >
                      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                    Live Demo
                  </button>
                  <button className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-github mr-1"
                    >
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                    Code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
