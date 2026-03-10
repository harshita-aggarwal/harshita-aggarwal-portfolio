import { Project } from "../types";

export const projects: Project[] = [
  {
    title: "Thinkboard",
    description:
      "A full-stack e-commerce platform built with MERN stack, DaisyUI and Tailwind CSS.",
    technologies: [
      "Node.js",
      "Express.js",
      "React",
      "Tailwind CSS",
      "DaisyUI",
      "MongoDB",
    ],
    githubLink: "https://github.com/harshita-aggarwal/Thinkboard",
    demoLink: null,
    image: "/projects/Thinkboard.png",
    featured: true,
  },
  {
    title: "Portfolio Website",
    description:
      "My personal portfolio website showcasing my projects and skills using Next.js and TypeScript.",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    githubLink:
      "https://github.com/harshita-aggarwal/harshita-aggarwal-portfolio",
    demoLink: "https://harshita-aggarwal-portfolio.vercel.app",
    image: "/projects/portfolio-website.png",
    featured: false,
  },
  {
    title: "Rewind",
    description: "A streaming platform inspired by Netflix using MERN stack.",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "TMDB API",
      "Tailwind CSS",
    ],
    githubLink: "https://github.com/harshita-aggarwal/Rewind",
    demoLink: null,
    image: "/projects/streaming-app.png",
    featured: true,
  },
  {
    title: "Chatty",
    description: "A real-time chat application using MERN Stack.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB"],
    githubLink: "https://github.com/harshita-aggarwal/Chatty",
    demoLink: null,
    image: "/projects/chat-app.png",
    featured: true,
  },
  {
    title: "ToDo",
    description: "This project is a simple To-Do application powered by AWS Lambda, API Gateway, and DynamoDB on the backend, with a basic HTML/CSS/JavaScript frontend.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Amazon DynamoDB", "AWS Lambda", "API Gateway"],
    githubLink: "https://github.com/harshita-aggarwal/ToDo",
    demoLink: null,
    image: "/projects/To-Do.png",
    featured: false,
  },
];
