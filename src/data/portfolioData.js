// Edit this file to update the site — every section and the chatbot read from here.
// Content is written in portfolio voice (shorter, paraphrased) rather than copied
// straight from the CV, so the site adds something a resume alone doesn't.

export const profile = {
  name: "Rahima",
  role: "Full-Stack Developer · AI/ML Enthusiast",
  tagline:
    "Full-stack developer working in the MERN stack, with hands-on experience applying machine learning and NLP to real projects.",
  location: "Islamabad, Pakistan",
  email: "rahimasarwar29@gmail.com",
  phone: "+92 318 5604221",
  github: "https://github.com/rahima2911",
  portfolioUrl: "https://rahima2911.github.io/portfolio",
  about:
    "I'm a Computer Science student who likes seeing ideas turn into things people can actually use. Most of my work sits in the MERN stack — React, Node, Express, MongoDB — across full-stack apps and a few UI clones built just to understand how the originals tick. More recently I picked up Machine Learning, Deep Learning, and NLP through a government-certified AI program, and I've started folding that into my projects too.",
  resumeFile: "resume.pdf",
};

export const education = [
  {
    degree: "BS Computer Science",
    school: "Hamdard University",
    detail: "GPA: 3.62 / 4.0",
    period: "Oct 2023 – Present",
  },
  {
    degree: "Intermediate in Computer Science (ICS)",
    school: "Pearl Chanab College, Islamabad",
    detail: "",
    period: "2020 – 2022",
  },
  {
    degree: "Matriculation in Computer Science (SSC)",
    school: "Islamabad Model College for Girls",
    detail: "",
    period: "2018 – 2020",
  },
];

export const experience = [
  {
    company: "Explorer Bees",
    role: "React Native Developer Intern",
    location: "Hybrid",
    period: "July 2025 – Oct 2025",
    points: [
      "Built and shipped three cross-platform apps — a weather app, a FoodPanda-style delivery clone, and a live cricket score tracker — using React Native, Node.js, and MongoDB",
      "Designed and wired up the REST APIs behind them, keeping data flow smooth between the apps and backend",
      "Worked with a small cross-functional team to keep the UI consistent and fast across Android and iOS",
    ],
  },
  {
    company: "Alphinex Solutions",
    role: "React.js Developer Intern",
    location: "On-site",
    period: "July 2025 – Oct 2025",
    points: [
      "Built reusable frontend components for Next.js and React apps backed by Node.js services",
      "Contributed to e-commerce-style projects — a stock management system, and clones of Daraz and Amazon — to practice real-world product patterns",
      "Picked up deployment and hosting workflows by supporting the team through production releases",
    ],
  },
];

export const projects = [
  {
    name: "Sentiment Analysis Web App",
    period: "May 2026",
    stack: ["React.js", "Flask", "Scikit-Learn", "NLTK", "Python"],
    points: [
      "Classifies text as positive, negative, or neutral in real time, using a TF-IDF + Scikit-Learn model trained on labeled reviews (85%+ accuracy)",
      "React dashboard shows the score, confidence level, and a history of past analyses",
      "Flask API serves predictions to the frontend with Express-style routing",
    ],
  },
  {
    name: "Student Performance Predictor",
    period: "April 2026",
    stack: ["Python", "Scikit-Learn", "React.js", "Flask", "MongoDB"],
    points: [
      "Predicts exam scores from study habits, attendance, and past grades",
      "Compared Linear Regression, Decision Tree, and Random Forest, then picked the best model by RMSE and R²",
      "React frontend with a Recharts results panel; Flask API connected to MongoDB for storing records",
    ],
  },
  {
    name: "Community Connect",
    period: "Jan 2025 – Mar 2025",
    stack: ["React", "Node.js", "Express.js", "MongoDB", "WebSockets"],
    points: [
      "A social platform with authentication, group management, and live chat",
      "Posts, comments, and messages update in real time over WebSockets",
    ],
  },
  {
    name: "Skill Swap",
    period: "Oct 2024 – Dec 2024",
    stack: ["React", "Node.js", "Express.js", "MongoDB"],
    points: [
      "Lets users list skills they offer or want, then book sessions to trade them",
      "Includes reviews and secure payments end to end",
    ],
  },
  {
    name: "Movie Ticket Booking System",
    period: "April 2025",
    stack: ["Python", "MySQL"],
    points: [
      "A command-line booking app for managing movies, shows, and reservations",
      "Backed by a 5-entity relational schema with proper joins and grouped queries",
    ],
  },
  {
    name: "Real-Time Multiplayer Drawing & Chat App",
    period: "Nov 2023",
    stack: ["HTML5 Canvas", "JavaScript", "WebSockets"],
    points: [
      "A shared Canvas drawing board with undo/redo, brush controls, and full touch support",
      "Built-in chat with typing indicators, emoji, and a saved dark mode preference",
    ],
  },
];

export const skills = {
  Languages: ["JavaScript", "C++ / C", "Python", "SQL"],
  Frontend: ["HTML5", "CSS3", "Bootstrap 5", "Tailwind CSS", "React.js"],
  Backend: ["Node.js", "Express.js", "Next.js", "RESTful APIs"],
  Database: ["MongoDB", "MySQL", "PostgreSQL"],
  "AI / ML": [
    "Linear & Logistic Regression",
    "SVM",
    "Decision Trees",
    "Random Forest",
    "Neural Networks",
    "CNNs",
    "RNNs",
    "LSTMs",
    "GRUs",
    "NLP (Text Classification, POS Tagging, NER, Word Embeddings)",
  ],
  "AI Frameworks": ["TensorFlow", "PyTorch", "Keras", "Scikit-Learn", "Pandas", "NumPy"],
  Cloud: ["Microsoft Azure AI Services", "Huawei Cloud"],
};

// `file` is the image you add yourself — see README.md for exact file names.
export const certifications = [
  {
    title: "AI – Machine Learning & Deep Learning",
    issuer: "NAVTTC · Prime Minister's Hunarmand Pakistan Program",
    detail:
      "3-month government-certified program covering ML, Deep Learning (CNNs, RNNs, LSTMs, GRUs), and NLP, with hands-on work in TensorFlow, PyTorch, Keras, and Azure AI.",
    period: "Feb 2026 – May 2026",
    file: "certificates/navttc-ai-ml-dl.jpg",
  },
  {
    title: "Huawei Cloud Developer Certification",
    issuer: "Huawei",
    detail: "Certified in cloud development technologies and solutions.",
    period: "Valid until Mar 2029",
    file: "certificates/huawei-cloud.jpg",
  },
  {
    title: "Full Stack Web Developer Certification",
    issuer: "PNY Institute, Rawalpindi",
    detail:
      "6-month course covering the MERN stack plus Angular and jQuery — front end to back end.",
    period: "Jun 2024 – Dec 2024",
    file: "certificates/pny-fullstack.jpg",
  },
  {
    title: "React Native Developer Internship",
    issuer: "Explorer Bees",
    detail: "Internship completion certificate.",
    period: "July 2025 – Oct 2025",
    file: "certificates/explorer-bees-internship.jpg",
  },
  {
    title: "React.js Developer Internship",
    issuer: "Alphinex Solutions",
    detail: "Internship completion certificate.",
    period: "July 2025 – Oct 2025",
    file: "certificates/alphinex-internship.jpg",
  },
];
