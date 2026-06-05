"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Sidebar from "@/components/Sidebar";
import TabNavigation from "@/components/TabNavigation";
import AboutView from "@/components/sections/AboutView";
import ResumeView from "@/components/sections/ResumeView";
import ProjectsView from "@/components/sections/ProjectsView";
import { type TabId } from "@/lib/data";

const views: Record<TabId, React.ComponentType> = {
  about: AboutView,
  resume: ResumeView,
  projects: ProjectsView,
};

export default function PortfolioApp() {
  const [activeTab, setActiveTab] = useState<TabId>("about");
  const ActiveView = views[activeTab];

  return (
    <div className="min-h-screen bg-background p-4 sm:p-6 lg:p-8">
      <div className="max-w-[1160px] mx-auto flex flex-col md:flex-row gap-5 md:gap-6">
        <Sidebar />

        <main className="flex-1 min-w-0">
          <div className="bg-surface border border-border rounded-[20px] p-6 sm:p-8 md:p-10 min-h-[calc(100vh-4rem)]">
            <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
              >
                <ActiveView />
              </motion.div>
            </AnimatePresence>
          </div>
        </main>
      </div>
    </div>
  );
}
