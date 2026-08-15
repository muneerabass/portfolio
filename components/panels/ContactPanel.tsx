"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { REVEAL_EASE } from "@/components/Reveal";
import { personal, contactSubjects } from "@/lib/data";

export default function ContactPanel() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `Hi Muneer,%0D%0A%0D%0A${encodeURIComponent(
      message
    )}%0D%0A%0D%0A— ${encodeURIComponent(name)}${
      email ? ` (${encodeURIComponent(email)})` : ""
    }`;
    const subjectLine = encodeURIComponent(subject || "Let's work together");
    window.location.href = `mailto:${personal.email}?subject=${subjectLine}&body=${body}`;
  };

  const fieldClass =
    "w-full rounded-xl border border-border bg-surface-elevated px-4 py-3 text-[15px] text-white placeholder:text-muted/70 outline-none transition-colors focus:border-accent/60 focus:ring-2 focus:ring-accent/20";

  return (
    <div>
      <SectionHeading title="Contact" />

      <motion.p
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.55, ease: REVEAL_EASE }}
        className="mt-7 max-w-lg text-[15px] leading-relaxed text-muted"
      >
        Have a role, project, or idea in mind? Drop me a message and I&apos;ll get back to
        you as soon as I can.
      </motion.p>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.55, ease: REVEAL_EASE, delay: 0.05 }}
        className="mt-8 space-y-5"
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm text-white/80">Name</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              className={fieldClass}
            />
          </div>
          <div>
            <label className="mb-2 block text-sm text-white/80">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className={fieldClass}
            />
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm text-white/80">Subject</label>
          <div className="relative">
            <select
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className={`${fieldClass} appearance-none pr-10 ${
                subject ? "text-white" : "text-muted/70"
              }`}
            >
              <option value="" disabled>
                Select...
              </option>
              {contactSubjects.map((s) => (
                <option key={s} value={s} className="text-white">
                  {s}
                </option>
              ))}
            </select>
            <ChevronDown
              size={18}
              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-muted"
            />
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm text-white/80">Message</label>
          <textarea
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tell me about your project or role..."
            rows={5}
            className={`${fieldClass} resize-y`}
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-xl bg-accent py-3.5 font-semibold text-white transition-colors hover:bg-accent-soft"
        >
          Submit
        </button>
      </motion.form>
    </div>
  );
}
