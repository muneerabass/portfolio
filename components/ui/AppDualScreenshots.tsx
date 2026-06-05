"use client";

import Image from "next/image";

interface Props {
  screenshots: string[];
  name: string;
}

function PhoneFrame({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative flex-1 max-w-[160px] mx-auto">
      <div className="relative rounded-[1.5rem] overflow-hidden border-2 border-white/10 shadow-xl bg-black aspect-[9/19]">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover object-top"
          sizes="160px"
        />
      </div>
    </div>
  );
}

export default function AppDualScreenshots({ screenshots, name }: Props) {
  const first = screenshots[0];
  const second = screenshots[1] ?? screenshots[0];

  return (
    <div className="bg-[#080808] border-b border-border px-4 py-6 flex items-center justify-center gap-3 min-h-[280px]">
      <PhoneFrame src={first} alt={`${name} screenshot 1`} />
      <PhoneFrame src={second} alt={`${name} screenshot 2`} />
    </div>
  );
}
