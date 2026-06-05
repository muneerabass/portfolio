"use client";

import { motion } from "framer-motion";
import { Smartphone, Brain, Layers, Palette } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { personal, interests, stats } from "@/lib/data";

const iconMap = {
  smartphone: Smartphone,
  brain: Brain,
  layers: Layers,
  palette: Palette,
};

export default function AboutView() {
  return (
    <div>
      <SectionHeading title="About Me" />

      <div className="space-y-4 mb-12">
        {personal.about.map((paragraph, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="text-lg text-muted leading-relaxed"
          >
            {paragraph}
          </motion.p>
        ))}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-12">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 + i * 0.05 }}
            className="bg-surface-elevated border border-border rounded-2xl p-4 text-center"
          >
            <p className="text-4xl font-bold text-white mb-1">{stat.value}</p>
            <p className="text-base text-muted">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Interests */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <h3 className="text-2xl font-bold text-white mb-5">Interests</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          {interests.map((interest, i) => {
            const Icon = iconMap[interest.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={interest.title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.35 + i * 0.08 }}
                whileHover={{ y: -2 }}
                className="bg-surface-elevated border border-border rounded-2xl p-5 hover:border-white/[0.15] transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-4">
                  <Icon size={18} className="text-accent" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{interest.title}</h4>
                <p className="text-base text-muted leading-relaxed">{interest.description}</p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
