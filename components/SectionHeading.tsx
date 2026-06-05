"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  icon?: React.ReactNode;
}

export default function SectionHeading({ title, icon }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="mb-8"
    >
      <div className="flex items-center gap-3 mb-3">
        <h2 className="text-4xl font-bold text-white tracking-tight">{title}</h2>
        {icon}
      </div>
      <div className="w-10 h-1 rounded-full bg-accent" />
    </motion.div>
  );
}
