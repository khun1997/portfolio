"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import Link from "next/link";
import Section from "./Section";
import { projects } from "@/data/projects";

const categories = [
  "All",
  "Learning Management System",
  "Ekyc",
  "Volunteer",
  "Chat App",
  "Landing",
];

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  return (
    <Link
      href={`/projects/${project.id}`}
      className="group block bg-card border border-border rounded-xl overflow-hidden
        hover:border-primary hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1
        transition-all duration-500 animate-fade-in-up
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="relative h-44 overflow-hidden">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-linear-to-t from-card/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      <div className="p-5">
        <span className="text-xs font-mono text-primary uppercase tracking-wider">
          {project.category}
        </span>
        <h3 className="text-lg font-bold text-card-foreground group-hover:text-primary transition-colors mt-1 mb-2">
          {project.title}
        </h3>
        <p className="text-foreground/85 text-sm leading-relaxed line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5 mt-4">
          {project.tech.slice(0, 3).map((t) => (
            <span
              key={t}
              className="text-xs px-2 py-1 rounded-md bg-primary/10 text-primary font-mono font-medium"
            >
              {t}
            </span>
          ))}
          {project.tech.length > 3 && (
            <span className="text-xs px-2 py-1 rounded-md bg-primary/10 text-primary font-mono font-medium">
              +{project.tech.length - 3}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [expanded, setExpanded] = useState(false);
  const extraRef = useRef<HTMLDivElement>(null);
  const [extraHeight, setExtraHeight] = useState(0);

  const filtered = useMemo(
    () =>
      activeCategory === "All"
        ? projects
        : projects.filter((p) => p.category === activeCategory),
    [activeCategory],
  );

  const limit = 3;
  const visible = filtered.slice(0, limit);
  const extra = filtered.slice(limit);
  const hasMore = extra.length > 0;

  useEffect(() => {
    if (extraRef.current) {
      setExtraHeight(extraRef.current.scrollHeight);
    }
  }, [filtered]);

  return (
    <Section
      id="projects"
      title="Selected Work"
      subtitle="A curated selection of projects I've built with passion and attention to detail."
    >
      {/* Filter chips */}
      <div className="flex flex-wrap gap-2 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setActiveCategory(cat);
              setExpanded(false);
            }}
            className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
              activeCategory === cat
                ? "bg-primary text-primary-foreground shadow-md shadow-primary/25"
                : "bg-muted text-muted-foreground hover:text-foreground"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* First 3 projects */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visible.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      {/* Extra projects with smooth expand/collapse */}
      <div
        className="overflow-hidden"
        style={{
          maxHeight: expanded ? `${extraHeight}px` : "0px",
          opacity: expanded ? 1 : 0,
          transition: expanded
            ? "max-height 500ms ease-out, opacity 400ms ease-out 100ms"
            : "opacity 300ms ease-out, max-height 400ms ease-out 300ms",
        }}
      >
        <div ref={extraRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {extra.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index + visible.length}
            />
          ))}
        </div>
      </div>

      {/* Show more / Show less button */}
      {hasMore && (
        <div className="flex justify-center mt-12">
          <button
            onClick={() => setExpanded(!expanded)}
            className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            {expanded ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </Section>
  );
}
