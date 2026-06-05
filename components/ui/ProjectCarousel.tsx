"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  screenshots: string[];
  name: string;
  isWeb?: boolean;
}

export default function ProjectCarousel({ screenshots, name, isWeb = false }: Props) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    if (screenshots.length <= 1) return;
    const timer = setInterval(() => {
      setDirection(1);
      setIndex((prev) => (prev + 1) % screenshots.length);
    }, 2800);
    return () => clearInterval(timer);
  }, [screenshots.length]);

  return (
    <div className="bg-[#080808] border-b border-white/[0.10] flex items-center justify-center" style={{ height: 380 }}>
      {/* Device frame — same size for all, no notch */}
      <div className="relative rounded-[1.75rem] overflow-hidden border-2 border-white/[0.12] shadow-2xl bg-black"
        style={{ width: isWeb ? "88%" : 200, height: 340 }}>

        {/* Browser bar for web */}
        {isWeb && (
          <div className="flex items-center gap-1.5 px-3 py-2 bg-[#111] border-b border-white/[0.12] shrink-0">
            <span className="w-2 h-2 rounded-full bg-white/[0.08]" />
            <span className="w-2 h-2 rounded-full bg-white/[0.08]" />
            <span className="w-2 h-2 rounded-full bg-white/[0.08]" />
            <span className="ml-2 flex-1 bg-white/[0.04] rounded text-[10px] text-white/75 px-2 py-0.5 font-mono truncate">
              theinterviewroom.in
            </span>
          </div>
        )}

        {/* Sliding image */}
        <div className="relative" style={{ height: isWeb ? "calc(100% - 29px)" : "100%" }}>
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: direction * 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={screenshots[index]}
                alt={`${name} ${index + 1}`}
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 500px"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Dot indicators */}
      {screenshots.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
          {screenshots.map((_, i) => (
            <button
              key={i}
              onClick={() => { setDirection(i > index ? 1 : -1); setIndex(i); }}
              className={`rounded-full transition-all duration-300 ${
                i === index ? "w-5 h-1.5 bg-white" : "w-1.5 h-1.5 bg-white/25 hover:bg-white/50"
              }`}
              aria-label={`Screenshot ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
