"use client";

import { motion } from "framer-motion";
import { Card } from "../common/card";

export default function StatsSection() {
  return (
    <motion.div
      animate="visible"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
      initial="hidden"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.15 } },
      }}
    >
      {[
        { title: "Users", value: "1,230" },
        { title: "Posts", value: "456" },
        { title: "Comments", value: "789" },
        { title: "Revenue", value: "$12,300" },
      ].map((stat) => (
        <motion.div
          key={stat.title}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <Card title={stat.title}>
            <p className="text-2xl font-bold">{stat.value}</p>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
}
