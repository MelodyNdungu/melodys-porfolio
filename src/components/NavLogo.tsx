"use client";

import { motion } from "framer-motion";

interface NavLogoProps {
  size?: number;
  className?: string;
}

/**
 * Custom "M" monogram mark — two pillars bridged by a soft arc,
 * with a small accent dot that echoes the blue brand colour.
 */
export default function NavLogo({ size = 34, className = "" }: NavLogoProps) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      whileHover={{ scale: 1.08, rotate: 3 }}
      transition={{ type: "spring", stiffness: 340, damping: 18 }}
      aria-label="Melody logo"
    >
      {/* Background squircle */}
      <rect
        x="1"
        y="1"
        width="32"
        height="32"
        rx="9"
        fill="var(--accent)"
      />

      {/* "M" letterform — two strokes meeting at a centre valley */}
      {/* Left leg */}
      <path
        d="M8 24 L8 11"
        stroke="white"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      {/* Left diagonal down to centre */}
      <path
        d="M8 11 L17 19"
        stroke="white"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Right diagonal up from centre */}
      <path
        d="M17 19 L26 11"
        stroke="white"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Right leg */}
      <path
        d="M26 11 L26 24"
        stroke="white"
        strokeWidth="2.6"
        strokeLinecap="round"
      />

      {/* Accent dot at the valley */}
      <circle cx="17" cy="19" r="2" fill="white" opacity="0.85" />
    </motion.svg>
  );
}
