"use client";

import { useState } from "react";
import {
  FaFacebook,
  FaLinkedin,
  FaTelegram,
  FaWhatsapp,
} from "react-icons/fa6";
import { SiLine } from "react-icons/si";
import Section from "./Section";

const socialLinks = [
  {
    label: "Facebook",
    href: "#",
    icon: <FaFacebook size={32} style={{ color: "#1877F2" }} />,
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: <FaLinkedin size={32} style={{ color: "#0A66C2" }} />,
  },
  {
    label: "Telegram",
    href: "#",
    icon: <FaTelegram size={32} style={{ color: "#26A5E4" }} />,
  },
  {
    label: "Line",
    href: "#",
    icon: <SiLine size={32} style={{ color: "#00C300" }} />,
  },
  {
    label: "WhatsApp",
    href: "#",
    icon: <FaWhatsapp size={32} style={{ color: "#25D366" }} />,
  },
];

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to send message.");
      }

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  return (
    <Section
      id="contact"
      title="Get In Touch"
      subtitle="Have a project in mind or just want to say hello? I'd love to hear from you."
    >
      <div className="max-w-xl mx-auto">
        <form
          onSubmit={handleSubmit}
          className="bg-card border border-border rounded-2xl p-8 md:p-10 space-y-5 animate-fade-in-up hover:border-primary/30 transition-all duration-500"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="animate-fade-in-up" style={{ animationDelay: "200ms" }}>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={status === "loading"}
                className="w-full px-4 py-2.5 rounded-lg bg-muted border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 disabled:opacity-50"
                placeholder="Your name"
              />
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: "300ms" }}>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === "loading"}
                className="w-full px-4 py-2.5 rounded-lg bg-muted border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 disabled:opacity-50"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: "400ms" }}>
            <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              disabled={status === "loading"}
              className="w-full px-4 py-2.5 rounded-lg bg-muted border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 resize-none disabled:opacity-50"
              placeholder="Tell me about your project..."
            />
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: "500ms" }}>
            <button
              type="submit"
              disabled={status === "loading"}
              className="group relative w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold overflow-hidden transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.02] active:scale-[0.98] cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              <span className="relative z-10 inline-flex items-center gap-2">
                {status === "loading" ? (
                  <>
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                    </svg>
                    Sending...
                  </>
                ) : status === "success" ? (
                  <>Message sent!</>
                ) : (
                  "Send Message"
                )}
              </span>
              <span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
          </div>

          {status === "error" && (
            <p className="text-sm text-destructive text-center animate-fade-in">
              {errorMsg}
            </p>
          )}
          {status === "success" && (
            <p className="text-xs text-muted-foreground text-center animate-fade-in">
              Thanks! I&apos;ll get back to you soon.
            </p>
          )}
          {status === "idle" && (
            <p className="text-xs text-muted-foreground text-center animate-fade-in" style={{ animationDelay: "600ms" }}>
              Your message will be sent via Resend.
            </p>
          )}
        </form>

        <div className="mt-6 pt-6 border-t border-border flex justify-center gap-6 sm:gap-8 flex-wrap">
          {socialLinks.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              className="text-muted-foreground hover:text-primary transition-all duration-200 hover:-translate-y-1 hover:scale-110 animate-fade-in-up"
              style={{ animationDelay: `${700 + i * 100}ms` }}
              aria-label={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}
