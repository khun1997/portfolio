"use client";

import { useState, FormEvent } from "react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import Section from "./Section";

const socialLinks = [
  { label: "GitHub", href: "#", icon: <FaGithub size={24} style={{ color: "#333" }} /> },
  { label: "LinkedIn", href: "#", icon: <FaLinkedin size={24} style={{ color: "#0A66C2" }} /> },
  { label: "Twitter", href: "#", icon: <FaXTwitter size={24} style={{ color: "#000" }} /> },
];

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:hello@example.com?subject=Message from ${encodeURIComponent(name)}&body=${encodeURIComponent(message + "\n\nFrom: " + name + " <" + email + ">")}`;
    window.location.href = mailto;
    setSent(true);
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
          className="bg-card border border-border rounded-2xl p-8 md:p-10 space-y-5 animate-fade-in-up"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg bg-muted border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg bg-muted border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-2.5 rounded-lg bg-muted border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none"
              placeholder="Tell me about your project..."
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-all duration-200 shadow-lg shadow-primary/25 cursor-pointer"
          >
            {sent ? "Opens your email client..." : "Send Message"}
          </button>

          <p className="text-xs text-muted-foreground text-center">
            Your message will be sent via your default email client.
          </p>
        </form>

        <div className="mt-6 pt-6 border-t border-border flex justify-center gap-8">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-muted-foreground hover:text-primary transition-all duration-200 hover:-translate-y-0.5"
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
