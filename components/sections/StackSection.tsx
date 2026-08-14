"use client";

import { motion } from "framer-motion";
import TwoToneHeading from "@/components/TwoToneHeading";
import { REVEAL_EASE } from "@/components/Reveal";
import { skillGroups } from "@/lib/data";

export default function StackSection() {
  return (
    <section id="stack" className="scroll-mt-28">
      <TwoToneHeading top="TECH" bottom="STACK" />

      <div className="mt-12 flex flex-col gap-10">
        {skillGroups.map((group, gi) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-70px" }}
            transition={{ duration: 0.6, ease: REVEAL_EASE, delay: gi * 0.08 }}
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted">
              {group.title}
            </p>
            <div className="flex flex-wrap gap-2.5">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border bg-surface px-4 py-2 text-[15px] font-medium text-white/90 transition-colors hover:border-accent/50 hover:text-accent"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
