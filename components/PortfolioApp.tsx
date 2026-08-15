"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { REVEAL_EASE } from "@/components/Reveal";
import ProfileCard from "@/components/ProfileCard";
import AboutPanel from "@/components/panels/AboutPanel";
import ResumePanel from "@/components/panels/ResumePanel";
import ProjectsPanel from "@/components/panels/ProjectsPanel";
import ContactPanel from "@/components/panels/ContactPanel";

const tabs = [
  { id: "about", label: "About", Panel: AboutPanel },
  { id: "resume", label: "Resume", Panel: ResumePanel },
  { id: "projects", label: "Projects", Panel: ProjectsPanel },
  { id: "contact", label: "Contact", Panel: ContactPanel },
] as const;

type TabId = (typeof tabs)[number]["id"];

export default function PortfolioApp() {
  const [active, setActive] = useState<TabId>("about");
  const ActivePanel = tabs.find((t) => t.id === active)!.Panel;
  const mainRef = useRef<HTMLElement>(null);

  const selectMobile = (id: TabId) => {
    setActive(id);
    mainRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-[1240px] px-4 pt-6 pb-28 sm:px-6 sm:pt-10 lg:pb-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-8">
          {/* Sidebar */}
          <aside className="w-full lg:w-[330px] lg:shrink-0">
            <ProfileCard />
          </aside>

          {/* Main card */}
          <main
            ref={mainRef}
            className="min-w-0 flex-1 scroll-mt-4 rounded-[26px] border border-border bg-surface shadow-2xl shadow-black/30"
          >
            {/* Tab navigation — desktop */}
            <div className="hidden border-b border-border px-5 pt-5 sm:px-8 lg:flex lg:justify-end">
              <nav className="flex gap-1 overflow-x-auto overflow-y-hidden">
                {tabs.map(({ id, label }) => {
                  const isActive = active === id;
                  return (
                    <button
                      key={id}
                      onClick={() => setActive(id)}
                      className={`relative shrink-0 px-4 py-3 text-[15px] font-medium transition-colors sm:px-5 ${
                        isActive ? "text-accent" : "text-muted hover:text-white"
                      }`}
                    >
                      {label}
                      {isActive && (
                        <motion.span
                          layoutId="tab-underline"
                          className="absolute inset-x-3 bottom-0 h-0.5 rounded-full bg-accent"
                          transition={{ duration: 0.3, ease: REVEAL_EASE }}
                        />
                      )}
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Panel */}
            <div className="p-6 sm:p-8 lg:p-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3, ease: REVEAL_EASE }}
                >
                  <ActivePanel />
                </motion.div>
              </AnimatePresence>
            </div>
          </main>
        </div>
      </div>

      {/* Tab navigation — mobile fixed bottom bar */}
      <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-surface/95 backdrop-blur-md lg:hidden">
        <div className="mx-auto flex max-w-[1240px] items-center justify-center gap-1 px-4 pt-2 pb-[max(0.5rem,env(safe-area-inset-bottom))]">
          {tabs.map(({ id, label }) => {
            const isActive = active === id;
            return (
              <button
                key={id}
                onClick={() => selectMobile(id)}
                className={`relative rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  isActive ? "text-accent" : "text-muted"
                }`}
              >
                {label}
                {isActive && (
                  <motion.span
                    layoutId="tab-underline-mobile"
                    className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-accent"
                    transition={{ duration: 0.3, ease: REVEAL_EASE }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
