"use client";

import { useRef, useEffect, useState, useMemo } from "react";
import AnimatedBg from "./AnimatedBg";

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  alternate?: boolean;
}

export default function Section({
  id,
  title,
  subtitle,
  children,
  className = "",
  alternate = false,
}: SectionProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const titleWords = useMemo(() => title.split(" "), [title]);

  return (
    <section
      id={id}
      ref={ref}
      className={`relative py-24 md:py-32 px-4 sm:px-8 lg:px-16 ${
        alternate ? "bg-muted/50" : ""
      } ${className}`}
    >
      <AnimatedBg variant={alternate ? "muted" : "amber"} />
      <div className="max-w-7xl mx-auto relative z-10">
        <div
          className={`max-w-2xl mx-auto text-center mb-16 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4 tracking-tight overflow-hidden">
            {titleWords.map((word, wi) => (
              <span key={wi} className="inline-block mr-[0.3em] last:mr-0">
                {word.split("").map((char, ci) => (
                  <span
                    key={ci}
                    className={`inline-block ${
                      visible ? "animate-letter-reveal" : "opacity-0"
                    }`}
                    style={{
                      animationDelay: visible ? `${wi * 150 + ci * 40}ms` : "0ms",
                    }}
                  >
                    {char === " " ? " " : char}
                  </span>
                ))}
              </span>
            ))}
          </h2>
          {subtitle && (
            <p
              className={`text-muted-foreground text-lg leading-relaxed transition-all duration-700 delay-500 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              {subtitle}
            </p>
          )}
          <div
            className={`w-12 h-1.5 bg-primary rounded-full mt-6 mx-auto transition-all duration-700 delay-700 ${
              visible ? "opacity-100 scale-100" : "opacity-0 scale-0"
            }`}
          />
        </div>
        <div
          className={`transition-all duration-700 delay-300 ${
            visible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          {children}
        </div>
      </div>
    </section>
  );
}
