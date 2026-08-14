"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import TwoToneHeading from "@/components/TwoToneHeading";
import { REVEAL_EASE } from "@/components/Reveal";
import { projects } from "@/lib/data";

export default function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-28">
      <TwoToneHeading top="RECENT" bottom="PROJECTS" />

      <div className="mt-12 flex flex-col">
        {projects.map((project, i) => {
          const Wrapper = project.href ? motion.a : motion.div;
          const linkProps = project.href
            ? { href: project.href, target: "_blank", rel: "noopener noreferrer" }
            : {};
          const isMobile = project.type === "mobile";
          const showGallery = isMobile && project.screenshots.length > 0;
          return (
            <Wrapper
              key={project.name}
              {...linkProps}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: REVEAL_EASE, delay: i * 0.08 }}
              className="group -mx-3 block rounded-xl border-b border-border px-3 py-6 transition-colors hover:bg-white/[0.03]"
            >
              <div className="flex items-start gap-5">
                {/* Left media for non-mobile projects */}
                {!isMobile &&
                  (project.thumbnail ? (
                    <div className="relative h-16 w-24 shrink-0 overflow-hidden rounded-xl bg-surface-elevated">
                      <Image
                        src={project.thumbnail}
                        alt={project.name}
                        fill
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        sizes="96px"
                      />
                    </div>
                  ) : (
                    <div className="flex h-16 w-24 shrink-0 items-center justify-center rounded-xl bg-surface-elevated text-2xl font-bold text-accent">
                      {project.name.charAt(0)}
                    </div>
                  ))}

                <div className="min-w-0 flex-1">
                  <h3 className="text-2xl font-semibold leading-tight text-white">
                    {project.name}
                  </h3>
                  <p className="text-[15px] text-accent">{project.subtitle}</p>
                  <p className="mt-1 max-w-xl text-[14px] leading-relaxed text-muted">
                    {project.description}
                  </p>
                </div>

                {project.href && (
                  <ArrowUpRight
                    size={22}
                    className="mt-1 shrink-0 text-accent transition-transform duration-300 ease-out group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                )}
              </div>

              {/* Complete phone screenshots for mobile apps */}
              {showGallery && (
                <div className="mt-5 flex gap-3 overflow-x-auto pb-1">
                  {project.screenshots.map((shot) => (
                    <div
                      key={shot}
                      className="relative aspect-[9/19.5] w-28 shrink-0 overflow-hidden rounded-2xl border border-border bg-surface-elevated"
                    >
                      <Image
                        src={shot}
                        alt={`${project.name} screenshot`}
                        fill
                        className="object-contain"
                        sizes="112px"
                      />
                    </div>
                  ))}
                </div>
              )}
            </Wrapper>
          );
        })}
      </div>
    </section>
  );
}
