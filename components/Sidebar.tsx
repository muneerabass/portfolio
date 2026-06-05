"use client";

import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "@/components/icons/SocialIcons";
import { personal } from "@/lib/data";

const contactItems = [
  { icon: Mail, label: "EMAIL", value: personal.email, href: `mailto:${personal.email}` },
  { icon: Phone, label: "PHONE", value: personal.phone, href: `tel:${personal.phone.replace(/\s/g, "")}` },
  { icon: MapPin, label: "LOCATION", value: personal.location, href: null },
];

const socialLinks = [
  { icon: LinkedinIcon, href: personal.linkedin, label: "LinkedIn" },
  { icon: GithubIcon, href: personal.github, label: "GitHub" },
  { icon: WhatsappIcon, href: personal.whatsapp, label: "WhatsApp" },
];

export default function Sidebar() {
  return (
    <aside className="w-full md:w-[340px] shrink-0">
      <div className="bg-surface border border-border rounded-[20px] p-6 md:sticky md:top-8">
        {/* Profile Image */}
        <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-5 bg-surface-elevated">
          <Image
            src={personal.profileImage}
            alt={personal.name}
            fill
            priority
            className="object-cover"
            sizes="340px"
          />
        </div>

        {/* Name & Badge */}
        <h1 className="text-xl font-bold text-white text-center mb-2">{personal.name}</h1>
        <div className="flex justify-center mb-6">
          <span className="text-xs text-muted border border-border rounded-full px-4 py-1.5 bg-surface-elevated">
            {personal.badge}
          </span>
        </div>

        {/* Divider */}
        <div className="h-px bg-border mb-5" />

        {/* Contact Info */}
        <div className="space-y-4 mb-6">
          {contactItems.map(({ icon: Icon, label, value, href }) => (
            <div key={label} className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-surface-elevated border border-border flex items-center justify-center shrink-0">
                <Icon size={15} className="text-accent" />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] text-muted tracking-widest uppercase mb-0.5">{label}</p>
                {href ? (
                  <a
                    href={href}
                    className="text-sm text-white/80 hover:text-white transition-colors break-all block"
                  >
                    {value}
                  </a>
                ) : (
                  <p className="text-sm text-white/80">{value}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4 pt-2">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-9 h-9 rounded-xl bg-surface-elevated border border-border flex items-center justify-center text-muted hover:text-white hover:border-white/20 transition-all"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
}
