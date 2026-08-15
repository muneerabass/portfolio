"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { REVEAL_EASE } from "@/components/Reveal";
import { projects } from "@/lib/data";

export default function ProjectsPanel() {
  return (
    <div>
      <SectionHeading title="Projects" />

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
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
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, ease: REVEAL_EASE, delay: i * 0.07 }}
              className="group flex min-w-0 flex-col rounded-2xl border border-border bg-surface-elevated p-5 transition-colors hover:border-accent/40"
            >
              {/* Media */}
              {showGallery ? (
                <div className="mb-4 flex gap-2.5 overflow-x-auto pb-1">
                  {project.screenshots.map((shot) => (
                    <div
                      key={shot}
                      className="relative aspect-[9/19.5] w-20 shrink-0 overflow-hidden rounded-xl border border-border bg-surface"
                    >
                      <Image
                        src={shot}
                        alt={`${project.name} screenshot`}
                        fill
                        className="object-contain"
                        sizes="80px"
                      />
                    </div>
                  ))}
                </div>
              ) : project.thumbnail ? (
                <div className="relative mb-4 h-32 w-full overflow-hidden rounded-xl bg-surface">
                  <Image
                    src={project.thumbnail}
                    alt={project.name}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 300px"
                  />
                </div>
              ) : (
                <div className="mb-4 flex h-32 w-full items-center justify-center rounded-xl bg-surface text-4xl font-bold text-accent">
                  {project.name.charAt(0)}
                </div>
              )}

              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <h3 className="break-words text-lg font-semibold leading-tight text-white [overflow-wrap:anywhere]">
                    {project.name}
                  </h3>
                  <p className="text-[14px] text-accent">{project.subtitle}</p>
                </div>
                {project.href && (
                  <ArrowUpRight
                    size={20}
                    className="mt-1 shrink-0 text-accent transition-transform duration-300 ease-out group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                )}
              </div>
              <p className="mt-2 text-[14px] leading-relaxed text-muted">
                {project.description}
              </p>
            </Wrapper>
          );
        })}
      </div>
    </div>
  );
}
