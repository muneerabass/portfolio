"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  GraduationCap,
  ExternalLink,
  Trophy,
  Wrench,
  Code2,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { personal, experience, education, skills, resumeAchievements } from "@/lib/data";

function SubSection({
  icon: Icon,
  title,
  children,
  delay = 0,
}: {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className="mb-12"
    >
      <div className="flex items-center gap-2.5 mb-6">
        <Icon size={20} className="text-accent" />
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>
      {children}
    </motion.div>
  );
}

export default function ResumeView() {
  const techCategories = Object.entries(skills).filter(([key]) => key !== "Tools");
  const tools = skills.Tools;

  return (
    <div>
      <SectionHeading
        title="Resume"
        icon={
          <a
            href={personal.resume}
            download
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-accent/80 transition-colors"
            aria-label="Download resume"
          >
            <ExternalLink size={20} />
          </a>
        }
      />

      {/* Experience */}
      <SubSection icon={BookOpen} title="Experience">
        <div className="relative pl-7">
          <div className="absolute left-[9px] top-2 bottom-2 w-px bg-border" />
          <div className="space-y-10">
            {experience.map((job, i) => (
              <motion.div
                key={job.company}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative"
              >
                <div className="absolute -left-7 top-2 w-[18px] h-[18px] rounded-full border-2 border-accent bg-surface" />
                <h4 className="text-lg font-bold text-white mb-1">{job.company}</h4>
                <p className="text-base text-accent mb-1">
                  {job.role} · {job.type}
                </p>
                <p className="text-base text-muted mb-4">{job.period}</p>
                <ul className="space-y-2.5">
                  {job.bullets.map((bullet, j) => (
                    <li key={j} className="flex gap-2.5 text-base text-muted leading-relaxed">
                      <span className="text-accent mt-1 shrink-0">•</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </SubSection>

      {/* Education */}
      <SubSection icon={GraduationCap} title="Education" delay={0.1}>
        <div className="relative pl-7">
          <div className="absolute left-[9px] top-2 bottom-2 w-px bg-border" />
          {education.map((edu, i) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.15 + i * 0.1 }}
              className="relative"
            >
              <div className="absolute -left-7 top-2 w-[18px] h-[18px] rounded-full border-2 border-accent bg-surface" />
              <h4 className="text-lg font-bold text-white mb-1">{edu.institution}</h4>
              <p className="text-base text-accent mb-1">{edu.degree}</p>
              <p className="text-base text-muted mb-1">{edu.period}</p>
              <p className="text-base text-white/70">CGPA: {edu.cgpa}</p>
            </motion.div>
          ))}
        </div>
      </SubSection>

      {/* Tech Stack */}
      <SubSection icon={Code2} title="Tech Stack" delay={0.15}>
        <div className="grid sm:grid-cols-2 gap-4">
          {techCategories.map(([category, items], i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.2 + i * 0.05 }}
              className="bg-surface-elevated border border-border rounded-2xl p-5"
            >
              <h4 className="text-base font-semibold text-white mb-3">{category}</h4>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="text-base text-muted bg-surface border border-border rounded-lg px-3 py-1"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </SubSection>

      {/* Tools */}
      <SubSection icon={Wrench} title="Tools" delay={0.2}>
        <div className="flex flex-wrap gap-2.5">
          {tools.map((tool, i) => (
            <motion.span
              key={tool}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.25 + i * 0.03 }}
              className="text-base text-white/80 bg-surface-elevated border border-border rounded-xl px-4 py-2"
            >
              {tool}
            </motion.span>
          ))}
        </div>
      </SubSection>

      {/* Achievements */}
      <SubSection icon={Trophy} title="Achievements" delay={0.25}>
        <div className="grid sm:grid-cols-2 gap-4">
          {resumeAchievements.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.3 + i * 0.05 }}
              whileHover={{ y: -2 }}
              className="bg-surface-elevated border border-border rounded-2xl p-5 hover:border-white/[0.15] transition-all duration-300"
            >
              <span className="text-sm text-accent font-medium mb-2 block">{item.date}</span>
              <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
              <p className="text-base text-muted leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </SubSection>
    </div>
  );
}
