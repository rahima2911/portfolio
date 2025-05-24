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
      image: "https://hotgoodwill.org/wp-content/uploads/2023/09/Community-Connect-Logo-File-small-1024x576.jpg",
      category: "mern",
      techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "Socket.io", "Tailwind CSS"],
    },
    {
      id: 2,
      title: "Skill Swap",
      description:
        "A marketplace for people to exchange skills and services. Users can create profiles highlighting their expertise, search for skills they need, and arrange skill exchanges with other users.",
      image: "https://cdn.dribbble.com/userupload/14940721/file/original-2fa5f23014a4231a5d200ef9c1913419.png",
      category: "mern",
      techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "Bootstrap"],
    },
    {
      id: 3,
      title: "Movie Ticket Management System",
      description:
        "A comprehensive booking system that handles movie schedules, seat bookings, and user transactions. Features include real-time seat availability, payment processing, and booking management with a user-friendly interface.",
      image: "https://media.geeksforgeeks.org/wp-content/uploads/20241128191530095193/BookMyShow-System-Design.webp",
      category: "backend",
      techStack: ["Python", "SQL", "Database Design", "Backend Development"],
    },
    {
      id: 4,
      title: "Real-Time Multiplayer Drawing And Chat App",
      description:
        "A responsive HTML5 Canvas drawing tool with customizable brush size and color, undo/redo functionality, and full mouse/touch support. Features a chat interface with emoji support, typing indicators, and persistent message storage using localStorage. Includes a dark mode toggle with icon updates and saved user preferences for a seamless experience.",
      image: "https://repository-images.githubusercontent.com/473444333/1c2dd66a-4db4-45d6-898b-58bb7a64ceb5",
      category: "frontend",
      techStack: ["HTML5 ", "JavaScript", "WebSocket", "LocalStorage", "CSS3", "Responsive Design"],
    },
    {
      id: 5,
      title: "Smart Expense Tracker App",
      description:
        "A responsive web app that allows users to track their expenses, categorize them, visualize the data with charts, and store everything using localStorage. Features include income/expense entries with category and date, total balance calculation, filtering options, and interactive charts for data visualization.",
      image: "https://www.wellybox.com/wp-content/uploads/2021/01/6-business-expense-tracker-1024x1024.jpg",
      category: "frontend",
      techStack: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    },
    {
      id: 6,
      title: "Coffee Shop Website ", 
      description:
        "Utilized Bootstrap’s grid system, cards, modals, and navbar components to create a cohesive and interactive user interface that adapts seamlessly across all device sizes. Implemented structured multi-page navigation including Home, Menu, About Us, and Contact pages, with integrated testimonial section and responsive image gallery to enhance user engagement and brand storytelling.",
      image: "https://media.istockphoto.com/id/1262771454/vector/coffee-shop-emblem-template.jpg?s=612x612&w=0&k=20&c=y1EyHCxENVCPCgblJ00BEdjiUjwMnYk4QgZSKRCegxY=",
      category: "frontend",
      techStack: ["Bootstrap 5"],
    },
  ]

  const filteredProjects = activeTab === "all" ? projects : projects.filter((project) => project.category === activeTab)

  return (
    <div className="py-20 px-4 md:px-8 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto max-w-7xl">
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
            <button
              onClick={() => setActiveTab("backend")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === "backend"
                  ? "bg-white dark:bg-gray-600 text-emerald-600 dark:text-emerald-400 shadow-sm"
                  : "text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400"
              }`}
            >
              Backend
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-2 max-w-sm mx-auto w-full"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  onError={(e) => {
                    e.target.src = "/placeholder.svg?height=400&width=600"
                  }}
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>

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
