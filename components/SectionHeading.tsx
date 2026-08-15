"use client";

import { motion } from "framer-motion";
import { REVEAL_EASE } from "@/components/Reveal";

interface SectionHeadingProps {
  title: string;
  className?: string;
}

export default function SectionHeading({ title, className }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: REVEAL_EASE }}
      className={className}
    >
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      <div className="mt-3 h-1 w-14 rounded-full bg-accent" />
    </motion.div>
  );
}
