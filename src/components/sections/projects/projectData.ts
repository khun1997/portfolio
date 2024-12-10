"use client";
import ConifeLanding from "@/../public/image/project/confie_landing.png";
import ConfieWaitlist from "@/../public/image/project/confie_waitlist.png";
import CSOAEkyc from "@/../public/image/project/csoa-ekyc.png";
import CSOALanding from "@/../public/image/project/csoa-landing.png";
import CSOAMain from "@/../public/image/project/csoa-main.png";
import ReactXCampMyanmar from "@/../public/image/project/react-x-camp-myanmar.png";
import Portfolio from "@/../public/image/project/portfolio.png";
import { StaticImageData } from "next/image";

type Documentation = {
  id: number;
  text: string;
};

export type ProjecType = {
  id: number;
  name: string;
  description: string;
  techStack: string[];
  rating: number;
  mainImage: StaticImageData | string;
  images?: (StaticImageData | string)[];
  type: string;
  documentation?: Documentation[];
  website?: string;
};

export const projectsData: ProjecType[] = [
  {
    id: 1,
    name: "Confie Landing",
    description:
      "A personal portfolio website to showcase my projects and skills.",
    techStack: ["ReactJS", "NextJS", "TypeScript"],
    rating: 4.9,
    mainImage: ConifeLanding,
    images: [ConifeLanding, ConfieWaitlist],
    type: "Landing",
    documentation: [
      { id: 1, text: "Step 1: Install dependencies using npm or yarn." },
      { id: 2, text: "Step 2: Configure your environment variables." },
      { id: 3, text: "Step 3: Start the development server." },
    ],
    website: "https://confie-landing.vercel.app/",
  },
  {
    id: 2,
    name: "CSOA Learner Site",
    description:
      "A task management application to organize and track daily tasks.",
    techStack: ["ReactJS", "NodeJS", "MongoDB"],
    rating: 4.4,
    mainImage: CSOAMain,
    images: [CSOAMain],
    type: "LMS",
    documentation: [
      { id: 1, text: "Step 1: Install dependencies using npm or yarn." },
      { id: 2, text: "Step 2: Configure your environment variables." },
      { id: 3, text: "Step 3: Start the development server." },
    ],
    website: "https://www.csoacademymm.org/learning/search",
  },

  {
    id: 3,
    name: "ReactXCamp Myanmar",
    description:
      "A modern blog platform with support for markdown posts, tags, and comments.",
    techStack: ["AstroJS", "NextJS", "Git"],
    rating: 4.7,
    mainImage: ReactXCampMyanmar,
    images: [ReactXCampMyanmar],
    type: "Volunteer",
    documentation: [
      { id: 1, text: "Step 1: Install dependencies using npm or yarn." },
      { id: 2, text: "Step 2: Configure your environment variables." },
      { id: 3, text: "Step 3: Start the development server." },
    ],
    website: "https://=.com",
  },
  {
    id: 4,
    name: "CSOA Landing",
    description: "A real-time chat application with WebSocket integration.",
    techStack: ["ReactJS", "NodeJS", "WebSocket"],
    rating: 4.6,
    mainImage: CSOALanding,
    images: [CSOALanding],
    type: "Landing",
    documentation: [
      { id: 1, text: "Step 1: Install dependencies using npm or yarn." },
      { id: 2, text: "Step 2: Configure your environment variables." },
      { id: 3, text: "Step 3: Start the development server." },
    ],
    website: "https://www.csoacademymm.org/",
  },
  {
    id: 5,
    name: "Confie Waitlist",
    description:
      "A fully functional e-commerce website with product catalog, cart, and checkout.",
    techStack: ["ReactJS", "NodeJS", "PostgreSQL"],
    rating: 4.8,
    mainImage: ConfieWaitlist,
    images: [ConfieWaitlist],
    type: "Landing",
    documentation: [
      { id: 1, text: "Step 1: Install dependencies using npm or yarn." },
      { id: 2, text: "Step 2: Configure your environment variables." },
      { id: 3, text: "Step 3: Start the development server." },
    ],
    website: "https://confie.ai/",
  },
  {
    id: 6,
    name: "CSOA Ekyc",
    description:
      "A modern blog platform with support for markdown posts, tags, and comments.",
    techStack: ["AstroJS", "NextJS", "Git"],
    rating: 4.7,
    mainImage: CSOAEkyc,
    images: [CSOAEkyc],
    type: "Ekyc",
    documentation: [
      { id: 1, text: "Step 1: Install dependencies using npm or yarn." },
      { id: 2, text: "Step 2: Configure your environment variables." },
      { id: 3, text: "Step 3: Start the development server." },
    ],
    website: "https://-.com",
  },
  {
    id: 7,
    name: "KYA Portfolio",
    description:
      "A modern blog platform with support for markdown posts, tags, and comments.",
    techStack: ["AstroJS", "NextJS", "Git"],
    rating: 4.7,
    mainImage: Portfolio,
    images: [Portfolio],
    type: "Portfolio",
    documentation: [
      { id: 1, text: "Step 1: Install dependencies using npm or yarn." },
      { id: 2, text: "Step 2: Configure your environment variables." },
      { id: 3, text: "Step 3: Start the development server." },
    ],
    website: "https://-.com",
    // need to add
  },

  //   {
  //     id: 6,
  //     name: "Weather App",
  //     description:
  //       "A weather forecasting application with current and weekly predictions.",
  //     techStack: ["ReactJS", "TypeScript", "OpenWeatherAPI"],
  //     rating: 4.5,
  //     image: One,
  //     type: "Utility",
  //   },
  //   {
  //     id: 7,
  //     name: "Finance Tracker",
  //     description: "A financial tracking tool to monitor expenses and savings.",
  //     techStack: ["ReactJS", "NodeJS", "PostgreSQL"],
  //     rating: 4.3,
  //     image: One,
  //     type: "Finance",
  //   },
];
