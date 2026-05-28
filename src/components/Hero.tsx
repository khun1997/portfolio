"use client";

import { useEffect, useState, useMemo } from "react";
import AnimatedBg from "./AnimatedBg";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const nameLetters = useMemo(() => "Khun Ye Aung".split(""), []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 pt-24 bg-background overflow-hidden"
    >
      {/* Animated background */}
      <AnimatedBg variant="amber" />

      {/* Floating decorative elements */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden z-1"
        aria-hidden="true"
      >
        <div
          className={`absolute top-1/4 left-[10%] w-3 h-3 rounded-full bg-primary/20 animate-float transition-opacity duration-1000 ${mounted ? "opacity-100" : "opacity-0"}`}
          style={{ animationDelay: "0s", animationDuration: "7s" }}
        />
        <div
          className={`absolute top-1/3 right-[15%] w-2 h-2 rounded-full bg-amber-400/30 animate-float transition-opacity duration-1000 delay-200 ${mounted ? "opacity-100" : "opacity-0"}`}
          style={{ animationDelay: "1s", animationDuration: "9s" }}
        />
        <div
          className={`absolute bottom-1/4 left-[20%] w-4 h-4 rounded-full bg-orange-300/20 animate-float transition-opacity duration-1000 delay-300 ${mounted ? "opacity-100" : "opacity-0"}`}
          style={{ animationDelay: "2s", animationDuration: "8s" }}
        />
        <div
          className={`absolute bottom-1/3 right-[25%] w-2.5 h-2.5 rounded-full bg-amber-500/25 animate-float transition-opacity duration-1000 delay-400 ${mounted ? "opacity-100" : "opacity-0"}`}
          style={{ animationDelay: "0.5s", animationDuration: "10s" }}
        />
        <div
          className={`absolute top-[60%] left-[5%] w-1.5 h-1.5 rounded-full bg-primary/30 animate-float transition-opacity duration-1000 delay-500 ${mounted ? "opacity-100" : "opacity-0"}`}
          style={{ animationDelay: "3s", animationDuration: "6s" }}
        />
        <div
          className={`absolute top-[20%] right-[8%] w-3 h-3 border border-primary/20 rounded-full animate-spin-slow transition-opacity duration-1000 delay-200 ${mounted ? "opacity-100" : "opacity-0"}`}
          style={{ animationDelay: "0s" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <div
          className={`transition-all duration-1000 ease-out ${
            mounted
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-16 scale-95"
          }`}
        >
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-[1.15] tracking-tight pb-2">
            {nameLetters.map((letter, i) => (
              <span
                key={i}
                className={`inline-block bg-linear-to-r from-amber-400 via-orange-400 to-amber-300 bg-clip-text text-transparent animate-gradient ${
                  mounted ? "animate-letter-reveal" : "opacity-0"
                }`}
                style={{
                  animationDelay: mounted ? `${i * 50}ms` : "0ms",
                  animationDuration: "0.6s",
                  display: letter === " " ? "inline-block" : "inline-block",
                  width: letter === " " ? "0.4em" : undefined,
                }}
              >
                {letter === " " ? " " : letter}
              </span>
            ))}
          </h1>
        </div>

        <div
          className={`mt-6 mb-6 transition-all duration-700 delay-150 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="relative text-lg md:text-xl text-muted-foreground font-mono border-l-2 border-primary pl-4 inline-block">
            Frontend Web Developer
            <span className="absolute -bottom-1 left-4 right-0 h-0.5 bg-primary/30 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
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
            className="group relative px-8 py-3.5 bg-primary text-primary-foreground rounded-lg font-semibold overflow-hidden transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-primary/30"
          >
            <span className="relative z-10">View Projects</span>
            <span className="absolute inset-0 bg-black/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>
          <a
            href="/cv.pdf"
            download
            className="relative inline-flex items-center gap-2 px-8 py-3.5 border-2 border-border text-foreground rounded-lg font-semibold hover:border-primary hover:text-primary transition-all duration-300 cursor-pointer group overflow-hidden"
          >
            <span className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300 rounded-lg" />
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <span className="relative z-10">Download CV</span>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      {/* <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-1000 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <div className="flex flex-col items-center gap-2 text-muted-foreground/50">
          <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-linear-to-b from-muted-foreground/50 to-transparent animate-fade-in" />
        </div>
      </div> */}
    </section>
  );
}
