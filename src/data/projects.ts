export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  category: string;
  imageUrl: string;
  images: string[];
  liveUrl?: string;
  repoUrl?: string;
  tasks: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "CSO Academy Learning Platform",
    description:
      "Full-featured online store with cart, checkout, and admin dashboard.",
    longDescription:
      "Built a comprehensive e-commerce platform featuring a polished product browsing experience with advanced filtering, a real-time shopping cart with animations, secure Stripe checkout integration, and a full admin dashboard for inventory management — all with a focus on smooth UI interactions and responsive design.",
    tech: [
      "Next.js",
      "TypeScript",
      "React Query",
      "Stripe",
      "Tailwind CSS",
      "Zustand",
    ],
    category: "Learning Management System",
    imageUrl: "https://picsum.photos/seed/ecommerce/600/400",
    images: [
      "https://picsum.photos/seed/ecommerce1/1200/675",
      "https://picsum.photos/seed/ecommerce2/1200/675",
      "https://picsum.photos/seed/ecommerce3/1200/675",
    ],
    liveUrl: "#",
    repoUrl: "#",
    tasks: [
      "Built a responsive product catalog with advanced filtering and search",
      "Implemented a real-time shopping cart with optimistic UI updates",
      "Integrated Stripe checkout for secure payment processing",
      "Designed an admin dashboard for inventory and order management",
    ],
  },
  {
    id: 2,
    title: "COP Learning Platform",
    description:
      "Kanban-style project management with drag-and-drop and real-time sync.",
    longDescription:
      "Developed a collaborative task management application inspired by Trello. Features include smooth drag-and-drop card reordering, real-time updates via WebSockets, team collaboration with role-based views, due date tracking, file attachments, and activity logging. The app uses optimistic UI updates for a seamless user experience.",
    tech: ["React", "TypeScript", "Zustand", "DnD Kit", "CSS Modules", "Vite"],
    category: "Learning Management System",
    imageUrl: "https://picsum.photos/seed/taskapp/600/400",
    images: [
      "https://picsum.photos/seed/taskapp1/1200/675",
      "https://picsum.photos/seed/taskapp2/1200/675",
      "https://picsum.photos/seed/taskapp3/1200/675",
    ],
    liveUrl: "#",
    repoUrl: "#",
    tasks: [
      "Built a Kanban board with smooth drag-and-drop card reordering",
      "Implemented real-time collaboration updates via WebSocket",
      "Added due date tracking, file attachments, and activity logging",
      "Used optimistic UI updates for a seamless user experience",
    ],
  },
  {
    id: 3,
    title: "Ekyc For CSOA",
    description:
      "Real-time weather forecasts with beautiful data visualizations.",
    longDescription:
      "Created an interactive weather dashboard that displays real-time forecasts using the OpenWeatherMap API. Features include 7-day forecasts, hourly breakdowns, interactive charts for temperature and precipitation trends, location search with geolocation support, and animated weather icons that reflect current conditions.",
    tech: [
      "Next.js",
      "TypeScript",
      "Chart.js",
      "OpenWeather API",
      "Geolocation API",
    ],
    category: "Ekyc",
    imageUrl: "https://picsum.photos/seed/weather/600/400",
    images: [
      "https://picsum.photos/seed/weather1/1200/675",
      "https://picsum.photos/seed/weather2/1200/675",
      "https://picsum.photos/seed/weather3/1200/675",
    ],
    liveUrl: "#",
    repoUrl: "#",
    tasks: [
      "Integrated OpenWeatherMap API for real-time forecast data",
      "Built interactive charts for temperature and precipitation trends",
      "Added location search with geolocation support",
      "Created animated weather icons reflecting current conditions",
    ],
  },
  {
    id: 4,
    title: "Lucky Draw App for ReactXCamp Myanmar",
    description:
      "Analytics dashboard for tracking social media performance metrics.",
    longDescription:
      "Designed and built a comprehensive analytics dashboard that aggregates data from multiple social media platforms. Provides insights on engagement rates, follower growth, optimal posting times, content performance comparisons, and automated report generation — with interactive D3.js visualizations and responsive data tables.",
    tech: ["React", "D3.js", "TypeScript", "Tailwind CSS", "Recharts", "Vite"],
    category: "Volunteer",
    imageUrl: "https://picsum.photos/seed/analytics/600/400",
    images: [
      "https://picsum.photos/seed/analytics1/1200/675",
      "https://picsum.photos/seed/analytics2/1200/675",
      "https://picsum.photos/seed/analytics3/1200/675",
    ],
    liveUrl: "#",
    repoUrl: "#",
    tasks: [
      "Aggregated data from multiple social media platforms into one dashboard",
      "Built interactive D3.js visualizations for engagement and growth metrics",
      "Added automated PDF report generation",
      "Designed responsive data tables with sorting and filtering",
    ],
  },
  {
    id: 5,
    title: "CSOA Learner Landing",
    description:
      "Drag-and-drop tool for creating personalized developer portfolios.",
    longDescription:
      "Built a no-code portfolio builder that lets developers create stunning portfolios without writing HTML or CSS. Features a visual drag-and-drop editor, pre-built templates, custom domain support, SEO optimization, and one-click deployment via Vercel integration. Over 5,000 portfolios have been created using the platform.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "DnD Kit", "Vercel API"],
    category: "Landing",
    imageUrl: "https://picsum.photos/seed/portfolio/600/400",
    images: [
      "https://picsum.photos/seed/portfolio1/1200/675",
      "https://picsum.photos/seed/portfolio2/1200/675",
      "https://picsum.photos/seed/portfolio3/1200/675",
    ],
    liveUrl: "#",
    repoUrl: "#",
    tasks: [
      "Built a visual drag-and-drop editor for creating portfolios without code",
      "Designed pre-built templates with customization options",
      "Integrated Vercel API for one-click deployment",
      "Added SEO optimization and custom domain support",
    ],
  },
  {
    id: 6,
    title: "Confie.Ai Landing",
    description: "Scalable messaging app with channels, DMs, and file sharing.",
    longDescription:
      "Developed a real-time messaging application with support for public channels, private direct messages, file and image sharing, message threading, emoji reactions, and read receipts. The app uses WebSocket connections for instant message delivery and features a polished, responsive UI with dark mode support.",
    tech: [
      "React",
      "TypeScript",
      "WebSocket",
      "Tailwind CSS",
      "Zustand",
      "Vite",
    ],
    category: "Landing",
    imageUrl: "https://picsum.photos/seed/chatapp/600/400",
    images: [
      "https://picsum.photos/seed/chatapp1/1200/675",
      "https://picsum.photos/seed/chatapp2/1200/675",
      "https://picsum.photos/seed/chatapp3/1200/675",
    ],
    liveUrl: "#",
    repoUrl: "#",
    tasks: [
      "Built real-time messaging with WebSocket connections",
      "Implemented public channels and private direct messages",
      "Added file sharing, emoji reactions, and read receipts",
      "Designed a polished UI with dark mode support",
    ],
  },
  {
    id: 7,
    title: "Waitlist for Confie.Ai",
    description:
      "Real-time weather forecasts with beautiful data visualizations.",
    longDescription:
      "Created an interactive weather dashboard that displays real-time forecasts using the OpenWeatherMap API. Features include 7-day forecasts, hourly breakdowns, interactive charts for temperature and precipitation trends, location search with geolocation support, and animated weather icons that reflect current conditions.",
    tech: [
      "Next.js",
      "TypeScript",
      "Chart.js",
      "OpenWeather API",
      "Geolocation API",
    ],
    category: "Landing",
    imageUrl: "https://picsum.photos/seed/weather/600/400",
    images: [
      "https://picsum.photos/seed/weather1/1200/675",
      "https://picsum.photos/seed/weather2/1200/675",
      "https://picsum.photos/seed/weather3/1200/675",
    ],
    liveUrl: "#",
    repoUrl: "#",
    tasks: [
      "Integrated OpenWeatherMap API for real-time forecast data",
      "Built interactive charts for temperature and precipitation trends",
      "Added location search with geolocation support",
      "Created animated weather icons reflecting current conditions",
    ],
  },

  {
    id: 8,
    title: "BabySlad CM Chat App and Currency Exchange",
    description:
      "Full-featured online store with cart, checkout, and admin dashboard.",
    longDescription:
      "Built a comprehensive e-commerce platform featuring a polished product browsing experience with advanced filtering, a real-time shopping cart with animations, secure Stripe checkout integration, and a full admin dashboard for inventory management — all with a focus on smooth UI interactions and responsive design.",
    tech: [
      "Next.js",
      "TypeScript",
      "React Query",
      "Stripe",
      "Tailwind CSS",
      "Zustand",
    ],
    category: "Chat App",
    imageUrl: "https://picsum.photos/seed/ecommerce/600/400",
    images: [
      "https://picsum.photos/seed/ecommerce1/1200/675",
      "https://picsum.photos/seed/ecommerce2/1200/675",
      "https://picsum.photos/seed/ecommerce3/1200/675",
    ],
    liveUrl: "#",
    repoUrl: "#",
    tasks: [
      "Built a responsive product catalog with advanced filtering and search",
      "Implemented a real-time shopping cart with optimistic UI updates",
      "Integrated Stripe checkout for secure payment processing",
      "Designed an admin dashboard for inventory and order management",
    ],
  },
  {
    id: 9,
    title: "8One Entertainment Villa Phuket",
    description:
      "Kanban-style project management with drag-and-drop and real-time sync.",
    longDescription:
      "Developed a collaborative task management application inspired by Trello. Features include smooth drag-and-drop card reordering, real-time updates via WebSockets, team collaboration with role-based views, due date tracking, file attachments, and activity logging. The app uses optimistic UI updates for a seamless user experience.",
    tech: ["React", "TypeScript", "Zustand", "DnD Kit", "CSS Modules", "Vite"],
    category: "Landing",
    imageUrl: "https://picsum.photos/seed/taskapp/600/400",
    images: [
      "https://picsum.photos/seed/taskapp1/1200/675",
      "https://picsum.photos/seed/taskapp2/1200/675",
      "https://picsum.photos/seed/taskapp3/1200/675",
    ],
    liveUrl: "#",
    repoUrl: "#",
    tasks: [
      "Built a Kanban board with smooth drag-and-drop card reordering",
      "Implemented real-time collaboration updates via WebSocket",
      "Added due date tracking, file attachments, and activity logging",
      "Used optimistic UI updates for a seamless user experience",
    ],
  },
  {
    id: 10,
    title: "Movie Gallery",
    description:
      "Kanban-style project management with drag-and-drop and real-time sync.",
    longDescription:
      "Developed a collaborative task management application inspired by Trello. Features include smooth drag-and-drop card reordering, real-time updates via WebSockets, team collaboration with role-based views, due date tracking, file attachments, and activity logging. The app uses optimistic UI updates for a seamless user experience.",
    tech: ["React", "TypeScript", "Zustand", "DnD Kit", "CSS Modules", "Vite"],
    category: "Landing",
    imageUrl: "https://picsum.photos/seed/taskapp/600/400",
    images: [
      "https://picsum.photos/seed/taskapp1/1200/675",
      "https://picsum.photos/seed/taskapp2/1200/675",
      "https://picsum.photos/seed/taskapp3/1200/675",
    ],
    liveUrl: "#",
    repoUrl: "#",
    tasks: [
      "Built a Kanban board with smooth drag-and-drop card reordering",
      "Implemented real-time collaboration updates via WebSocket",
      "Added due date tracking, file attachments, and activity logging",
      "Used optimistic UI updates for a seamless user experience",
    ],
  },
  {
    id: 11,
    title: "Phone Gallery",
    description:
      "Kanban-style project management with drag-and-drop and real-time sync.",
    longDescription:
      "Developed a collaborative task management application inspired by Trello. Features include smooth drag-and-drop card reordering, real-time updates via WebSockets, team collaboration with role-based views, due date tracking, file attachments, and activity logging. The app uses optimistic UI updates for a seamless user experience.",
    tech: ["React", "TypeScript", "Zustand", "DnD Kit", "CSS Modules", "Vite"],
    category: "Landing",
    imageUrl: "https://picsum.photos/seed/taskapp/600/400",
    images: [
      "https://picsum.photos/seed/taskapp1/1200/675",
      "https://picsum.photos/seed/taskapp2/1200/675",
      "https://picsum.photos/seed/taskapp3/1200/675",
    ],
    liveUrl: "#",
    repoUrl: "#",
    tasks: [
      "Built a Kanban board with smooth drag-and-drop card reordering",
      "Implemented real-time collaboration updates via WebSocket",
      "Added due date tracking, file attachments, and activity logging",
      "Used optimistic UI updates for a seamless user experience",
    ],
  },
];
