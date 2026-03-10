"use client";

import { certifications } from "@/src/contents/certifications";
import Link from "next/link";
import { FaAward, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";


export default function Certifications() {
  return (
    <section className="projects-section">
      <div className="container">
        <motion.h2 className="section-title">
          Active <span className="text-primary">Certifications</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certifications
            .filter((c) => c.status === "active")
            .map((cert, index) => (
              <motion.div
                key={cert.title}
                className="project-card group hover:border-primary hover:shadow-lg hover:shadow-primary/10"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="project-card-body flex flex-col flex-1">
                  {/* Icon + Title */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-xl">
                      <FaAward className="text-primary h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-heading font-bold text-base leading-snug transition-colors duration-200">
                        {cert.title}
                      </h3>
                      <p className="text-muted text-sm mt-1">{cert.issuer}</p>
                    </div>
                  </div>

                  {/* Dates */}
                  <div className="flex flex-col gap-2 mb-4">
                    <span className="text-sm text-body">
                      <span className="text-muted">Issued On:</span>{" "}
                      {new Date(cert.issuedOn).toLocaleDateString("en-US", {
                        month: "long",
                        year: "numeric",
                      })}
                    </span>
                    <span className="text-sm text-body">
                      <span className="text-muted">Expires On:</span>{" "}
                      {cert.expiresOn
                        ? new Date(cert.expiresOn).toLocaleDateString("en-US", {
                            month: "long",
                            year: "numeric",
                          })
                        : "Never"}
                    </span>
                  </div>

                  {/* Verify link */}
                  <div className="mt-auto pt-4 border-t border-border">
                    {cert.status === "expired" ? (
                      <button
                        onClick={() =>
                          alert(
                            "This certification has expired and is no longer verifiable.",
                          )
                        }
                        className="project-card-link opacity-50 cursor-not-allowed"
                      >
                        <FaExternalLinkAlt className="h-3.5 w-3.5" />
                        Certification Expired
                      </button>
                    ) : (
                      <Link
                        href={cert.verifyUrl!}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-card-link"
                      >
                        <FaExternalLinkAlt className="h-3.5 w-3.5" />
                        Verify Certificate
                      </Link>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
        </div>

        {/* View all link */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Link href="/certifications" className="btn btn-primary">
            View All Certifications
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
