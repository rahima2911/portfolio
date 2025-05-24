"use client"

import { Eye } from "lucide-react"

const Certificates = () => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "jQuery",
    "Bootstrap",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "REST APIs",
    "MERN Stack",
  ]

  const openCertificateInNewTab = () => {
    window.open("/certificates/certificate.png", "_blank", "noopener,noreferrer")
  }

  return (
    <section className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white flex items-center justify-center py-16 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 w-full">
        <h1 className="text-4xl font-bold text-center mb-2">Certificates</h1>
        <div className="w-24 h-1 bg-teal-500 mx-auto mb-16"></div>

        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-8 shadow-lg border border-gray-200 dark:border-gray-700 transition-colors duration-300">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-1">Full Stack Web Developer</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-1">PNY Institute</p>
              <p className="text-gray-500 dark:text-gray-500 text-sm">6-month intensive program</p>
            </div>
            <button
              onClick={openCertificateInNewTab}
              className="mt-4 md:mt-0 flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white py-2 px-4 rounded-md transition-colors duration-300"
            >
              <Eye size={18} />
              View Certificate
            </button>
          </div>

          <div className="border-t border-gray-200 dark:border-gray-700 pt-6 mt-6">
            <h3 className="text-lg font-semibold mb-4">Skills Acquired:</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-white dark:bg-gray-900 text-teal-600 dark:text-teal-400 text-sm px-3 py-1 rounded-md border border-gray-200 dark:border-gray-700 transition-colors duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* For testing purposes - this link should work correctly */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-4">If the button doesn't work, try this direct link:</p>
          <a
            href="/certificates/certificate.png"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-600 dark:text-teal-400 underline hover:text-teal-700 dark:hover:text-teal-300 transition-colors duration-300"
          >
            Direct link to certificate
          </a>
        </div>
      </div>
    </section>
  )
}

export default Certificates
