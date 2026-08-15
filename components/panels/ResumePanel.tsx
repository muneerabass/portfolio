"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { REVEAL_EASE } from "@/components/Reveal";
import { experience, education, skillGroups } from "@/lib/data";

export default function ResumePanel() {
  return (
    <div className="space-y-12">
      {/* Education */}
      <div>
        <SectionHeading title="Education" />
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55, ease: REVEAL_EASE }}
          className="mt-7 flex items-start gap-4 rounded-2xl border border-border bg-surface-elevated p-6"
        >
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent">
            <GraduationCap size={22} />
          </span>
          <div>
            <h3 className="text-lg font-semibold text-white">{education.degree}</h3>
            <p className="text-[15px] text-accent">{education.institution}</p>
            <p className="mt-1 text-sm text-muted">
              {education.period} · CGPA {education.cgpa}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Experience */}
      <div>
        <SectionHeading title="Experience" />
        <div className="mt-8 flex flex-col gap-8 border-l border-border pl-6">
          {experience.map((job, i) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, ease: REVEAL_EASE, delay: i * 0.06 }}
              className="relative"
            >
              <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-background" />
              <div>
                <h3 className="text-xl font-semibold text-white">{job.company}</h3>
                <p className="text-[15px] font-medium text-accent">{job.role}</p>
                <p className="mt-1 text-sm text-muted/70">
                  {job.period} · {job.location}
                </p>
              </div>
              <ul className="mt-4 flex flex-col gap-2">
                {job.bullets.map((bullet, bi) => (
                  <li
                    key={bi}
                    className="flex gap-3 text-[14px] leading-relaxed text-muted"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div>
        <SectionHeading title="Skills" />
        <div className="mt-8 flex flex-col gap-7">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, ease: REVEAL_EASE, delay: gi * 0.06 }}
            >
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted">
                {group.title}
              </p>
              <div className="flex flex-wrap gap-2.5">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border bg-surface-elevated px-4 py-2 text-[14px] font-medium text-white/90 transition-colors hover:border-accent/50 hover:text-accent"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
