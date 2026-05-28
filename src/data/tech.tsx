import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiFramer,
  SiGit,
  SiAstro,
  SiStyledcomponents,
  SiMui,
  SiSocketdotio,
} from "react-icons/si";

interface TechItem {
  name: string;
  category: string;
  icon: React.ReactNode;
}

export const techStack: TechItem[] = [
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
  {
    name: "Astro",
    category: "Framework",
    icon: <SiAstro size={50} style={{ color: "#BC52EE" }} />,
  },

  {
    name: "Tailwind CSS",
    category: "Styling",
    icon: <SiTailwindcss size={50} style={{ color: "#06B6D4" }} />,
  },
  {
    name: "Styled Components",
    category: "Styling",
    icon: <SiStyledcomponents size={50} style={{ color: "#DB7093" }} />,
  },
  {
    name: "MUI",
    category: "Framework",
    icon: <SiMui size={50} style={{ color: "#007FFF" }} />,
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
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="50"
        height="50"
        viewBox="0 0 48 48"
      >
        <path
          fill="#e64a19"
          d="M26,17h-8c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h8V17z"
        ></path>
        <path
          fill="#7c4dff"
          d="M25,31h-7c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h7V31z"
        ></path>
        <path
          fill="#66bb6a"
          d="M18,45L18,45c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h7v7C25,41.866,21.866,45,18,45z"
        ></path>
        <path
          fill="#ff7043"
          d="M32,17h-7V3h7c3.866,0,7,3.134,7,7v0C39,13.866,35.866,17,32,17z"
        ></path>
        <circle cx="32" cy="24" r="7" fill="#29b6f6"></circle>
      </svg>
    ),
  },
  {
    name: "Firebase",
    category: "Backend",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="50"
        height="50"
        viewBox="0 0 48 48"
      >
        <path
          fill="#ff8f00"
          d="M8,37L23.234,8.436c0.321-0.602,1.189-0.591,1.494,0.02L30,19L8,37z"
        ></path>
        <path
          fill="#ffa000"
          d="M8,36.992l5.546-34.199c0.145-0.895,1.347-1.089,1.767-0.285L26,22.992L8,36.992z"
        ></path>
        <path
          fill="#ff6f00"
          d="M8.008 36.986L8.208 36.829 25.737 22.488 20.793 13.012z"
        ></path>
        <path
          fill="#ffc400"
          d="M8,37l26.666-25.713c0.559-0.539,1.492-0.221,1.606,0.547L40,37l-15,8.743 c-0.609,0.342-1.352,0.342-1.961,0L8,37z"
        ></path>
      </svg>
    ),
  },
  {
    name: "Socket.io",
    category: "Real-time",
    icon: <SiSocketdotio size={50} style={{ color: "#aeacac" }} />,
  },
  {
    name: "Zustand",
    category: "State Management",
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="50"
        height="50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 4C7.58 4 4 7.58 4 12s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8z"
          fill="#b5572b"
        />
        <path
          d="M8.5 6.5C6.5 5.5 4.5 6 4 7.5c-.5 1.5.5 3 2 3.5"
          fill="#b5572b"
        />
        <path
          d="M15.5 6.5c2-1 4-.5 4.5 1 .5 1.5-.5 3-2 3.5"
          fill="#b5572b"
        />
        <path
          d="M8.5 7.5c-1.2-.6-2.3-.3-2.6.4-.3.7.4 1.4 1.4 1.6"
          fill="#d4845a"
        />
        <path
          d="M15.5 7.5c1.2-.6 2.3-.3 2.6.4.3.7-.4 1.4-1.4 1.6"
          fill="#d4845a"
        />
        <circle cx="9" cy="11.5" r="1.2" fill="#3d2b1f" />
        <circle cx="15" cy="11.5" r="1.2" fill="#3d2b1f" />
        <circle cx="9.4" cy="11.2" r="0.4" fill="white" />
        <circle cx="15.4" cy="11.2" r="0.4" fill="white" />
        <ellipse cx="12" cy="14.5" rx="3" ry="2" fill="#d4845a" />
        <ellipse cx="12" cy="14" rx="1.2" ry="0.8" fill="#3d2b1f" />
        <path
          d="M11 15.5c.6.5 1.4.5 2 0"
          stroke="#3d2b1f"
          strokeWidth="0.4"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];
