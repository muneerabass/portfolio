export interface Experience {
  company: string;
  role: string;
  period: string;
  type: string;
  bullets: string[];
}

export interface Project {
  name: string;
  description: string;
  tech: string[];
  features: string[];
  live: string | null;
  github: string | null;
  category: "Main Project" | "Mini Project";
  tag: string;
  screenshots?: string[];
  appStore?: string | null;
  playStore?: string | null;
}

export interface Achievement {
  title: string;
  description: string;
  icon: string;
}

export interface ResumeAchievement {
  title: string;
  date: string;
  description: string;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  cgpa: string;
}

export interface Interest {
  title: string;
  description: string;
  icon: string;
}
