import { GraduationCap, User } from "lucide-react"

const About = () => {
  return (
    <section className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white py-16 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h1 className="text-4xl font-bold text-center mb-2">About Me</h1>
        <div className="w-24 h-1 bg-teal-500 mx-auto mb-16"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column - Education */}
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-8 shadow-md border border-gray-200 dark:border-gray-700 transition-colors duration-300">
            <div className="flex items-center mb-6">
              <GraduationCap className="text-teal-600 dark:text-teal-400 mr-3" size={24} />
              <h2 className="text-xl font-semibold text-teal-600 dark:text-teal-400">Education</h2>
            </div>

            <div className="space-y-8">
              <div className="relative pl-8 border-l-2 border-teal-500 dark:border-teal-400">
                <div className="absolute w-4 h-4 bg-teal-500 dark:bg-teal-400 rounded-full -left-[9px] top-0"></div>
                <div className="mb-1">
                  <h3 className="text-lg font-semibold">BSCS (4th Semester)</h3>
                  <p className="text-gray-600 dark:text-gray-400">Hamdard University Islamabad</p>
                  <p className="text-gray-500 dark:text-gray-500 text-sm">Oct 2023 - Present</p>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mt-2">
                  Currently pursuing a Bachelor's degree in Computer Science, focusing on software development,
                  algorithms, and data structures.
                </p>
              </div>

              <div className="relative pl-8 border-l-2 border-teal-500 dark:border-teal-400">
                <div className="absolute w-4 h-4 bg-teal-500 dark:bg-teal-400 rounded-full -left-[9px] top-0"></div>
                <div className="mb-1">
                  <h3 className="text-lg font-semibold">Intermediate in Computer Science</h3>
                  <p className="text-gray-600 dark:text-gray-400">Pearl Chanab College Islamabad</p>
                  <p className="text-gray-500 dark:text-gray-500 text-sm">2020 - 2022</p>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mt-2">
                  Completed ICS with a focus on mathematics, physics, and computer science fundamentals.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Personal Info */}
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-8 shadow-md border border-gray-200 dark:border-gray-700 transition-colors duration-300">
            <div className="flex items-center mb-6">
              <User className="text-teal-600 dark:text-teal-400 mr-3" size={24} />
              <h2 className="text-xl font-semibold text-teal-600 dark:text-teal-400">Personal Info</h2>
            </div>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              I am passionate about coding, building websites, and learning new things. My journey in web development
              has been driven by curiosity and a desire to create meaningful digital experiences. I enjoy solving
              complex problems and turning ideas into functional, beautiful websites.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Alongside development, I am deeply interested in diving further into the core areas of computer science. I
              believe that understanding the theory behind the technology—like data structures, algorithms, operating
              systems, and computer networks—will help me become a more efficient and innovative developer.
            </p>

            <p className="text-gray-700 dark:text-gray-300">
              I'm committed to continuous learning and always eager to explore new technologies, tools, and concepts.
              Whether it's backend systems, advanced JavaScript, frameworks like React or Next.js, or foundational CS
              concepts, I love pushing my boundaries and growing every day as a computer science student.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
