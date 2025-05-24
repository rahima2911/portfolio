"use client"

import { useState, useEffect } from "react"

const Home = () => {
  const [displayText, setDisplayText] = useState("")
  const fullText = "Full Stack Web Developer"
  const [isTypingComplete, setIsTypingComplete] = useState(false)

  useEffect(() => {
    if (displayText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, displayText.length + 1))
      }, 100)

      return () => clearTimeout(timeout)
    } else {
      setIsTypingComplete(true)
    }
  }, [displayText, fullText])

  const handleDownloadResume = () => {
    // Create a link element
    const link = document.createElement("a")
    link.href = "/resume.pdf" // Path to your resume PDF
    link.download = "Rahima_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop - 80,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 px-4 transition-colors duration-300">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-800 dark:text-gray-100 animate-fadeIn">Rahima</h1>

        <div className="h-8 md:h-12 mb-10">
          <h2 className="text-xl md:text-3xl text-emerald-600 dark:text-emerald-400 font-medium inline-block">
            {displayText}
            {!isTypingComplete && <span className="animate-pulse">|</span>}
          </h2>
        </div>

        {/* Buttons with normal size but still visible */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          {/* Download Resume Button */}
          <a
            href="/Rahima_CV.pdf"
            download="Rahima_CV.pdf"
            className="inline-block px-6 py-2.5 text-base font-medium bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg shadow-[0_0_10px_rgba(16,185,129,0.4)] hover:shadow-[0_0_15px_rgba(16,185,129,0.6)] transition-all duration-300 border border-emerald-400 dark:border-emerald-300 transform hover:-translate-y-1"
          >
            <div className="flex items-center justify-center gap-2">
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
                className="lucide lucide-download"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" x2="12" y1="15" y2="3" />
              </svg>
              Download CV
            </div>
          </a>

          {/* Contact Me Button */}
          <button
            onClick={scrollToContact}
            className="inline-block px-6 py-2.5 text-base font-medium bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-[0_0_10px_rgba(59,130,246,0.4)] hover:shadow-[0_0_15px_rgba(59,130,246,0.6)] transition-all duration-300 border border-blue-400 dark:border-blue-300 transform hover:-translate-y-1"
          >
            <div className="flex items-center justify-center gap-2">
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
                className="lucide lucide-mail"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              Contact Me
            </div>
          </button>
        </div>

        {/* Description moved below the buttons */}
        <p
          className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto animate-fadeIn opacity-0"
          style={{ animationDelay: "1.2s", animationFillMode: "forwards" }}
        >
          Passionate about creating elegant, user-friendly web applications that solve real-world problems
        </p>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
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
            className="lucide lucide-chevrons-down text-emerald-600 dark:text-emerald-400"
          >
            <path d="m7 6 5 5 5-5" />
            <path d="m7 13 5 5 5-5" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default Home
