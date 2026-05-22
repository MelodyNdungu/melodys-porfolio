"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Cpu,
  Zap,
  Heart,
  Globe,
  Coffee,
  Mountain,
  Tent,
  TreePine,
  Gamepad2,
} from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import SectionDoodle from "@/components/SectionDoodle";

const skills = [
  "TypeScript", "React", "Next.js", "Node.js", "ReactNative",
  "PostgreSQL", "REST APIs", "MaterialUI", "Tailwind CSS",
  "Git", "CI/CD", "Docker", "Stripe",
];

const stats = [
  { value: "4+", label: "Years building", icon: Code2 },
  { value: "10+", label: "Projects shipped", icon: Zap },
  { value: "3+", label: "Fintech products", icon: Globe },
  { value: "∞", label: "Coffee", icon: Coffee },
  { value: "10+", label: "Trails hiked", icon: Mountain },
];

const interests = [
  { icon: Heart, text: "UX details that delight users" },
  { icon: Cpu, text: "High-performance backend systems" },
  { icon: Mountain, text: "Hiking & summiting peaks on weekends" },
  { icon: Tent, text: "Camping under open skies, no Slack" },
  { icon: TreePine, text: "Forest trails beat noisy playlists" },
  { icon: Coffee, text: "Campfire coffee hits different" },
  { icon: Gamepad2, text: "Gaming — unwinding with a good storyline" },
];

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true as const, margin: "-50px" },
  transition: { duration: 0.5, ease: "easeOut" as const },
};

export default function About() {
  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 overflow-hidden">
      <SectionDoodle variant="about" />
      <div className="max-w-6xl mx-auto">
          <SectionTitle
          eyebrow="About Me"
          title="Code & mountains"
          subtitle="Software engineer who geeks out over clean architecture and pixel-perfect UIs — and unplugs in the mountains every chance I get."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start mt-4">
          {/* Left — bio */}
          <motion.div {...fadeInUp} className="space-y-6">
            <div className="prose max-w-none">
              <p className="text-[var(--muted)] leading-relaxed text-base">
                I&apos;ve spent the last four years designing and building products at
                the intersection of finance and technology — from payment APIs to
                customer dashboards. I care deeply about the full stack: the
                developer experience, the query performance, and the
                micro-animation on the final button.
              </p>
              <p className="text-[var(--muted)] leading-relaxed text-base mt-4">
                When I&apos;m not reading stack traces, you&apos;ll find me somewhere
                in the Kenyan highlands — boots on a muddy trail, tent on my
                back. The mountains reset something
                that code reviews can&apos;t. I come back with cleaner thinking
                and better commit messages.
              </p>
            </div>

            {/* Interests list */}
            <div className="space-y-3 pt-2">
              {interests.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3 text-sm text-[var(--muted)]">
                  <span className="w-7 h-7 rounded-lg bg-[var(--accent-light)] flex items-center justify-center flex-shrink-0">
                    <Icon size={14} className="text-[var(--accent)]" />
                  </span>
                  {text}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — stats + skills */}
          <div className="space-y-8">
            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="grid grid-cols-2 gap-3"
            >
              {stats.map(({ value, label, icon: Icon }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: 0.05 * i }}
                  whileHover={{ y: -2 }}
                  className="p-4 rounded-2xl bg-[var(--card)] border border-[var(--card-border)] shadow-sm"
                >
                  <Icon size={18} className="text-[var(--accent)] mb-2" />
                  <div className="text-2xl font-bold text-[var(--foreground)]">
                    {value}
                  </div>
                  <div className="text-xs text-[var(--muted)] mt-0.5">{label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-sm font-semibold text-[var(--foreground)] mb-3 uppercase tracking-wider">
                Tech I work with
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.25, delay: i * 0.03 }}
                    whileHover={{ scale: 1.05 }}
                    className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-[var(--card)] border border-[var(--card-border)] text-[var(--muted)] hover:border-[var(--accent)]/40 hover:text-[var(--accent)] transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
