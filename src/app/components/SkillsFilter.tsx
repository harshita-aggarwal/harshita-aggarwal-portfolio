"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCode,
  FaServer,
  FaCloud,
  FaGears,
  FaDatabase,
  FaChartBar,
} from "react-icons/fa6";

const categories = [
  "All",
  "Frontend",
  "Backend",
  "Cloud",
  "Databases",
  "DevOps",
  "Data Analysis",
];

const skills = [
  // Frontend
  { label: "React.js / Next.js", category: "Frontend" },
  { label: "TypeScript / JavaScript", category: "Frontend" },
  { label: "Tailwind CSS / CSS3", category: "Frontend" },
  { label: "HTML5", category: "Frontend" },
  // Backend
  { label: "Node.js / Express.js", category: "Backend" },
  { label: "Python / Flask / FastAPI", category: "Backend" },
  { label: "RESTful APIs", category: "Backend" },
  // Cloud
  { label: "AWS (EC2, S3, SQS, Lambda, EKS)", category: "Cloud" },
  { label: "Azure / GCP", category: "Cloud" },
  // Databases
  { label: "MongoDB", category: "Databases" },
  { label: "DynamoDB", category: "Databases" },
  { label: "PostgreSQL / MySQL", category: "Databases" },
  // DevOps
  { label: "Jenkins CI/CD / GitHub Actions", category: "DevOps" },
  { label: "Docker / Kubernetes", category: "DevOps" },
  { label: "Prometheus", category: "DevOps" },
  { label: "SonarQube", category: "DevOps" },
  { label: "Git / GitHub", category: "DevOps" },
  { label: "Jira", category: "DevOps" },
  // Data Analysis
  { label: "PowerBI / Tableau", category: "Data Analysis" },
  { label: "MS Excel", category: "Data Analysis" },
  { label: "NumPy / Pandas / Matplotlib", category: "Data Analysis" },
];

const categoryIcons: Record<string, React.ReactNode> = {
  Frontend: <FaCode className="inline mr-2" />,
  Backend: <FaServer className="inline mr-2" />,
  Cloud: <FaCloud className="inline mr-2" />,
  Databases: <FaDatabase className="inline mr-2" />,
  DevOps: <FaGears className="inline mr-2" />,
  "Data Analysis": <FaChartBar className="inline mr-2" />,
};

export default function SkillsFilter() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? skills : skills.filter((s) => s.category === active);

  return (
    <section className="mb-16">
      <h2 className="section-title">Skills</h2>

      {/* Filter buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`btn transition-all duration-200 ${
              active === cat
                ? "btn-primary scale-105 shadow-md"
                : "border border-border text-muted hover:text-primary hover:border-primary"
            }`}
          >
            {categoryIcons[cat] ?? null}
            {cat}
          </button>
        ))}
      </div>

      {/* Skill badges */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="bg-surface border border-border rounded-2xl p-8 max-w-3xl mx-auto shadow-md"
        >
          

          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-3">
            {filtered.map((skill) => (
              <span key={skill.label} className="skill-badge">
                {skill.label}
              </span>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
