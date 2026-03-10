import { projects } from "@/src/contents/projects";
import Image from "next/image";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <section className="container py-28 px-4">
      <div className="project-section">
        <h2 className="section-title">Featured <span className="text-primary">Projects</span></h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.filter((p) => p.featured).map((project) => (
            <article
              key={project.title}
              className="project-card group hover:border-primary hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="project-card-image">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="project-card-body flex flex-col flex-1">
                <h3 className="project-card-title">{project.title}</h3>
                <p className="project-card-description">
                  {project.description}
                </p>
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
                {/* mt-auto pushes this to the bottom */}
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
