"use client";

import { useRef, useEffect, useState } from "react";
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
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4 tracking-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="text-muted-foreground text-lg leading-relaxed">
              {subtitle}
            </p>
          )}
          <div className="w-12 h-1.5 bg-primary rounded-full mt-6 mx-auto" />
        </div>
        <div
          className={
            visible
              ? "animate-fade-in-up"
              : "opacity-0"
          }
        >
          {children}
        </div>
      </div>
    </section>
  );
}
