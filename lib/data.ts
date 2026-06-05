export const personal = {
  name: "Muneer Abass",
  title: "React Native Developer",
  badge: "Mobile Developer",
  tagline: "Building mobile experiences that people actually enjoy using.",
  location: "Pune, India",
  email: "muneer.abbas9595@gmail.com",
  phone: "+91 8825045094",
  github: "https://github.com/Muneerabbas",
  linkedin: "https://www.linkedin.com/in/muneer-abass-67a095285/",
  whatsapp: "https://wa.me/918825045094",
  resume: "/assets/resume/MuneerAbass_Resume.pdf",
  profileImage:
    "https://res.cloudinary.com/divexu9ll/image/upload/f_auto,q_auto/WhatsApp_Image_2026-05-26_at_15.55.08_ghfhmp",
  summary:
    "Computer Engineering student at PICT with hands-on experience in full-stack React Native mobile development. Hackathon winner with a track record of shipping real-world applications. Currently working as a Mobile App Developer at Pianalytix, building AI-powered mobile products used in production.",
  about: [
    "I'm a 2nd year Computer Engineering student at Pune Institute of Computer Technology (PICT) with a 9.0 CGPA, passionate about building mobile applications that solve real problems. My journey in software development started with curiosity and has evolved into a focused pursuit of creating scalable, user-friendly mobile experiences.",
    "Currently working as a Mobile App Developer at Pianalytix, I specialize in React Native development with expertise in AI integration, cross-platform mobile apps, and modern development practices. I've published apps on both the App Store and Play Store, and won multiple hackathons including Pulzion and TechRush.",
  ],
};

export const stats = [
  { value: "2+", label: "Years Learning" },
  { value: "3", label: "Apps Published" },
  { value: "6+", label: "Projects Built" },
  { value: "2", label: "Internships" },
];

export const interests = [
  {
    title: "Mobile Development",
    description:
      "Building cross-platform apps with React Native and Expo that deliver native performance.",
    icon: "smartphone",
  },
  {
    title: "AI Integration",
    description:
      "Integrating AI capabilities like speech-to-text, image generation, and intelligent processing into mobile apps.",
    icon: "brain",
  },
  {
    title: "Full Stack Development",
    description:
      "Creating end-to-end solutions with React, Next.js, Node.js, and modern cloud infrastructure.",
    icon: "layers",
  },
  {
    title: "DevOps",
    description:
      "Deploying and managing apps with AWS, Docker, CI/CD pipelines, and cloud infrastructure for reliable production systems.",
    icon: "server",
  },
];

export const experience = [
  {
    company: "Pianalytix",
    role: "Mobile App Developer",
    period: "Feb 2026 – Present",
    type: "Remote",
    bullets: [
      "Developed an AI-powered voice notes app using React Native and Supabase, with Deepgram speech-to-text and OpenRouter AI processing.",
      "Integrated Sentry for error monitoring and PostHog for performance tracking.",
      "Published VoicenotesLab on the App Store.",
    ],
  },
  {
    company: "Scizers",
    role: "React Native Intern",
    period: "Aug 2025 – Feb 2026",
    type: "Remote",
    bullets: [
      "Developed cross-platform mobile applications using React Native with high code reusability between iOS and Android.",
      "Built modular UI components and converted Figma designs into responsive mobile interfaces.",
      "Integrated REST APIs using Axios to fetch and display data efficiently.",
    ],
  },
];

export const projects = [
  {
    name: "VoicenotesLab",
    description:
      "AI-powered voice notes mobile app with speech-to-text and intelligent processing. Published on the App Store.",
    tech: ["React Native", "Supabase", "Deepgram", "OpenRouter", "Sentry"],
    features: [
      "Speech-to-text transcription",
      "AI-powered processing",
      "App Store published",
      "Error monitoring",
    ],
    live: null,
    github: null,
    category: "Main Project" as const,
    tag: "App Store",
    appStore: "https://apps.apple.com/in/app/voice-notes-lab-ai-notes/id6760574132",
    playStore: null,
    screenshots: [
      "/assets/projects/voicenoteslab/homescreen.png",
      "/assets/projects/voicenoteslab/aichat2.png",
      "/assets/projects/voicenoteslab/aisummary.png",
    ],
  },
  {
    name: "TheInterviewRoom.in",
    description:
      "High-traffic interview prep platform reaching 5K+ monthly visitors and 15K+ monthly views, with AI-powered content generation.",
    tech: ["Next.js", "Gemini AI", "Groq", "Vercel"],
    features: [
      "5K+ monthly visitors",
      "15K+ monthly views",
      "Gemini AI integration",
      "Groq integration",
      "Deployed on Vercel",
    ],
    live: "https://theinterviewroom.in",
    github: null,
    category: "Mini Project" as const,
    tag: "Live · 5K+ visitors/mo",
    appStore: null,
    playStore: null,
    screenshots: [
      "/assets/projects/theinterviewroom/landing.png",
      "/assets/projects/theinterviewroom/experience.png",
      "/assets/projects/theinterviewroom/postform.png",
    ],
  },
  {
    name: "AI Product Photo App",
    description:
      "AI-powered product photography mobile app that generates professional studio-quality product images. Published on the App Store.",
    tech: ["React Native", "Deepgram", "Fal.ai"],
    features: [
      "AI product photography",
      "Studio-quality output",
      "App Store published",
      "Mobile-first experience",
    ],
    live: null,
    github: null,
    category: "Main Project" as const,
    tag: "App Store",
    appStore: "https://apps.apple.com/us/app/ai-product-photography-studio/id6759070694",
    playStore: null,
    screenshots: [
      "/assets/projects/productphotoapp/home.png",
      "/assets/projects/productphotoapp/aistudio.png",
      "/assets/projects/productphotoapp/ecommerce.png",
    ],
  },
  {
    name: "RealEdge AI",
    description:
      "AI-powered real estate mobile app published on the Play Store. Modern mobile architecture with intelligent features for the real estate market.",
    tech: ["React Native", "REST API Integrations"],
    features: [
      "Play Store published",
      "AI-powered insights",
      "Modern mobile architecture",
      "Real estate focused",
    ],
    live: null,
    github: null,
    category: "Main Project" as const,
    tag: "App Store · Play Store",
    appStore: "https://apps.apple.com/in/app/realedge-ai/id6450746244",
    playStore: "https://play.google.com/store/apps/details?id=com.realedgetech.app&hl=en",
    screenshots: [
      "/assets/projects/realedgeai/unnamed.png",
      "/assets/projects/realedgeai/unnamed-2.png",
      "/assets/projects/realedgeai/unnamed-3.png",
    ],
  },
];

export const skills = {
  "Mobile Development": ["React Native", "Expo", "React Navigation"],
  Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript"],
  Backend: ["Node.js", "Express", "REST APIs", "Axios"],
  Databases: ["MongoDB", "Firebase", "Supabase", "MySQL"],
  DevOps: ["AWS", "Docker", "Linux", "Vercel", "GitHub Actions"],
  Tools: ["Git", "GitHub", "Figma", "VS Code", "Sentry", "PostHog", "Postman", "Maestro"],
  Languages: ["C++", "Python", "C", "TypeScript"],
};

export const resumeAchievements = [
  {
    title: "Innovation AITHON Finalist",
    date: "Apr 2026",
    description:
      "Selected as a finalist in a competitive AI hackathon showcasing innovative AI-powered solutions.",
  },
  {
    title: "Pulzion App Dev Winner",
    date: "Nov 2025",
    description:
      "Won the App Development track at Pulzion, PICT's annual technical festival.",
  },
  {
    title: "TechRush App Dev Winner",
    date: "Aug 2025",
    description:
      "First place in the App Development category at TechRush hackathon.",
  },
  {
    title: "Published Mobile Apps",
    date: "2025 – Present",
    description:
      "VoicenotesLab (App Store), RealEdge AI (Play Store), and AI Product Photo App published on app stores.",
  },
  {
    title: "Production Internship Experience",
    date: "Aug 2025 – Present",
    description:
      "Built and shipped production mobile apps at Pianalytix and Scizers with real users.",
  },
];

export const achievements = [
  {
    title: "Published Play Store Apps",
    description: "RealEdge AI and other mobile apps live on app stores.",
    icon: "store",
  },
  {
    title: "Internship Experience",
    description: "Hands-on experience at Pianalytix and Scizers building production apps.",
    icon: "briefcase",
  },
  {
    title: "Engineering Student",
    description: "2nd year B.Tech Computer Engineering at PICT with 9.0 CGPA.",
    icon: "graduation",
  },
  {
    title: "Hackathon Winner",
    description: "Won Pulzion App Dev and TechRush App Dev competitions.",
    icon: "trophy",
  },
];

export const education = [
  {
    institution: "Pune Institute of Computer Technology",
    degree: "B.Tech in Computer Engineering",
    period: "Sep 2024 – Sep 2028",
    cgpa: "9.0",
  },
];

export const navTabs = [
  { id: "about", label: "About" },
  { id: "resume", label: "Resume" },
  { id: "projects", label: "Projects" },
] as const;

export type TabId = (typeof navTabs)[number]["id"];
