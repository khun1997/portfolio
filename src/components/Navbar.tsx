"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { href: "/#hero", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#projects", label: "Projects" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      if (pathname !== "/") return;
      const sections = navLinks.map((l) => l.href.split("#")[1]);
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActive(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="group text-xl font-bold text-foreground hover:text-primary transition-colors"
        >
          <span className="text-primary group-hover:animate-wiggle inline-block">
            K
          </span>
          Y
        </Link>

        <div className="flex items-center gap-4 md:gap-8">
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const sectionId = link.href.split("#")[1];
              return (
                <li key={link.href} className="group">
                  <Link
                    href={link.href}
                    onClick={() => setActive(sectionId)}
                    className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 overflow-hidden ${
                      pathname === "/" && active === sectionId
                        ? "text-primary "
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    }`}
                  >
                    <span className="relative z-10">{link.label}</span>
                    <span
                      className={`absolute bottom-0 left-2 right-2 h-0.5 bg-primary rounded-full transition-transform duration-300 ${
                        pathname === "/" && active === sectionId
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
