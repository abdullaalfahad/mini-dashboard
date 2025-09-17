"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type CardProps = {
  title?: string;
  children: React.ReactNode;
  className?: string;
};

export function Card({ title, children, className }: CardProps) {
  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      className={cn(
        "rounded-2xl bg-white shadow-md p-4 border border-gray-100",
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {title && <h3 className="text-lg font-semibold mb-2">{title}</h3>}
      <div>{children}</div>
    </motion.div>
  );
}
