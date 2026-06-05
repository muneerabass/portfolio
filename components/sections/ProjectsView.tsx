"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/icons/SocialIcons";
import { AppStoreIcon, PlayStoreIcon } from "@/components/icons/StoreIcons";
import AppDualScreenshots from "@/components/ui/AppDualScreenshots";
import SectionHeading from "@/components/SectionHeading";
import { projects } from "@/lib/data";

const filters = ["All", "Main Project", "Mini Project"] as const;
type Filter = (typeof filters)[number];

function isAppProject(project: (typeof projects)[number]) {
  return Boolean(project.appStore || project.playStore);
}

export default function ProjectsView() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <div>
      <SectionHeading title="Projects" />

      {/* Filters */}
      <div className="flex items-center gap-6 mb-10 border-b border-border pb-4">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`text-lg font-medium transition-colors relative pb-1 ${
              activeFilter === filter
                ? "text-accent"
                : "text-muted hover:text-white/70"
            }`}
          >
            {filter}
            {activeFilter === filter && (
              <motion.div
                layoutId="projectFilter"
                className="absolute -bottom-[17px] left-0 right-0 h-0.5 bg-accent rounded-full"
                transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <div className="grid sm:grid-cols-2 gap-6">
        {filtered.map((project, i) => {
          const isApp = isAppProject(project);
          const shots = project.screenshots ?? [];

          return (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="group bg-surface-elevated border border-border rounded-2xl overflow-hidden hover:border-white/[0.15] hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)] transition-all duration-300 flex flex-col"
            >
              {/* Screenshots */}
              {isApp && shots.length > 0 ? (
                <AppDualScreenshots screenshots={shots} name={project.name} />
              ) : shots[0] ? (
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-black border-b border-border">
                  <Image
                    src={shots[0]}
                    alt={project.name}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, 400px"
                  />
                </div>
              ) : null}

              {/* Project Info */}
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold text-white mb-1">{project.name}</h3>
                    <p className="text-base text-muted">{project.category}</p>
                  </div>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.name} on GitHub`}
                      className="text-muted hover:text-white transition-colors shrink-0 mt-1"
                    >
                      <GithubIcon size={20} />
                    </a>
                  )}
                </div>

                <p className="text-base text-muted leading-relaxed mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-sm text-muted bg-surface border border-border rounded-lg px-3 py-1"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="mt-auto flex flex-wrap gap-2.5">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold bg-accent text-accent-foreground px-4 py-2.5 rounded-xl hover:opacity-90 transition-opacity"
                    >
                      <ExternalLink size={15} />
                      Visit Site
                    </a>
                  )}
                  {project.appStore && (
                    <a
                      href={project.appStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold bg-white text-black px-4 py-2.5 rounded-xl hover:bg-white/90 transition-colors"
                    >
                      <AppStoreIcon size={15} />
                      App Store
                    </a>
                  )}
                  {project.playStore && (
                    <a
                      href={project.playStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold bg-white text-black px-4 py-2.5 rounded-xl hover:bg-white/90 transition-colors"
                    >
                      <PlayStoreIcon size={15} />
                      Play Store
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <p className="text-lg text-muted text-center py-12">No projects in this category.</p>
      )}
    </div>
  );
}
