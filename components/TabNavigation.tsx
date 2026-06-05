"use client";

import { motion } from "framer-motion";
import { navTabs, type TabId } from "@/lib/data";

interface TabNavigationProps {
  activeTab: TabId;
  onTabChange: (tab: TabId) => void;
}

export default function TabNavigation({ activeTab, onTabChange }: TabNavigationProps) {
  return (
    <nav className="flex items-center justify-end gap-8 mb-10">
      {navTabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`relative text-lg font-medium transition-colors duration-200 pb-1 ${
            activeTab === tab.id ? "text-accent" : "text-muted hover:text-white/70"
          }`}
        >
          {tab.label}
          {activeTab === tab.id && (
            <motion.div
              layoutId="activeTab"
              className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-accent rounded-full"
              transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
            />
          )}
        </button>
      ))}
    </nav>
  );
}
