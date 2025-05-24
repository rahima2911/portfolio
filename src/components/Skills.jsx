const Skills = () => {
  const skillCategories = [
    {
      name: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "ReactJS", "Bootstrap", "Tailwind", "jQuery"],
    },
    {
      name: "Backend",
      skills: ["NodeJS", "ExpressJS", "MongoDB", "Python", "SQL"],
    },
    {
      name: "Programming",
      skills: ["C++", "Database Design", "REST APIs"],
    },
  ]

  return (
    <div className="py-20 px-4 md:px-8 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 relative text-gray-800 dark:text-gray-100">
          Technical Skills
          <span className="block w-20 h-1 bg-emerald-600 dark:bg-emerald-500 mx-auto mt-4"></span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold mb-6 text-emerald-600 dark:text-emerald-400 pb-2 border-b border-gray-200 dark:border-gray-700">
                {category.name}
              </h3>

              <ul className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-check text-emerald-600 dark:text-emerald-400 mr-2"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-emerald-50 dark:bg-gray-800 p-6 rounded-lg border border-emerald-100 dark:border-gray-700 transition-colors duration-300">
          <h3 className="text-lg font-semibold mb-4 text-emerald-700 dark:text-emerald-400 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-lightbulb mr-2"
            >
              <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
              <path d="M9 18h6" />
              <path d="M10 22h4" />
            </svg>
            Additional Skills
          </h3>
          <div className="flex flex-wrap gap-2">
            {[
              "Problem Solving",
              "Team Collaboration",
              "UI/UX Design",
              "Responsive Design",
              "Git & GitHub",
              "WebSocket",
              "LocalStorage",
            ].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-white dark:bg-gray-700 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-gray-600 rounded-full text-sm transition-colors duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
