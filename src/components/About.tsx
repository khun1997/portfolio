"use client";

import { useEffect, useRef, useState } from "react";
import AnimatedBg from "./AnimatedBg";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiFramer,
  SiGit,
  SiFigma,
} from "react-icons/si";
import { LuSmartphone } from "react-icons/lu";

interface TechItem {
  name: string;
  category: string;
  icon: React.ReactNode;
}

const techStack: TechItem[] = [
  {
    name: "React",
    category: "Framework",
    icon: <SiReact size={50} style={{ color: "#61DAFB" }} />,
  },
  { name: "Next.js", category: "Framework", icon: <SiNextdotjs size={40} /> },
  {
    name: "TypeScript",
    category: "Language",
    icon: <SiTypescript size={50} style={{ color: "#3178C6" }} />,
  },
  {
    name: "JavaScript",
    category: "Language",
    icon: <SiJavascript size={50} style={{ color: "#F7DF1E" }} />,
  },
  // {
  //   name: "HTML5",
  //   category: "Language",
  //   icon: <SiHtml5 size={50} style={{ color: "#E34F26" }} />,
  // },
  // {
  //   name: "CSS3",
  //   category: "Language",
  //   icon: <SiCss size={50} style={{ color: "#1572B6" }} />,
  // },
  {
    name: "Tailwind CSS",
    category: "Styling",
    icon: <SiTailwindcss size={50} style={{ color: "#06B6D4" }} />,
  },
  {
    name: "Framer Motion",
    category: "Animation",
    icon: <SiFramer size={50} style={{ color: "#0055FF" }} />,
  },
  {
    name: "Git",
    category: "Tool",
    icon: <SiGit size={50} style={{ color: "#F05032" }} />,
  },
  {
    name: "Figma",
    category: "Design",
    icon: <SiFigma size={50} style={{ color: "#F24E1E" }} />,
  },
  {
    name: "Responsive Design",
    category: "Design",
    icon: <LuSmartphone size={50} />,
  },
];

export default function About() {
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
      { threshold: 0.05 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-24 md:py-32 px-4 sm:px-8 lg:px-16 bg-muted/50"
    >
      <AnimatedBg variant="muted" />
      <div className="max-w-7xl mx-auto relative z-10">
        {/* About Me */}
        <div
          className={`max-w-3xl mx-auto text-center mb-20 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4 tracking-tight">
            About Me
          </h2>
          <div
            className={`w-12 h-1.5 bg-primary rounded-full mb-8 mx-auto transition-all duration-700 delay-300 ${
              visible ? "opacity-100 scale-100" : "opacity-0 scale-0"
            }`}
          />
          <div className="space-y-4 text-foreground leading-relaxed">
            <p
              className={`text-lg transition-all duration-700 delay-200 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              I&apos;m a Frontend Web Developer passionate about building
              beautiful, responsive, and performant user interfaces. I
              specialize in React and modern JavaScript ecosystems, turning
              complex designs into seamless web experiences.
            </p>
            <p
              className={`text-lg transition-all duration-700 delay-400 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              I focus on writing clean, maintainable code and staying up-to-date
              with the latest frontend technologies. Every project I work on is
              an opportunity to push the boundaries of what&apos;s possible in
              the browser.
            </p>
          </div>

          {/* Download CV */}
          <a
            href="/cv.pdf"
            download
            className="group relative inline-flex items-center gap-2 mt-8 px-8 py-3.5 bg-primary text-primary-foreground rounded-lg font-semibold overflow-hidden transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-primary/30"
          >
            <svg
              className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:-translate-y-0.5"
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
            <span className="absolute inset-0 bg-black/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>
        </div>

        {/* Tech Stack */}
        <div
          className={`transition-all duration-700 delay-300 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h3
            className={`text-2xl md:text-3xl font-bold text-foreground mb-2 tracking-tight text-center transition-all duration-700 delay-400 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Tech Stack
          </h3>
          <p
            className={`text-muted-foreground mb-10 text-center transition-all duration-700 delay-500 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Technologies I work with on a daily basis.
          </p>

          <div className="flex flex-wrap justify-center gap-5 max-w-4xl mx-auto">
            {techStack.map((tech, i) => (
              <span
                key={tech.name}
                className={`inline-flex items-center justify-center w-18 h-18 rounded-2xl bg-card hover:bg-card hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/5 hover:animate-wiggle transition-all duration-300 cursor-default ${
                  visible ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{
                  animationDelay: visible ? `${600 + i * 60}ms` : "0ms",
                }}
                title={tech.name}
              >
                {tech.icon}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
