"use client";

import { motion } from "framer-motion";
import { ArrowUp, Heart } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative py-10 px-4 sm:px-6 border-t border-[var(--card-border)] overflow-hidden">
      {/* Subtle background blob */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center opacity-30 pointer-events-none">
        <div className="w-96 h-96 bg-[var(--accent)]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center sm:text-left"
        >
          <div className="font-bold text-[var(--foreground)] mb-0.5">
            Melody
            <span className="text-[var(--accent)]">.</span>
          </div>
          <p className="text-xs text-[var(--muted)] flex items-center gap-1 justify-center sm:justify-start">
            Built using Next.js &amp; Tailwind CSS
          </p>
        </motion.div>

        {/* Right */}
        <div className="flex items-center gap-4">
          <p className="text-xs text-[var(--muted)]">
            © {new Date().getFullYear()} Melody. All rights reserved.
          </p>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -2, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Back to top"
            className="w-9 h-9 rounded-full bg-[var(--card)] border border-[var(--card-border)] flex items-center justify-center text-[var(--muted)] hover:text-[var(--accent)] hover:border-[var(--accent)]/40 transition-all"
          >
            <ArrowUp size={15} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
