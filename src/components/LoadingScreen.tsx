"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 2000);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" as const } }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[var(--background)]"
        >
          {/* Rotating irregular squircle ring */}
          <div className="relative w-20 h-20 mb-7">
            {/* Outer spinning irregular ring */}
            <motion.svg
              viewBox="0 0 80 80"
              className="absolute inset-0 w-full h-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "linear" as const }}
            >
              <path
                d="M40 6 C55 4, 74 14, 76 30 C78 46, 68 70, 52 74 C36 78, 10 68, 6 52 C2 36, 14 8, 40 6 Z"
                fill="none"
                stroke="var(--card-border)"
                strokeWidth="3"
              />
              <path
                d="M40 6 C55 4, 74 14, 76 30 C78 46, 68 70, 52 74 C36 78, 10 68, 6 52 C2 36, 14 8, 40 6 Z"
                fill="none"
                stroke="var(--accent)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray="60 180"
                strokeDashoffset="0"
              />
            </motion.svg>

            {/* Inner counter-rotating smaller shape */}
            <motion.svg
              viewBox="0 0 80 80"
              className="absolute inset-0 w-full h-full scale-50"
              animate={{ rotate: -360 }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "linear" as const }}
            >
              <path
                d="M40 12 C50 8, 66 18, 68 32 C70 46, 60 64, 46 68 C32 72, 14 62, 12 48 C10 34, 22 16, 40 12 Z"
                fill="none"
                stroke="var(--accent)"
                strokeWidth="5"
                strokeLinecap="round"
                strokeDasharray="30 130"
              />
            </motion.svg>

            {/* Center dot pulse */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" as const }}
            >
              <div className="w-2 h-2 rounded-full bg-[var(--accent)]" />
            </motion.div>
          </div>

          {/* Name */}
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="text-sm font-semibold tracking-[0.2em] uppercase text-[var(--muted)]"
          >
            melody
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

