"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Typewriter() {
  const fullText = "Christopher Crain";
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText((prev) => fullText.substring(0, index + 1)); // Use substring for accuracy
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100); // Adjust speed

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.p
      key="typewriter"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="text-3xl text-center font-[family-name:var(--font-geist-mono)] bg-neutral-200 dark:bg-neutral-800 px-2 py-1 rounded font-semibold"
    >
      {displayText}
    </motion.p>
  );
}
