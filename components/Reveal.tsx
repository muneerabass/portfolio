"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

// Framer-style ease-out (expo-ish) used across the site for scroll reveals.
export const REVEAL_EASE = [0.16, 1, 0.3, 1] as const;

interface RevealProps extends HTMLMotionProps<"div"> {
  delay?: number;
  y?: number;
}

export default function Reveal({
  children,
  delay = 0,
  y = 28,
  ...props
}: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-90px" }}
      transition={{ duration: 0.75, ease: REVEAL_EASE, delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
