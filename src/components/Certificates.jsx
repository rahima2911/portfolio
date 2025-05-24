"use client"

import { useState, useEffect } from "react"

const Certificates = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleViewCertificate = () => {
    setIsModalOpen(true)
    // Prevent body scroll when modal is open
    document.body.style.overflow = "hidden"
  }

  const closeModal = () => {
    setIsModalOpen(false)
    // Restore body scroll
    document.body.style.overflow = "unset"
  }

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        closeModal()
      }
    }

    if (isModalOpen) {
      document.addEventListener("keydown", handleEscape)
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset"
    }
  }, [isModalOpen])

  const certificationDetails = [
    { label: "Institution", value: "PNY Trainings", icon: "🏢" },
    { label: "Program", value: "Certified Full Stack Web Developer", icon: "💻" },
    { label: "Duration", value: "6 Months", icon: "⏱️" },
    { label: "Completion Date", value: "December 21, 2024", icon: "📅" },
    { label: "Certificate ID", value: "FSW-15-12-4500", icon: "🆔" },
    { label: "Registration", value: "14500", icon: "📋" },
  ]

  const technicalSkills = [
    { skill: "Frontend Development", technologies: ["HTML5", "CSS3", "JavaScript", "React.js", "Bootstrap"] },
    { skill: "Backend Development", technologies: ["Node.js", "Express.js", "PHP Laravel"] },
    { skill: "Database Management", technologies: ["MongoDB", "MySQL", "Database Design"] },
    { skill: "Full Stack Frameworks", technologies: ["MEAN Stack", "MERN Stack"] },
  ]

  return (
    <>
      <div className="py-20 px-4 md:px-8 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
        <div className="container mx-auto max-w-4xl">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white"
              >
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
              </svg>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-4">
              Professional Certifications
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Validated expertise and continuous learning in modern web development technologies
            </p>
          </div>

          {/* Main Certificate Card - Single Column */}
          <div className="mb-16">
            <div className="group relative overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-8 transition-all duration-500 hover:shadow-3xl max-w-2xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-lg">PNY</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">PNY Trainings</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Certified Institution</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-green-600 dark:text-green-400">Verified</span>
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">Full Stack Web Developer</h4>
                  <p className="text-gray-600 dark:text-gray-400">Certificate of Appreciation</p>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  {certificationDetails.map((detail, index) => (
                    <div key={index} className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-3">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="text-lg">{detail.icon}</span>
                        <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                          {detail.label}
                        </span>
                      </div>
                      <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">{detail.value}</p>
                    </div>
                  ))}
                </div>

                <div className="flex justify-center">
                  <button
                    onClick={handleViewCertificate}
                    className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-4 rounded-lg font-medium hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                  >
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
                    >
                      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                    <span>View Certificate</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Skills Section */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">Technical Competencies</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Skills and technologies mastered during the certification program
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {technicalSkills.map((category, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 rounded-xl p-6"
                >
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4 flex items-center">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                    {category.skill}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {category.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-white dark:bg-gray-600 text-emerald-700 dark:text-emerald-400 rounded-full text-sm font-medium border border-emerald-200 dark:border-emerald-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievement Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "6", label: "Months Training", icon: "📚" },
              { number: "15+", label: "Technologies", icon: "⚡" },
              { number: "100%", label: "Completion Rate", icon: "🎯" },
              { number: "A+", label: "Grade Achieved", icon: "🏆" },
            ].map((stat, index) => (
              <div key={index} className="text-center bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-1">{stat.number}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Certificate Modal - Improved Design */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-90"
          onClick={closeModal}
        >
          <div
            className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl w-full max-w-7xl h-[90vh] flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header - Fixed */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 flex-shrink-0">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">PNY</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                    Full Stack Web Developer Certificate
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    PNY Trainings • Certificate ID: FSW-15-12-4500
                  </p>
                </div>
              </div>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                aria-label="Close modal"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gray-500 dark:text-gray-400"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Content - Certificate Image - Scrollable */}
            <div className="flex-1 p-6 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 overflow-auto">
              <div className="flex justify-center items-center min-h-full">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-2xl">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-D5fr3IkqasLYozk75VoEfixN0oOrtW.png"
                    alt="PNY Trainings Full Stack Web Developer Certificate - Rahima"
                    className="max-w-full h-auto rounded-lg shadow-lg"
                    style={{
                      maxHeight: "calc(90vh - 200px)",
                      width: "auto",
                    }}
                    crossOrigin="anonymous"
                  />
                </div>
              </div>
            </div>

            {/* Modal Footer - Fixed */}
            <div className="flex items-center justify-between p-6 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 flex-shrink-0">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-green-600 dark:text-green-400">Certificate Verified ✓</span>
              </div>
              <div className="flex space-x-3">
                <button
                  onClick={() => {
                    const link = document.createElement("a")
                    link.href =
                      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-D5fr3IkqasLYozk75VoEfixN0oOrtW.png"
                    link.download = "Rahima_PNY_Certificate.png"
                    link.click()
                  }}
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors flex items-center space-x-2 shadow-lg hover:shadow-xl"
                >
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
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" x2="12" y1="15" y2="3" />
                  </svg>
                  <span>Download</span>
                </button>
                <button
                  onClick={() => window.print()}
                  className="px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors flex items-center space-x-2 shadow-lg hover:shadow-xl"
                >
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
                  >
                    <polyline points="6 9 6 2 18 2 18 9" />
                    <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                    <rect width="12" height="8" x="6" y="14" />
                  </svg>
                  <span>Print</span>
                </button>
                <button
                  onClick={closeModal}
                  className="px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors shadow-lg hover:shadow-xl font-medium"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Certificates
