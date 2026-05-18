"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isPointer, setIsPointer] = useState(false);

  const x = useSpring(0, { stiffness: 400, damping: 28 });
  const y = useSpring(0, { stiffness: 400, damping: 28 });

  useEffect(() => {
    // Only show on non-touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const handleMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    const handleOver = (e: MouseEvent) => {
      const target = e.target as Element;
      setIsPointer(
        !!(
          target.closest("a") ||
          target.closest("button") ||
          target.closest("[role='button']") ||
          (target as HTMLElement).style?.cursor === "pointer"
        )
      );
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseover", handleOver);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", handleOver);
    };
  }, [x, y]);

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[999] rounded-full border border-[var(--accent)] mix-blend-difference"
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
        animate={{ width: isPointer ? 40 : 28, height: isPointer ? 40 : 28 }}
        transition={{ duration: 0.15 }}
      />
      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[999] rounded-full bg-[var(--accent)]"
        style={{ x, y, translateX: "-50%", translateY: "-50%", width: 4, height: 4 }}
      />
    </>
  );
}
