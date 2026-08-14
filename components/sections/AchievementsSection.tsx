"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import TwoToneHeading from "@/components/TwoToneHeading";
import { REVEAL_EASE } from "@/components/Reveal";
import { achievements } from "@/lib/data";

export default function AchievementsSection() {
  return (
    <section id="achievements" className="scroll-mt-28">
      <TwoToneHeading top="KEY" bottom="ACHIEVEMENTS" />

      <div className="mt-12 flex flex-col">
        {achievements.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: REVEAL_EASE, delay: i * 0.08 }}
            className="group border-b border-border py-5"
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="max-w-md text-lg font-bold leading-snug text-white">
                {item.title}
              </h3>
              <ArrowUpRight
                size={18}
                className="mt-1 shrink-0 text-accent transition-transform duration-300 ease-out group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </div>
            <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-muted">
              {item.description}
            </p>
            <p className="mt-3 text-xs font-semibold uppercase tracking-widest text-muted/70">
              {item.meta}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
