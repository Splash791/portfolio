"use client";

import * as React from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
];

export function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setIsScrolled(latest > 50);
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={cn(
        "fixed top-0 inset-x-0 z-50 flex items-center justify-center pt-4 pb-4 px-4 transition-colors duration-300",
        isScrolled ? "bg-navy/80 backdrop-blur-md border-b border-white/5" : "bg-transparent"
      )}
    >
      <nav className="flex items-center gap-8 rounded-full bg-white/5 px-6 py-2 backdrop-blur-md border border-white/10 shadow-sm">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
          >
            {item.name}
          </Link>
        ))}
        <Link
          href="#contact"
          className="text-sm font-medium text-slate-900 bg-sand px-4 py-1.5 rounded-full hover:bg-white transition-colors"
        >
          Contact
        </Link>
      </nav>
    </motion.header>
  );
}
