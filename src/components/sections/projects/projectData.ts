import ConifeLanding from "@/../public/image/project/confie_landing.png";
import ConfieWaitlist from "@/../public/image/project/confie_waitlist.png";
import CSOAEkyc from "@/../public/image/project/csoa-ekyc.png";
import CSOALanding from "@/../public/image/project/csoa-landing.png";
import CSOAMain from "@/../public/image/project/csoa-main.png";
import ReactXCampMyanmar from "@/../public/image/project/react-x-camp-myanmar.png";
import Portfolio from "@/../public/image/project/portfolio.png";

export const projectsData = [
  {
    id: 1,
    name: "Confie Landing",
    description:
      "A personal portfolio website to showcase my projects and skills.",
    techStack: ["ReactJS", "NextJS", "TypeScript"],
    rating: 4.9,
    image: ConifeLanding,
    type: "Landing",
  },
  {
    id: 2,
    name: "CSOA Learner Site",
    description:
      "A task management application to organize and track daily tasks.",
    techStack: ["ReactJS", "NodeJS", "MongoDB"],
    rating: 4.4,
    image: CSOAMain,
    type: "LMS",
  },

  {
    id: 3,
    name: "ReactXCamp Myanmar",
    description:
      "A modern blog platform with support for markdown posts, tags, and comments.",
    techStack: ["AstroJS", "NextJS", "Git"],
    rating: 4.7,
    image: ReactXCampMyanmar,
    type: "Volunteer",
  },
  {
    id: 4,
    name: "CSOA Landing",
    description: "A real-time chat application with WebSocket integration.",
    techStack: ["ReactJS", "NodeJS", "WebSocket"],
    rating: 4.6,
    image: CSOALanding,
    type: "Landing",
  },
  {
    id: 5,
    name: "Confie Waitlist",
    description:
      "A fully functional e-commerce website with product catalog, cart, and checkout.",
    techStack: ["ReactJS", "NodeJS", "PostgreSQL"],
    rating: 4.8,
    image: ConfieWaitlist,
    type: "Landing",
  },
  {
    id: 6,
    name: "CSOA Ekyc",
    description:
      "A modern blog platform with support for markdown posts, tags, and comments.",
    techStack: ["AstroJS", "NextJS", "Git"],
    rating: 4.7,
    image: CSOAEkyc,
    type: "Ekyc",
  },
  {
    id: 7,
    name: "KYA Portfolio",
    description:
      "A modern blog platform with support for markdown posts, tags, and comments.",
    techStack: ["AstroJS", "NextJS", "Git"],
    rating: 4.7,
    image: Portfolio,
    type: "Portfolio",
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
