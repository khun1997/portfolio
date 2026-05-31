import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/context/ThemeContext";
import Navbar from "@/components/Navbar";
import { Toaster } from "sonner";
import "./globals.css";

const fontSans = Space_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const fontMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Khun Ye Aung | Frontend Developer Portfolio",
  description:
    "Frontend web developer portfolio showcasing projects built with Next.js, React, TypeScript, and modern web technologies.",
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.svg",
    apple: "/icon-192.png",
  },
};

export const viewport = {
  themeColor: "#d97706",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fontSans.variable} ${fontMono.variable} antialiased`}>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js');
                });
              }
            `,
          }}
        />
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Toaster
            position="bottom-right"
            closeButton
            toastOptions={{
              style: {
                background: "var(--ring)",
                color: "var(--foreground)",
                fontFamily: "var(--font-sans)",
                borderRadius: "12px",
                fontWeight: 1000,
                padding: "16px",
                border: "1px solid var(--border)",
                borderLeft: "4px solid var(--primary)",
                boxShadow:
                  "0 8px 32px rgba(0, 0, 0, 0.15), 0 2px 8px rgba(0, 0, 0, 0.06)",
              },
              className: "text-sm",
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
