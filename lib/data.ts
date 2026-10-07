export const personal = {
  name: "Muneer Abbas",
  role: { top: "FULL-STACK MOBILE", bottom: "DEVELOPER" },
  title: "Full-Stack & Mobile Developer",
  badge: "Full-Stack & Mobile Developer",
  tagline: "A Developer who ships production web and mobile products.",
  heroDescription:
    "Computer Engineering student and Full-Stack / Mobile Developer experienced in building production web and mobile applications with React Native, SwiftUI, Next.js, Go, and Node.js. Founding Software Engineer - published and monetized iOS apps on the App Store and built platforms serving 300+ daily active users.",
  location: "Pune, India",
  email: "muneer.abbas9595@gmail.com",
  phone: "+91 8825045094",
  github: "https://github.com/muneerabass",
  linkedin: "https://www.linkedin.com/in/muneerabass",
  whatsapp: "https://wa.me/918825045094",
  resume: "https://drive.google.com/file/d/1vhzWE-NOCck-2IFxmV1aSdePtgRqTc9b/view?usp=sharing",
  profileImage:
    "https://res.cloudinary.com/divexu9ll/image/upload/f_auto,q_auto/WhatsApp_Image_2026-05-26_at_15.55.08_ghfhmp",
  summary:
    "Computer Engineering student and Full-Stack / Mobile Software Engineer experienced in building production web and mobile applications with React Native, SwiftUI, Next.js, Go, and Node.js. Founding Software Engineer. Published and monetized iOS apps on the App Store and built platforms serving 300+ daily active users.",
};

export const stats = [
  { value: "+300", label: "DAILY ACTIVE USERS" },
  { value: "+2", label: "iOS APPS PUBLISHED" },
  { value: "+3", label: "HACKATHON AWARDS" },
];

export const capabilities = [
  {
    title: "PRODUCTION WEB & MOBILE APPS",
    subtitle: "Building and shipping real products, not just demos.",
    icon: "layers",
    variant: "orange" as const,
  },
  {
    title: "FULL-STACK PRODUCT DEVELOPMENT",
    subtitle:
      "From frontend and APIs to databases, deployment, and everything in between.",
    icon: "layout",
    variant: "lime" as const,
  },
];

export const projects = [
  {
    name: "theinterviewroom.in",
    subtitle: "Full-Stack Web Platform",
    type: "web" as const,
    description:
      "Built and deployed a knowledge-sharing platform for interview and hackathon experiences, serving 300+ daily active users.",
    thumbnail: "/assets/projects/theinterviewroom/landing.png",
    screenshots: [] as string[],
    href: "https://theinterviewroom.in",
  },
  {
    name: "VoiceNotesLab",
    subtitle: "AI Voice Notes · iOS",
    type: "mobile" as const,
    description:
      "Full-stack iOS app built with Swift/SwiftUI, Supabase, and RevenueCat- published and monetized on the App Store.",
    thumbnail: "/assets/projects/voicenoteslab/homescreen.png",
    screenshots: [
      "/assets/projects/voicenoteslab/homescreen.png",
      "/assets/projects/voicenoteslab/aichat2.png",
      "/assets/projects/voicenoteslab/aisummary.png",
      "/assets/projects/voicenoteslab/folders.png",
    ],
    href: "https://apps.apple.com/in/app/voice-notes-lab-ai-notes/id6760574132",
  },
  {
    name: "AI Product Photo App",
    subtitle: "AI Photography · iOS",
    type: "mobile" as const,
    description:
      "Full-stack iOS app generating studio-quality product images, published on the App Store with in-app subscriptions.",
    thumbnail: "/assets/projects/productphotoapp/home.png",
    screenshots: [
      "/assets/projects/productphotoapp/home.png",
      "/assets/projects/productphotoapp/aistudio.png",
      "/assets/projects/productphotoapp/ecommerce.png",
      "/assets/projects/productphotoapp/imageview.png",
    ],
    href: "https://apps.apple.com/us/app/ai-product-photography-studio/id6759070694",
  },
  {
    name: "Meeting Room Booking System",
    subtitle: "Full-Stack Booking Platform",
    type: "web" as const,
    description:
      "Meeting-room booking system using Go, React and PostgreSQL with server-side validation and booking conflict handling. Containerized with Docker, backend on AWS EC2, frontend on Vercel.",
    thumbnail: null,
    screenshots: [] as string[],
    href: "https://github.com/muneerabass/meeting-room-booking",
  },
];

export const experience = [
  {
    company: "VHSMO",
    role: "Founding Software Engineer Intern",
    period: "Feb 2026 – Present",
    location: "Pune, India",
    href: null,
    bullets: [
      "Built and continuously maintain VHSMO's mobile application and web platform, working across frontend, backend, and product development.",
      "Developed the mobile app using React Native and the website using Next.js, focusing on UI/UX, performance, and product experience.",
      "Built and integrated backend APIs using Node.js, Express.js, and Supabase/PostgreSQL, including authentication, orders, payments, and data management.",
      "Integrated Razorpay for payment processing and implemented checkout, order, and inventory workflows.",
      "Managed production web infrastructure and deployments using Vercel, while continuously shipping updates and improvements.",
      "Set up and managed AWS SES for transactional/marketing email infrastructure, including domain authentication and email deliverability.",
    ],
  },
  {
    company: "Pianalytix",
    role: "iOS Developer Intern",
    period: "Feb 2026 – Jun 2026",
    location: "Remote",
    href: "https://drive.google.com/file/d/1cMXAvLdlMV-Fb3juDIwUd0KYq7evVf6R/view?usp=sharing",
    bullets: [
      "Built and published 2 full-stack iOS apps (ProductPhotoApp and VoiceNotesLab) to the App Store using Swift/SwiftUI.",
      "Integrated Supabase for database, storage, authentication, and Edge Functions, with RevenueCat for in-app purchases and subscriptions.",
      "Implemented API integrations, user authentication, and production-ready app workflows across frontend and backend services.",
      "Managed iOS builds, testing, and releases through Xcode, TestFlight, and App Store Connect.",
    ],
  },
  {
    company: "Scizers",
    role: "React Native Developer Intern",
    period: "Aug 2025 – Feb 2026",
    location: "Remote",
    href: "https://drive.google.com/file/d/1PKO9hZ1GnDZ0MzhCVWNlxUbABdH6sj1G/view?usp=sharing",
    bullets: [
      "Worked on an enterprise-level React Native app, modernizing a 5–6 year-old UI and improving overall UX.",
      "Refactored the codebase using reusable components and best practices, reducing code by 40%.",
      "Built filtering and new features using Redux and integrated REST APIs in collaboration with the backend team.",
    ],
  },
];

export const skillGroups = [
  {
    title: "Languages & Frameworks",
    items: [
      "Go",
      "C++",
      "JavaScript",
      "Swift",
      "React Native",
      "SwiftUI",
      "Next.js",
      "Node.js",
      "Express.js",
    ],
  },
  {
    title: "Backend, Cloud & Databases",
    items: [
      "PostgreSQL",
      "MongoDB",
      "Supabase",
      "REST APIs",
      "Docker",
      "AWS EC2",
      "AWS SES",
      "Nginx",
    ],
  },
  {
    title: "Tools & Services",
    items: [
      "Git",
      "GitHub",
      "Xcode",
      "App Store Connect",
      "Redux",
      "RevenueCat",
      "Razorpay",
      "Vercel",
    ],
  },
];

export const achievements = [
  {
    title: "Published & Monetized iOS Apps",
    meta: "App Store",
    description: "Published and monetized 2 full-stack iOS apps on the App Store.",
  },
  {
    title: "Hackathon Winner- TechRush & Pulzion",
    meta: "1st Place",
    description: "Secured 1st place in TECHRUSH and PULZION.",
  },
  {
    title: "AltON Top 25 Finalist",
    meta: "Top 25 / 800+",
    description: "Selected among the Top 25 out of 800+ participants in AltON.",
  },
];

export const education = {
  degree: "B.E. in Computer Engineering",
  institution: "Pune Institute of Computer Technology (PICT)",
  period: "2024 – 2028",
  cgpa: "8.86",
};

export const contactSubjects = [
  "Job Opportunity",
  "Freelance Project",
  "Collaboration",
  "Just Saying Hi",
];

export const navItems = [
  { id: "home", label: "Home", icon: "home" },
  { id: "projects", label: "Projects", icon: "folder" },
  { id: "experience", label: "Experience", icon: "briefcase" },
  { id: "stack", label: "Tech Stack", icon: "wrench" },
  { id: "contact", label: "Contact", icon: "edit" },
] as const;
