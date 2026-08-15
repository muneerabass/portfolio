"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Download, ChevronDown } from "lucide-react";
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "@/components/icons/SocialIcons";
import { REVEAL_EASE } from "@/components/Reveal";
import { personal } from "@/lib/data";

const socialLinks = [
  { icon: LinkedinIcon, href: personal.linkedin, label: "LinkedIn" },
  { icon: GithubIcon, href: personal.github, label: "GitHub" },
  { icon: WhatsappIcon, href: personal.whatsapp, label: "WhatsApp" },
];

function Socials() {
  return (
    <div className="flex items-center justify-center gap-5">
      {socialLinks.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="text-accent transition-transform hover:scale-110"
        >
          <Icon size={22} />
        </a>
      ))}
    </div>
  );
}

function DownloadButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={personal.resume}
      download
      className={`flex w-full items-center justify-center gap-2 rounded-xl bg-accent py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-soft ${className}`}
    >
      <Download size={17} />
      Download Resume
    </a>
  );
}

export default function ProfileCard() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative lg:sticky lg:top-8">
      {/* Compact header — mobile / tablet only */}
      <div className="rounded-[24px] border border-border bg-surface p-4 shadow-2xl shadow-black/30 lg:hidden">
        <div className="flex items-center gap-4">
          <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-2xl bg-surface-elevated">
            <Image
              src={personal.profileImage}
              alt={personal.name}
              fill
              priority
              className="object-cover"
              sizes="56px"
            />
          </div>
          <div className="min-w-0">
            <h1 className="truncate text-lg font-bold tracking-tight text-white">
              {personal.name}
            </h1>
            <span className="mt-1 inline-block rounded-lg bg-surface-elevated px-3 py-1 text-xs font-medium text-white/80">
              {personal.title}
            </span>
          </div>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Hide details" : "Show details"}
            aria-expanded={open}
            className="ml-auto flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/15 text-accent"
          >
            <ChevronDown
              size={18}
              className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
            />
          </button>
        </div>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="details"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: REVEAL_EASE }}
              className="overflow-hidden"
            >
              <div className="mt-4 space-y-4 border-t border-border pt-4">
                <p className="mx-auto max-w-[16rem] text-center text-sm font-medium leading-relaxed text-muted">
                  {personal.tagline}
                </p>
                <Socials />
                <DownloadButton />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Full card — desktop only */}
      <div className="relative z-10 hidden overflow-hidden rounded-[24px] border border-border bg-surface p-6 shadow-2xl shadow-black/30 sm:p-7 lg:block">
        <svg
          className="pointer-events-none absolute -left-9 -top-14 z-0 h-40 w-64"
          viewBox="0 0 260 170"
          fill="none"
          aria-hidden
        >
          <path
            d="M12 54 C 35 123, 104 151, 170 126 C 237 101, 244 30, 222 -14"
            stroke="var(--color-accent)"
            strokeWidth="5"
            strokeLinecap="round"
            strokeDasharray="1 14"
          />
        </svg>

        {/* Portrait */}
        <div className="relative z-10 aspect-[4/5] w-full overflow-hidden rounded-2xl bg-surface-elevated">
          <Image
            src={personal.profileImage}
            alt={personal.name}
            fill
            priority
            className="object-cover"
            sizes="360px"
          />
        </div>

        {/* Name */}
        <h1 className="relative z-10 mt-7 text-center text-3xl font-bold tracking-tight text-white">
          {personal.name}
        </h1>

        {/* Tagline */}
        <p className="relative z-10 mx-auto mt-4 max-w-[15rem] text-center text-sm font-semibold leading-relaxed text-muted">
          {personal.tagline}
        </p>

        {/* Socials */}
        <div className="relative z-10 mt-7">
          <Socials />
        </div>

        {/* Download Resume */}
        <DownloadButton className="relative z-10 mt-6" />
      </div>
    </div>
  );
}
