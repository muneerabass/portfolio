"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import TwoToneHeading from "@/components/TwoToneHeading";
import { REVEAL_EASE } from "@/components/Reveal";
import { experience } from "@/lib/data";

export default function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-28">
      <TwoToneHeading top="WORK" bottom="EXPERIENCE" />

      <div className="mt-12 flex flex-col gap-12">
        {experience.map((job, i) => {
          const Wrapper = job.href ? motion.a : motion.div;
          const linkProps = job.href
            ? { href: job.href, target: "_blank", rel: "noopener noreferrer" }
            : {};
          return (
            <Wrapper
              key={job.company}
              {...linkProps}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: REVEAL_EASE, delay: i * 0.08 }}
              className="group block"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-semibold text-white">{job.company}</h3>
                  <p className="text-[15px] font-medium text-accent">{job.role}</p>
                  <p className="mt-1 text-sm text-muted/70">
                    {job.period} · {job.location}
                  </p>
                </div>
                {job.href && (
                  <ArrowUpRight
                    size={20}
                    className="mt-1 shrink-0 text-accent transition-transform duration-300 ease-out group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                )}
              </div>

              <ul className="mt-4 flex flex-col gap-2">
                {job.bullets.map((bullet, bi) => (
                  <li
                    key={bi}
                    className="flex gap-3 text-[15px] leading-relaxed text-muted"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </Wrapper>
          );
        })}
      </div>
    </section>
  );
}
