import Link from "next/link";
import { Code, Briefcase, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-light/50 py-12 text-slate-400">
      <div className="container mx-auto px-6 max-w-5xl flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm">
          © {new Date().getFullYear()} Tyler Quach. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <Link href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            <span className="sr-only">GitHub</span>
            <Code className="size-5" />
          </Link>
          <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            <span className="sr-only">LinkedIn</span>
            <Briefcase className="size-5" />
          </Link>
          <Link href="mailto:contact@example.com" className="hover:text-white transition-colors">
            <span className="sr-only">Email</span>
            <Mail className="size-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}

