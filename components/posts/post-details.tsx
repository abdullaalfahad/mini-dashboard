"use client";

import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import { Card } from "@/components/common/card";
import { useFetch } from "@/hooks/use-fetch";

type Post = {
  id: number;
  title: string;
  body: string;
};

export default function PostDetails() {
  const params = useParams();

  const { data, error, loading } = useFetch<Post>(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );

  if (loading) return <p>Loading post...</p>;
  if (error)
    return <p className="text-red-500">Failed to load post: {error}</p>;

  if (!data) return <p>No post found</p>;
  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      className="mt-4"
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
    >
      <Card title={data.title}>
        <p className="text-gray-700 leading-relaxed">{data.body}</p>
      </Card>
    </motion.div>
  );
}
