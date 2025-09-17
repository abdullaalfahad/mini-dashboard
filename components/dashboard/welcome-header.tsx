"use client";

import { motion } from "framer-motion";

export default function WelcomeHeader() {
  return (
    <motion.h1
      animate={{ opacity: 1, y: 0 }}
      className="text-3xl font-bold"
      initial={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      Dashboard Overview
    </motion.h1>
  );
}
