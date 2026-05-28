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
      "Multilingual educational learning platform for CSO Academy focused on digital transformation, organizational development, and online learning for CSOs, NGOs, INGOs, youth, and community organizations in Myanmar. Built a modern responsive LMS-style experience with course management, authentication flows, community learning features, and accessible educational content delivery optimized for both desktop and mobile users.",
    longDescription:
      "Multilingual educational learning platform for CSO Academy focused on digital transformation, organizational development, and online learning for CSOs, NGOs, INGOs, youth, and community organizations in Myanmar. Built a modern responsive LMS-style experience with course management, authentication flows, community learning features, and accessible educational content delivery optimized for both desktop and mobile users.",
    tech: ["Next.js", "TypeScript", "Axios", "MUi", "Zustand", "other techs"],
    category: "Learning Management System",
    imageUrl: "/image/csoa-platform/csoa-1.png",
    images: [
      "/image/csoa-platform/csoa-1.png",
      "/image/csoa-platform/csoa-2.png",
      "/image/csoa-platform/csoa-3.png",
      "/image/csoa-platform/csoa-4.png",
      "/image/csoa-platform/csoa-5.png",
      "/image/csoa-platform/csoa-6.png",
      "/image/csoa-platform/csoa7.png",
    ],
    liveUrl: "https://www.csoacademymm.org/learning",
    // repoUrl: "#",
    tasks: [
      "Built responsive frontend interfaces for online learning platform",
      "Developed course listing and learning experience pages",
      "Implemented authentication flows including registration and password reset",
      "Multiple Categories of Learning Content likes drag and drop, quizzes, video lectures, and downloadable resources",
      "meeting,booking appointments, and user calendar integration",
      "forum-style community learning features with posts, comments, and notifications",
      "blog-style educational content delivery optimized for both desktop and mobile users",
      "notifcations, user profiles, and progress tracking features",
      "student record and profile",
      "chat with faq and support",
      "taking certificates",
      "Designed multilingual Myanmar-language user experience",
      "Created reusable UI components and scalable page layouts",
      "Structured LMS-style course and assessment workflows",
      "Integrated user onboarding and learning guidance pages",
      "Implemented policy, cookie consent, and user agreement pages",
    ],
  },
  {
    id: 2,
    title: "COP Learning Platform",
    description:
      "Community-driven digital collaboration platform focused on Community of Practice (CoP) learning, knowledge sharing, networking, and organizational engagement for CSOs and community organizations. Built a responsive social-learning style platform with community feeds, member interaction features, discussion workflows, resource sharing, and collaborative engagement experiences designed to support online participation and knowledge exchange.",
    longDescription:
      "Community-driven digital collaboration platform focused on Community of Practice (CoP) learning, knowledge sharing, networking, and organizational engagement for CSOs and community organizations. Built a responsive social-learning style platform with community feeds, member interaction features, discussion workflows, resource sharing, and collaborative engagement experiences designed to support online participation and knowledge exchange.",
    tech: ["Next.js", "TypeScript", "Axios", "MUi", "Zustand", "other techs"],
    category: "Learning Management System",
    imageUrl: "/image/cop/cop-1.png",
    images: ["/image/cop/cop-1.png", "/image/cop/cop-2.png"],
    liveUrl: "https://www.csoacademymm.org/learning",
    // repoUrl: "#",
    tasks: [
      "Built responsive frontend interfaces for online learning platform",
      "Developed course listing and learning experience pages",
      "Implemented authentication flows including registration and password reset",
      "notifcations, user profiles, and progress tracking features",
      "forum-style community learning features with posts, comments, and notifications",
      "Designed multilingual Myanmar-language user experience",
      "blog-style educational content delivery optimized for both desktop and mobile users",
      "Created reusable UI components and scalable page layouts",
      "Implemented policy, cookie consent, and user agreement pages",
      "Structured LMS-style course and assessment workflows",
      "Integrated user onboarding and learning guidance pages",
    ],
  },
  {
    id: 3,
    title: "Ekyc For CSOA",
    description: "Authentication system for CSOA.",
    longDescription:
      "Authentication system for CSOA with sansction,face recognition and national id",
    tech: ["React.js", "TypeScript", "Tailwind CSS", "Zustand", "other techs"],
    category: "Ekyc",
    imageUrl: "/image/ekyc/csoa-ekyc.webp",
    images: ["/image/ekyc/csoa-ekyc.webp"],
    // liveUrl: "#",
    // repoUrl: "#",
    tasks: [
      "Developed secure eKYC authentication workflows for user verification",
      "Integrated facial recognition verification system",
      "Implemented national ID validation and identity matching features",
      "Built responsive authentication and onboarding interfaces",
      "Designed secure user verification flow and form handling",
      "Created reusable frontend components for identity verification system",
      "Managed authentication state and user session workflows using Zustand",
      "Optimized UI/UX for secure and accessible verification processes",
      "Integrated sanction screening and compliance-related verification features",
      "Developed modern responsive layouts for desktop and mobile users",
    ],
  },
  {
    id: 4,
    title: "Lucky Draw App for ReactXCamp Myanmar",
    description:
      "Very First Bootcamp in Myanmar by ReactXCamp. Lucky Draw App for ReactXCamp Myanmar.",
    longDescription:
      "Very First Bootcamp in Myanmar by ReactXCamp. Lucky Draw for attendees of ReactXCamp Myanmar. Built a fun and interactive lucky draw spinner for event attendees, featuring a spinning wheel interface, random winner selection, and real-time result display. The app was designed to create an engaging experience during the event and was built with React.js.",
    tech: ["React", "TypeScript", "Style-Components", "Zustand", "other techs"],
    category: "Volunteer",
    imageUrl: "/image/reactXCamp/react-x-camp-myanmar.webp",
    images: ["/image/reactXCamp/react-x-camp-myanmar.webp"],
    // liveUrl: "#",
    // repoUrl: "https://github.com/khun1997/lucky-draw-app-ReactXCamp.Myanmar-",
    tasks: [
      "Designed and developed an interactive lucky draw spinner interface",
      "Implemented random winner selection functionality",
      "Built smooth spinning wheel animations for engaging user experience",
      "Created real-time winner result display system",
      "Developed responsive UI optimized for event presentation screens",
      "Integrated reusable React components for scalable frontend structure",
      "Managed application state and draw flow interactions",
      "Optimized user experience for live event participation",
      "Built modern and responsive layouts using Style-Components",
    ],
  },
  {
    id: 5,
    title: "CSOA Learner Landing",
    description:
      "Multilingual educational learning platform for CSO Academy focused on digital transformation, organizational development, and online learning for CSOs, NGOs, INGOs, youth, and community organizations in Myanmar. Built a modern responsive LMS-style experience with course management, authentication flows, community learning features, and accessible educational content delivery optimized for both desktop and mobile users.",
    longDescription:
      "Multilingual educational learning platform for CSO Academy focused on digital transformation, organizational development, and online learning for CSOs, NGOs, INGOs, youth, and community organizations in Myanmar. Built a modern responsive LMS-style experience with course management, authentication flows, community learning features, and accessible educational content delivery optimized for both desktop and mobile users.",
    tech: ["Next.js", "TypeScript", "Mui", "Zustand", "other techs"],
    category: "Landing",
    imageUrl: "/image/csoa-landing/csoa-landing.png",
    images: ["/image/csoa-landing/csoa-landing.png"],
    liveUrl: "https://www.csoacademymm.org/",
    // repoUrl: "#",
    tasks: ["Built responsive landing page for CSOA educational platform"],
  },
  {
    id: 6,
    title: "Confie.Ai Landing",
    description:
      "Developed an AI-powered social meeting and photo experience platform that enables users to create virtual meetings, generate AI-enhanced group selfies, and transform images into multiple artistic styles using different AI models. Built an interactive and modern user experience focused on real-time collaboration, AI image generation, avatar transformation, and creative social engagement across desktop and mobile devices.",
    longDescription:
      "Developed an AI-powered social meeting and photo experience platform that enables users to create virtual meetings, generate AI-enhanced group selfies, and transform images into multiple artistic styles using different AI models. Built an interactive and modern user experience focused on real-time collaboration, AI image generation, avatar transformation, and creative social engagement across desktop and mobile devices.",
    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Zustand",
      "Vite",
      "other techs",
    ],
    category: "Landing",
    imageUrl: "/image/confie-landing/confie-1.png",
    images: [
      "/image/confie-landing/confie-1.png",
      "/image/confie-landing/confie-2.png",
      "/image/confie-landing/confie-3.png",
    ],
    liveUrl: "https://confie.ai/",
    // repoUrl: "https://github.com/khun1997/confie.selfie",
    tasks: ["Built responsive landing page for Confie.Ai  platform"],
  },
  {
    id: 7,
    title: "Waitlist for Confie.Ai",
    description:
      "Waitlist landing page for Confie.Ai, an AI-powered social meeting and photo experience platform that enables users to create virtual meetings, generate AI-enhanced group selfies, and transform images into multiple artistic styles using different AI models. Built an interactive and modern user experience focused on real-time collaboration, AI image generation, avatar transformation, and creative social engagement across desktop and mobile devices.",
    longDescription:
      "Waitlist landing page for Confie.Ai, an AI-powered social meeting and photo experience platform that enables users to create virtual meetings, generate AI-enhanced group selfies, and transform images into multiple artistic styles using different AI models. Built an interactive and modern user experience focused on real-time collaboration, AI image generation, avatar transformation, and creative social engagement across desktop and mobile devices.",
    tech: ["Next.js", "TypeScript", "NodeMailer", "other techs"],
    category: "Landing",
    imageUrl: "/image/confie-waitlist/confie_waitlist.webp",
    images: ["/image/confie-waitlist/confie_waitlist.webp"],
    liveUrl: "https://confie.ai/",
    repoUrl: "#",
    tasks: ["Built responsive waitlist landing page for Confie.Ai  platform"],
  },

  {
    id: 8,
    title: "BabySlad CM Chat App and Currency Exchange",
    description:
      "Currency exchange by showing updated currency price and can chat and exchange with admin",
    longDescription:
      "Currency exchange by showing updated currency price and can chat and exchange with admin",
    tech: [
      "Next.js",
      "TypeScript",
      "Socket.io",
      "Firebase",
      "Tailwind CSS",
      "Zustand",
      "other techs",
    ],
    category: "Chat App",
    imageUrl: "/image/babysalad/babysalad.png",
    images: ["/image/babysalad/babysalad.png"],
    liveUrl: "https://www.babycnx.pro/",
    // repoUrl: "https://github.com/khun1997/Baby-Salad-CM",
    tasks: ["Built responsive chat with socket.io and firebase."],
  },
  {
    id: 9,
    title: "8One Entertainment Villa Phuket",
    description:
      "Landing page for 8One Entertainment Villa Phuket, a luxurious villa rental in Phuket, Thailand. Built a modern and visually stunning landing page to showcase the villa's amenities, features, and booking information. The landing page was designed to create an engaging user experience and drive bookings for the villa.",
    longDescription:
      "Landing page for 8One Entertainment Villa Phuket, a luxurious villa rental in Phuket, Thailand. Built a modern and visually stunning landing page to showcase the villa's amenities, features, and booking information. The landing page was designed to create an engaging user experience and drive bookings for the villa.",
    tech: [
      "React",
      "TypeScript",
      "Framer Motion",
      "Tailwind CSS",
      "Zustand",
      "Vite",
      "other techs",
    ],
    category: "Landing",
    imageUrl: "/image/8one/8one-1.png",
    images: [
      "/image/8one/8one-1.png",
      "/image/8one/8one-2.png",
      "/image/8one/8one-3.png",
    ],
    liveUrl: "https://www.8onevilla.com/",
    // repoUrl: "https://github.com/khun1997/8-one-villa",
    tasks: [
      "Built responsive landing page for 8One Entertainment Villa Phuket",
    ],
  },
  {
    id: 10,
    title: "Movie Gallery",
    description:
      "Movie Gallery is a web application that allows users to browse and search for movies, view detailed information about each movie, and explore a visually appealing gallery of movie posters and details.",
    longDescription:
      "Movie Gallery is a web application that allows users to browse and search for movies, view detailed information about each movie, and explore a visually appealing gallery of movie posters and details.",
    tech: [
      "React",
      "TypeScript",
      "Zustand",
      "Movie DB API",
      "CSS Modules",
      "other techs",
    ],
    category: "Landing",
    imageUrl: "/image/movie-gallery/movie-gallery.jpg",
    images: ["/image/movie-gallery/movie-gallery.jpg"],
    // liveUrl: "#",
    repoUrl: "https://github.com/khun1997/movie-gallery",
    tasks: [
      "Built a movie browsing and search application with React and TypeScript",
    ],
  },
  {
    id: 11,
    title: "Phone Gallery",
    description:
      "Phone Gallery is a web application that allows users to browse and search for smartphones, view detailed information about each phone, and explore a visually appealing gallery of phone images and specifications.",
    longDescription:
      "Phone Gallery is a web application that allows users to browse and search for smartphones, view detailed information about each phone, and explore a visually appealing gallery of phone images and specifications.",
    tech: ["React", "TypeScript", "Zustand", "CSS Modules", "other techs"],
    category: "Landing",
    imageUrl: "/image/phone-gallery/phone-gallery.png",
    images: ["/image/phone-gallery/phone-gallery.png"],
    // liveUrl: "#",
    repoUrl: "https://github.com/khun1997/Phone-Gallery",
    tasks: [
      "Built a phone browsing and search application with React and TypeScript",
    ],
  },
];
