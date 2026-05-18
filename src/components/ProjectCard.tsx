"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  url: string;
  color: string;
  index: number;
  mockContent?: React.ReactNode;
}

export default function ProjectCard({
  title,
  description,
  tags,
  url,
  color,
  index,
  mockContent,
}: ProjectCardProps) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
      className={`group grid lg:grid-cols-2 gap-8 items-center ${
        !isEven ? "lg:grid-flow-dense" : ""
      }`}
    >
      {/* Browser mock */}
      <div
        className={`relative rounded-2xl overflow-hidden border border-[var(--card-border)] shadow-lg hover:shadow-xl transition-shadow duration-300 ${
          !isEven ? "lg:col-start-2" : ""
        }`}
      >
        {/* Browser chrome */}
        <div className="bg-[var(--card)] px-4 py-3 border-b border-[var(--card-border)] flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-400/70" />
            <span className="w-3 h-3 rounded-full bg-yellow-400/70" />
            <span className="w-3 h-3 rounded-full bg-green-400/70" />
          </div>
          <div className="flex-1 mx-3">
            <div className="h-5 rounded-md bg-[var(--warm-100,#f5f4f0)] dark:bg-[var(--card-border)] flex items-center px-3">
              <span className="text-xs text-[var(--muted)] font-mono truncate">
                {url.replace("https://", "")}
              </span>
            </div>
          </div>
          <ExternalLink size={13} className="text-[var(--muted)]" />
        </div>

        {/* Preview area */}
        <div
          className={`relative h-48 sm:h-64 overflow-hidden ${color}`}
          style={{ background: color }}
        >
          {mockContent ?? (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="grid grid-cols-3 gap-3 p-6 w-full max-w-xs opacity-60">
                {[...Array(9)].map((_, i) => (
                  <div
                    key={i}
                    className={`rounded-lg bg-white/20 ${
                      i === 0 ? "col-span-3 h-10" : "h-14"
                    }`}
                  />
                ))}
              </div>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      </div>

      {/* Text content */}
      <div
        className={`space-y-4 ${!isEven ? "lg:col-start-1 lg:row-start-1" : ""}`}
      >
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium px-2.5 py-1 rounded-full bg-[var(--accent-light)] text-[var(--accent)]"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-2xl sm:text-3xl font-bold text-[var(--foreground)] tracking-tight">
          {title}
        </h3>

        <p className="text-[var(--muted)] leading-relaxed text-base">
          {description}
        </p>

        <Link
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="group/btn inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)] hover:underline underline-offset-4 transition-all"
        >
          View Project
          <ArrowUpRight
            size={15}
            className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform"
          />
        </Link>
      </div>
    </motion.div>
  );
}
