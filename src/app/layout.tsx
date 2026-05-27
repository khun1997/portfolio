import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/context/ThemeContext";
import Navbar from "@/components/Navbar";
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fontSans.variable} ${fontMono.variable} antialiased`}
      >
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
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
