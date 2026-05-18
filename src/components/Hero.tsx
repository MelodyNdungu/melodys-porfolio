"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import Link from "next/link";
import SectionDoodle from "@/components/SectionDoodle";

const ROLES = [
  "Full-Stack Engineer",
  "Fintech Builder",
  "Mountain Hiker 🏔",
  "TypeScript Lover",
  "Camping Enthusiast ⛺",
  "API Craftsman",
  "Trail Runner 🌲",
];

function TypingEffect() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(null);

  useEffect(() => {
    const current = ROLES[roleIndex];

    if (!deleting && displayed.length < current.length) {
      timeoutRef.current = setTimeout(
        () => setDisplayed(current.slice(0, displayed.length + 1)),
        70
      );
    } else if (!deleting && displayed.length === current.length) {
      timeoutRef.current = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeoutRef.current = setTimeout(
        () => setDisplayed(current.slice(0, displayed.length - 1)),
        40
      );
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [displayed, deleting, roleIndex]);

  return (
    <span className="text-[var(--accent)]">
      {displayed}
      <span className="animate-pulse">|</span>
    </span>
  );
}

const floatingShapeVariants = {
  animate: (i: number) => ({
    y: [0, -18 - i * 4, 0],
    x: [0, i % 2 === 0 ? 10 : -10, 0],
    rotate: [0, i % 2 === 0 ? 8 : -8, 0],
    transition: {
      duration: 5 + i,
      repeat: Infinity,
      ease: "easeInOut" as const,
      delay: i * 0.5,
    },
  }),
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <SectionDoodle variant="hero" />

      {/* Warm gradient backdrop */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-emerald-100/25 dark:bg-emerald-900/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-green-100/20 dark:bg-green-900/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-50/40 dark:bg-amber-950/10 rounded-full blur-3xl" />
      </div>

      {/* Floating shapes */}
      {[0, 1, 2, 3].map((i) => (
        <motion.div
          key={i}
          custom={i}
          variants={floatingShapeVariants}
          animate="animate"
          className={`absolute pointer-events-none select-none ${
            [
              "top-20 left-[10%]",
              "top-32 right-[12%]",
              "bottom-40 left-[8%]",
              "bottom-24 right-[8%]",
            ][i]
          }`}
        >
          <div
            className={`rounded-2xl border border-[var(--card-border)] bg-[var(--card)]/60 backdrop-blur-sm shadow-sm ${
              ["w-12 h-12", "w-8 h-8", "w-10 h-10", "w-14 h-14"][i]
            }`}
          />
        </motion.div>
      ))}

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10 pt-20">

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-[var(--card)] border border-[var(--card-border)] shadow-sm text-sm text-[var(--muted)]"
        >
          <Sparkles size={14} className="text-[var(--accent)]" />
          Engineer by day · Outdoorer by weekend
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-7xl font-bold tracking-tight text-[var(--foreground)] mb-4 leading-[1.1]"
        >
          Hi, I&apos;m{" "}
          <span className="relative inline-block">
            Melody
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
              className="absolute -bottom-1 left-0 right-0 h-[3px] bg-[var(--accent)] rounded-full origin-left"
            />
          </span>
        </motion.h1>

        {/* Typing role */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-2xl sm:text-3xl font-semibold text-[var(--muted)] mb-6 h-10"
        >
          <TypingEffect />
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="text-base sm:text-lg text-[var(--muted)] max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          I build fintech products and scalable web apps by day — and escape
          into the mountains on weekends. Based in Nairobi, hiking the Aberdares,
          shipping globally.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <Link
            href="#projects"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--accent)] text-white font-medium text-sm hover:bg-[var(--accent)]/90 hover:shadow-lg hover:shadow-emerald-500/20 active:scale-95 transition-all duration-200"
          >
            View Projects
            <ArrowDown size={15} className="group-hover:translate-y-0.5 transition-transform" />
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--card)] text-[var(--foreground)] font-medium text-sm border border-[var(--card-border)] hover:border-[var(--accent)]/40 hover:shadow-md active:scale-95 transition-all duration-200"
          >
            Contact Me
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-16 flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-1 text-[var(--muted)] opacity-50"
          >
            <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
            <ArrowDown size={14} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
