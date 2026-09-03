export const portfolioData = {
  personalInfo: {
    name: "Vishal Dharsan P S",
    role: "Computer Science Engineering Student & Software Developer",
    subtitle: "Computer Science Student & Software Developer",
    bio: "Pre-final-year CSE student at Sri Krishna College of Engineering and Technology, with hands-on experience in full-stack development using Java and Spring Boot, along with internships spanning frontend and full-stack roles.",
    profileImg: "/profile.jpg",
    resumeUrl: "/resume.pdf",
  },
  socialLinks: {
    github: "https://github.com/Vishal-0639",
    linkedin: "https://www.linkedin.com/in/vishal-dharsan-p-s",
    leetcode: "https://leetcode.com/u/Vizz76/",
    instagram: "https://www.instagram.com/_vishal76_/",
    email: "vishaldhar1106@gmail.com",
  },
  aboutMe: {
    description: [
      "I am a pre-final-year Computer Science Engineering student at Sri Krishna College of Engineering and Technology, with hands-on experience in full-stack development using Java and Spring Boot.",
      "I have completed internships spanning frontend and full-stack roles where I built responsive web components and integrated API controllers.",
      "Motivated by clean, well-structured code, solid data structures, and continuous learning, I enjoy designing backend architectures and solving algorithmic challenges."
    ],
    stats: {
      university: "Sri Krishna College of Engineering and Technology",
      degree: "B.E. Computer Science and Engineering",
      year: "3rd Year",
      cgpa: "8.1"
    }
  },
  skills: [
    {
      category: "Languages",
      items: [
        { name: "Java", icon: "Code2" },
        { name: "C++", icon: "Code" },
        { name: "JavaScript", icon: "FileJson" }
      ]
    },
    {
      category: "Backend",
      items: [
        { name: "Spring Boot", icon: "Cpu" },
        { name: "REST APIs", icon: "Layers" }
      ]
    },
    {
      category: "Frontend",
      items: [
        { name: "HTML", icon: "Globe" },
        { name: "CSS", icon: "Palette" },
        { name: "JavaScript", icon: "FileJson" },
        { name: "UI & UX", icon: "Smartphone" }
      ]
    },
    {
      category: "Database",
      items: [
        { name: "MySQL", icon: "Database" },
        { name: "MongoDB (Basics)", icon: "Database" }
      ]
    },
    {
      category: "Tools & Platforms",
      items: [
        { name: "IntelliJ IDEA", icon: "Play" },
        { name: "Git", icon: "GitBranch" },
        { name: "Postman", icon: "Send" },
        { name: "Swagger", icon: "FileText" }
      ]
    }
  ],
  education: [
    {
      institution: "Sri Krishna College of Engineering and Technology",
      degree: "Bachelor of Engineering — Computer Science and Engineering",
      period: "2024 – 2028",
      status: "Pre-final Year",
      details: "CGPA: 8.1 / 10"
    },
    {
      institution: "Keins Matriculation Hr. Sec. School",
      degree: "Schooling: Pre-KG – XII | 12th Grade",
      period: "2009 – 2024",
      status: "Completed",
      details: "Score: 85.16%"
    }
  ],
  experience: [
    {
      role: "Project Intern Trainee, Full Stack Development",
      company: "KNITE INFOTECH",
      period: "June – July 2026",
      details: "Contributed to a full-stack web application, working across both backend and frontend components as part of a small development team. Gained hands-on exposure to REST API development, database integration, and collaborative software development practices. Used Git for version control while contributing incremental improvements to the codebase."
    },
    {
      role: "Frontend Development Intern",
      company: "CubeNSolutions",
      period: "May – June 2026",
      details: "Built responsive UI components using JavaScript, HTML, and CSS for ongoing frontend projects. Focused on clean, semantic markup and consistent styling for a smooth cross-device experience. Recognized for strong teamwork and a proactive approach to problem-solving throughout the internship."
    }
  ],
  projects: [
    {
      id: "health-coach",
      title: "Health Coach Application System",
      description: "A backend-focused application for managing users, health coaches, applications and related workflows, secured with JWT.",
      technologies: ["Java", "Spring Boot", "REST APIs", "JWT", "MySQL"],
      image: "/projects/health_coach.jpg",
      github: "https://github.com/Vishal-0639/Health-Coach-Application-System",
      demo: "",
      details: "Backend system automating onboarding, evaluation, and notification workflows across User, Application, Document, and Review modules."
    },
    {
      id: "home-medicine-recommender",
      title: "Home Medicine Recommender System",
      description: "A rule-based, data-driven system recommending home medicines from user symptoms via an NLP analysis pipeline.",
      technologies: ["Python", "Machine Learning", "NLP", "Dataset Processing"],
      image: "/projects/homemed.jpg",
      github: "https://github.com/Vishal-0639",
      demo: "",
      details: "Parses user symptoms and queries an NLP-driven recommender database to suggest safe, common home remedies and dosages."
    }
  ],
  dsa: {
    topics: [
      "Arrays",
      "HashMap",
      "Sliding Window",
      "Two Pointers",
      "Sorting",
      "Binary Search",
      "Recursion",
      "Dynamic Programming"
    ]
  },
  certifications: [
    {
      title: "Cloud Computing Fundamentals",
      issuer: "Infosys Springboard",
      date: "Jul 2026",
      url: "https://verify.onwingspan.com"
    },
    {
      title: "AWS Networking Basics",
      issuer: "AWS Training & Certification",
      date: "Jul 2026",
      url: ""
    },
    {
      title: "Database Structures and Management with MySQL",
      issuer: "Meta (via Coursera)",
      date: "Apr 2025",
      url: "https://coursera.org/verify/5U220UQOTJLK"
    },
    {
      title: "Data Structures and Algorithms",
      issuer: "Infosys Springboard",
      date: "Feb 2025",
      url: "https://verify.onwingspan.com"
    },
    {
      title: "Web Development Fundamentals",
      issuer: "IBM SkillsBuild",
      date: "Aug 2026",
      url: ""
    },
    {
      title: "Oracle Java Foundations",
      issuer: "Oracle",
      date: "Aug 2026",
      url: ""
    },
    {
      title: "Certificate of Excellence in Scaler SQL for Beginners",
      issuer: "Scaler",
      date: "Aug 2026",
      url: ""
    },
    {
      title: "Introduction to Machine Learning",
      issuer: "NPTEL",
      date: "Apr 2026",
      url: ""
    },
    {
      title: "Python for Data Science",
      issuer: "NPTEL",
      date: "Aug 2025",
      url: ""
    }
  ],
  achievements: [],
  contact: {
    email: "vishaldhar1106@gmail.com",
    emailjsServiceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "",
    emailjsTemplateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "",
    emailjsPublicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "",
    linkedin: "https://www.linkedin.com/in/vishal-dharsan-p-s",
    github: "https://github.com/Vishal-0639",
    location: "Tamil Nadu, India"
  }
};
export default portfolioData;
