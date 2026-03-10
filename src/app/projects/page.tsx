"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-6 px-4">

        {/* Animated icon */}
        <motion.div
          animate={{ rotate: [0, -10, 10, -10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
          className="text-7xl mb-4"
        >
          🚧
        </motion.div>

        {/* Heading */}
        <motion.h1
          className="text-4xl sm:text-5xl font-bold text-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Under <span className="text-secondary">Construction</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="text-body text-lg max-w-md mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          This page is being built. Check back soon!
        </motion.p>

        {/* Progress bar */}
        <motion.div
          className="w-64 h-1.5 bg-surface-raised rounded-full mx-auto overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <motion.div
            className="h-full bg-secondary rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: "60%" }}
            transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
          />
        </motion.div>
        <p className="text-muted text-sm">60% complete</p>

        {/* Back home */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Link href="/" className="btn btn-secondary inline-block mt-4">
            Back to Home
          </Link>
        </motion.div>

      </div>
    </div>
  );
}