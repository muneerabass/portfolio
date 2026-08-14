"use client";

import Image from "next/image";
import { Download } from "lucide-react";
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "@/components/icons/SocialIcons";
import { personal } from "@/lib/data";

const socialLinks = [
  { icon: LinkedinIcon, href: personal.linkedin, label: "LinkedIn" },
  { icon: GithubIcon, href: personal.github, label: "GitHub" },
  { icon: WhatsappIcon, href: personal.whatsapp, label: "WhatsApp" },
];

export default function ProfileCard() {
  return (
    <div className="relative lg:sticky lg:top-24">
      <div className="relative z-10 overflow-hidden rounded-[24px] bg-white p-6 shadow-2xl shadow-black/30 sm:p-7">
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
        {/* Portrait- natural image */}
        <div className="relative z-10 aspect-[4/5] w-full overflow-hidden rounded-2xl bg-neutral-200">
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
        <h1 className="relative z-10 mt-7 text-center text-3xl font-bold tracking-tight text-neutral-900">
          {personal.name}
        </h1>

        {/* Tagline */}
        <p className="relative z-10 mx-auto mt-4 max-w-[15rem] text-center text-sm font-semibold leading-relaxed text-neutral-600">
          {personal.tagline}
        </p>

        {/* Socials */}
        <div className="relative z-10 mt-7 flex items-center justify-center gap-5">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="relative z-10 text-accent transition-transform hover:scale-110"
            >
              <Icon size={22} />
            </a>
          ))}
        </div>

        {/* Download Resume */}
        <a
          href={personal.resume}
          download
          className="relative z-10 mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-accent py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-soft"
        >
          <Download size={17} />
          Download Resume
        </a>
      </div>
    </div>
  );
}
