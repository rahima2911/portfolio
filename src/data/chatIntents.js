import {
  profile,
  education,
  experience,
  projects,
  skills,
  certifications,
} from "./portfolioData";

const list = (arr) => arr.join(", ");

const projectByKeyword = (keyword) =>
  projects.find((p) => p.name.toLowerCase().includes(keyword));

export const intents = [
  {
    id: "greeting",
    patterns: ["hi", "hello", "hey", "good morning", "good evening", "salam", "assalam o alaikum"],
    suggestions: ["What are your skills?", "Tell me about your experience", "Show me your projects"],
    answer: () =>
      `Hi! I'm a small assistant built into ${profile.name}'s portfolio. Ask me about her skills, experience, projects, education, or how to get in touch.`,
  },
  {
    id: "about",
    patterns: [
      "who are you", "about you", "tell me about yourself", "introduce yourself",
      "what do you do", "background", "who is rahima",
    ],
    suggestions: ["What are your main skills?", "What's your education?", "Are you available for hire?"],
    answer: () => profile.about,
  },
  {
    id: "skills_overall",
    patterns: [
      "skills", "what skills", "tech stack", "technologies", "what can you do",
      "what do you know", "tools you use",
    ],
    suggestions: ["Frontend skills?", "AI and ML skills?", "Backend skills?"],
    answer: () =>
      `Here's a quick breakdown of what I work with:\n\n` +
      Object.entries(skills)
        .map(([category, items]) => `• ${category}: ${list(items)}`)
        .join("\n"),
  },
  {
    id: "skills_frontend",
    patterns: ["frontend", "front end", "react", "tailwind", "css", "html", "frontend skills", "ui skills"],
    suggestions: ["Backend skills?", "Show me a project", "AI and ML skills?"],
    answer: () => `Frontend: ${list(skills.Frontend)}.`,
  },
  {
    id: "skills_backend",
    patterns: ["backend", "back end", "node", "express", "api", "server side", "backend skills"],
    suggestions: ["Database skills?", "Show me a project", "What frameworks do you use?"],
    answer: () => `Backend: ${list(skills.Backend)}.`,
  },
  {
    id: "skills_database",
    patterns: ["database", "mongodb", "mysql", "postgresql", "sql", "data storage", "database skills"],
    suggestions: ["Backend skills?", "Tell me about a project that uses MongoDB"],
    answer: () => `Database: ${list(skills.Database)}.`,
  },
  {
    id: "skills_ai",
    patterns: [
      "ai", "machine learning", "ml", "deep learning", "nlp", "artificial intelligence",
      "neural network", "cnn", "rnn", "lstm", "model", "ai skills", "machine learning skills",
      "ml skills", "ai and ml skills",
    ],
    suggestions: ["Which AI frameworks do you use?", "Tell me about the Sentiment Analysis project", "Any AI certifications?"],
    answer: () =>
      `AI / ML: ${list(skills["AI / ML"])}.\n\nFrameworks & libraries: ${list(skills["AI Frameworks"])}.`,
  },
  {
    id: "skills_cloud",
    patterns: ["cloud", "azure", "huawei cloud", "deployment", "hosting", "cloud skills"],
    suggestions: ["Any certifications?", "AI and ML skills?"],
    answer: () => `Cloud: ${list(skills.Cloud)}.`,
  },
  {
    id: "skills_languages",
    patterns: ["languages", "programming languages", "javascript", "python", "c++", "language skills"],
    suggestions: ["Frontend skills?", "AI and ML skills?"],
    answer: () => `Languages: ${list(skills.Languages)}.`,
  },
  {
    id: "experience_overall",
    patterns: [
      "experience", "work experience", "internship", "internships", "where have you worked",
      "job history", "professional experience",
    ],
    suggestions: ["Tell me about Explorer Bees", "Tell me about Alphinex Solutions"],
    answer: () =>
      experience
        .map(
          (e) =>
            `${e.role} at ${e.company} (${e.period}, ${e.location})\n` +
            e.points.map((p) => `  • ${p}`).join("\n")
        )
        .join("\n\n"),
  },
  {
    id: "experience_explorer_bees",
    patterns: ["explorer bees", "react native internship", "weather app", "foodpanda clone", "cricket live score"],
    suggestions: ["Tell me about Alphinex Solutions", "What did you build there?"],
    answer: () => {
      const e = experience.find((x) => x.company === "Explorer Bees");
      return `${e.role} at ${e.company} — ${e.period} (${e.location})\n` + e.points.map((p) => `• ${p}`).join("\n");
    },
  },
  {
    id: "experience_alphinex",
    patterns: ["alphinex", "alphinex solutions", "next.js internship", "daraz clone", "amazon clone", "smart stock management"],
    suggestions: ["Tell me about Explorer Bees", "What did you build there?"],
    answer: () => {
      const e = experience.find((x) => x.company === "Alphinex Solutions");
      return `${e.role} at ${e.company} — ${e.period} (${e.location})\n` + e.points.map((p) => `• ${p}`).join("\n");
    },
  },
  {
    id: "projects_overall",
    patterns: [
      "projects", "what have you built", "show me your work", "portfolio projects",
      "show projects", "what did you build",
    ],
    suggestions: ["Tell me about the Sentiment Analysis App", "Tell me about Community Connect"],
    answer: () =>
      `Here are my projects:\n` +
      projects.map((p) => `• ${p.name} (${p.period}) — ${list(p.stack)}`).join("\n"),
  },
  {
    id: "project_sentiment",
    patterns: ["sentiment analysis", "sentiment app", "text classification project", "nltk project"],
    suggestions: ["Tell me about the Student Performance Predictor", "What AI frameworks do you use?"],
    answer: () => {
      const p = projectByKeyword("sentiment");
      return `${p.name} (${p.period}) — built with ${list(p.stack)}\n` + p.points.map((x) => `• ${x}`).join("\n");
    },
  },
  {
    id: "project_student_predictor",
    patterns: ["student performance", "exam score predictor", "grade predictor", "rmse", "random forest project"],
    suggestions: ["Tell me about the Sentiment Analysis App", "Show me all projects"],
    answer: () => {
      const p = projectByKeyword("student performance");
      return `${p.name} (${p.period}) — built with ${list(p.stack)}\n` + p.points.map((x) => `• ${x}`).join("\n");
    },
  },
  {
    id: "project_community_connect",
    patterns: ["community connect", "social platform", "websocket chat project"],
    suggestions: ["Tell me about Skill Swap", "Show me all projects"],
    answer: () => {
      const p = projectByKeyword("community connect");
      return `${p.name} (${p.period}) — built with ${list(p.stack)}\n` + p.points.map((x) => `• ${x}`).join("\n");
    },
  },
  {
    id: "project_skill_swap",
    patterns: ["skill swap", "skill exchange", "booking platform"],
    suggestions: ["Tell me about Community Connect", "Show me all projects"],
    answer: () => {
      const p = projectByKeyword("skill swap");
      return `${p.name} (${p.period}) — built with ${list(p.stack)}\n` + p.points.map((x) => `• ${x}`).join("\n");
    },
  },
  {
    id: "project_movie_booking",
    patterns: ["movie ticket", "cinema booking", "movie booking system", "mysql project"],
    suggestions: ["Show me all projects", "What database skills do you have?"],
    answer: () => {
      const p = projectByKeyword("movie ticket");
      return `${p.name} (${p.period}) — built with ${list(p.stack)}\n` + p.points.map((x) => `• ${x}`).join("\n");
    },
  },
  {
    id: "project_drawing_app",
    patterns: ["drawing app", "canvas app", "multiplayer drawing", "chat app project", "real-time drawing"],
    suggestions: ["Show me all projects", "What frontend skills do you have?"],
    answer: () => {
      const p = projectByKeyword("drawing");
      return `${p.name} (${p.period}) — built with ${list(p.stack)}\n` + p.points.map((x) => `• ${x}`).join("\n");
    },
  },
  {
    id: "education",
    patterns: ["education", "degree", "university", "study", "studied", "gpa", "college", "school", "education background", "academic background", "educational background"],
    suggestions: ["Any certifications?", "Tell me about your AI course"],
    answer: () =>
      education.map((e) => `${e.degree} — ${e.school}${e.detail ? `, ${e.detail}` : ""} (${e.period})`).join("\n"),
  },
  {
    id: "certifications",
    patterns: [
      "certifications", "certificates", "certificate", "certified", "navttc", "huawei",
      "hunarmand", "course completed", "pny institute", "see certificate", "view certificate",
      "certificate proof",
    ],
    suggestions: ["Tell me about your AI/ML skills", "What's your education?"],
    answer: () =>
      certifications.map((c) => `• ${c.title} — ${c.issuer} (${c.period})`).join("\n"),
  },
  {
    id: "resume",
    patterns: [
      "resume", "cv", "download resume", "download cv", "your resume", "your cv",
      "do you have a resume", "where is your resume", "send me your resume",
    ],
    suggestions: ["How can I contact you?", "Tell me about your experience"],
    answer: () =>
      `You can download my résumé using the "Download résumé" button near the top of the page. If that doesn't work for you, just email me at ${profile.email} and I'll send it over.`,
  },
  {
    id: "contact",
    patterns: [
      "contact", "email", "phone", "reach you", "get in touch", "hire you",
      "linkedin", "github", "number", "connect",
    ],
    suggestions: ["Are you available for hire?", "Where are you based?"],
    answer: () =>
      `You can reach me at:\n• Email: ${profile.email}\n• Phone: ${profile.phone}\n• GitHub: ${profile.github}\n• Location: ${profile.location}`,
  },
  {
    id: "availability",
    patterns: ["available", "hire", "looking for work", "open to work", "freelance", "internship available", "job"],
    suggestions: ["How do I contact you?", "What are your main skills?"],
    answer: () =>
      `I'm looking for the right opportunity to keep building and learning — internship or full-time, whichever's the right fit. Feel free to reach out at ${profile.email}.`,
  },
  {
    id: "location",
    patterns: ["where are you based", "where do you live", "location", "based in", "city"],
    suggestions: ["How do I contact you?", "Are you available for hire?"],
    answer: () => `I'm based in ${profile.location}.`,
  },
  {
    id: "thanks",
    patterns: ["thanks", "thank you", "appreciate it", "great", "cool", "nice", "good job"],
    suggestions: ["Show me your projects", "How do I contact you?"],
    answer: () => "You're welcome! Anything else you'd like to know?",
  },
];
