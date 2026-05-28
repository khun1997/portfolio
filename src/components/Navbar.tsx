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
  const [menuOpen, setMenuOpen] = useState(false);

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

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 h-14 sm:h-16 flex items-center justify-between">
        <Link
          href="/"
          className="group text-lg sm:text-xl font-bold text-foreground hover:text-primary transition-colors"
        >
          <span className="text-primary group-hover:animate-wiggle inline-block">
            K
          </span>
          Y
        </Link>

        <div className="flex items-center gap-2 sm:gap-4">
          {/* Desktop nav */}
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

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-1.5 cursor-pointer"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 bg-foreground rounded-full transition-all duration-300 ${
                menuOpen ? "w-6 rotate-45 translate-y-1" : "w-6"
              }`}
            />
            <span
              className={`block h-0.5 bg-foreground rounded-full transition-all duration-300 ${
                menuOpen ? "opacity-0 w-0" : "w-5"
              }`}
            />
            <span
              className={`block h-0.5 bg-foreground rounded-full transition-all duration-300 ${
                menuOpen ? "w-6 -rotate-45 -translate-y-1" : "w-6"
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="px-4 pb-4 pt-2 bg-background/95 backdrop-blur-xl border-b border-border space-y-1">
          {navLinks.map((link) => {
            const sectionId = link.href.split("#")[1];
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => {
                    setActive(sectionId);
                    setMenuOpen(false);
                  }}
                  className={`block px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 ${
                    pathname === "/" && active === sectionId
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}
