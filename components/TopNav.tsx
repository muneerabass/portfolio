"use client";

import { useEffect, useState } from "react";
import { Home, Folder, Briefcase, Wrench, PenLine } from "lucide-react";
import { navItems } from "@/lib/data";

const iconMap = {
  home: Home,
  folder: Folder,
  briefcase: Briefcase,
  wrench: Wrench,
  edit: PenLine,
} as const;

export default function TopNav() {
  const [active, setActive] = useState<string>("home");

  useEffect(() => {
    const ids = navItems.map((n) => n.id);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-1 rounded-full border border-white/10 bg-[#1b1b1b]/80 px-2 py-2 backdrop-blur-md shadow-lg shadow-black/40">
        {navItems.map(({ id, label, icon }) => {
          const Icon = iconMap[icon];
          const isActive = active === id;
          return (
            <a
              key={id}
              href={`#${id}`}
              aria-label={label}
              className={`flex h-10 w-10 items-center justify-center rounded-full transition-all ${
                isActive
                  ? "bg-accent text-white"
                  : "text-muted hover:bg-white/5 hover:text-white"
              }`}
            >
              <Icon size={18} />
            </a>
          );
        })}
      </div>
    </nav>
  );
}
