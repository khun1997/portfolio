import type { Metadata } from "next";
import "./globals.css";
import Providers from "./provider";

export const metadata: Metadata = {
  title: " KYA Portfolio",
  description: "Khun ye aung's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Khun Ye Aung's Portfolio</title>
        <meta name="title" content="Khun Ye Aung's Portfolio" />
        <meta
          name="description"
          content="Hi there! I'm Khun Ye Aung, a frontend web developer specializing in
            creating dynamic, user-friendly web applications using JavaScript,
            TypeScript, ReactJS, NextJS, and AstroJS. With a solid foundation in
            backend technologies as well, I bring a full-stack approach to
            building scalable, high-performance websites and applications."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ibb.co/7yZ9ZL4" />
        <meta property="og:title" content="Khun Ye Aung's Portfolio" />
        <meta
          property="og:description"
          content="Hi there! I'm Khun Ye Aung, a frontend web developer specializing in
            creating dynamic, user-friendly web applications using JavaScript,
            TypeScript, ReactJS, NextJS, and AstroJS. With a solid foundation in
            backend technologies as well, I bring a full-stack approach to
            building scalable, high-performance websites and applications."
        />
        <meta property="og:image" content="https://ibb.co/7yZ9ZL4" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://ibb.co/7yZ9ZL4" />
        <meta property="twitter:title" content="Khun Ye Aung's Portfolio" />
        <meta
          property="twitter:description"
          content="Hi there! I'm Khun Ye Aung, a frontend web developer specializing in
            creating dynamic, user-friendly web applications using JavaScript,
            TypeScript, ReactJS, NextJS, and AstroJS. With a solid foundation in
            backend technologies as well, I bring a full-stack approach to
            building scalable, high-performance websites and applications."
        />
        <meta property="twitter:image" content="https://ibb.co/7yZ9ZL4" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
