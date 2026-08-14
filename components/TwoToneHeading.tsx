"use client";

import { motion } from "framer-motion";
import { REVEAL_EASE } from "@/components/Reveal";

interface TwoToneHeadingProps {
  top: string;
  bottom: string;
  className?: string;
}

export default function TwoToneHeading({ top, bottom, className }: TwoToneHeadingProps) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-90px" }}
      transition={{ duration: 0.8, ease: REVEAL_EASE }}
      className={`font-bold uppercase leading-[0.95] tracking-[-0.01em] text-[clamp(2.75rem,8.5vw,5.9rem)] ${className ?? ""}`}
    >
      <span className="block text-white">{top}</span>
      <span className="block text-ghost">{bottom}</span>
    </motion.h2>
  );
}
