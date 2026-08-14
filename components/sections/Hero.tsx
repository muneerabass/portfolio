"use client";

import { Layers, LayoutDashboard, ArrowRight } from "lucide-react";
import TwoToneHeading from "@/components/TwoToneHeading";
import Reveal from "@/components/Reveal";
import { personal, stats, capabilities } from "@/lib/data";

const capIcon = { layers: Layers, layout: LayoutDashboard } as const;

export default function Hero() {
  return (
    <section id="home" className="scroll-mt-28">
      <TwoToneHeading top={personal.role.top} bottom={personal.role.bottom} />

      <Reveal delay={0.05}>
        <p className="mt-6 max-w-lg text-[17px] leading-relaxed text-muted">
          {personal.heroDescription}
        </p>
      </Reveal>

      {/* Stats */}
      <Reveal delay={0.1} className="mt-12 flex flex-wrap gap-x-12 gap-y-6">
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className="text-5xl font-bold tracking-tight text-white sm:text-[3.4rem]">
              {stat.value}
            </p>
            <p className="mt-1 max-w-[9rem] text-xs font-medium uppercase leading-tight tracking-wide text-muted">
              {stat.label}
            </p>
          </div>
        ))}
      </Reveal>

      {/* Capability cards */}
      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {capabilities.map((cap, i) => {
          const Icon = capIcon[cap.icon as keyof typeof capIcon];
          const isLime = cap.variant === "lime";
          return (
            <Reveal key={cap.title} delay={0.15 + i * 0.1}>
              <div
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
                <h3 className="relative z-10 mt-10 text-2xl font-bold uppercase leading-tight tracking-tight">
                  {cap.title}
                </h3>
                <p
                  className={`relative z-10 mt-2 text-sm font-medium leading-snug ${
                    isLime ? "text-neutral-900/70" : "text-white/80"
                  }`}
                >
                  {cap.subtitle}
                </p>
                <div className="relative z-10 mt-auto flex justify-end pt-6">
                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-lg border-2 transition-transform duration-300 ease-out group-hover:-translate-y-1 group-hover:translate-x-1 ${
                      isLime ? "border-neutral-900" : "border-white"
                    }`}
                  >
                    <ArrowRight size={18} />
                  </span>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
