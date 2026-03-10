"use client";

import { projects } from "@/src/contents/projects";
import Image from "next/image";
import { useState } from "react";
import { FaExternalLinkAlt, FaGithub, FaSearch } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectsPage() {
  const [search, setSearch] = useState("");

  const filtered = projects.filter((p) => {
    const q = search.toLowerCase();
    return (
      p.title.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.technologies.some((t) => t.toLowerCase().includes(q))
    );
  });

  return (
    <div className="container max-w-7xl mx-auto py-20">

      {/* Header */}
      <motion.h1
        className="text-4xl sm:text-5xl font-bold text-center text-heading mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        All <span className="text-primary">Projects</span>
      </motion.h1>
      <motion.p
        className="text-body text-center mb-10 max-w-xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Everything I&apos;ve built — search by name, description or tech stack.
      </motion.p>

      {/* Search bar */}
      <motion.div
        className="relative max-w-lg mx-auto mb-16"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-muted h-4 w-4" />
        <input
          type="text"
          placeholder="Search projects..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="form-input pl-11"
        />
      </motion.div>

      {/* Results count */}
      <motion.p
        className="text-muted text-sm text-center mb-8"
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
      >
        {filtered.length} {filtered.length === 1 ? "project" : "projects"} found
      </motion.p>

      {/* Masonry grid */}
      <AnimatePresence mode="wait">
        {filtered.length > 0 ? (
          <motion.div
            key="results"
            className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {filtered.map((project, index) => (
              <motion.article
                key={project.title}
                className="break-inside-avoid project-card group hover:border-primary hover:shadow-lg hover:shadow-primary/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.06 }}
              >
                {/* Image */}
                <div className="project-card-image">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Featured badge */}
                  {project.featured && (
                    <span className="absolute top-3 left-3 text-xs font-semibold
                                     bg-primary text-white px-2.5 py-1 rounded-full">
                      ★ Featured
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="project-card-body flex flex-col flex-1">
                  <h3 className="project-card-title group-hover:text-primary">
                    {project.title}
                  </h3>
                  <p className="project-card-description">
                    {project.description}
                  </p>

                  {/* Tech badges */}
                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="project-card-links mt-auto">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-card-link"
                    >
                      <FaGithub className="h-4 w-4" /> Code
                    </a>
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-card-link"
                    >
                      <FaExternalLinkAlt className="h-4 w-4" /> Live Demo
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="empty"
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <p className="text-4xl mb-4">🔍</p>
            <p className="text-heading font-semibold text-lg mb-2">No projects found</p>
            <p className="text-muted text-sm">Try searching for a different technology or keyword.</p>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}