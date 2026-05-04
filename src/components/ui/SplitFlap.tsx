"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$*";

export function SplitFlap({ text, className = "" }: { text: string; className?: string }) {
  const [displayText, setDisplayText] = useState(text.replace(/./g, " "));

  useEffect(() => {
    let iteration = 0;
    let interval: NodeJS.Timeout;

    const startAnimation = () => {
      clearInterval(interval);
      iteration = 0;
      interval = setInterval(() => {
        setDisplayText((prev) =>
          text
            .split("")
            .map((letter, index) => {
              if (index < iteration) {
                return text[index];
              }
              if (letter === " ") return " ";
              return CHARS[Math.floor(Math.random() * CHARS.length)];
            })
            .join("")
        );

        if (iteration >= text.length) {
          clearInterval(interval);
        }

        iteration += 1 / 3;
      }, 30);
    };

    // Delay start for initial render effect
    const timeout = setTimeout(startAnimation, 500);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [text]);

  return (
    <motion.span className={`inline-block font-mono tracking-tighter ${className}`}>
      {displayText.split("").map((char, i) => (
        <span
          key={i}
          className={`inline-block ${
            char === " " ? "w-3" : "min-w-[1ch] text-center"
          }`}
          style={{ fontVariantNumeric: "tabular-nums" }}
        >
          {char}
        </span>
      ))}
    </motion.span>
  );
}
