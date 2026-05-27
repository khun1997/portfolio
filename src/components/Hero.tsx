"use client";

import { useEffect, useState } from "react";
import AnimatedBg from "./AnimatedBg";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 pt-24 bg-background"
    >
      {/* Animated background */}
      <AnimatedBg variant="amber" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <div
          className={`transition-all duration-1000 ease-out ${
            mounted ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-16 scale-95"
          }`}
        >
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-[1.15] tracking-tight pb-2 bg-linear-to-r from-amber-400 via-orange-400 to-amber-300 bg-clip-text text-transparent animate-gradient">
            Khun Ye Aung
          </h1>
        </div>

        <div
          className={`mt-6 mb-6 transition-all duration-700 delay-150 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-lg md:text-xl text-muted-foreground font-mono border-l-2 border-primary pl-4">
            Frontend Web Developer
          </span>
        </div>

        <p
          className={`text-foreground text-lg leading-relaxed max-w-lg mx-auto mb-10 transition-all duration-700 delay-300 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          I craft beautiful, performant web experiences with modern frontend
          technologies. Passionate about clean code and intuitive design.
        </p>

        <div
          className={`flex items-center justify-center gap-4 transition-all duration-700 delay-400 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a
            href="#projects"
            className="group relative px-8 py-3.5 bg-primary text-primary-foreground rounded-lg font-semibold overflow-hidden transition-all duration-300 cursor-pointer"
          >
            <span className="relative z-10">View Projects</span>
            <span className="absolute inset-0 bg-black/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>
          <a
            href="/cv.pdf"
            download
            className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-border text-foreground rounded-lg font-semibold hover:border-primary hover:text-primary transition-all duration-300 cursor-pointer"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
