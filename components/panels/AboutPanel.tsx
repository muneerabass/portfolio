"use client";

import { Layers, LayoutDashboard } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { REVEAL_EASE } from "@/components/Reveal";
import { personal, stats, capabilities } from "@/lib/data";

const capIcon = { layers: Layers, layout: LayoutDashboard } as const;

export default function AboutPanel() {
  return (
    <div>
      <SectionHeading title="About Me" />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, ease: REVEAL_EASE, delay: 0.05 }}
        className="mt-7 space-y-4 text-[15px] leading-relaxed text-muted"
      >
        <p>{personal.heroDescription}</p>
        <p>
          Now I&apos;m on the lookout for opportunities that will challenge me and let me
          flex my skills as a full-stack and mobile developer. I thrive on being part of a
          team that&apos;s pushing boundaries and creating something special. Let&apos;s
          build something awesome together!
        </p>
      </motion.div>

      {/* Stats */}
      <div className="mt-8 grid grid-cols-3 gap-4">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: REVEAL_EASE, delay: 0.1 + i * 0.06 }}
            className="rounded-2xl border border-border bg-surface-elevated p-4 text-center"
          >
            <p className="text-2xl font-bold text-white sm:text-3xl">{stat.value}</p>
            <p className="mt-1 text-[10px] font-medium uppercase leading-tight tracking-wide text-muted">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>

      {/* What I Do */}
      <h3 className="mt-10 text-2xl font-bold tracking-tight text-white">What I Do</h3>
      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        {capabilities.map((cap, i) => {
          const Icon = capIcon[cap.icon as keyof typeof capIcon];
          const isLime = cap.variant === "lime";
          return (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, ease: REVEAL_EASE, delay: i * 0.08 }}
              className={`group relative flex min-h-[230px] flex-col overflow-hidden rounded-[24px] p-7 ${
                isLime ? "bg-lime text-neutral-900" : "bg-accent text-white"
              }`}
            >
              {isLime ? (
                <svg
                  className="pointer-events-none absolute inset-0 h-full w-full text-[#93db6e]/65"
                  viewBox="0 0 360 230"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M-28 91 76 8l32 117L214 8l31 122 63-66 18 124 70-91"
                    stroke="currentColor"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M-30 173 78 91l32 117L214 91l31 122 63-66 18 124 72-94"
                    stroke="currentColor"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  className="pointer-events-none absolute inset-0 h-full w-full text-[#cf572d]/55"
                  viewBox="0 0 360 230"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M-38 214C70 196 174 160 196 112c16-36-8-59 31-80 34-18 94-11 166 3"
                    stroke="currentColor"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M-32 133C65 115 157 82 178 42 199 2 258 2 394 19"
                    stroke="currentColor"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                </svg>
              )}

              <Icon className="relative z-10" size={40} strokeWidth={1.75} />
              <h4 className="relative z-10 mt-6 text-2xl font-bold uppercase leading-tight tracking-tight">
                {cap.title}
              </h4>
              <p
                className={`relative z-10 mt-2 text-sm font-medium leading-snug ${
                  isLime ? "text-neutral-900/70" : "text-white/80"
                }`}
              >
                {cap.subtitle}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
