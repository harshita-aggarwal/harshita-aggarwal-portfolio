"use client";

import { certifications } from "@/src/contents/certifications";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaAward } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";

type Filter = "all" | "active" | "expired";

export default function CertificationsPage() {
  const [filter, setFilter] = useState<Filter>("all");

  const filtered = certifications.filter((c) => {
    if (filter === "all") return true;
    return c.status === filter;
  });

  // Group by issued year
  const grouped = filtered.reduce<Record<string, typeof certifications>>(
    (acc, cert) => {
      const year = new Date(cert.issuedOn).getFullYear().toString();
      if (!acc[year]) acc[year] = [];
      acc[year].push(cert);
      return acc;
    },
    {},
  );

  // Sort years descending
  const sortedYears = Object.keys(grouped).sort(
    (a, b) => Number(b) - Number(a),
  );

  return (
    <div className="container max-w-4xl mx-auto py-20">
      {/* Header */}
      <motion.h1
        className="text-4xl sm:text-5xl font-bold text-center text-heading mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My <span className="text-primary">Certifications</span>
      </motion.h1>
      <motion.p
        className="text-body text-center mb-12 max-w-xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        A record of all my professional certifications — current and past.
      </motion.p>

      {/* Filter toggle */}
      <motion.div
        className="flex justify-center gap-3 mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {(["all", "active", "expired"] as Filter[]).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`btn capitalize transition-all duration-200 ${
              filter === f
                ? "btn-primary scale-105"
                : "border border-border text-muted hover:text-primary hover:border-primary"
            }`}
          >
            {f}
          </button>
        ))}
      </motion.div>

      {/* Timeline grouped by year */}
      <AnimatePresence mode="wait">
        <motion.div
          key={filter}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="space-y-14"
        >
          {sortedYears.map((year) => (
            <div key={year}>
              {/* Year label */}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-primary font-bold text-2xl">{year}</span>
                <div className="flex-1 h-px bg-border" />
              </div>

              {/* Cards for this year */}
              <div className="space-y-4">
                {grouped[year].map((cert, index) => (
                  <motion.div
                    key={cert.title}
                    className={`bg-surface border rounded-2xl p-6 transition-all duration-300
                      ${
                        cert.status === "active"
                          ? "border-border hover:border-primary hover:shadow-lg hover:shadow-primary/10"
                          : "border-border opacity-70 hover:opacity-90"
                      }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.08 }}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                      {/* Icon */}
                      <div
                        className={`p-3 rounded-xl w-fit shrink-0 ${
                          cert.status === "active"
                            ? "bg-primary/10"
                            : "bg-surface-raised"
                        }`}
                      >
                        <FaAward
                          className={`h-6 w-6 ${
                            cert.status === "active"
                              ? "text-primary"
                              : "text-muted"
                          }`}
                        />
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <h3 className="text-heading font-bold text-base">
                            {cert.title}
                          </h3>
                          <span
                            className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${
                              cert.status === "active"
                                ? "bg-success/10 text-success"
                                : "bg-surface-raised/10 text-error"
                            }`}
                          >
                            {cert.status === "active"
                              ? "✓ Active"
                              : "✕ Expired"}
                          </span>
                        </div>

                        <p className="text-muted text-sm mb-3">{cert.issuer}</p>

                        {/* Dates */}
                        <div className="flex flex-wrap gap-4 text-sm mb-4">
                          <span className="text-sm text-body">
                            <span className="text-muted">Issued:</span>{" "}
                            {new Date(cert.issuedOn).toLocaleDateString(
                              "en-US",
                              {
                                month: "long",
                                year: "numeric",
                              },
                            )}
                          </span>

                          <span className="text-sm text-body">
                            <span className="text-muted">
                              {cert.status === "expired"
                                ? "Expired:"
                                : "Expires:"}
                            </span>{" "}
                            {cert.status === "expired"
                              ? cert.expiredOn
                                ? new Date(cert.expiredOn).toLocaleDateString(
                                    "en-US",
                                    { month: "long", year: "numeric" },
                                  )
                                : "N/A"
                              : cert.expiresOn
                                ? new Date(cert.expiresOn).toLocaleDateString(
                                    "en-US",
                                    { month: "long", year: "numeric" },
                                  )
                                : "Never"}
                          </span>
                        </div>

                        {/* Verify link */}
                        {cert.status === "expired" ? (
                          <span className="flex items-center gap-2 text-sm text-muted opacity-60 cursor-not-allowed w-fit">
                            <FaExternalLinkAlt className="h-3 w-3" />
                            This certification has expired
                          </span>
                        ) : cert.verifyUrl ? (
                          <Link
                            href={cert.verifyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm text-primary hover:text-primary-hover transition-colors duration-200 w-fit"
                          >
                            <FaExternalLinkAlt className="h-3 w-3" />
                            Verify Certificate
                          </Link>
                        ) : (
                          <span className="flex items-center gap-2 text-sm text-muted cursor-not-allowed w-fit">
                            <FaExternalLinkAlt className="h-3 w-3" />
                            No verification link available
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
