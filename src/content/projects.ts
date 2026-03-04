import { Project } from "../types";

export const projects: Project[] = [
  {
    title: "Thinkboard",
    description:
      "A full-stack e-commerce platform built with Next.js, TypeScript, and Tailwind CSS.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    githubLink: "https://github.com",
    demoLink: "https://demo.com",
    image: "/projects/e-commerce-website.png",
  },
  {
    title: "Portfolio Website",
    description:
      "My personal portfolio website showcasing my projects and skills.",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    githubLink: "https://github.com",
    demoLink: "https://demo.com",
    image: "/projects/portfolio-website.jpg",
  },
  {
    title: "Rewind",
    description: "A streaming platform inspired by Netflix.",
    technologies: ["React", "OpenWeatherMap API"],
    githubLink: "https://github.com",
    demoLink: "https://demo.com",
    image: "/projects/weather-app.png",
  },
  {
    title: "Chatty",
    description: "A real-time chat application using WebSocket technology.",
    technologies: ["React", "Node.js", "Socket.io"],
    githubLink: "https://github.com",
    demoLink: "https://demo.com",
    image: "/projects/chat-app.png",
  },
  {
    title: "Recipe Finder",
    description: "A recipe search application using the Edamam API.",
    technologies: ["React", "Edamam API"],
    githubLink: "https://github.com",
    demoLink: "https://demo.com",
    image: "/projects/recipe-finder.png",
  },
  {
    title: "Expense Tracker",
    description: "A personal finance tracker to manage expenses and income.",
    technologies: ["React", "Firebase"],
    githubLink: "https://github.com",
    demoLink: "https://demo.com",
    image: "/projects/expense-tracker.webp",
  },
];
